import assert from 'assert';
import sinon from 'sinon';
import auth from '../../../../Auth.js';
import { cli } from '../../../../cli/cli.js';
import { CommandInfo } from '../../../../cli/CommandInfo.js';
import { Logger } from '../../../../cli/Logger.js';
import { CommandError } from '../../../../Command.js';
import request from '../../../../request.js';
import { telemetry } from '../../../../telemetry.js';
import { formatting } from '../../../../utils/formatting.js';
import { pid } from '../../../../utils/pid.js';
import { session } from '../../../../utils/session.js';
import { sinonUtil } from '../../../../utils/sinonUtil.js';
import { urlUtil } from '../../../../utils/urlUtil.js';
import commands from '../../commands.js';
import command from './list-view-add.js';

describe(commands.LIST_VIEW_ADD, () => {

  const validListTitle = 'List title';
  const validListId = '00000000-0000-0000-0000-000000000000';
  const validListUrl = '/Lists/SampleList';
  const validTitle = 'View title';
  const validWebUrl = 'https://contoso.sharepoint.com/sites/project-x';
  const validFieldsInput = 'Field1,Field2,Field3';

  const viewCreationResponse = {
    DefaultView: false,
    Hidden: false,
    Id: "00000000-0000-0000-0000-000000000000",
    MobileDefaultView: false,
    MobileView: false,
    Paged: true,
    PersonalView: false,
    ViewProjectedFields: null,
    ViewQuery: "",
    RowLimit: 30,
    Scope: 0,
    ServerRelativePath: {
      DecodedUrl: `/sites/project-x/Lists/${validListTitle}/${validTitle}.aspx`
    },
    ServerRelativeUrl: `/sites/project-x/Lists/${validListTitle}/${validTitle}.aspx`,
    Title: validTitle
  };

  let log: string[];
  let logger: Logger;
  let loggerLogSpy: sinon.SinonSpy;
  let commandInfo: CommandInfo;

  before(() => {
    sinon.stub(auth, 'restoreAuth').resolves();
    sinon.stub(telemetry, 'trackEvent').resolves();
    sinon.stub(pid, 'getProcessName').returns('');
    sinon.stub(session, 'getId').returns('');
    auth.connection.active = true;
    commandInfo = cli.getCommandInfo(command);
  });

  beforeEach(() => {
    log = [];
    logger = {
      log: async (msg: string) => {
        log.push(msg);
      },
      logRaw: async (msg: string) => {
        log.push(msg);
      },
      logToStderr: async (msg: string) => {
        log.push(msg);
      }
    };
    loggerLogSpy = sinon.spy(logger, 'log');
  });

  afterEach(() => {
    sinonUtil.restore([
      request.post
    ]);
  });

  after(() => {
    sinon.restore();
    auth.connection.active = false;
  });

  it('has correct name', () => {
    assert.strictEqual(command.name, commands.LIST_VIEW_ADD);
  });

  it('has a description', () => {
    assert.notStrictEqual(command.description, null);
  });

  it('fails validation if webUrl is not a valid SharePoint URL', async () => {
    const actual = await command.validate({
      options: {
        webUrl: 'invalid',
        listTitle: validListTitle,
        title: validTitle,
        fields: validFieldsInput
      }
    }, commandInfo);
    assert.notStrictEqual(actual, true);
  });

  it('fails validation if listId is not a valid GUID', async () => {
    const actual = await command.validate({
      options: {
        webUrl: validWebUrl,
        listId: 'invalid',
        title: validTitle,
        fields: validFieldsInput
      }
    }, commandInfo);
    assert.notStrictEqual(actual, true);
  });

  it('fails validation if rowLimit is not a number', async () => {
    const actual = await command.validate({
      options: {
        webUrl: validWebUrl,
        listId: validListId,
        title: validTitle,
        fields: validFieldsInput,
        rowLimit: 'invalid'
      }
    }, commandInfo);
    assert.notStrictEqual(actual, true);
  });

  it('fails validation if rowLimit is lower than 1', async () => {
    const actual = await command.validate({
      options: {
        webUrl: validWebUrl,
        listId: validListId,
        title: validTitle,
        fields: validFieldsInput,
        rowLimit: 0
      }
    }, commandInfo);
    assert.notStrictEqual(actual, true);
  });

  it('fails validation when setting default and personal option', async () => {
    const actual = await command.validate({
      options: {
        webUrl: validWebUrl,
        listId: validListId,
        title: validTitle,
        fields: validFieldsInput,
        personal: true,
        default: true
      }
    }, commandInfo);
    assert.notStrictEqual(actual, true);
  });

  it('correctly validates options', async () => {
    const actual = await command.validate({
      options: {
        webUrl: validWebUrl,
        listId: validListId,
        title: validTitle,
        fields: validFieldsInput
      }
    }, commandInfo);
    assert.strictEqual(actual, true);
  });

  it('Correctly add view by list title', async () => {
    sinon.stub(request, 'post').callsFake(async (opts) => {
      if (opts.url === `${validWebUrl}/_api/web/lists/getByTitle(\'${formatting.encodeQueryParameter(validListTitle)}\')/views/add`) {
        return viewCreationResponse;
      }

      throw 'Invalid request';
    });

    await command.action(logger, {
      options: {
        webUrl: validWebUrl,
        listTitle: validListTitle,
        title: validTitle,
        fields: validFieldsInput
      }
    });
    assert(loggerLogSpy.calledWith(viewCreationResponse));
  });

  it('Correctly add view by list id', async () => {
    sinon.stub(request, 'post').callsFake(async (opts) => {
      if (opts.url === `${validWebUrl}/_api/web/lists(guid\'${formatting.encodeQueryParameter(validListId)}\')/views/add`) {
        return viewCreationResponse;
      }

      throw 'Invalid request';
    });

    await command.action(logger, {
      options: {
        webUrl: validWebUrl,
        listId: validListId,
        title: validTitle,
        fields: validFieldsInput
      }
    });
    assert(loggerLogSpy.calledWith(viewCreationResponse));
  });

  it('Correctly add view by list URL', async () => {
    sinon.stub(request, 'post').callsFake(async (opts) => {
      if (opts.url === `${validWebUrl}/_api/web/GetList(\'${formatting.encodeQueryParameter(urlUtil.getServerRelativePath(validWebUrl, validListUrl))}\')/views/add`) {
        return viewCreationResponse;
      }

      throw 'Invalid request';
    });

    await command.action(logger, {
      options: {
        webUrl: validWebUrl,
        listUrl: validListUrl,
        title: validTitle,
        fields: validFieldsInput,
        rowLimit: 100
      }
    });
    assert(loggerLogSpy.calledWith(viewCreationResponse));
  });

  it('handles error correctly', async () => {
    const error = {
      error: {
        'odata.error': {
          code: '-1, Microsoft.SharePoint.Client.InvalidOperationException',
          message: {
            value: 'An error has occurred'
          }
        }
      }
    };
    sinon.stub(request, 'post').rejects(error);

    await assert.rejects(command.action(logger, {
      options: {
        webUrl: validWebUrl,
        listUrl: validListUrl,
        title: validTitle,
        fields: validFieldsInput,
        rowLimit: 100
      }
    } as any), new CommandError(error.error['odata.error'].message.value));
  });
});
