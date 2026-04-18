import commands from '../../commands.js';
import { globalOptionsZod } from '../../../../Command.js';
import { Logger } from '../../../../cli/Logger.js';
import request, { CliRequestOptions } from '../../../../request.js';
import { odata } from '../../../../utils/odata.js';
import { spo } from '../../../../utils/spo.js';
import SpoCommand from '../../../base/SpoCommand.js';
import { z } from 'zod';

const options = globalOptionsZod.strict();

interface BrandCenterConfiguration {
  BrandColorsListId: string;
  BrandColorsListUrl: { DecodedUrl: string } | null;
  SiteUrl: string;
}

interface BrandColorListItem {
  OData__SPColorTitle: string;
  OData__SPColorCode: string;
  OData__SPColorVisible: boolean;
}

class SpoBrandCenterColorsListCommand extends SpoCommand {
  public get name(): string {
    return commands.BRANDCENTER_COLORS_LIST;
  }

  public get description(): string {
    return 'Lists the brand center colors';
  }

  public defaultProperties(): string[] | undefined {
    return ['ColorCode', 'Title', 'IsVisible'];
  }

  public get schema(): z.ZodTypeAny | undefined {
    return options;
  }

  public async commandAction(logger: Logger): Promise<void> {
    if (this.verbose) {
      await logger.logToStderr(`Retrieving brand center colors...`);
    }

    try {
      const spoUrl: string = await spo.getSpoUrl(logger, this.verbose);

      const configRequestOptions: CliRequestOptions = {
        url: `${spoUrl}/_api/Brandcenter/Configuration`,
        headers: {
          accept: 'application/json;odata=nometadata'
        },
        responseType: 'json'
      };

      const config = await request.get<BrandCenterConfiguration>(configRequestOptions);

      if (!config.BrandColorsListUrl) {
        if (this.verbose) {
          await logger.logToStderr('Brand colors list not found.');
        }

        await logger.log([]);
        return;
      }

      if (this.verbose) {
        await logger.logToStderr(`Brand colors list found at '${config.BrandColorsListUrl.DecodedUrl}'.`);
      }

      const items = await odata.getAllItems<BrandColorListItem>(`${config.SiteUrl}/_api/web/lists(guid'${config.BrandColorsListId}')/items?$select=OData__SPColorTitle,OData__SPColorCode,OData__SPColorVisible`);

      const result = items.map(item => ({
        Title: item.OData__SPColorTitle,
        ColorCode: item.OData__SPColorCode,
        IsVisible: item.OData__SPColorVisible
      }));

      await logger.log(result);
    }
    catch (err: any) {
      this.handleRejectedODataJsonPromise(err);
    }
  }
}

export default new SpoBrandCenterColorsListCommand();
