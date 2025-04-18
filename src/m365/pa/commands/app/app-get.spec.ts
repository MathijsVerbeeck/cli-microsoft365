import assert from 'assert';
import sinon from 'sinon';
import auth from '../../../../Auth.js';
import { cli } from '../../../../cli/cli.js';
import { CommandInfo } from '../../../../cli/CommandInfo.js';
import { Logger } from '../../../../cli/Logger.js';
import { CommandError } from '../../../../Command.js';
import request from '../../../../request.js';
import { telemetry } from '../../../../telemetry.js';
import { pid } from '../../../../utils/pid.js';
import { session } from '../../../../utils/session.js';
import { sinonUtil } from '../../../../utils/sinonUtil.js';
import commands from '../../commands.js';
import paAppListCommand from '../app/app-list.js';
import command from './app-get.js';
import { settingsNames } from '../../../../settingsNames.js';
import { accessToken } from '../../../../utils/accessToken.js';

describe(commands.APP_GET, () => {
  let log: string[];
  let logger: Logger;
  let loggerLogSpy: sinon.SinonSpy;
  let commandInfo: CommandInfo;

  const apps = [
    {
      "name": "4d4bb961-eef9-4258-8516-aa8d64e6b477",
      "id": "/providers/Microsoft.PowerApps/apps/4d4bb961-eef9-4258-8516-aa8d64e6b477",
      "type": "Microsoft.PowerApps/apps",
      "tags": {
        "primaryDeviceWidth": "1366",
        "primaryDeviceHeight": "768",
        "sienaVersion": "20200512T062535Z-3.20023.8.0",
        "deviceCapabilities": "",
        "supportsPortrait": "false",
        "supportsLandscape": "true",
        "primaryFormFactor": "Tablet",
        "publisherVersion": "3.20023.8",
        "minimumRequiredApiVersion": "2.2.0",
        "hasComponent": "false",
        "hasUnlockedComponent": "false"
      },
      "properties": {
        "appVersion": "2020-07-08T12:28:37Z",
        "lastDraftVersion": "2020-07-08T12:28:37Z",
        "lifeCycleId": "Published",
        "status": "Ready",
        "createdByClientVersion": {
          "major": 3,
          "minor": 20023,
          "build": 8,
          "revision": 0,
          "majorRevision": 0,
          "minorRevision": 0
        },
        "minClientVersion": {
          "major": 3,
          "minor": 20023,
          "build": 8,
          "revision": 0,
          "majorRevision": 0,
          "minorRevision": 0
        },
        "owner": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "createdBy": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "lastModifiedBy": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "lastPublishedBy": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "backgroundColor": "rgba(37, 62, 143, 1)",
        "backgroundImageUri": "https://pafeblobprodln.blob.core.windows.net:443/20200708t000000z4d9d5509e6c745d3bbd4d6d317890ccd/13103204444004720806/N0eb33631-4950-45e8-b569-8ba8611af629-logoSmallFile?sv=2018-03-28&sr=c&sig=rTJyePWWDMM6mvIhZaOkRsEdLxFE4X6UGXjrqrz3iYo%3D&se=2020-10-05T18%3A56%3A46Z&sp=rl",
        "displayName": "Request-a-team",
        "description": "",
        "commitMessage": "",
        "appUris": {
          "documentUri": {
            "value": "https://pafeblobprodln.blob.core.windows.net:443/20200708t000000z4d9d5509e6c745d3bbd4d6d317890ccd/13103204444004720806/N9d70c8fe-cbc0-4226-8818-372c4261e0c6-document.msapp?sv=2018-03-28&sr=c&sig=ltod6hA3brZQF9qTxNKFg0ryuX7IxsrJLY8KdA9u8f8%3D&se=2020-08-28T08%3A00%3A00Z&sp=rl",
            "readonlyValue": "https://pafeblobprodln-secondary.blob.core.windows.net/20200708t000000z4d9d5509e6c745d3bbd4d6d317890ccd/13103204444004720806/N9d70c8fe-cbc0-4226-8818-372c4261e0c6-document.msapp?sv=2018-03-28&sr=c&sig=ltod6hA3brZQF9qTxNKFg0ryuX7IxsrJLY8KdA9u8f8%3D&se=2020-08-28T08%3A00%3A00Z&sp=rl"
          },
          "imageUris": []
        },
        "createdTime": "2020-07-08T12:28:37.957179Z",
        "lastModifiedTime": "2020-07-08T12:28:38.7556554Z",
        "lastPublishTime": "2020-07-08T12:28:37Z",
        "sharedGroupsCount": 0,
        "sharedUsersCount": 0,
        "appOpenProtocolUri": "ms-apps:///providers/Microsoft.PowerApps/apps/4d4bb961-eef9-4258-8516-aa8d64e6b477",
        "appOpenUri": "https://apps.powerapps.com/play/4d4bb961-eef9-4258-8516-aa8d64e6b477?tenantId=e8954f17-a373-4b61-b54d-45c038fe3188",
        "connectionReferences": {
          "9d5036a3-8b23-4125-a5cc-7dc0dbb2f8cb": {
            "id": "/providers/microsoft.powerapps/apis/shared_office365users",
            "displayName": "Office 365 Users",
            "iconUri": "https://connectoricons-prod.azureedge.net/office365users/icon_1.0.1357.2029.png",
            "dataSources": [
              "Office365Users"
            ],
            "dependencies": [],
            "dependents": [],
            "isOnPremiseConnection": false,
            "bypassConsent": false,
            "dataSets": {},
            "apiTier": "Standard",
            "isCustomApiConnection": false
          },
          "a65df3f8-e66c-4cbd-b13f-458b7e96f677": {
            "id": "/providers/microsoft.powerapps/apis/shared_office365groups",
            "displayName": "Office 365 Groups",
            "iconUri": "https://connectoricons-prod.azureedge.net/office365groups/icon_1.0.1329.1953.png",
            "dataSources": [
              "Office365Groups"
            ],
            "dependencies": [],
            "dependents": [],
            "isOnPremiseConnection": false,
            "bypassConsent": false,
            "dataSets": {},
            "apiTier": "Standard",
            "isCustomApiConnection": false
          },
          "041cbeda-55ca-4c48-b8e3-03928fb72bb2": {
            "id": "/providers/microsoft.powerapps/apis/shared_logicflows",
            "displayName": "Logic flows",
            "iconUri": "https://resourcestackdeploy.blob.core.windows.net/scripts/13276078.png",
            "dataSources": [
              "CheckTeamAvailability"
            ],
            "dependencies": [
              "97e5ce6b-9f9a-4186-885f-9b5d6476c732"
            ],
            "dependents": [],
            "isOnPremiseConnection": false,
            "bypassConsent": false,
            "dataSets": {},
            "apiTier": "Standard",
            "isCustomApiConnection": false
          },
          "97e5ce6b-9f9a-4186-885f-9b5d6476c732": {
            "id": "/providers/microsoft.powerapps/apis/shared_sharepointonline",
            "displayName": "SharePoint",
            "iconUri": "https://connectoricons-prod.azureedge.net/sharepointonline/icon_1.0.1363.2042.png",
            "dataSources": [],
            "dependencies": [],
            "dependents": [
              "041cbeda-55ca-4c48-b8e3-03928fb72bb2"
            ],
            "isOnPremiseConnection": false,
            "bypassConsent": false,
            "dataSets": {},
            "apiTier": "Standard",
            "isCustomApiConnection": false
          },
          "00deca03-387b-4ad4-bbd4-cefc640d1c9b": {
            "id": "/providers/microsoft.powerapps/apis/shared_sharepointonline",
            "displayName": "SharePoint",
            "iconUri": "https://connectoricons-prod.azureedge.net/sharepointonline/icon_1.0.1363.2042.png",
            "dataSources": [
              "Teams Templates",
              "Teams Requests",
              "Team Request Settings"
            ],
            "dependencies": [],
            "dependents": [],
            "isOnPremiseConnection": false,
            "bypassConsent": false,
            "dataSets": {
              "https://contoso.sharepoint.com/sites/RequestateamApp": {
                "dataSources": {
                  "Teams Templates": {
                    "tableName": "298485ad-73cc-4b5f-a013-b56111ec351a"
                  },
                  "Teams Requests": {
                    "tableName": "a471ecf0-01f3-4e3e-902b-b48daaa23aba"
                  },
                  "Team Request Settings": {
                    "tableName": "3770cede-bff2-42a6-ba12-2f4cbccb90d3"
                  }
                }
              }
            },
            "apiTier": "Standard",
            "isCustomApiConnection": false
          }
        },
        "databaseReferences": {},
        "userAppMetadata": {
          "favorite": "NotSpecified",
          "includeInAppsList": true
        },
        "isFeaturedApp": false,
        "bypassConsent": false,
        "isHeroApp": false,
        "environment": {
          "id": "/providers/Microsoft.PowerApps/environments/Default-e8954f17-a373-4b61-b54d-45c038fe3188",
          "name": "Default-e8954f17-a373-4b61-b54d-45c038fe3188"
        },
        "almMode": "Environment",
        "performanceOptimizationEnabled": false,
        "canConsumeAppPass": true,
        "appPlanClassification": "Standard",
        "usesPremiumApi": false,
        "usesOnlyGrandfatheredPremiumApis": true,
        "usesCustomApi": false,
        "usesOnPremiseGateway": false
      },
      "isAppComponentLibrary": false,
      "appType": "ClassicCanvasApp"
    },
    {
      "name": "79506a60-9c4c-4798-a1fa-aea552ef046e",
      "id": "/providers/Microsoft.PowerApps/apps/79506a60-9c4c-4798-a1fa-aea552ef046e",
      "type": "Microsoft.PowerApps/apps",
      "tags": {
        "minimumRequiredApiVersion": "2.2.0"
      },
      "properties": {
        "appVersion": "2020-06-08T20:52:24Z",
        "lastDraftVersion": "2020-06-08T20:52:24Z",
        "lifeCycleId": "Published",
        "status": "Ready",
        "createdByClientVersion": {
          "major": 3,
          "minor": 18114,
          "build": 26,
          "revision": 0,
          "majorRevision": 0,
          "minorRevision": 0
        },
        "minClientVersion": {
          "major": 3,
          "minor": 18114,
          "build": 26,
          "revision": 0,
          "majorRevision": 0,
          "minorRevision": 0
        },
        "owner": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "createdBy": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "lastModifiedBy": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "lastPublishedBy": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "backgroundColor": "rgba(0, 176, 240, 1)",
        "backgroundImageUri": "https://pafeblobprodln.blob.core.windows.net:443/20200608t000000z1cbf48a3f3b54583b8932510cbdf20b0/6342866521103212774/N90efe94c-af45-4639-885e-d69f32cd6c9f-logoSmallFile?sv=2018-03-28&sr=c&sig=mm7Cj0z%2FlX42FaSCSA9MtwBxMVEEnveqb1%2FsQhfLsRw%3D&se=2020-10-05T18%3A56%3A46Z&sp=rl",
        "displayName": "Toolkit",
        "description": "",
        "appUris": {
          "documentUri": {
            "value": "https://pafeblobprodln.blob.core.windows.net:443/20200608t000000z1cbf48a3f3b54583b8932510cbdf20b0/6342866521103212774/N1bc8ee4e-1a31-4917-86f8-b9309667d09b-document.msapp?sv=2018-03-28&sr=c&sig=vcph4RCCqlB6Hc78oScTcfdkMfj6dMggsvPxxqrBVpU%3D&se=2020-08-28T08%3A00%3A00Z&sp=rl",
            "readonlyValue": "https://pafeblobprodln-secondary.blob.core.windows.net/20200608t000000z1cbf48a3f3b54583b8932510cbdf20b0/6342866521103212774/N1bc8ee4e-1a31-4917-86f8-b9309667d09b-document.msapp?sv=2018-03-28&sr=c&sig=vcph4RCCqlB6Hc78oScTcfdkMfj6dMggsvPxxqrBVpU%3D&se=2020-08-28T08%3A00%3A00Z&sp=rl"
          },
          "imageUris": []
        },
        "createdTime": "2020-06-08T20:52:24.1796831Z",
        "lastModifiedTime": "2020-06-08T20:52:24.4140538Z",
        "lastPublishTime": "2020-06-08T20:52:24Z",
        "sharedGroupsCount": 0,
        "sharedUsersCount": 0,
        "appOpenProtocolUri": "ms-apps:///providers/Microsoft.PowerApps/apps/79506a60-9c4c-4798-a1fa-aea552ef046e",
        "appOpenUri": "https://apps.powerapps.com/play/79506a60-9c4c-4798-a1fa-aea552ef046e?tenantId=e8954f17-a373-4b61-b54d-45c038fe3188",
        "databaseReferences": {},
        "userAppMetadata": {
          "favorite": "NotSpecified",
          "includeInAppsList": true
        },
        "isFeaturedApp": false,
        "bypassConsent": false,
        "isHeroApp": false,
        "environment": {
          "id": "/providers/Microsoft.PowerApps/environments/Default-e8954f17-a373-4b61-b54d-45c038fe3188",
          "name": "Default-e8954f17-a373-4b61-b54d-45c038fe3188"
        },
        "almMode": "Environment",
        "appPlanClassification": "Standard",
        "usesPremiumApi": false,
        "usesOnlyGrandfatheredPremiumApis": true,
        "usesCustomApi": false,
        "usesOnPremiseGateway": false
      },
      "appType": "ClassicCanvasApp"
    },
    {
      "name": "f581c872-9852-4100-8e25-3d6891595204",
      "id": "/providers/Microsoft.PowerApps/apps/f581c872-9852-4100-8e25-3d6891595204",
      "type": "Microsoft.PowerApps/apps",
      "tags": {
        "primaryDeviceWidth": "640",
        "primaryDeviceHeight": "1136",
        "sienaVersion": "20200812T204016Z-3.20074.20.0",
        "deviceCapabilities": "",
        "supportsPortrait": "true",
        "supportsLandscape": "false",
        "primaryFormFactor": "Phone",
        "publisherVersion": "3.20074.20",
        "minimumRequiredApiVersion": "2.2.0",
        "hasComponent": "false",
        "hasUnlockedComponent": "false",
        "isUnifiedRootApp": "false"
      },
      "properties": {
        "appVersion": "2020-08-12T20:40:16Z",
        "lastDraftVersion": "2020-08-12T20:40:16Z",
        "lifeCycleId": "Published",
        "status": "Ready",
        "createdByClientVersion": {
          "major": 3,
          "minor": 20074,
          "build": 20,
          "revision": 0,
          "majorRevision": 0,
          "minorRevision": 0
        },
        "minClientVersion": {
          "major": 3,
          "minor": 20074,
          "build": 20,
          "revision": 0,
          "majorRevision": 0,
          "minorRevision": 0
        },
        "owner": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "createdBy": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "lastModifiedBy": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "lastPublishedBy": {
          "id": "a86f34fb-fc0b-476f-b2d3-84b2648cc87a",
          "displayName": "John Doe",
          "email": "john.doe@contoso.onmicrosoft.com",
          "type": "User",
          "tenantId": "e8954f17-a373-4b61-b54d-45c038fe3188",
          "userPrincipalName": "john.doe@contoso.onmicrosoft.com"
        },
        "backgroundColor": "rgba(0, 176, 240, 1)",
        "backgroundImageUri": "https://pafeblobprodln.blob.core.windows.net:443/20200812t000000z1766ec3fd78941bea695c957e898a62a/logoSmallFile?sv=2018-03-28&sr=c&sig=sqK6%2FXY4cHidwE%2Brb3JoBV3bNToOaA6EM3%2FczbWMQDc%3D&se=2020-10-05T18%3A56%3A46Z&sp=rl",
        "teamsColorIconUrl": "https://pafeblobprodln.blob.core.windows.net:443/20200812t000000z4928635e44124aa5b50bfae36ed252b5/05358dc3-4770-4f73-a5ec-fe0a3e341454/teamsColorIcon.png?sv=2018-03-28&sr=c&sig=UYs6LV%2BGqPjfNczXP80lm%2BmG1ebFNcLCF0D8MIJ6Lt8%3D&se=2020-10-05T18%3A56%3A46Z&sp=rl",
        "teamsOutlineIconUrl": "https://pafeblobprodln.blob.core.windows.net:443/20200812t000000z4928635e44124aa5b50bfae36ed252b5/05358dc3-4770-4f73-a5ec-fe0a3e341454/teamsOutlineIcon.png?sv=2018-03-28&sr=c&sig=UYs6LV%2BGqPjfNczXP80lm%2BmG1ebFNcLCF0D8MIJ6Lt8%3D&se=2020-10-05T18%3A56%3A46Z&sp=rl",
        "displayName": "Playwright",
        "description": "",
        "commitMessage": "",
        "appUris": {
          "documentUri": {
            "value": "https://pafeblobprodln.blob.core.windows.net:443/20200812t000000z1766ec3fd78941bea695c957e898a62a/document.msapp?sv=2018-03-28&sr=c&sig=aToV3yl8gK0eiAPsh3DIxo3VC77OyLrZgYo2G%2BYXDgI%3D&se=2020-08-28T08%3A00%3A00Z&sp=rl",
            "readonlyValue": "https://pafeblobprodln-secondary.blob.core.windows.net/20200812t000000z1766ec3fd78941bea695c957e898a62a/document.msapp?sv=2018-03-28&sr=c&sig=aToV3yl8gK0eiAPsh3DIxo3VC77OyLrZgYo2G%2BYXDgI%3D&se=2020-08-28T08%3A00%3A00Z&sp=rl"
          },
          "imageUris": []
        },
        "createdTime": "2020-08-10T23:28:41.8191546Z",
        "lastModifiedTime": "2020-08-12T20:40:20.3706202Z",
        "lastPublishTime": "2020-08-12T20:40:20.3706202Z",
        "sharedGroupsCount": 0,
        "sharedUsersCount": 0,
        "appOpenProtocolUri": "ms-apps:///providers/Microsoft.PowerApps/apps/f581c872-9852-4100-8e25-3d6891595204",
        "appOpenUri": "https://apps.powerapps.com/play/f581c872-9852-4100-8e25-3d6891595204?tenantId=e8954f17-a373-4b61-b54d-45c038fe3188",
        "connectionReferences": {
          "dd1ebcc1-9930-4e87-a680-45fb1eaf94e6": {
            "id": "/providers/microsoft.powerapps/apis/shared_office365users",
            "displayName": "Office 365 Users",
            "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1381/1.0.1381.2096/office365users/icon.png",
            "dataSources": [
              "Office365Users"
            ],
            "dependencies": [],
            "dependents": [],
            "isOnPremiseConnection": false,
            "bypassConsent": false,
            "dataSets": {},
            "apiTier": "Standard",
            "isCustomApiConnection": false
          }
        },
        "userAppMetadata": {
          "favorite": "NotSpecified",
          "lastOpenedTime": "2020-08-13T23:26:44.2982102Z",
          "includeInAppsList": true
        },
        "isFeaturedApp": false,
        "bypassConsent": false,
        "isHeroApp": false,
        "environment": {
          "id": "/providers/Microsoft.PowerApps/environments/Default-e8954f17-a373-4b61-b54d-45c038fe3188",
          "name": "Default-e8954f17-a373-4b61-b54d-45c038fe3188"
        },
        "appPackageDetails": {
          "playerPackage": {
            "value": "https://pafeblobprodln.blob.core.windows.net:443/20200812t000000z4928635e44124aa5b50bfae36ed252b5/05358dc3-4770-4f73-a5ec-fe0a3e341454/player.msappk?sv=2018-03-28&sr=c&sig=UXTet030wmU8QR2TH8TWCrgm354F2LTjgIubPcfXGD4%3D&se=2020-08-28T08%3A00%3A00Z&sp=rl",
            "readonlyValue": "https://pafeblobprodln-secondary.blob.core.windows.net/20200812t000000z4928635e44124aa5b50bfae36ed252b5/05358dc3-4770-4f73-a5ec-fe0a3e341454/player.msappk?sv=2018-03-28&sr=c&sig=UXTet030wmU8QR2TH8TWCrgm354F2LTjgIubPcfXGD4%3D&se=2020-08-28T08%3A00%3A00Z&sp=rl",
            "sizeInBytes": 0
          },
          "webPackage": {
            "value": "https://pafeblobprodln.blob.core.windows.net:443/20200812t000000z4928635e44124aa5b50bfae36ed252b5/05358dc3-4770-4f73-a5ec-fe0a3e341454/web/index.web.html?sv=2018-03-28&sr=c&sig=UXTet030wmU8QR2TH8TWCrgm354F2LTjgIubPcfXGD4%3D&se=2020-08-28T08%3A00%3A00Z&sp=rl",
            "readonlyValue": "https://pafeblobprodln-secondary.blob.core.windows.net/20200812t000000z4928635e44124aa5b50bfae36ed252b5/05358dc3-4770-4f73-a5ec-fe0a3e341454/web/index.web.html?sv=2018-03-28&sr=c&sig=UXTet030wmU8QR2TH8TWCrgm354F2LTjgIubPcfXGD4%3D&se=2020-08-28T08%3A00%3A00Z&sp=rl"
          },
          "unauthenticatedWebPackage": {
            "value": "https://pafeblobprodln.blob.core.windows.net/alt20200810t000000zc57cd52652b24a1eb573f7b2a36a10a9/20200812T204028Z/index.web.html"
          },
          "documentServerVersion": {
            "major": 3,
            "minor": 20074,
            "build": 20,
            "revision": 0,
            "majorRevision": 0,
            "minorRevision": 0
          },
          "appPackageResourcesKind": "Split",
          "packagePropertiesJson": "{\"cdnUrl\":\"https://content.powerapps.com/resource/app\",\"preLoadIdx\":\"https://content.powerapps.com/resource/app/4g3nunecadgk9/preloadindex.web.html\",\"id\":\"637328616254057865\",\"v\":2.1}"
        },
        "almMode": "Environment",
        "performanceOptimizationEnabled": true,
        "unauthenticatedWebPackageHint": "1eef5df9-6032-459c-9194-77d926b11f37",
        "canConsumeAppPass": true,
        "appPlanClassification": "Standard",
        "usesPremiumApi": false,
        "usesOnlyGrandfatheredPremiumApis": true,
        "usesCustomApi": false,
        "usesOnPremiseGateway": false
      },
      "isAppComponentLibrary": false,
      "appType": "ClassicCanvasApp",
      "displayName": "Playwright",
      "description": "",
      "appVersion": "2020-08-12T20:40:16Z",
      "owner": "john.doe@contoso.onmicrosoft.com"
    }
  ];

  before(() => {
    sinon.stub(auth, 'restoreAuth').resolves();
    sinon.stub(telemetry, 'trackEvent').resolves();
    sinon.stub(pid, 'getProcessName').returns('');
    sinon.stub(session, 'getId').returns('');
    sinon.stub(accessToken, 'assertDelegatedAccessToken').resolves();
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
      request.get,
      cli.executeCommand,
      cli.executeCommandWithOutput,
      cli.getSettingWithDefaultValue
    ]);
  });

  after(() => {
    sinon.restore();
    auth.connection.active = false;
  });

  it('has correct name', () => {
    assert.strictEqual(command.name, commands.APP_GET);
  });

  it('has a description', () => {
    assert.notStrictEqual(command.description, null);
  });

  it('fails validation if name or displayName not specified', async () => {
    sinon.stub(cli, 'getSettingWithDefaultValue').callsFake((settingName, defaultValue) => {
      if (settingName === settingsNames.prompt) {
        return false;
      }

      return defaultValue;
    });

    const actual = await command.validate({ options: {} }, commandInfo);
    assert.notStrictEqual(actual, true);
  });

  it('fails validation if name and displayName are both specified', async () => {
    sinon.stub(cli, 'getSettingWithDefaultValue').callsFake((settingName, defaultValue) => {
      if (settingName === settingsNames.prompt) {
        return false;
      }

      return defaultValue;
    });

    const actual = await command.validate({ options: { name: "5369f386-e380-46cb-82a4-4e18f9e4f3a7", displayName: "Playwright" } }, commandInfo);
    assert.notStrictEqual(actual, true);
  });

  it('fails validation if name is not GUID', async () => {
    const actual = await command.validate({ options: { name: "TestApp" } }, commandInfo);
    assert.notStrictEqual(actual, true);
  });

  it('passes validation if name is specified', async () => {
    const actual = await command.validate({ options: { name: "5369f386-e380-46cb-82a4-4e18f9e4f3a7" } }, commandInfo);
    assert.strictEqual(actual, true);
  });

  it('passes validation if displayName is specified', async () => {
    const actual = await command.validate({ options: { displayName: "Playwright" } }, commandInfo);
    assert.strictEqual(actual, true);
  });

  it('retrieves information about the specified app using name (debug)', async () => {
    sinon.stub(request, 'get').callsFake(async (opts) => {
      if (opts.url === `https://api.powerapps.com/providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7?api-version=2016-11-01`) {
        if (opts.headers &&
          opts.headers.accept &&
          (opts.headers.accept as string).indexOf('application/json') === 0) {
          return { "name": "5369f386-e380-46cb-82a4-4e18f9e4f3a7", "id": "/providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "type": "Microsoft.PowerApps/apps", "tags": { "primaryDeviceWidth": "640", "primaryDeviceHeight": "1136", "sienaVersion": "20210118T125447Z-3.20123.24.0", "deviceCapabilities": "", "supportsPortrait": "true", "supportsLandscape": "false", "primaryFormFactor": "Phone", "publisherVersion": "3.20123.24", "minimumRequiredApiVersion": "2.2.0", "hasComponent": "false", "hasUnlockedComponent": "false", "isUnifiedRootApp": "false" }, "properties": { "appVersion": "2021-01-18T12:54:47Z", "createdByClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "minClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "owner": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "createdBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "lastModifiedBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "backgroundColor": "rgba(0, 176, 240, 1)", "backgroundImageUri": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/logoSmallFile?sv=2018-03-28&sr=c&sig=Y5OvBpqU9EXwpXthPre62%2B24zwCNS9ihPfCNmBmuXro%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsColorIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsColorIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsOutlineIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsOutlineIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "displayName": "App", "description": "test", "appUris": { "documentUri": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "imageUris": [] }, "createdTime": "2021-01-18T12:54:47.9591484Z", "lastModifiedTime": "2021-01-18T12:54:48.0998249Z", "sharedGroupsCount": 0, "sharedUsersCount": 0, "appOpenProtocolUri": "ms-apps:///providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "appOpenUri": "https://apps.powerapps.com/play/5369f386-e380-46cb-82a4-4e18f9e4f3a7?tenantId=2ca3eaa5-140f-4175-9563-1172edf9f339&hint=c67d9086-a429-45b8-8b19-91fab5174177", "connectionReferences": { "c189738b-6a2d-4713-939d-e2ed35101124": { "id": "/providers/microsoft.powerapps/apis/shared_sharepointonline", "displayName": "SharePoint", "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1431/1.0.1431.2301/sharepointonline/icon.png", "dataSources": ["ICT Aanvragen"], "dependencies": [], "dependents": [], "parameterHints": {}, "isOnPremiseConnection": false, "bypassConsent": false, "apiTier": "Standard", "isCustomApiConnection": false } }, "userAppMetadata": { "favorite": "NotSpecified", "includeInAppsList": true }, "isFeaturedApp": false, "bypassConsent": false, "isHeroApp": false, "environment": { "id": "/providers/Microsoft.PowerApps/environments/Default-2ca3eaa5-140f-4175-9563-1172edf9f339", "name": "Default-2ca3eaa5-140f-4175-9563-1172edf9f339" }, "appPackageDetails": { "playerPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "webPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "unauthenticatedWebPackage": { "value": "https://pafeblobprodam.blob.core.windows.net/alt20210118t000000z84a0aa047e784c87b15a6529a8f7ab50/20210118T125458Z/index.web.html" }, "documentServerVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "appPackageResourcesKind": "Split", "packagePropertiesJson": "{\"cdnUrl\":\"https://content.powerapps.com/resource/app\",\"preLoadIdx\":\"https://content.powerapps.com/resource/app/a5ccjkurht6g5/preloadindex.web.html\",\"id\":\"637465712959244709\",\"v\":2.1}" }, "almMode": "Environment", "performanceOptimizationEnabled": true, "unauthenticatedWebPackageHint": "c67d9086-a429-45b8-8b19-91fab5174177", "canConsumeAppPass": true, "executionRestrictions": { "isTeamsOnly": false, "dataLossPreventionEvaluationResult": { "status": "Compliant", "lastEvaluationDate": "2021-01-18T12:54:58.0824718Z", "violationDetails": [] } }, "appPlanClassification": "Standard", "usesPremiumApi": false, "usesOnlyGrandfatheredPremiumApis": true, "usesCustomApi": false, "usesOnPremiseGateway": false, "isCustomizable": true }, "isAppComponentLibrary": false, "appType": "ClassicCanvasApp" };
        }
      }

      throw 'Invalid request';
    });

    await command.action(logger, { options: { debug: true, name: '5369f386-e380-46cb-82a4-4e18f9e4f3a7' } });
    assert(loggerLogSpy.calledWith({ "name": "5369f386-e380-46cb-82a4-4e18f9e4f3a7", "id": "/providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "type": "Microsoft.PowerApps/apps", "tags": { "primaryDeviceWidth": "640", "primaryDeviceHeight": "1136", "sienaVersion": "20210118T125447Z-3.20123.24.0", "deviceCapabilities": "", "supportsPortrait": "true", "supportsLandscape": "false", "primaryFormFactor": "Phone", "publisherVersion": "3.20123.24", "minimumRequiredApiVersion": "2.2.0", "hasComponent": "false", "hasUnlockedComponent": "false", "isUnifiedRootApp": "false" }, "properties": { "appVersion": "2021-01-18T12:54:47Z", "createdByClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "minClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "owner": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "createdBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "lastModifiedBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "backgroundColor": "rgba(0, 176, 240, 1)", "backgroundImageUri": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/logoSmallFile?sv=2018-03-28&sr=c&sig=Y5OvBpqU9EXwpXthPre62%2B24zwCNS9ihPfCNmBmuXro%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsColorIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsColorIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsOutlineIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsOutlineIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "displayName": "App", "description": "test", "appUris": { "documentUri": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "imageUris": [] }, "createdTime": "2021-01-18T12:54:47.9591484Z", "lastModifiedTime": "2021-01-18T12:54:48.0998249Z", "sharedGroupsCount": 0, "sharedUsersCount": 0, "appOpenProtocolUri": "ms-apps:///providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "appOpenUri": "https://apps.powerapps.com/play/5369f386-e380-46cb-82a4-4e18f9e4f3a7?tenantId=2ca3eaa5-140f-4175-9563-1172edf9f339&hint=c67d9086-a429-45b8-8b19-91fab5174177", "connectionReferences": { "c189738b-6a2d-4713-939d-e2ed35101124": { "id": "/providers/microsoft.powerapps/apis/shared_sharepointonline", "displayName": "SharePoint", "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1431/1.0.1431.2301/sharepointonline/icon.png", "dataSources": ["ICT Aanvragen"], "dependencies": [], "dependents": [], "parameterHints": {}, "isOnPremiseConnection": false, "bypassConsent": false, "apiTier": "Standard", "isCustomApiConnection": false } }, "userAppMetadata": { "favorite": "NotSpecified", "includeInAppsList": true }, "isFeaturedApp": false, "bypassConsent": false, "isHeroApp": false, "environment": { "id": "/providers/Microsoft.PowerApps/environments/Default-2ca3eaa5-140f-4175-9563-1172edf9f339", "name": "Default-2ca3eaa5-140f-4175-9563-1172edf9f339" }, "appPackageDetails": { "playerPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "webPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "unauthenticatedWebPackage": { "value": "https://pafeblobprodam.blob.core.windows.net/alt20210118t000000z84a0aa047e784c87b15a6529a8f7ab50/20210118T125458Z/index.web.html" }, "documentServerVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "appPackageResourcesKind": "Split", "packagePropertiesJson": "{\"cdnUrl\":\"https://content.powerapps.com/resource/app\",\"preLoadIdx\":\"https://content.powerapps.com/resource/app/a5ccjkurht6g5/preloadindex.web.html\",\"id\":\"637465712959244709\",\"v\":2.1}" }, "almMode": "Environment", "performanceOptimizationEnabled": true, "unauthenticatedWebPackageHint": "c67d9086-a429-45b8-8b19-91fab5174177", "canConsumeAppPass": true, "executionRestrictions": { "isTeamsOnly": false, "dataLossPreventionEvaluationResult": { "status": "Compliant", "lastEvaluationDate": "2021-01-18T12:54:58.0824718Z", "violationDetails": [] } }, "appPlanClassification": "Standard", "usesPremiumApi": false, "usesOnlyGrandfatheredPremiumApis": true, "usesCustomApi": false, "usesOnPremiseGateway": false, "isCustomizable": true }, "isAppComponentLibrary": false, "appType": "ClassicCanvasApp", displayName: 'App', description: 'test', appVersion: '2021-01-18T12:54:47Z', owner: 'admin@contoso.com' }));
  });

  it('retrieves information about the specified app using name', async () => {
    sinon.stub(request, 'get').callsFake(async (opts) => {
      if (opts.url === `https://api.powerapps.com/providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7?api-version=2016-11-01`) {
        if (opts.headers &&
          opts.headers.accept &&
          (opts.headers.accept as string).indexOf('application/json') === 0) {
          return { "name": "5369f386-e380-46cb-82a4-4e18f9e4f3a7", "id": "/providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "type": "Microsoft.PowerApps/apps", "tags": { "primaryDeviceWidth": "640", "primaryDeviceHeight": "1136", "sienaVersion": "20210118T125447Z-3.20123.24.0", "deviceCapabilities": "", "supportsPortrait": "true", "supportsLandscape": "false", "primaryFormFactor": "Phone", "publisherVersion": "3.20123.24", "minimumRequiredApiVersion": "2.2.0", "hasComponent": "false", "hasUnlockedComponent": "false", "isUnifiedRootApp": "false" }, "properties": { "appVersion": "2021-01-18T12:54:47Z", "createdByClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "minClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "owner": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "createdBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "lastModifiedBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "backgroundColor": "rgba(0, 176, 240, 1)", "backgroundImageUri": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/logoSmallFile?sv=2018-03-28&sr=c&sig=Y5OvBpqU9EXwpXthPre62%2B24zwCNS9ihPfCNmBmuXro%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsColorIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsColorIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsOutlineIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsOutlineIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "displayName": "App", "description": "", "appUris": { "documentUri": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "imageUris": [] }, "createdTime": "2021-01-18T12:54:47.9591484Z", "lastModifiedTime": "2021-01-18T12:54:48.0998249Z", "sharedGroupsCount": 0, "sharedUsersCount": 0, "appOpenProtocolUri": "ms-apps:///providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "appOpenUri": "https://apps.powerapps.com/play/5369f386-e380-46cb-82a4-4e18f9e4f3a7?tenantId=2ca3eaa5-140f-4175-9563-1172edf9f339&hint=c67d9086-a429-45b8-8b19-91fab5174177", "connectionReferences": { "c189738b-6a2d-4713-939d-e2ed35101124": { "id": "/providers/microsoft.powerapps/apis/shared_sharepointonline", "displayName": "SharePoint", "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1431/1.0.1431.2301/sharepointonline/icon.png", "dataSources": ["ICT Aanvragen"], "dependencies": [], "dependents": [], "parameterHints": {}, "isOnPremiseConnection": false, "bypassConsent": false, "apiTier": "Standard", "isCustomApiConnection": false } }, "userAppMetadata": { "favorite": "NotSpecified", "includeInAppsList": true }, "isFeaturedApp": false, "bypassConsent": false, "isHeroApp": false, "environment": { "id": "/providers/Microsoft.PowerApps/environments/Default-2ca3eaa5-140f-4175-9563-1172edf9f339", "name": "Default-2ca3eaa5-140f-4175-9563-1172edf9f339" }, "appPackageDetails": { "playerPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "webPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "unauthenticatedWebPackage": { "value": "https://pafeblobprodam.blob.core.windows.net/alt20210118t000000z84a0aa047e784c87b15a6529a8f7ab50/20210118T125458Z/index.web.html" }, "documentServerVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "appPackageResourcesKind": "Split", "packagePropertiesJson": "{\"cdnUrl\":\"https://content.powerapps.com/resource/app\",\"preLoadIdx\":\"https://content.powerapps.com/resource/app/a5ccjkurht6g5/preloadindex.web.html\",\"id\":\"637465712959244709\",\"v\":2.1}" }, "almMode": "Environment", "performanceOptimizationEnabled": true, "unauthenticatedWebPackageHint": "c67d9086-a429-45b8-8b19-91fab5174177", "canConsumeAppPass": true, "executionRestrictions": { "isTeamsOnly": false, "dataLossPreventionEvaluationResult": { "status": "Compliant", "lastEvaluationDate": "2021-01-18T12:54:58.0824718Z", "violationDetails": [] } }, "appPlanClassification": "Standard", "usesPremiumApi": false, "usesOnlyGrandfatheredPremiumApis": true, "usesCustomApi": false, "usesOnPremiseGateway": false, "isCustomizable": true }, "isAppComponentLibrary": false, "appType": "ClassicCanvasApp" };
        }
      }

      throw 'Invalid request';
    });

    await command.action(logger, { options: { name: '5369f386-e380-46cb-82a4-4e18f9e4f3a7' } });
    assert(loggerLogSpy.calledWith({ "name": "5369f386-e380-46cb-82a4-4e18f9e4f3a7", "id": "/providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "type": "Microsoft.PowerApps/apps", "tags": { "primaryDeviceWidth": "640", "primaryDeviceHeight": "1136", "sienaVersion": "20210118T125447Z-3.20123.24.0", "deviceCapabilities": "", "supportsPortrait": "true", "supportsLandscape": "false", "primaryFormFactor": "Phone", "publisherVersion": "3.20123.24", "minimumRequiredApiVersion": "2.2.0", "hasComponent": "false", "hasUnlockedComponent": "false", "isUnifiedRootApp": "false" }, "properties": { "appVersion": "2021-01-18T12:54:47Z", "createdByClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "minClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "owner": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "createdBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "lastModifiedBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "backgroundColor": "rgba(0, 176, 240, 1)", "backgroundImageUri": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/logoSmallFile?sv=2018-03-28&sr=c&sig=Y5OvBpqU9EXwpXthPre62%2B24zwCNS9ihPfCNmBmuXro%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsColorIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsColorIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsOutlineIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsOutlineIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "displayName": "App", "description": "", "appUris": { "documentUri": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "imageUris": [] }, "createdTime": "2021-01-18T12:54:47.9591484Z", "lastModifiedTime": "2021-01-18T12:54:48.0998249Z", "sharedGroupsCount": 0, "sharedUsersCount": 0, "appOpenProtocolUri": "ms-apps:///providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "appOpenUri": "https://apps.powerapps.com/play/5369f386-e380-46cb-82a4-4e18f9e4f3a7?tenantId=2ca3eaa5-140f-4175-9563-1172edf9f339&hint=c67d9086-a429-45b8-8b19-91fab5174177", "connectionReferences": { "c189738b-6a2d-4713-939d-e2ed35101124": { "id": "/providers/microsoft.powerapps/apis/shared_sharepointonline", "displayName": "SharePoint", "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1431/1.0.1431.2301/sharepointonline/icon.png", "dataSources": ["ICT Aanvragen"], "dependencies": [], "dependents": [], "parameterHints": {}, "isOnPremiseConnection": false, "bypassConsent": false, "apiTier": "Standard", "isCustomApiConnection": false } }, "userAppMetadata": { "favorite": "NotSpecified", "includeInAppsList": true }, "isFeaturedApp": false, "bypassConsent": false, "isHeroApp": false, "environment": { "id": "/providers/Microsoft.PowerApps/environments/Default-2ca3eaa5-140f-4175-9563-1172edf9f339", "name": "Default-2ca3eaa5-140f-4175-9563-1172edf9f339" }, "appPackageDetails": { "playerPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "webPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "unauthenticatedWebPackage": { "value": "https://pafeblobprodam.blob.core.windows.net/alt20210118t000000z84a0aa047e784c87b15a6529a8f7ab50/20210118T125458Z/index.web.html" }, "documentServerVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "appPackageResourcesKind": "Split", "packagePropertiesJson": "{\"cdnUrl\":\"https://content.powerapps.com/resource/app\",\"preLoadIdx\":\"https://content.powerapps.com/resource/app/a5ccjkurht6g5/preloadindex.web.html\",\"id\":\"637465712959244709\",\"v\":2.1}" }, "almMode": "Environment", "performanceOptimizationEnabled": true, "unauthenticatedWebPackageHint": "c67d9086-a429-45b8-8b19-91fab5174177", "canConsumeAppPass": true, "executionRestrictions": { "isTeamsOnly": false, "dataLossPreventionEvaluationResult": { "status": "Compliant", "lastEvaluationDate": "2021-01-18T12:54:58.0824718Z", "violationDetails": [] } }, "appPlanClassification": "Standard", "usesPremiumApi": false, "usesOnlyGrandfatheredPremiumApis": true, "usesCustomApi": false, "usesOnPremiseGateway": false, "isCustomizable": true }, "isAppComponentLibrary": false, "appType": "ClassicCanvasApp", displayName: 'App', description: '', appVersion: '2021-01-18T12:54:47Z', owner: 'admin@contoso.com' }));
  });

  it('retrieves information about the specified app using name as admin', async () => {
    const app = apps[0];

    sinon.stub(request, 'get').callsFake(async (opts) => {
      if (opts.url === `https://api.powerapps.com/providers/Microsoft.PowerApps/scopes/admin/environments/${app.properties.environment.name}/apps/${app.name}?api-version=2016-11-01`) {
        if (opts.headers &&
          opts.headers.accept &&
          (opts.headers.accept as string).indexOf('application/json') === 0) {
          return app;
        }
      }

      throw 'Invalid request';
    });

    await command.action(logger, { options: { name: app.name, environmentName: app.properties.environment.name, asAdmin: true } });
    assert(loggerLogSpy.calledWith(app));
  });

  it('retrieves information about the specified app using displayName', async () => {
    sinon.stub(cli, 'executeCommandWithOutput').callsFake(async (command): Promise<any> => {
      if (command === paAppListCommand) {
        return { "stdout": JSON.stringify(apps) };
      }
      throw 'Invalid request';
    });

    await command.action(logger, { options: { displayName: 'Playwright' } });
    assert(loggerLogSpy.calledWith(apps[2]));
  });

  it('retrieves information about the specified app using displayName as admin', async () => {
    sinon.stub(cli, 'executeCommandWithOutput').callsFake(async (command, args): Promise<any> => {
      if (command === paAppListCommand && args.options.environmentName === '4ce50206-9576-4237-8b17-38d8aadfaa35' && args.options.asAdmin) {
        return { "stdout": JSON.stringify(apps) };
      }
      throw 'Invalid request';
    });

    await command.action(logger, { options: { displayName: 'Playwright', environmentName: '4ce50206-9576-4237-8b17-38d8aadfaa35', asAdmin: true } });
    assert(loggerLogSpy.calledWith(apps[2]));
  });

  it('renders empty string for missing properties using name', async () => {
    sinon.stub(request, 'get').callsFake(async (opts) => {
      if (opts.url === `https://api.powerapps.com/providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7?api-version=2016-11-01`) {
        if (opts.headers &&
          opts.headers.accept &&
          (opts.headers.accept as string).indexOf('application/json') === 0) {
          return { "name": "5369f386-e380-46cb-82a4-4e18f9e4f3a7", "id": "/providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "type": "Microsoft.PowerApps/apps", "tags": { "primaryDeviceWidth": "640", "primaryDeviceHeight": "1136", "sienaVersion": "20210118T125447Z-3.20123.24.0", "deviceCapabilities": "", "supportsPortrait": "true", "supportsLandscape": "false", "primaryFormFactor": "Phone", "publisherVersion": "3.20123.24", "minimumRequiredApiVersion": "2.2.0", "hasComponent": "false", "hasUnlockedComponent": "false", "isUnifiedRootApp": "false" }, "properties": { "appVersion": "2021-01-18T12:54:47Z", "createdByClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "minClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "owner": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "createdBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "lastModifiedBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "backgroundColor": "rgba(0, 176, 240, 1)", "backgroundImageUri": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/logoSmallFile?sv=2018-03-28&sr=c&sig=Y5OvBpqU9EXwpXthPre62%2B24zwCNS9ihPfCNmBmuXro%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsColorIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsColorIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsOutlineIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsOutlineIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "displayName": "App", "description": "", "appUris": { "documentUri": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "imageUris": [] }, "createdTime": "2021-01-18T12:54:47.9591484Z", "lastModifiedTime": "2021-01-18T12:54:48.0998249Z", "sharedGroupsCount": 0, "sharedUsersCount": 0, "appOpenProtocolUri": "ms-apps:///providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "appOpenUri": "https://apps.powerapps.com/play/5369f386-e380-46cb-82a4-4e18f9e4f3a7?tenantId=2ca3eaa5-140f-4175-9563-1172edf9f339&hint=c67d9086-a429-45b8-8b19-91fab5174177", "connectionReferences": { "c189738b-6a2d-4713-939d-e2ed35101124": { "id": "/providers/microsoft.powerapps/apis/shared_sharepointonline", "displayName": "SharePoint", "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1431/1.0.1431.2301/sharepointonline/icon.png", "dataSources": ["ICT Aanvragen"], "dependencies": [], "dependents": [], "parameterHints": {}, "isOnPremiseConnection": false, "bypassConsent": false, "apiTier": "Standard", "isCustomApiConnection": false } }, "userAppMetadata": { "favorite": "NotSpecified", "includeInAppsList": true }, "isFeaturedApp": false, "bypassConsent": false, "isHeroApp": false, "environment": { "id": "/providers/Microsoft.PowerApps/environments/Default-2ca3eaa5-140f-4175-9563-1172edf9f339", "name": "Default-2ca3eaa5-140f-4175-9563-1172edf9f339" }, "appPackageDetails": { "playerPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "webPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "unauthenticatedWebPackage": { "value": "https://pafeblobprodam.blob.core.windows.net/alt20210118t000000z84a0aa047e784c87b15a6529a8f7ab50/20210118T125458Z/index.web.html" }, "documentServerVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "appPackageResourcesKind": "Split", "packagePropertiesJson": "{\"cdnUrl\":\"https://content.powerapps.com/resource/app\",\"preLoadIdx\":\"https://content.powerapps.com/resource/app/a5ccjkurht6g5/preloadindex.web.html\",\"id\":\"637465712959244709\",\"v\":2.1}" }, "almMode": "Environment", "performanceOptimizationEnabled": true, "unauthenticatedWebPackageHint": "c67d9086-a429-45b8-8b19-91fab5174177", "canConsumeAppPass": true, "executionRestrictions": { "isTeamsOnly": false, "dataLossPreventionEvaluationResult": { "status": "Compliant", "lastEvaluationDate": "2021-01-18T12:54:58.0824718Z", "violationDetails": [] } }, "appPlanClassification": "Standard", "usesPremiumApi": false, "usesOnlyGrandfatheredPremiumApis": true, "usesCustomApi": false, "usesOnPremiseGateway": false, "isCustomizable": true }, "isAppComponentLibrary": false, "appType": "ClassicCanvasApp" };
        }
      }

      throw 'Invalid request';
    });

    await command.action(logger, { options: { debug: true, name: '5369f386-e380-46cb-82a4-4e18f9e4f3a7' } });
    assert(loggerLogSpy.calledWith({ "name": "5369f386-e380-46cb-82a4-4e18f9e4f3a7", "id": "/providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "type": "Microsoft.PowerApps/apps", "tags": { "primaryDeviceWidth": "640", "primaryDeviceHeight": "1136", "sienaVersion": "20210118T125447Z-3.20123.24.0", "deviceCapabilities": "", "supportsPortrait": "true", "supportsLandscape": "false", "primaryFormFactor": "Phone", "publisherVersion": "3.20123.24", "minimumRequiredApiVersion": "2.2.0", "hasComponent": "false", "hasUnlockedComponent": "false", "isUnifiedRootApp": "false" }, "properties": { "appVersion": "2021-01-18T12:54:47Z", "createdByClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "minClientVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "owner": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "createdBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "lastModifiedBy": { "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e", "displayName": "Contoso Admin", "email": "admin@contoso.com", "type": "User", "tenantId": "2ca3eaa5-140f-4175-9563-1172edf9f339", "userPrincipalName": "admin@contoso.com" }, "backgroundColor": "rgba(0, 176, 240, 1)", "backgroundImageUri": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/logoSmallFile?sv=2018-03-28&sr=c&sig=Y5OvBpqU9EXwpXthPre62%2B24zwCNS9ihPfCNmBmuXro%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsColorIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsColorIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "teamsOutlineIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z7f1ae936e0c84483a435f047250f9a90/teamsOutlineIcon.png?sv=2018-03-28&sr=c&sig=ECrnlPPWWirepGA0BwPAfi3RDcNxugeuBajcE9DvJcI%3D&se=2021-04-03T02%3A12%3A49Z&sp=rl", "displayName": "App", "description": "", "appUris": { "documentUri": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z6c2a80eb28694f6d8ded45d116516cfe/document.msapp?sv=2018-03-28&sr=c&sig=bx4dLMgjOurFPWW%2FuanqlJlb1clSqH05cZDPgbEkEno%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "imageUris": [] }, "createdTime": "2021-01-18T12:54:47.9591484Z", "lastModifiedTime": "2021-01-18T12:54:48.0998249Z", "sharedGroupsCount": 0, "sharedUsersCount": 0, "appOpenProtocolUri": "ms-apps:///providers/Microsoft.PowerApps/apps/5369f386-e380-46cb-82a4-4e18f9e4f3a7", "appOpenUri": "https://apps.powerapps.com/play/5369f386-e380-46cb-82a4-4e18f9e4f3a7?tenantId=2ca3eaa5-140f-4175-9563-1172edf9f339&hint=c67d9086-a429-45b8-8b19-91fab5174177", "connectionReferences": { "c189738b-6a2d-4713-939d-e2ed35101124": { "id": "/providers/microsoft.powerapps/apis/shared_sharepointonline", "displayName": "SharePoint", "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1431/1.0.1431.2301/sharepointonline/icon.png", "dataSources": ["ICT Aanvragen"], "dependencies": [], "dependents": [], "parameterHints": {}, "isOnPremiseConnection": false, "bypassConsent": false, "apiTier": "Standard", "isCustomApiConnection": false } }, "userAppMetadata": { "favorite": "NotSpecified", "includeInAppsList": true }, "isFeaturedApp": false, "bypassConsent": false, "isHeroApp": false, "environment": { "id": "/providers/Microsoft.PowerApps/environments/Default-2ca3eaa5-140f-4175-9563-1172edf9f339", "name": "Default-2ca3eaa5-140f-4175-9563-1172edf9f339" }, "appPackageDetails": { "playerPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/player.msappk?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "webPackage": { "value": "https://pafeblobprodam.blob.core.windows.net:443/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl", "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20210118t000000z1e14514d87e148ef915413781752b174/bda64b54-eb93-4ca8-b1a7-d6f85536c985/web/index.web.html?sv=2018-03-28&sr=c&sig=TwHX9CQJk8KEC6sjIWvYkMJ60v7jY%2FH534DYfL7tyAw%3D&se=2021-02-17T00%3A00%3A00Z&sp=rl" }, "unauthenticatedWebPackage": { "value": "https://pafeblobprodam.blob.core.windows.net/alt20210118t000000z84a0aa047e784c87b15a6529a8f7ab50/20210118T125458Z/index.web.html" }, "documentServerVersion": { "major": 3, "minor": 20123, "build": 24, "revision": 0, "majorRevision": 0, "minorRevision": 0 }, "appPackageResourcesKind": "Split", "packagePropertiesJson": "{\"cdnUrl\":\"https://content.powerapps.com/resource/app\",\"preLoadIdx\":\"https://content.powerapps.com/resource/app/a5ccjkurht6g5/preloadindex.web.html\",\"id\":\"637465712959244709\",\"v\":2.1}" }, "almMode": "Environment", "performanceOptimizationEnabled": true, "unauthenticatedWebPackageHint": "c67d9086-a429-45b8-8b19-91fab5174177", "canConsumeAppPass": true, "executionRestrictions": { "isTeamsOnly": false, "dataLossPreventionEvaluationResult": { "status": "Compliant", "lastEvaluationDate": "2021-01-18T12:54:58.0824718Z", "violationDetails": [] } }, "appPlanClassification": "Standard", "usesPremiumApi": false, "usesOnlyGrandfatheredPremiumApis": true, "usesCustomApi": false, "usesOnPremiseGateway": false, "isCustomizable": true }, "isAppComponentLibrary": false, "appType": "ClassicCanvasApp", displayName: 'App', description: '', appVersion: '2021-01-18T12:54:47Z', owner: '' }));
  });

  it('renders empty string for missing properties using displayName', async () => {
    sinon.stub(cli, 'executeCommandWithOutput').callsFake(async (command): Promise<any> => {
      if (command === paAppListCommand) {
        return { "stdout": JSON.stringify(apps) };
      }
      throw 'Invalid request';
    });

    await command.action(logger, { options: { displayName: 'Playwright' } });
    assert(loggerLogSpy.calledWith(apps[2]));
  });

  it('correctly handles App not found using name', async () => {
    sinon.stub(request, 'get').rejects({
      "error": {
        "code": "AppNotFound",
        "message": "Could not find App '1c6ee23a-a835-44bc-a4f5-462b658efc12'."
      }
    });

    await assert.rejects(command.action(logger, { options: { name: '1c6ee23a-a835-44bc-a4f5-462b658efc12' } } as any),
      new CommandError(`Could not find App '1c6ee23a-a835-44bc-a4f5-462b658efc12'.`));
  });


  it('correctly handles App not found using displayName (debug)', async () => {
    sinon.stub(cli, 'executeCommandWithOutput').callsFake(async (command): Promise<any> => {
      if (command === paAppListCommand) {
        return { "stdout": JSON.stringify(apps) };
      }
      throw 'Invalid request';
    });

    await assert.rejects(command.action(logger, {
      options: {
        verbose: true,
        displayName: 'NoAppFound'
      }
    } as any), new CommandError(`No app found with displayName 'NoAppFound'.`));
  });

  it('correctly handles no apps found using displayName (debug)', async () => {
    sinon.stub(cli, 'executeCommandWithOutput').callsFake(async (command): Promise<any> => {
      if (command === paAppListCommand) {
        return { "stdout": JSON.stringify([]) };
      }
      throw 'Invalid request';
    });

    await assert.rejects(command.action(logger, {
      options: {
        verbose: true,
        displayName: 'Playwright'
      }
    } as any), new CommandError('No apps found.'));
  });

  it('correctly handles API OData error', async () => {
    sinon.stub(request, 'get').rejects({
      error: {
        'odata.error': {
          code: '-1, InvalidOperationException',
          message: {
            value: 'An error has occurred'
          }
        }
      }
    });

    await assert.rejects(command.action(logger, { options: { name: '3989cb59-ce1a-4a5c-bb78-257c5c39381d' } } as any),
      new CommandError('An error has occurred'));
  });

  it('fails validation if asAdmin specified without environment', async () => {
    const actual = await command.validate({ options: { name: "5369f386-e380-46cb-82a4-4e18f9e4f3a7", asAdmin: true } }, commandInfo);
    assert.notStrictEqual(actual, true);
  });

  it('fails validation if environment specified without admin', async () => {
    const actual = await command.validate({ options: { name: "5369f386-e380-46cb-82a4-4e18f9e4f3a7", environmentName: 'Default-d87a7535-dd31-4437-bfe1-95340acd55c6' } }, commandInfo);
    assert.notStrictEqual(actual, true);
  });

  it('passes validation if asAdmin specified with environment', async () => {
    const actual = await command.validate({ options: { name: "5369f386-e380-46cb-82a4-4e18f9e4f3a7", asAdmin: true, environmentName: 'Default-d87a7535-dd31-4437-bfe1-95340acd55c6' } }, commandInfo);
    assert.strictEqual(actual, true);
  });
});
