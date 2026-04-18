import assert from 'assert';
import sinon from 'sinon';
import auth from '../../../../Auth.js';
import { cli } from '../../../../cli/cli.js';
import { CommandInfo } from '../../../../cli/CommandInfo.js';
import { Logger } from '../../../../cli/Logger.js';
import { CommandError } from '../../../../Command.js';
import request from '../../../../request.js';
import { telemetry } from '../../../../telemetry.js';
import { odata } from '../../../../utils/odata.js';
import { pid } from '../../../../utils/pid.js';
import { session } from '../../../../utils/session.js';
import { sinonUtil } from '../../../../utils/sinonUtil.js';
import { z } from 'zod';
import commands from '../../commands.js';
import command from './brandcenter-colors-list.js';

describe(commands.BRANDCENTER_COLORS_LIST, () => {
  let log: any[];
  let logger: Logger;
  let loggerLogSpy: sinon.SinonSpy;
  let commandInfo: CommandInfo;
  let commandOptionsSchema: z.ZodTypeAny;

  const configurationResponseWithColors = {
    "BrandColorsListId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "BrandColorsListUrl": {
      "DecodedUrl": "https://contoso.sharepoint.com/sites/BrandGuide/_catalogs/brandcolors"
    },
    "BrandFontLibraryId": "23af51de-856c-4d00-aa11-0d03af0e46e3",
    "BrandFontLibraryUrl": {
      "DecodedUrl": "https://contoso.sharepoint.com/sites/BrandGuide/Fonts"
    },
    "IsBrandCenterSiteFeatureEnabled": true,
    "IsPublicCdnEnabled": true,
    "SiteId": "52b46e48-9c0c-40cb-a955-13eb6c717ff3",
    "SiteUrl": "https://contoso.sharepoint.com/sites/BrandGuide"
  };

  const configurationResponseWithoutColors = {
    "BrandColorsListId": "00000000-0000-0000-0000-000000000000",
    "BrandColorsListUrl": null,
    "BrandFontLibraryId": "23af51de-856c-4d00-aa11-0d03af0e46e3",
    "BrandFontLibraryUrl": {
      "DecodedUrl": "https://contoso.sharepoint.com/sites/BrandGuide/Fonts"
    },
    "IsBrandCenterSiteFeatureEnabled": true,
    "IsPublicCdnEnabled": true,
    "SiteId": "52b46e48-9c0c-40cb-a955-13eb6c717ff3",
    "SiteUrl": "https://contoso.sharepoint.com/sites/BrandGuide"
  };

  const brandColorsListItems = [
    {
      "OData__SPColorTitle": "Primary",
      "OData__SPColorCode": "#0078D4",
      "OData__SPColorVisible": true
    },
    {
      "OData__SPColorTitle": "Secondary",
      "OData__SPColorCode": "#FF4500",
      "OData__SPColorVisible": false
    }
  ];

  const mappedBrandColors = [
    {
      "Title": "Primary",
      "ColorCode": "#0078D4",
      "IsVisible": true
    },
    {
      "Title": "Secondary",
      "ColorCode": "#FF4500",
      "IsVisible": false
    }
  ];

  before(() => {
    sinon.stub(auth, 'restoreAuth').resolves();
    sinon.stub(telemetry, 'trackEvent').resolves();
    sinon.stub(pid, 'getProcessName').returns('');
    sinon.stub(session, 'getId').returns('');

    auth.connection.active = true;
    auth.connection.spoUrl = 'https://contoso.sharepoint.com';
    commandInfo = cli.getCommandInfo(command);
    commandOptionsSchema = commandInfo.command.getSchemaToParse()!;
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
      request.get,
      odata.getAllItems
    ]);
  });

  after(() => {
    sinon.restore();
    auth.connection.active = false;
    auth.connection.spoUrl = undefined;
  });

  it('has correct name', () => {
    assert.strictEqual(command.name, commands.BRANDCENTER_COLORS_LIST);
  });

  it('has a description', () => {
    assert.notStrictEqual(command.description, null);
  });

  it('defines correct default properties', () => {
    assert.deepStrictEqual(command.defaultProperties(), ['ColorCode', 'Title', 'IsVisible']);
  });

  it('passes validation with no options', () => {
    const actual = commandOptionsSchema.safeParse({});
    assert.strictEqual(actual.success, true);
  });

  it('fails validation with unknown options', () => {
    const actual = commandOptionsSchema.safeParse({ option: "value" });
    assert.strictEqual(actual.success, false);
  });

  it('returns empty array when brand colors list does not exist', async () => {
    sinon.stub(request, 'get').callsFake(async (opts) => {
      if (opts.url === 'https://contoso.sharepoint.com/_api/Brandcenter/Configuration') {
        return configurationResponseWithoutColors;
      }

      throw 'Invalid request';
    });

    await command.action(logger, { options: {} });
    assert(loggerLogSpy.calledOnceWithExactly([]));
  });

  it('returns empty array when brand colors list does not exist (verbose)', async () => {
    sinon.stub(request, 'get').callsFake(async (opts) => {
      if (opts.url === 'https://contoso.sharepoint.com/_api/Brandcenter/Configuration') {
        return configurationResponseWithoutColors;
      }

      throw 'Invalid request';
    });

    await command.action(logger, { options: { verbose: true } });
    assert(loggerLogSpy.calledOnceWithExactly([]));
  });

  it('successfully lists brand center colors', async () => {
    sinon.stub(request, 'get').callsFake(async (opts) => {
      if (opts.url === 'https://contoso.sharepoint.com/_api/Brandcenter/Configuration') {
        return configurationResponseWithColors;
      }

      throw 'Invalid request';
    });

    sinon.stub(odata, 'getAllItems').callsFake(async (url) => {
      if (url === `https://contoso.sharepoint.com/sites/BrandGuide/_api/web/lists(guid'a1b2c3d4-e5f6-7890-abcd-ef1234567890')/items?$select=OData__SPColorTitle,OData__SPColorCode,OData__SPColorVisible`) {
        return brandColorsListItems;
      }

      throw 'Invalid request';
    });

    await command.action(logger, { options: {} });
    assert(loggerLogSpy.calledOnceWithExactly(mappedBrandColors));
  });

  it('successfully lists brand center colors (verbose)', async () => {
    sinon.stub(request, 'get').callsFake(async (opts) => {
      if (opts.url === 'https://contoso.sharepoint.com/_api/Brandcenter/Configuration') {
        return configurationResponseWithColors;
      }

      throw 'Invalid request';
    });

    sinon.stub(odata, 'getAllItems').callsFake(async (url) => {
      if (url === `https://contoso.sharepoint.com/sites/BrandGuide/_api/web/lists(guid'a1b2c3d4-e5f6-7890-abcd-ef1234567890')/items?$select=OData__SPColorTitle,OData__SPColorCode,OData__SPColorVisible`) {
        return brandColorsListItems;
      }

      throw 'Invalid request';
    });

    await command.action(logger, { options: { verbose: true } });
    assert(loggerLogSpy.calledOnceWithExactly(mappedBrandColors));
  });

  it('correctly handles error when retrieving configuration', async () => {
    sinon.stub(request, 'get').rejects({
      "error": {
        "code": "accessDenied",
        "message": "Access denied"
      }
    });

    await assert.rejects(command.action(logger, { options: {} }),
      new CommandError('Access denied'));
  });

  it('correctly handles error when retrieving list items', async () => {
    sinon.stub(request, 'get').callsFake(async (opts) => {
      if (opts.url === 'https://contoso.sharepoint.com/_api/Brandcenter/Configuration') {
        return configurationResponseWithColors;
      }

      throw 'Invalid request';
    });

    sinon.stub(odata, 'getAllItems').rejects({
      "error": {
        "code": "itemNotFound",
        "message": "The specified list was not found"
      }
    });

    await assert.rejects(command.action(logger, { options: {} }),
      new CommandError('The specified list was not found'));
  });
});
