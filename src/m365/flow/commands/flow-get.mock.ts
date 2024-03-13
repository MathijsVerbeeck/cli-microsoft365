export const flowGetResponse = {
  "name": "8eae2e07-f15b-4611-88a8-ddfa2bafb47c",
  "id": "/providers/Microsoft.ProcessSimple/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/flows/8eae2e07-f15b-4611-88a8-ddfa2bafb47c",
  "type": "Microsoft.ProcessSimple/environments/flows",
  "properties": {
    "apiId": "/providers/Microsoft.PowerApps/apis/shared_logicflows",
    "displayName": "When an item is created or modified -> Initialize variable",
    "userType": "Owner",
    "definition": {
      "$schema": "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
      "contentVersion": "1.0.0.0",
      "parameters": {
        "$connections": {
          "defaultValue": {},
          "type": "Object"
        },
        "$authentication": {
          "defaultValue": {},
          "type": "SecureObject"
        }
      },
      "triggers": {
        "When_an_item_is_created_or_modified": {
          "recurrence": {
            "frequency": "Minute",
            "interval": 5
          },
          "splitOn": "@triggerOutputs()?['body/value']",
          "metadata": {
            "operationMetadataId": "0c830afe-5bfb-4af1-85bc-12ab218a1a2b"
          },
          "type": "OpenApiConnection",
          "inputs": {
            "parameters": {
              "dataset": "https://mathijsdev2.sharepoint.com",
              "table": "b9066cf6-f8cd-44cd-a4a7-12eb90c51073"
            },
            "host": {
              "apiId": "/providers/Microsoft.PowerApps/apis/shared_sharepointonline",
              "connectionName": "shared_sharepointonline",
              "operationId": "GetOnUpdatedItems"
            },
            "authentication": "@parameters('$authentication')"
          }
        }
      },
      "actions": {
        "Initialize_variable": {
          "runAfter": {},
          "metadata": {
            "operationMetadataId": "629b46ae-5ede-4eb3-92b6-bc2ada4c51c0"
          },
          "type": "InitializeVariable",
          "inputs": {
            "variables": [
              {
                "name": "String",
                "type": "string"
              }
            ]
          }
        }
      },
      "outputs": {}
    },
    "state": "Started",
    "plan": "NotSpecified",
    "connectionReferences": {
      "shared_sharepointonline": {
        "connectionName": "shared-sharepointonl-328f8256-2983-4cfe-800f-9bfa0bd6cb98",
        "apiDefinition": {
          "name": "shared_sharepointonline",
          "id": "/providers/Microsoft.PowerApps/apis/shared_sharepointonline",
          "type": "/providers/Microsoft.PowerApps/apis",
          "properties": {
            "displayName": "SharePoint",
            "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1685/1.0.1685.3700/sharepointonline/icon.png",
            "purpose": "NotSpecified",
            "connectionParameters": {
              "token": {
                "type": "oauthSetting",
                "oAuthSettings": {
                  "identityProvider": "sharepointonlinecertificateV2",
                  "clientId": "7ab7862c-4c57-491e-8a45-d52a7e023983",
                  "scopes": [],
                  "redirectMode": "GlobalPerConnector",
                  "redirectUrl": "https://global.consent.azure-apim.net/redirect/sharepointonline",
                  "properties": {
                    "IsFirstParty": "True",
                    "IsOnbehalfofLoginSupported": true
                  },
                  "customParameters": {
                    "resourceUriAAD": {
                      "value": "https://graph.microsoft.com/"
                    },
                    "loginUri": {
                      "value": "https://login.windows.net"
                    },
                    "loginUriAAD": {
                      "value": "https://login.windows.net"
                    },
                    "resourceUri": {
                      "value": "https://graph.microsoft.com"
                    }
                  }
                },
                "uiDefinition": {
                  "displayName": "Log in with SharePoint Credentials",
                  "description": "Log in with SharePoint Credentials",
                  "tooltip": "Provide SharePoint Credentials",
                  "constraints": {
                    "required": "true",
                    "capability": [
                      "cloud"
                    ]
                  }
                }
              },
              "token:TenantId": {
                "type": "string",
                "metadata": {
                  "sourceType": "AzureActiveDirectoryTenant"
                },
                "uiDefinition": {
                  "displayName": "Tenant",
                  "description": "The tenant ID of for the Microsoft Entra ID application",
                  "constraints": {
                    "required": "false",
                    "hidden": "true"
                  }
                }
              },
              "gateway": {
                "type": "gatewaySetting",
                "gatewaySettings": {
                  "dataSourceType": "SharePoint",
                  "connectionDetails": []
                },
                "uiDefinition": {
                  "tabIndex": 1,
                  "constraints": {
                    "hidden": "false",
                    "capability": [
                      "gateway"
                    ]
                  }
                }
              },
              "authType": {
                "type": "string",
                "allowedValues": [
                  {
                    "value": "windows"
                  }
                ],
                "uiDefinition": {
                  "displayName": "Authentication Type",
                  "description": "Authentication type to connect to your database",
                  "tooltip": "Authentication type to connect to your database",
                  "constraints": {
                    "tabIndex": 2,
                    "required": "false",
                    "allowedValues": [
                      {
                        "text": "Windows",
                        "value": "windows"
                      }
                    ],
                    "capability": [
                      "gateway"
                    ]
                  }
                }
              },
              "username": {
                "type": "securestring",
                "uiDefinition": {
                  "displayName": "Username",
                  "description": "Username credential",
                  "tooltip": "Username credential",
                  "constraints": {
                    "tabIndex": 3,
                    "clearText": true,
                    "required": "true",
                    "capability": [
                      "gateway"
                    ]
                  }
                }
              },
              "password": {
                "type": "securestring",
                "uiDefinition": {
                  "displayName": "Password",
                  "description": "Password credential",
                  "tooltip": "Password credential",
                  "constraints": {
                    "tabIndex": 4,
                    "required": "true",
                    "capability": [
                      "gateway"
                    ]
                  }
                }
              }
            },
            "scopes": {
              "will": [
                "Read list and library names, as well as the names of the columns",
                "Create, read, update, copy and delete files and metadata",
                "Create, read, update, and delete list items"
              ],
              "wont": []
            },
            "runtimeUrls": [
              "https://europe-002.azure-apim.net/apim/sharepointonline"
            ],
            "primaryRuntimeUrl": "https://europe-002.azure-apim.net/apim/sharepointonline",
            "metadata": {
              "source": "marketplace",
              "brandColor": "#036C70",
              "useNewApimVersion": "true",
              "version": {
                "previous": "releases/v1.0.1682\\1.0.1682.3677",
                "current": "releases/v1.0.1685\\1.0.1685.3700"
              }
            },
            "capabilities": [
              "tabular",
              "gateway",
              "cloud"
            ],
            "tier": "Standard",
            "isCustomApi": false,
            "description": "SharePoint helps organizations share and collaborate with colleagues, partners, and customers. You can connect to SharePoint Online or to an on-premises SharePoint 2016 or 2019 farm using the On-Premises Data Gateway to manage documents and list items.",
            "createdTime": "2018-07-31T14:29:25.515029Z",
            "changedTime": "2024-04-23T16:43:04.7430851Z",
            "publisher": "Microsoft"
          }
        },
        "source": "Embedded",
        "id": "/providers/Microsoft.PowerApps/apis/shared_sharepointonline",
        "displayName": "SharePoint",
        "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1685/1.0.1685.3700/sharepointonline/icon.png",
        "brandColor": "#036C70",
        "swagger": {
          "swagger": "2.0",
          "info": {
            "version": "1.0",
            "title": "SharePoint",
            "description": "SharePoint helps organizations share and collaborate with colleagues, partners, and customers. You can connect to SharePoint Online or to an on-premises SharePoint 2016 or 2019 farm using the On-Premises Data Gateway to manage documents and list items.",
            "x-ms-api-annotation": {
              "status": "Production"
            },
            "x-ms-keywords": [
              "sharepoint"
            ],
            "contact": {
              "name": "Microsoft"
            }
          },
          "host": "europe-002.azure-apim.net",
          "basePath": "/apim/sharepointonline",
          "schemes": [
            "https"
          ],
          "paths": {
            "/{connectionId}/datasets/{dataset}/codeless/_api/v2.0/sites/root/lists/{table}/items/{id}/driveItem/permissions": {
              "get": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "List permissions for a file or folder",
                "description": "List permissions for a file or folder.",
                "operationId": "ListItemPermissions",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the file or folder item.",
                    "required": true,
                    "x-ms-summary": "Item Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/PermissionsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#list-permissions-for-a-file-or-folder"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/codeless/_api/v2.0/sites/root/lists/{table}/items/{id}/driveItem/permissions/{permissionId}": {
              "delete": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "Remove permission from a file or folder",
                "description": "Remove permission from a file or folder.",
                "operationId": "DeleteItemPermission",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the file or folder item.",
                    "required": true,
                    "x-ms-summary": "Item Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "permissionId",
                    "in": "path",
                    "description": "Permission unique id.",
                    "required": true,
                    "x-ms-summary": "Permission Id",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Object"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#remove-permission-from-a-file-or-folder"
                }
              },
              "patch": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "Update permission for a file or folder",
                "description": "Update permission for a file or folder.",
                "operationId": "UpdateItemPermission",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the file or folder item.",
                    "required": true,
                    "x-ms-summary": "Item Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "permissionId",
                    "in": "path",
                    "description": "Permission unique id.",
                    "required": true,
                    "x-ms-summary": "Permission Id",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "permission",
                    "in": "body",
                    "description": "Invitation parameters.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/ItemPermissionUpdateBody"
                    },
                    "x-ms-summary": "Invitation parameters"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Permission"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#update-permission-for-a-file-or-folder"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/codeless/_api/v2.0/sites/root/lists/{table}/items/{id}/driveItem/invite": {
              "post": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "Add permission for a file or folder",
                "description": "Add permission for a file or folder.",
                "operationId": "AddItemPermission",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the file or folder item.",
                    "required": true,
                    "x-ms-summary": "Item Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "permission",
                    "in": "body",
                    "description": "Invitation parameters.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/ItemPermissionAddBody"
                    },
                    "x-ms-summary": "Invitation parameters"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/PermissionsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#add-permission-for-a-file-or-folder"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/codeless/_api/v2.0/sites/root/lists/{table}/items/{id}/driveItem/createLink": {
              "post": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "Create sharing link for a file or folder",
                "description": "Create sharing link for a file or folder.",
                "operationId": "CreateSharingLink",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the file or folder item.",
                    "required": true,
                    "x-ms-summary": "Item Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "permission",
                    "in": "body",
                    "description": "Invitation parameters.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/ItemPermissionCreateLinkBody"
                    },
                    "x-ms-summary": "Invitation parameters"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SharingLinkPermission"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#create-sharing-link-for-a-file-or-folder"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/codeless/_api/v2.1/{siteId}/{listId}/{itemId}/{fileName}/thumbnails/{thumbnailId}/{size}/content": {
              "get": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "Render item attachment thumbnail, with key-as-parameter syntax",
                "description": "Render item attachment thumbnail, with key-as-parameter syntax.",
                "operationId": "RenderItemAttachmentThumbnailByParameterSyntex",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "siteId",
                    "in": "path",
                    "description": "SharePoint site id.",
                    "required": true,
                    "x-ms-summary": "SharePoint site id",
                    "type": "string"
                  },
                  {
                    "name": "listId",
                    "in": "path",
                    "description": "SharePoint list id.",
                    "required": true,
                    "x-ms-summary": "SharePoint list id",
                    "type": "string"
                  },
                  {
                    "name": "itemId",
                    "in": "path",
                    "description": "Id of the list item.",
                    "required": true,
                    "x-ms-summary": "Id of the list item",
                    "type": "string"
                  },
                  {
                    "name": "fileName",
                    "in": "path",
                    "description": "name of the file.",
                    "required": true,
                    "x-ms-summary": "name of the file",
                    "type": "string"
                  },
                  {
                    "name": "thumbnailId",
                    "in": "path",
                    "description": "Thumbnail id.",
                    "required": true,
                    "x-ms-summary": "Thumbnail id",
                    "type": "string"
                  },
                  {
                    "name": "size",
                    "in": "path",
                    "description": "Size Id.",
                    "required": true,
                    "x-ms-summary": "Size Id",
                    "type": "string"
                  },
                  {
                    "name": "prefer",
                    "in": "query",
                    "required": true,
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "format": "binary",
                      "description": "The content of the file.",
                      "type": "string",
                      "x-ms-summary": "File Content"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#render-item-attachment-thumbnail%2c-with-key-as-parameter-syntax"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/codeless/_api/v2.1/drives/{driveId}/items/{itemId}/thumbnails/{thumbnailId}/{size}/content": {
              "get": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "Render item thumbnail",
                "description": "Render item thumbnail.",
                "operationId": "RenderItemThumbnail",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "driveId",
                    "in": "path",
                    "description": "SharePoint site id.",
                    "required": true,
                    "x-ms-summary": "SharePoint site id",
                    "type": "string"
                  },
                  {
                    "name": "itemId",
                    "in": "path",
                    "description": "Id of the file item.",
                    "required": true,
                    "x-ms-summary": "Id of the file item",
                    "type": "string"
                  },
                  {
                    "name": "thumbnailId",
                    "in": "path",
                    "description": "Thumbnail id.",
                    "required": true,
                    "x-ms-summary": "Thumbnail id",
                    "type": "string"
                  },
                  {
                    "name": "size",
                    "in": "path",
                    "description": "Size Id.",
                    "required": true,
                    "x-ms-summary": "Size Id",
                    "type": "string"
                  },
                  {
                    "name": "prefer",
                    "in": "query",
                    "required": true,
                    "type": "string"
                  },
                  {
                    "name": "cb",
                    "in": "query",
                    "required": true,
                    "type": "string"
                  },
                  {
                    "name": "s",
                    "in": "query",
                    "required": true,
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "format": "binary",
                      "description": "The content of the file.",
                      "type": "string",
                      "x-ms-summary": "File Content"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#render-item-thumbnail"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/codeless/_api/v2.1/sites/{siteId}/lists/{listId}/items/{itemId}/attachments/{fileName}/thumbnails/{thumbnailId}/{size}/content": {
              "get": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "Render item attachment thumbnail",
                "description": "Render item attachment thumbnail.",
                "operationId": "RenderItemAttachmentThumbnail",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "siteId",
                    "in": "path",
                    "description": "SharePoint site id.",
                    "required": true,
                    "x-ms-summary": "SharePoint site id",
                    "type": "string"
                  },
                  {
                    "name": "listId",
                    "in": "path",
                    "description": "SharePoint list id.",
                    "required": true,
                    "x-ms-summary": "SharePoint list id",
                    "type": "string"
                  },
                  {
                    "name": "itemId",
                    "in": "path",
                    "description": "Id of the list item.",
                    "required": true,
                    "x-ms-summary": "Id of the list item",
                    "type": "string"
                  },
                  {
                    "name": "fileName",
                    "in": "path",
                    "description": "name of the file.",
                    "required": true,
                    "x-ms-summary": "name of the file",
                    "type": "string"
                  },
                  {
                    "name": "thumbnailId",
                    "in": "path",
                    "description": "Thumbnail id.",
                    "required": true,
                    "x-ms-summary": "Thumbnail id",
                    "type": "string"
                  },
                  {
                    "name": "size",
                    "in": "path",
                    "description": "Size Id.",
                    "required": true,
                    "x-ms-summary": "Size Id",
                    "type": "string"
                  },
                  {
                    "name": "prefer",
                    "in": "query",
                    "required": true,
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "format": "binary",
                      "description": "The content of the file.",
                      "type": "string",
                      "x-ms-summary": "File Content"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#render-item-attachment-thumbnail"
                }
              }
            },
            "/{connectionId}/getPermissionsRoleOptions": {
              "get": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "Get permissions role options",
                "description": "Internal operation to get role options in permission operations.",
                "operationId": "GetPermissionsRoleOptions",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Object"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-permissions-role-options"
                },
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  }
                ]
              }
            },
            "/{connectionId}/getSharingLinkTypeOptions": {
              "get": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "Get sharing link type options",
                "description": "Internal operation to get sharing link type options in permission operations.",
                "operationId": "GetSharingLinkTypeOptions",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Object"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-sharing-link-type-options"
                },
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  }
                ]
              }
            },
            "/{connectionId}/getSharingLinkScopeOptions": {
              "get": {
                "tags": [
                  "SharePointCodeless"
                ],
                "summary": "Get sharing link scope options",
                "description": "Internal operation to get sharing link scope options in permission operations.",
                "operationId": "GetSharingLinkScopeOptions",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Object"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-sharing-link-scope-options"
                },
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  }
                ]
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/views": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Get list views",
                "description": "Gets views from a SharePoint list.",
                "operationId": "GetTableViews",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/Table"
                      },
                      "x-ms-summary": "List of Tables"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-list-views"
                }
              }
            },
            "/{connectionId}/$metadata.json/datasets/{dataset}/tables/{table}/hybridtrigger/item": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "For a Selected Item",
                "description": "For a Selected Item.",
                "operationId": "GetItemHybridTriggerSchema",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPForASelectedFileResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#for-a-selected-item"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/hubsiteid/{hubSiteId}/onhubsitejoinapproval": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "When a site has requested to join a hub site",
                "description": "Triggers when a SharePoint site has requested to join a hub site.",
                "operationId": "OnHubSiteJoinApproval",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "hubSiteId",
                    "in": "path",
                    "description": "Hub site identifier.",
                    "required": true,
                    "x-ms-summary": "Hub Site Id",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/HubSiteJoinApprovalOutput"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-site-has-requested-to-join-a-hub-site"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/copyFileAsync": {
              "post": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Copy file",
                "description": "Copies a file. Works in a similar way to the \"Copy to\" command in SharePoint libraries. Returns information about the new file after copy.",
                "operationId": "CopyFileAsync",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Current Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "parameters",
                    "in": "body",
                    "description": "Parameters to this operation passed in the body.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/CopyFileParameters"
                    },
                    "x-ms-summary": "Parameters to this operation passed in the body"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#copy-file"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/moveFileAsync": {
              "post": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Move file",
                "description": "Moves a file. Works in a similar way to the \"Move to\" command in SharePoint libraries. Returns information about the new file after move.",
                "operationId": "MoveFileAsync",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Current Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "parameters",
                    "in": "body",
                    "description": "Parameters to this operation passed in the body.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/MoveFileParameters"
                    },
                    "x-ms-summary": "Parameters to this operation passed in the body"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#move-file"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/copyFolderAsync": {
              "post": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Copy folder",
                "description": "Copies a folder. Works in a similar way to the \"Copy to\" command in SharePoint libraries. Returns information about the new folder after copy.",
                "operationId": "CopyFolderAsync",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Current Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "parameters",
                    "in": "body",
                    "description": "Parameters to this operation passed in the body.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/CopyFolderParameters"
                    },
                    "x-ms-summary": "Parameters to this operation passed in the body"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#copy-folder"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/moveFolderAsync": {
              "post": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Move folder",
                "description": "Moves a folder. Works in a similar way to the \"Move to\" command in SharePoint libraries. Returns information about the new folder after move.",
                "operationId": "MoveFolderAsync",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Current Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "parameters",
                    "in": "body",
                    "description": "Parameters to this operation passed in the body.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/MoveFolderParameters"
                    },
                    "x-ms-summary": "Parameters to this operation passed in the body"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#move-folder"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/getMoveCopyProgress": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Get move-copy job progress",
                "description": "Internal operation to get move-copy job progress.",
                "operationId": "GetMoveCopyJobProgress",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "job",
                    "in": "query",
                    "description": "Job parameters.",
                    "required": true,
                    "x-ms-summary": "Job parameters",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Object"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-move-copy-job-progress"
                }
              }
            },
            "/{connectionId}/getMoveCopyNameConflictBehaviorOptions": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Get move-copy name conflict behavior options",
                "description": "Internal operation to get values for name conflict behavior dropdown in move-copy operations.",
                "operationId": "GetMoveCopyNameConflictBehaviorOptions",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "isMove",
                    "in": "query",
                    "description": "is a move operation.",
                    "required": true,
                    "x-ms-summary": "is a move operation",
                    "type": "boolean"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Object"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-move-copy-name-conflict-behavior-options"
                }
              }
            },
            "/{connectionId}/getViewScopeOptions": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Get SPViewScope options to use for folder querying behavior",
                "description": "Default - Only query current folder (non-recurisve). Return both Files and Folders.\r\\\n            RecursiveAll - Recursively query the folder. Return both Files and Folders.",
                "operationId": "GetViewScopeOptions",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Object"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-spviewscope-options-to-use-for-folder-querying-behavior"
                },
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  }
                ]
              }
            },
            "/{connectionId}/datasets/{dataset}/alltables": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Get all lists and libraries",
                "description": "Get all lists and libraries.",
                "operationId": "GetAllTables",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/TablesList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-all-lists-and-libraries"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/patchfileitemwithpredictedvalues": {
              "post": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Update file properties using AI Builder model results",
                "description": "Updates the values stored in library columns for a file analyzed by the model specified by the ModelId.",
                "operationId": "PatchFileItemWithPredictedValues",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "Library Name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be updated.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "parameters",
                    "in": "body",
                    "description": "Parameters to this operation passed in the body.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/PatchFileItemWithPredictedValuesParameters"
                    },
                    "x-ms-summary": "Parameters to this operation passed in the body"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Item"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#update-file-properties-using-ai-builder-model-results"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/templates": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Get document library templates",
                "description": "Gets templates from a SharePoint document library.",
                "operationId": "GetContentAssemblyTemplates",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint document library name.",
                    "required": true,
                    "x-ms-summary": "SharePoint document library name",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/Table"
                      },
                      "x-ms-summary": "List of Tables"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-document-library-templates"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/templates/{template}/placeholders": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Get placeholders from template",
                "description": "Gets placeholders from template in a SharePoint document library.",
                "operationId": "GetContentAssemblyPlaceholders",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint document library name.",
                    "required": true,
                    "x-ms-summary": "SharePoint document library name",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "template",
                    "in": "path",
                    "description": "Document template.",
                    "required": true,
                    "x-ms-summary": "Document template",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/TableMetadata"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-placeholders-from-template"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/templates/{template}/createnewdocument": {
              "post": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Generate document using Microsoft Syntex (preview)",
                "description": "Use this action to create documents based on modern templates from Microsoft Syntex. This preview requires a Syntex license. Pricing is subject to change. For more info see: https://docs.microsoft.com/en-us/microsoft-365/contentunderstanding/content-assembly.",
                "operationId": "CreateContentAssemblyDocument",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint document library name.",
                    "required": true,
                    "x-ms-summary": "Document Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "template",
                    "in": "path",
                    "description": "Document template.",
                    "required": true,
                    "x-ms-summary": "Document Template",
                    "x-ms-dynamic-values": {
                      "operationId": "GetContentAssemblyTemplates",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "item",
                    "in": "body",
                    "description": "Document placeholder values.",
                    "required": true,
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Item"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetContentAssemblyPlaceholders",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          },
                          "template": {
                            "parameter": "template"
                          }
                        },
                        "value-path": "Schema/Items"
                      }
                    },
                    "x-ms-summary": "Placeholders"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Must start with an existing library.",
                    "required": false,
                    "x-ms-summary": "Folder Path",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "fileName",
                    "in": "query",
                    "description": "Document file name.",
                    "required": false,
                    "x-ms-summary": "File Name",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#generate-document-using-microsoft-syntex-(preview)"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/imagefields": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Get list image fields",
                "description": "Gets image fields from a SharePoint list.",
                "operationId": "GetListImageFields",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/Table"
                      },
                      "x-ms-summary": "List of fields"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-list-image-fields"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{itemId}/imagefields/{fieldName}": {
              "get": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Get item image field content",
                "description": "Returns file contents of the image in list item field.",
                "operationId": "GetItemImageFieldValue",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "itemId",
                    "in": "path",
                    "description": "Id of the list item.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "fieldName",
                    "in": "path",
                    "description": "Image field.",
                    "required": true,
                    "x-ms-summary": "Image Field",
                    "x-ms-dynamic-values": {
                      "operationId": "GetListImageFields",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "format": "binary",
                      "description": "The contents of the image file.",
                      "type": "string",
                      "x-ms-summary": "Image Content"
                    },
                    "headers": {
                      "X-MS-SPConnector-ResponseHasContent": {
                        "description": "Image is present in the field.",
                        "type": "boolean",
                        "x-ms-summary": "Image is Available"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-item-image-field-content"
                }
              },
              "post": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Update item image field",
                "description": "Sets or updates the image in list item field.",
                "operationId": "UpdateItemImageFieldValue",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "itemId",
                    "in": "path",
                    "description": "Id of the list item.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "fieldName",
                    "in": "path",
                    "description": "Image field.",
                    "required": true,
                    "x-ms-summary": "Image Field",
                    "x-ms-dynamic-values": {
                      "operationId": "GetListImageFields",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "body",
                    "in": "body",
                    "description": "Content of the file.",
                    "required": true,
                    "schema": {
                      "format": "binary",
                      "type": "string"
                    },
                    "x-ms-summary": "File Content"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#update-item-image-field"
                }
              },
              "delete": {
                "tags": [
                  "SharePointCustomActions"
                ],
                "summary": "Clear item image field",
                "description": "Clears the image in list item field.",
                "operationId": "ClearItemImageFieldValue",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "itemId",
                    "in": "path",
                    "description": "Id of the list item.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "fieldName",
                    "in": "path",
                    "description": "Image field.",
                    "required": true,
                    "x-ms-summary": "Image Field",
                    "x-ms-dynamic-values": {
                      "operationId": "GetListImageFields",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#clear-item-image-field"
                }
              }
            },
            "/{connectionId}/$metadata.json/datasets": {
              "get": {
                "tags": [
                  "SharePointDataSetsMetadata"
                ],
                "operationId": "GetDataSetsMetadata",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/DataSetsMetadata"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  }
                ]
              }
            },
            "/{connectionId}/datasets/{dataset}/files/{id}": {
              "get": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Get file metadata",
                "description": "Gets information about the file such as size, etag, created date, etc. Uses a file identifier to pick the file. Use \"Get file properties\" action to get to the values stored in the columns in the library.",
                "operationId": "GetFileMetadata",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Select a file.",
                    "required": true,
                    "x-ms-summary": "File Identifier",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": false,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": false,
                        "canSelectLeafNodes": true
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-file-metadata"
                }
              },
              "put": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Update file",
                "description": "Updates the contents of the file specified by the file identifier.",
                "operationId": "UpdateFile",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Select a file.",
                    "required": true,
                    "x-ms-summary": "File Identifier",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": false,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": false,
                        "canSelectLeafNodes": true
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "body",
                    "in": "body",
                    "description": "Content of the file.",
                    "required": true,
                    "schema": {
                      "format": "binary",
                      "type": "string"
                    },
                    "x-ms-summary": "File Content"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/BlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#update-file"
                }
              },
              "delete": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Delete file",
                "description": "Deletes the file specified by the file identifier.",
                "operationId": "DeleteFile",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Select a file.",
                    "required": true,
                    "x-ms-summary": "File Identifier",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": false,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": false,
                        "canSelectLeafNodes": true
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#delete-file"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/GetFileByPath": {
              "get": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Get file metadata using path",
                "description": "Gets information about the file such as size, etag, created date, etc. Uses a file path to pick the file. Use \"Get file properties\" action to get to the values stored in the columns in the library.",
                "operationId": "GetFileMetadataByPath",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "path",
                    "in": "query",
                    "description": "Select a file.",
                    "required": true,
                    "x-ms-summary": "File Path",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": false,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": false,
                        "canSelectLeafNodes": true
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "queryParametersSingleEncoded",
                    "in": "query",
                    "required": false,
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": true
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-file-metadata-using-path"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/GetFolder": {
              "get": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Get folder metadata",
                "description": "Gets information about the folder. Uses a file identifier to pick the folder.",
                "operationId": "GetFolderMetadata",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "query",
                    "description": "Select a folder.",
                    "required": true,
                    "x-ms-summary": "File Identifier",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-folder-metadata"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/GetFolderByPath": {
              "get": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Get folder metadata using path",
                "description": "Gets information about the folder. Uses a folder path to pick the folder.",
                "operationId": "GetFolderMetadataByPath",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "path",
                    "in": "query",
                    "description": "Select a folder.",
                    "required": true,
                    "x-ms-summary": "Folder Path",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "queryParametersSingleEncoded",
                    "in": "query",
                    "required": false,
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": true
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-folder-metadata-using-path"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/GetFileContentByPath": {
              "get": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Get file content using path",
                "description": "Gets file contents using the file path.",
                "operationId": "GetFileContentByPath",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "path",
                    "in": "query",
                    "description": "Select a file.",
                    "required": true,
                    "x-ms-summary": "File Path",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": false,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": false,
                        "canSelectLeafNodes": true
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "inferContentType",
                    "in": "query",
                    "description": "Infer content-type based on extension.",
                    "required": false,
                    "x-ms-summary": "Infer Content Type",
                    "x-ms-visibility": "advanced",
                    "type": "boolean",
                    "default": true
                  },
                  {
                    "name": "queryParametersSingleEncoded",
                    "in": "query",
                    "required": false,
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": true
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "format": "binary",
                      "description": "The content of the file.",
                      "type": "string",
                      "x-ms-summary": "File Content"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-file-content-using-path"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/files/{id}/content": {
              "get": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Get file content",
                "description": "Gets file contents using the file identifier. The contents can be copied somewhere else, or be used as an attachment.",
                "operationId": "GetFileContent",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Select a file.",
                    "required": true,
                    "x-ms-summary": "File Identifier",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": false,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": false,
                        "canSelectLeafNodes": true
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "inferContentType",
                    "in": "query",
                    "description": "Infer content-type based on extension.",
                    "required": false,
                    "x-ms-summary": "Infer Content Type",
                    "x-ms-visibility": "advanced",
                    "type": "boolean",
                    "default": true
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "format": "binary",
                      "description": "The content of the file.",
                      "type": "string",
                      "x-ms-summary": "File Content"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-file-content"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/files": {
              "post": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Create file",
                "description": "Uploads a file to a SharePoint site. Make sure to pick an existing library.",
                "operationId": "CreateFile",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Must start with an existing library. Add folders if needed.",
                    "required": true,
                    "x-ms-summary": "Folder Path",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Name of the file.",
                    "required": true,
                    "x-ms-summary": "File Name",
                    "type": "string"
                  },
                  {
                    "name": "body",
                    "in": "body",
                    "description": "Content of the file.",
                    "required": true,
                    "schema": {
                      "format": "binary",
                      "type": "string"
                    },
                    "x-ms-summary": "File Content"
                  },
                  {
                    "name": "queryParametersSingleEncoded",
                    "in": "query",
                    "required": false,
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": true
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-capabilities": {
                  "chunkTransfer": true
                },
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#create-file"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/files/{id}/continueupload": {
              "patch": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Continue chunked file upload",
                "description": "Continue chunked file upload.",
                "operationId": "ContinueUpload",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "File identifier.",
                    "required": true,
                    "x-ms-summary": "File identifier",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "uploadId",
                    "in": "query",
                    "description": "Id of upload session from SharePoint.",
                    "required": true,
                    "x-ms-summary": "Id of upload session from SharePoint",
                    "type": "string"
                  },
                  {
                    "name": "body",
                    "in": "body",
                    "description": "Content of the file.",
                    "required": true,
                    "schema": {
                      "format": "binary",
                      "type": "string"
                    },
                    "x-ms-summary": "File Content"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPBlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#continue-chunked-file-upload"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/copyFile": {
              "post": {
                "tags": [
                  "SharePointFileData"
                ],
                "summary": "Copy file (deprecated)",
                "description": "Copies a file to a SharePoint site.",
                "operationId": "CopyFile",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "source",
                    "in": "query",
                    "description": "Path to the source file.",
                    "required": true,
                    "x-ms-summary": "Source File Path",
                    "type": "string"
                  },
                  {
                    "name": "destination",
                    "in": "query",
                    "description": "Path to the destination file.",
                    "required": true,
                    "x-ms-summary": "Destination File Path",
                    "type": "string"
                  },
                  {
                    "name": "overwrite",
                    "in": "query",
                    "description": "Whether or not to overwrite the destination file if it exists.",
                    "required": false,
                    "x-ms-summary": "Overwrite Flag",
                    "type": "boolean",
                    "default": false
                  },
                  {
                    "name": "queryParametersSingleEncoded",
                    "in": "query",
                    "required": false,
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": true
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/BlobMetadata"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#copy-file-(deprecated)"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/files/{id}/rename": {
              "post": {
                "tags": [
                  "SharePointFileData"
                ],
                "operationId": "RenameFile",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": false,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": false,
                        "canSelectLeafNodes": true
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "newName",
                    "in": "query",
                    "required": true,
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/BlobMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal"
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/hybridtrigger/foraselectedfile": {
              "post": {
                "tags": [
                  "SharePointFileDataTrigger"
                ],
                "summary": "For a Selected File Hybrid Trigger. The actual API is not called at runtime",
                "description": "For a Selected File Hybrid Trigger. The actual API is not called at runtime.",
                "operationId": "ForASelectedFileHybridTrigger",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPForASelectedFileResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#for-a-selected-file-hybrid-trigger.-the-actual-api-is-not-called-at-runtime"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/triggers/onnewfile": {
              "get": {
                "tags": [
                  "SharePointFileDataTrigger"
                ],
                "summary": "When a file is created in a folder (deprecated)",
                "description": "Triggers when a file is created in a SharePoint folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.",
                "operationId": "OnNewFile",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "folderId",
                    "in": "query",
                    "description": "Select a folder.",
                    "required": true,
                    "x-ms-summary": "Folder Id",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "inferContentType",
                    "in": "query",
                    "description": "Infer content-type based on extension.",
                    "required": false,
                    "x-ms-summary": "Infer Content Type",
                    "x-ms-visibility": "advanced",
                    "type": "boolean",
                    "default": true
                  },
                  {
                    "name": "queryParametersSingleEncoded",
                    "in": "query",
                    "required": false,
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": true
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "format": "binary",
                      "description": "The content of the file.",
                      "type": "string",
                      "x-ms-summary": "File Content"
                    },
                    "headers": {
                      "x-ms-file-id": {
                        "description": "File identifier",
                        "type": "string"
                      },
                      "x-ms-file-name": {
                        "description": "File name",
                        "type": "string",
                        "x-ms-visibility": "internal"
                      },
                      "x-ms-file-path": {
                        "description": "File path",
                        "type": "string",
                        "x-ms-visibility": "internal"
                      },
                      "x-ms-file-name-encoded": {
                        "description": "File name",
                        "type": "string",
                        "format": "byte"
                      },
                      "x-ms-file-path-encoded": {
                        "description": "File path",
                        "type": "string",
                        "format": "byte"
                      },
                      "x-ms-file-etag": {
                        "description": "File entity tag",
                        "type": "string"
                      },
                      "Content-Type": {
                        "description": "File content type",
                        "type": "string"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-trigger": "single",
                "x-ms-trigger-hint": "To see it work now, add a file to the SharePoint folder you selected.",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-file-is-created-in-a-folder-(deprecated)"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/triggers/onupdatedfile": {
              "get": {
                "tags": [
                  "SharePointFileDataTrigger"
                ],
                "summary": "When a file is created or modified in a folder (deprecated)",
                "description": "Triggers when a file is created, and also each time it is modified in a SharePoint folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.",
                "operationId": "OnUpdatedFile",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "folderId",
                    "in": "query",
                    "description": "Select a folder.",
                    "required": true,
                    "x-ms-summary": "Folder Id",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "includeFileContent",
                    "in": "query",
                    "description": "If set to true, file content will also be retrieved along with the trigger response.",
                    "required": false,
                    "x-ms-summary": "Include file content",
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": true
                  },
                  {
                    "name": "inferContentType",
                    "in": "query",
                    "description": "Infer content-type based on extension.",
                    "required": false,
                    "x-ms-summary": "Infer Content Type",
                    "x-ms-visibility": "advanced",
                    "type": "boolean",
                    "default": true
                  },
                  {
                    "name": "queryParametersSingleEncoded",
                    "in": "query",
                    "required": false,
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": true
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "format": "binary",
                      "description": "The content of the file.",
                      "type": "string",
                      "x-ms-summary": "File Content"
                    },
                    "headers": {
                      "x-ms-file-id": {
                        "description": "File identifier",
                        "type": "string"
                      },
                      "x-ms-file-name": {
                        "description": "File name",
                        "type": "string",
                        "x-ms-visibility": "internal"
                      },
                      "x-ms-file-path": {
                        "description": "File path",
                        "type": "string",
                        "x-ms-visibility": "internal"
                      },
                      "x-ms-file-name-encoded": {
                        "description": "File name",
                        "type": "string",
                        "format": "byte"
                      },
                      "x-ms-file-path-encoded": {
                        "description": "File path",
                        "type": "string",
                        "format": "byte"
                      },
                      "x-ms-file-etag": {
                        "description": "File entity tag",
                        "type": "string"
                      },
                      "Content-Type": {
                        "description": "File content type",
                        "type": "string"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-trigger": "single",
                "x-ms-trigger-hint": "To see it work now, modify a file in the SharePoint folder you selected.",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-file-is-created-or-modified-in-a-folder-(deprecated)"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/triggers/batch/onupdatedfile": {
              "get": {
                "tags": [
                  "SharePointFileDataTrigger"
                ],
                "operationId": "OnUpdatedFiles",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "folderId",
                    "in": "query",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "maxFileCount",
                    "in": "query",
                    "required": false,
                    "x-ms-summary": "Number of files to return from the trigger",
                    "x-ms-visibility": "advanced",
                    "type": "integer",
                    "format": "int32",
                    "default": 10
                  },
                  {
                    "name": "checkBothCreatedAndModifiedDateTime",
                    "in": "query",
                    "description": "If the flag is set to true, the trigger will check the file's created date and time and the file's last modified date and time. If the flag is set to false, the trigger will only check the file's last modified date and time.",
                    "required": false,
                    "x-ms-summary": "Check Created and Modified Time",
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": false
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/BlobMetadata"
                      },
                      "x-ms-summary": "List of Files"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch"
              }
            },
            "/{connectionId}/datasets/{dataset}/triggers/batch/onnewfile": {
              "get": {
                "tags": [
                  "SharePointFileDataTrigger"
                ],
                "operationId": "OnNewFiles",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "folderId",
                    "in": "query",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "maxFileCount",
                    "in": "query",
                    "required": false,
                    "x-ms-summary": "Number of files to return from the trigger",
                    "x-ms-visibility": "advanced",
                    "type": "integer",
                    "format": "int32",
                    "default": 10
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/BlobMetadata"
                      },
                      "x-ms-summary": "List of Files"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch"
              }
            },
            "/{connectionId}/datasets/{dataset}/folders/{id}": {
              "get": {
                "tags": [
                  "SharePointFolderData"
                ],
                "summary": "List folder",
                "description": "Returns files contained in a SharePoint folder.",
                "operationId": "ListFolder",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of the folder.",
                    "required": true,
                    "x-ms-summary": "File Identifier",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "Operation is successful",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/BlobMetadata"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-api-annotation": {
                  "status": "Production",
                  "family": "ListFolder",
                  "revision": 1
                },
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#list-folder"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/folders": {
              "get": {
                "tags": [
                  "SharePointFolderData"
                ],
                "summary": "List root folder",
                "description": "Returns files in the root SharePoint folder.",
                "operationId": "ListRootFolder",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "Operation is successful",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/BlobMetadata"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "x-ms-api-annotation": {
                  "status": "Production",
                  "family": "ListRootFolder",
                  "revision": 1
                },
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#list-root-folder"
                }
              },
              "post": {
                "tags": [
                  "SharePointFolderData"
                ],
                "operationId": "CreateFolder",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "name",
                    "in": "query",
                    "required": true,
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/BlobMetadata"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal"
              }
            },
            "/{connectionId}/datasets/{dataset}/rootfoldersV2": {
              "get": {
                "tags": [
                  "SharePointFolderData"
                ],
                "operationId": "ListAllRootFoldersV2",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "nextPageMarker",
                    "in": "query",
                    "required": false,
                    "x-ms-summary": "Paging Marker",
                    "x-ms-visibility": "internal",
                    "type": "string",
                    "default": ""
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/BlobMetadataPage"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-pageable": {
                  "nextLinkName": "nextLink"
                },
                "x-ms-api-annotation": {
                  "status": "Preview",
                  "family": "ListAllRootFolders",
                  "revision": 2
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/rootfolders": {
              "get": {
                "tags": [
                  "SharePointFolderData"
                ],
                "operationId": "ListAllRootFolders",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/BlobMetadata"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-api-annotation": {
                  "status": "Production",
                  "family": "ListAllRootFolders",
                  "revision": 1
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/extractFolderV2": {
              "post": {
                "tags": [
                  "SharePointFolderData"
                ],
                "summary": "Extract folder",
                "description": "Extracts an archive file into a SharePoint folder (example: .zip).",
                "operationId": "ExtractFolderV2",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "source",
                    "in": "query",
                    "description": "Path to the source file.",
                    "required": true,
                    "x-ms-summary": "Source File Path",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": false,
                        "fileFilter": [
                          "application/zip",
                          "application/x-zip-compressed"
                        ],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": false,
                        "canSelectLeafNodes": true
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "selectableFilter": "(MediaType eq 'application/zip' or MediaType eq 'application/x-zip-compressed')",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "selectableFilter": "(MediaType eq 'application/zip' or MediaType eq 'application/x-zip-compressed')",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "destination",
                    "in": "query",
                    "description": "Path to the destination folder.",
                    "required": true,
                    "x-ms-summary": "Destination Folder Path",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "overwrite",
                    "in": "query",
                    "description": "Whether or not to overwrite the destination file if it exists.",
                    "required": false,
                    "x-ms-summary": "Overwrite Flag",
                    "type": "boolean",
                    "default": false
                  },
                  {
                    "name": "queryParametersSingleEncoded",
                    "in": "query",
                    "required": false,
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": true
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/BlobMetadata"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#extract-folder"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/foldersV2/{id}": {
              "get": {
                "tags": [
                  "SharePointFolderData"
                ],
                "operationId": "ListFolderV2",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Id"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Id",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "nextPageMarker",
                    "in": "query",
                    "required": false,
                    "x-ms-summary": "Paging Marker",
                    "x-ms-visibility": "internal",
                    "type": "string",
                    "default": ""
                  },
                  {
                    "name": "useFlatListing",
                    "in": "query",
                    "required": false,
                    "x-ms-summary": "Flat Listing",
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": false
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/BlobMetadataPage"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-pageable": {
                  "nextLinkName": "nextLink"
                },
                "x-ms-api-annotation": {
                  "status": "Preview",
                  "family": "ListFolder",
                  "revision": 2
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/foldersV2": {
              "get": {
                "tags": [
                  "SharePointFolderData"
                ],
                "operationId": "ListRootFolderV2",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "required": true,
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "nextPageMarker",
                    "in": "query",
                    "required": false,
                    "x-ms-summary": "Paging Marker",
                    "x-ms-visibility": "internal",
                    "type": "string",
                    "default": ""
                  },
                  {
                    "name": "useFlatListing",
                    "in": "query",
                    "required": false,
                    "x-ms-summary": "Flat Listing",
                    "x-ms-visibility": "internal",
                    "type": "boolean",
                    "default": false
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/BlobMetadataPage"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-pageable": {
                  "nextLinkName": "nextLink"
                },
                "x-ms-api-annotation": {
                  "status": "Preview",
                  "family": "ListRootFolder",
                  "revision": 2
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/entities/{id}": {
              "get": {
                "tags": [
                  "SharePointListEntity"
                ],
                "summary": "Get entity values",
                "description": "Gets possible values for a SharePoint entity.",
                "operationId": "GetEntityValues",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Entity id.",
                    "required": true,
                    "x-ms-summary": "Entity Id",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Object"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-entity-values"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/entities/{entityId}/searchforuser": {
              "get": {
                "tags": [
                  "SharePointListEntity"
                ],
                "summary": "Resolve person",
                "description": "Returns a single matching user value so it can be assigned to a column of type person. If there are no matches, or multiple matches, this action will error out.",
                "operationId": "SearchForUser",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "Pick the list or library that the column is in.",
                    "required": true,
                    "x-ms-summary": "List or Library",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForListsAndLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "entityId",
                    "in": "path",
                    "description": "Pick the column you want to assign the value to.",
                    "required": true,
                    "x-ms-summary": "Column",
                    "x-ms-dynamic-values": {
                      "operationId": "GetEntitiesForUser",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        },
                        "view": {
                          "parameter": "view"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Id",
                      "value-title": "Title"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "searchValue",
                    "in": "query",
                    "description": "Use the email address, or the full name of the user.",
                    "required": true,
                    "x-ms-summary": "Email or name",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view.",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPListExpandedUser"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#resolve-person"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/entitiesfor/user": {
              "get": {
                "tags": [
                  "SharePointListEntity"
                ],
                "summary": "Returns User fields for a list",
                "description": "Returns User fields for a list.",
                "operationId": "GetEntitiesForUser",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view.",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/SPListEntity"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#returns-user-fields-for-a-list"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/checkiffileispublished": {
              "get": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Check if the scheduled version of the item is published",
                "description": "Returns the result in the output variable IsFilePublished.",
                "operationId": "CheckIfFileIsPublished",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForApproval",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of the file.",
                    "required": true,
                    "x-ms-summary": "Item ID",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "scheduledVersion",
                    "in": "query",
                    "description": "Version of file that was scheduled for publish.",
                    "required": true,
                    "x-ms-summary": "Scheduled Version",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/PublishedResult"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": true,
                "x-ms-visibility": "advanced",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#check-if-the-scheduled-version-of-the-item-is-published-%5bdeprecated%5d"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/setapprovalstatus": {
              "post": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Set content approval status",
                "description": "Sets the content approval status for an item in a list or library that has content approval turned on. You must provide an ETag for pages and files. You can get the ETag using the Get File Metadata action. This action is only available for SharePoint Online and SharePoint 2019.",
                "operationId": "SetApprovalStatus",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForApproval",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the item you are setting the status of.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "approvalAction",
                    "in": "query",
                    "description": "Pick the approval action.",
                    "required": true,
                    "x-ms-summary": "Action",
                    "type": "string",
                    "enum": [
                      "Submit",
                      "Approve",
                      "Reject"
                    ]
                  },
                  {
                    "name": "comments",
                    "in": "query",
                    "description": "Add the comments from the approver.",
                    "required": false,
                    "x-ms-summary": "Comments",
                    "type": "string",
                    "default": ""
                  },
                  {
                    "name": "entityTag",
                    "in": "query",
                    "description": "Add an ETag (required for files and pages).",
                    "required": false,
                    "x-ms-summary": "ETag",
                    "type": "string",
                    "default": ""
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SetApprovalStatusOutput"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#set-content-approval-status"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/setsignoffstatus": {
              "post": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Set request sign-off status",
                "description": "Set the Sign-off status field in a list or library. This will work even if the file is locked.\r\\\n            However, this will not update the Modified time and will not cause flows with the \"when an item is created or modified\" or \"when a file is created or modified (properties only)\" trigger to fire.\r\\\n            If you need such a flow to fire, add an \"Update Item\" action after this action.",
                "operationId": "SetSignoffStatus",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list or library name.",
                    "required": true,
                    "x-ms-summary": "List or Library",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForListsAndLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the item you are setting the status of.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "status",
                    "in": "query",
                    "description": "Pick the sign-off status.",
                    "required": true,
                    "x-ms-summary": "Sign-off Status",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#set-request-sign-off-status"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/getdocumentsetcontenttypesinlib": {
              "get": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Get document set content types in a library",
                "description": "Get document set content types in a library.",
                "operationId": "GetDocumentSetContentTypesInLibrary",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/SPContentType"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-document-set-content-types-in-a-library"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/createnewdocumentset": {
              "post": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Create new document set",
                "description": "Creates a new document set list item.",
                "operationId": "CreateNewDocumentSet",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "parameters",
                    "in": "body",
                    "description": "Parameters to this operation passed in the body.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/CreateNewDocumentSetParameters"
                    },
                    "x-ms-summary": "Parameters to this operation passed in the body"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Item"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetTable",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          }
                        },
                        "value-path": "Schema/Items"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#create-new-document-set"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/createnewfolder": {
              "post": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Create new folder",
                "description": "Creates a new folder or folder path.",
                "operationId": "CreateNewFolder",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list or library name.",
                    "required": true,
                    "x-ms-summary": "List or Library",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForListsAndLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "parameters",
                    "in": "body",
                    "description": "Parameters to this operation passed in the body.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/CreateNewFolderParameters"
                    },
                    "x-ms-summary": "Parameters to this operation passed in the body"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view.",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Item"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetTable",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          },
                          "view": {
                            "parameter": "view"
                          }
                        },
                        "value-path": "Schema/Items"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#create-new-folder"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/checkoutfile": {
              "post": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Check out file",
                "description": "Check out a file in a document library to prevent others from editing the document, and your changes from being visible until the documented is checked in.",
                "operationId": "CheckOutFile",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the list item the file is attached to.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#check-out-file"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/discardfilecheckout": {
              "post": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Discard check out",
                "description": "If you check out a file and donÔÇÖt make changes to it, or you make changes that you donÔÇÖt want to keep, you can simply discard the checkout, rather than saving the file. If your organization tracks versions, a new version is created each time you check a file back into the library. By discarding the checkout, you can avoid making new versions when you havenÔÇÖt made any changes to the file.",
                "operationId": "DiscardFileCheckOut",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the list item the file is attached to.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#discard-check-out"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/checkinfile": {
              "post": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Check in file",
                "description": "Check in a checked out file in a document library, which makes the version of the document available to others.",
                "operationId": "CheckInFile",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name.",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the list item the file is attached to.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "parameter",
                    "in": "body",
                    "description": "Parameters to this operation passed in the body.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/FileCheckInParameters"
                    },
                    "x-ms-summary": "Parameters to this operation passed in the body"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#check-in-file"
                }
              }
            },
            "/{connectionId}/getFileCheckInTypeOptions": {
              "get": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Get file checkin type options",
                "description": "Internal operation to get values for file check in type dropdown in check in file operation.",
                "operationId": "GetFileCheckInTypeOptions",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Object"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-file-checkin-type-options"
                },
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  }
                ]
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/grantaccess": {
              "post": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Grant access to an item or a folder",
                "description": "Grant access to an item or a folder in SharePoint to specific people.",
                "operationId": "GrantAccess",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list or library name.",
                    "required": true,
                    "x-ms-summary": "List or Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForListsAndLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of the item or folder you want to grant access to.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "parameter",
                    "in": "body",
                    "description": "Parameters to this operation passed in the body.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/ItemGrantAccessBody"
                    },
                    "x-ms-summary": "Parameters to this operation passed in the body"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#grant-access-to-an-item-or-a-folder"
                }
              }
            },
            "/{connectionId}/getItemAccessRoleOptions": {
              "get": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Get item access role options",
                "description": "Internal operation to get access role options in grant access operations.",
                "operationId": "GetItemAccessRoleOptions",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Object"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-item-access-role-options"
                },
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  }
                ]
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/unshare": {
              "post": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Stop sharing an item or a file",
                "description": "Delete all links giving access to an item or a file and remove all people with direct access except for owners.",
                "operationId": "UnshareItem",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list or library name.",
                    "required": true,
                    "x-ms-summary": "List or Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForListsAndLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of the item or file you want to stop sharing.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#stop-sharing-an-item-or-a-file"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/changes": {
              "post": {
                "tags": [
                  "SharePointListItemActions"
                ],
                "summary": "Get changes for an item or a file (properties only)",
                "description": "Returns information about columns that have changed within a given time window. Note: The list must have Versioning turned on.",
                "operationId": "GetItemChanges",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list or library name.",
                    "required": true,
                    "x-ms-summary": "List or Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForListsAndLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id of the item you want to fetch changes for.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "since",
                    "in": "query",
                    "description": "Trigger Window Start token or an item version label (ex: 3.0) or an ISO 8601 date (YYYY-MM-DDThh:mmZ).",
                    "required": true,
                    "x-ms-summary": "Since",
                    "type": "string"
                  },
                  {
                    "name": "until",
                    "in": "query",
                    "description": "Trigger Window End token or an item version label (ex: 3.0) or an ISO 8601 date (YYYY-MM-DDThh:mmZ). If blank, defaults to latest version.",
                    "required": false,
                    "x-ms-summary": "Until",
                    "type": "string"
                  },
                  {
                    "name": "includeDrafts",
                    "in": "query",
                    "description": "Boolean for whether to consider changes from minor (draft) versions.",
                    "required": false,
                    "x-ms-summary": "Include Minor Versions",
                    "x-ms-visibility": "advanced",
                    "type": "boolean",
                    "default": false
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Returns only columns defined in a view.",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Object"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetItemChangesMetadata",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          }
                        },
                        "value-path": "schema"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-changes-for-an-item-or-a-file-(properties-only)"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{itemId}/attachments": {
              "get": {
                "tags": [
                  "SharePointListTableAttachments"
                ],
                "summary": "Get attachments",
                "description": "Returns the list of attachments for the specified list item. You can add a \"Get attachment content\" step and use the \"File identifier\" property returned by this action to get to the contents of the file.",
                "operationId": "GetItemAttachments",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "itemId",
                    "in": "path",
                    "description": "Id of the list item to get attachments from.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/SPListItemAttachment"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-attachments"
                }
              },
              "post": {
                "tags": [
                  "SharePointListTableAttachments"
                ],
                "summary": "Add attachment",
                "description": "Adds a new attachment to the specified list item.",
                "operationId": "CreateAttachment",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "itemId",
                    "in": "path",
                    "description": "Id of the list item to attach the file to.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "displayName",
                    "in": "query",
                    "description": "File name.",
                    "required": true,
                    "x-ms-summary": "File Name",
                    "type": "string"
                  },
                  {
                    "name": "body",
                    "in": "body",
                    "description": "Content of the file.",
                    "required": true,
                    "schema": {
                      "format": "binary",
                      "type": "string"
                    },
                    "x-ms-summary": "File Content"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/SPListItemAttachment"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#add-attachment"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{itemId}/attachments/{attachmentId}/$value": {
              "get": {
                "tags": [
                  "SharePointListTableAttachments"
                ],
                "summary": "Get attachment content",
                "description": "Returns file contents using the file identifier. The contents can be copied somewhere else, or be used as an attachment.",
                "operationId": "GetAttachmentContent",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "itemId",
                    "in": "path",
                    "description": "Id of the list item the file is attached to.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "attachmentId",
                    "in": "path",
                    "description": "File identifier for the attachment.",
                    "required": true,
                    "x-ms-summary": "File Identifier",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "format": "binary",
                      "description": "The content of the attachment.",
                      "type": "string",
                      "x-ms-summary": "Attachment Content"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-attachment-content"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{itemId}/attachments/{attachmentId}": {
              "delete": {
                "tags": [
                  "SharePointListTableAttachments"
                ],
                "summary": "Delete attachment",
                "description": "Deletes the specified attachment.",
                "operationId": "DeleteAttachment",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "itemId",
                    "in": "path",
                    "description": "Id of the list item the file is attached to.",
                    "required": true,
                    "x-ms-summary": "Id",
                    "x-ms-url-encoding": "double",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "attachmentId",
                    "in": "path",
                    "description": "File identifier for the attachment.",
                    "required": true,
                    "x-ms-summary": "File Identifier",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#delete-attachment"
                }
              }
            },
            "/{connectionId}/$metadata.json/datasets/{dataset}/tables/{table}": {
              "get": {
                "tags": [
                  "SharePointListTableMetadata"
                ],
                "summary": "Get list metadata",
                "description": "Gets metadata from a SharePoint list.",
                "operationId": "GetTable",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view.",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "contentTypeId",
                    "in": "query",
                    "description": "Contentype Id to filter columns by content type.",
                    "required": false,
                    "x-ms-summary": "Limit Columns by Content Type",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/TableMetadata"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-list-metadata"
                }
              }
            },
            "/{connectionId}/$metadata.json/datasets('{dataset}')/tables('{table}')": {
              "get": {
                "tags": [
                  "SharePointListTableMetadata"
                ],
                "summary": "Get list metadata",
                "description": "Gets metadata from a SharePoint list.",
                "operationId": "ODataStyleGetTable",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name.",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view.",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/TableMetadata"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-list-metadata"
                }
              }
            },
            "/{connectionId}/$metadata.json/datasets/{dataset}/tables/{table}/items/changes": {
              "get": {
                "tags": [
                  "SharePointListTableMetadata"
                ],
                "summary": "Get metadata about the return type of the GetItemChanges operation",
                "description": "Get metadata about the return type of the GetItemChanges operation.",
                "operationId": "GetItemChangesMetadata",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list or library name.",
                    "required": true,
                    "x-ms-summary": "List or Library Name",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForListsAndLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/GetItemChangesMetadataResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-metadata-about-the-return-type-of-the-getitemchanges-operation"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/httprequest": {
              "post": {
                "tags": [
                  "SharePointSite"
                ],
                "summary": "Send an HTTP request to SharePoint",
                "description": "Construct a SharePoint REST API to invoke. Note ÔÇô This action may execute any SharePoint REST API you have access to. Please proceed with caution.",
                "operationId": "HttpRequest",
                "consumes": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml",
                  "application/x-www-form-urlencoded"
                ],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "parameters",
                    "in": "body",
                    "description": "Parameters to this operation passed in the body.",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/SharePointHttpRequestBodyParameters"
                    },
                    "x-ms-summary": "Parameters to this operation passed in the body"
                  }
                ],
                "responses": {
                  "default": {
                    "description": "Response",
                    "schema": {}
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#send-an-http-request-to-sharepoint"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/joinhubsite": {
              "post": {
                "tags": [
                  "SharePointSite"
                ],
                "summary": "Join hub site",
                "description": "Join the requested site to the hub site. An Approval Token is required to complete the join successfully if that hub requires approval. If applicable, you should specify the same Approval Correlation Id as used in the \"Set hub site join status to pending\" action.",
                "operationId": "JoinHubSite",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Requesting Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "hubSiteId",
                    "in": "query",
                    "description": "Id of the hub site.",
                    "required": true,
                    "x-ms-summary": "Hub Site Id",
                    "type": "string"
                  },
                  {
                    "name": "approvalToken",
                    "in": "query",
                    "description": "Approval token for this request.",
                    "required": false,
                    "x-ms-summary": "Approval Token",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  },
                  {
                    "name": "approvalCorrelationId",
                    "in": "query",
                    "description": "Approval correlation identifier for this request.",
                    "required": false,
                    "x-ms-summary": "Approval Correlation Id",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#join-hub-site"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/notifyhubsitejoinapprovalstarted": {
              "post": {
                "tags": [
                  "SharePointSite"
                ],
                "summary": "Set hub site join status to pending",
                "description": "Set the requested site's hub join request status to pending. The Approval Correlation Id is an optional parameter that helps SharePoint identify a particular hub join request. The requesting site can only have one pending request at a given time.",
                "operationId": "NotifyHubSiteJoinApprovalStarted",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Requesting Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "approvalCorrelationId",
                    "in": "query",
                    "description": "Approval correlation identifier for this request.",
                    "required": false,
                    "x-ms-summary": "Approval Correlation Id",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#set-hub-site-join-status-to-pending"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/cancelhubsitejoinapproval": {
              "post": {
                "tags": [
                  "SharePointSite"
                ],
                "summary": "Cancel hub site join request",
                "description": "Cancel hub join request. If applicable, you should specify the same Approval Correlation Id as used in the \"Set hub site join status to pending\" action.",
                "operationId": "CancelHubSiteJoinApproval",
                "consumes": [],
                "produces": [],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Requesting Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "approvalCorrelationId",
                    "in": "query",
                    "description": "Approval correlation identifier for this request.",
                    "required": false,
                    "x-ms-summary": "Approval Correlation Id",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#cancel-hub-site-join-request"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/approvehubsitejoin": {
              "post": {
                "tags": [
                  "SharePointSite"
                ],
                "summary": "Approve hub site join request",
                "description": "Approve hub site join request. This will return an approval token that can be used to complete the join request using the join hub site action.",
                "operationId": "ApproveHubSiteJoin",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename.",
                    "required": true,
                    "x-ms-summary": "Hub Site Address",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "x-ms-url-encoding": "double",
                    "type": "string"
                  },
                  {
                    "name": "joiningSiteId",
                    "in": "query",
                    "description": "Id of the requesting site.",
                    "required": true,
                    "x-ms-summary": "Requesting Site Id",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ApproveHubSiteJoinResponse"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#approve-hub-site-join-request"
                }
              }
            },
            "/{connectionId}/datasets": {
              "get": {
                "tags": [
                  "SharePointListDataSet"
                ],
                "summary": "Get datasets",
                "description": "Gets the most recently used SharePoint sites.",
                "operationId": "GetDataSets",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/DataSetsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-datasets"
                },
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  }
                ]
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/onnewitems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When an item is created",
                "description": "Triggers when an item is created.",
                "operationId": "GetOnNewItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-trigger": "batch",
                "x-ms-trigger-hint": "To see it work now, add a new list item to the SharePoint folder you selected.",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-an-item-is-created"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/onnewitems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When an item is created",
                "description": "Triggers when an item is created.",
                "operationId": "ODataStyleGetOnNewItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch",
                "x-ms-trigger-hint": "To see it work now, add a new list item to the SharePoint folder you selected.",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-an-item-is-created"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/onnewfileitems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When a file is created (properties only)",
                "description": "Triggers when an item is created in a library. Returns only the properties stored in the library columns.\r\\\n            You can add a \"Get file content\" step and use the \"File identifier\" property returned by this action to get to the contents of the file.\r\\\n            When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.",
                "operationId": "GetOnNewFileItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Folder",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-file-is-created-(properties-only)"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/onnewfileitems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When a file is created (properties only)",
                "description": "Triggers when an item is created in a library. Returns only the properties stored in the library columns.\r\\\n            You can add a \"Get file content\" step and use the \"File identifier\" property returned by this action to get to the contents of the file.\r\\\n            When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.",
                "operationId": "ODataStyleGetOnNewFileItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Folder",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-file-is-created-(properties-only)"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/onupdateditems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When an item is created or modified",
                "description": "Triggers when an item is created, and also each time it is modified.",
                "operationId": "GetOnUpdatedItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-trigger": "batch",
                "x-ms-trigger-hint": "To see it work now, modify a list item in the SharePoint folder you selected.",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-an-item-is-created-or-modified"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/onupdateditems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When an item is created or modified",
                "description": "Triggers when an item is created, and also each time it is modified.",
                "operationId": "ODataStyleGetOnUpdatedItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch",
                "x-ms-trigger-hint": "To see it work now, modify a list item in the SharePoint folder you selected.",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-an-item-is-created-or-modified"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/onupdatedfileitems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When a file is created or modified (properties only)",
                "description": "Triggers when an item is created, or modified in a library. Returns only the properties stored in the library columns.\r\\\n            You can add a \"Get file content\" step and use the \"File identifier\" property returned by this action to get to the contents of the file.\r\\\n            When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.",
                "operationId": "GetOnUpdatedFileItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Folder",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-file-is-created-or-modified-(properties-only)"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/onupdatedfileitems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When a file is created or modified (properties only)",
                "description": "Triggers when an item is created, or modified in a library. Returns only the properties stored in the library columns.\r\\\n            You can add a \"Get file content\" step and use the \"File identifier\" property returned by this action to get to the contents of the file.\r\\\n            When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.",
                "operationId": "ODataStyleGetOnUpdatedFileItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Folder",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-file-is-created-or-modified-(properties-only)"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/onchangeditems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When an item or a file is modified",
                "description": "Triggers when an item is modified (but not when it is created).",
                "operationId": "GetOnChangedItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List or Library Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForListsAndLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Folder",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-trigger": "batch",
                "x-ms-trigger-hint": "To see it work now, modify a list item in the SharePoint folder you selected.",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-an-item-or-a-file-is-modified"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/onchangeditems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When an item or a file is modified",
                "description": "Triggers when an item is modified (but not when it is created).",
                "operationId": "ODataStyleGetOnChangedItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List or Library Name",
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Folder",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch",
                "x-ms-trigger-hint": "To see it work now, modify a list item in the SharePoint folder you selected.",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-an-item-or-a-file-is-modified"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/ondeleteditems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When an item is deleted",
                "description": "Triggers when an item is deleted in a list. This can only be used by site collection admins of the site where the list is located.",
                "operationId": "GetOnDeletedItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/DeletedItemList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-an-item-is-deleted"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/ondeleteditems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When an item is deleted",
                "description": "Triggers when an item is deleted in a list. This can only be used by site collection admins of the site where the list is located.",
                "operationId": "ODataStyleGetOnDeletedItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/DeletedItemList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-an-item-is-deleted"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/ondeletedfileitems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When a file is deleted",
                "description": "Triggers when a file is deleted in a library. You can optionally specify a folder to watch as well. When a folder is deleted, the trigger will fire only once for the deleted folder. This can only be used by site collection admins of the site where the list is located.",
                "operationId": "GetOnDeletedFileItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Folder",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/DeletedItemList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-file-is-deleted"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/ondeletedfileitems": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When a file is deleted",
                "description": "Triggers when a file is deleted in a library. You can optionally specify a folder to watch as well. When a folder is deleted, the trigger will fire only once for the deleted folder. This can only be used by site collection admins of the site where the list is located.",
                "operationId": "ODataStyleGetOnDeletedFileItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Folder",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/DeletedItemList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-file-is-deleted"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/onupdatedfileclassifiedtimes": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When a file is classified by a Microsoft Syntex model",
                "description": "Triggers a flow when Microsoft Syntex changes the classification date of any file in the library. The date changes when a document processing model classifies or extracts information.",
                "operationId": "GetOnUpdatedFileClassifiedTimes",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Folder",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-file-is-classified-by-a-microsoft-syntex-model"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/onupdatedfileclassifiedtimes": {
              "get": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "When a file is classified by a Microsoft Syntex model",
                "description": "Triggers a flow when Microsoft Syntex changes the classification date of any file in the library. The date changes when a document processing model classifies or extracts information.",
                "operationId": "ODataStyleGetOnUpdatedFileClassifiedTimes",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "type": "string"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Folder",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-trigger": "batch",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-a-file-is-classified-by-a-microsoft-syntex-model"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/items": {
              "get": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Get items",
                "description": "Gets items from a SharePoint list.",
                "operationId": "ODataStyleGetItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "type": "string"
                  },
                  {
                    "name": "$filter",
                    "in": "query",
                    "description": "An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123).",
                    "required": false,
                    "x-ms-summary": "Filter Query",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  },
                  {
                    "name": "$orderby",
                    "in": "query",
                    "description": "An ODATA orderBy query for specifying the order of entries.",
                    "required": false,
                    "x-ms-summary": "Order By",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  },
                  {
                    "name": "$top",
                    "in": "query",
                    "description": "Total number of entries to retrieve (default = all).",
                    "required": false,
                    "x-ms-summary": "Top Count",
                    "x-ms-visibility": "advanced",
                    "type": "integer",
                    "format": "int32"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole list",
                    "required": false,
                    "x-ms-summary": "Limit Entries to Folder",
                    "type": "string"
                  },
                  {
                    "name": "viewScopeOption",
                    "in": "query",
                    "description": "Return entries contained in sub-folders (default = true)",
                    "required": false,
                    "x-ms-summary": "Include Nested Items",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "x-ms-pageable": {
                  "nextLinkName": "@odata.nextLink"
                },
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-items"
                }
              },
              "post": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Create item",
                "description": "Creates a new item in a SharePoint list.",
                "operationId": "ODataStylePostItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "type": "string"
                  },
                  {
                    "name": "item",
                    "in": "body",
                    "description": "Item to create",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/Item"
                    },
                    "x-ms-summary": "Item"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Item"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#create-item"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items": {
              "get": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Get items",
                "description": "Gets items from a SharePoint list.",
                "operationId": "GetItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "$filter",
                    "in": "query",
                    "description": "An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123).",
                    "required": false,
                    "x-ms-summary": "Filter Query",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  },
                  {
                    "name": "$orderby",
                    "in": "query",
                    "description": "An ODATA orderBy query for specifying the order of entries.",
                    "required": false,
                    "x-ms-summary": "Order By",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  },
                  {
                    "name": "$top",
                    "in": "query",
                    "description": "Total number of entries to retrieve (default = all).",
                    "required": false,
                    "x-ms-summary": "Top Count",
                    "x-ms-visibility": "advanced",
                    "type": "integer",
                    "format": "int32"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole list",
                    "required": false,
                    "x-ms-summary": "Limit Entries to Folder",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "viewScopeOption",
                    "in": "query",
                    "description": "Return entries contained in sub-folders (default = true)",
                    "required": false,
                    "x-ms-summary": "Include Nested Items",
                    "x-ms-dynamic-values": {
                      "operationId": "GetViewScopeOptions",
                      "parameters": {},
                      "value-path": "value",
                      "value-title": "name"
                    },
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-pageable": {
                  "nextLinkName": "@odata.nextLink"
                },
                "x-ms-openai-data": {
                  "openai-enabled": true,
                  "operations": [
                    {
                      "operationId": "GetItems",
                      "parameters": [
                        {
                          "name": "dataset",
                          "type": "upsert",
                          "properties": [
                            {
                              "name": "description",
                              "value": "The Sharepoint site address/url. Example: https://contoso.sharepoint.com/sites/sitename",
                              "type": "upsert"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-items"
                }
              },
              "post": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Create item",
                "description": "Creates a new item in a SharePoint list.",
                "operationId": "PostItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "item",
                    "in": "body",
                    "description": "Item to create",
                    "required": true,
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Item"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetTable",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          },
                          "view": {
                            "parameter": "view"
                          }
                        },
                        "value-path": "Schema/Items"
                      }
                    },
                    "x-ms-summary": "Item"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Item"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetTable",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          },
                          "view": {
                            "parameter": "view"
                          }
                        },
                        "value-path": "Schema/Items"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#create-item"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/getfileitems": {
              "get": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Get files (properties only)",
                "description": "Gets the properties saved in the columns in the library for all folders and files stored in the library.\r\\\n            You can also filter down to the items that match a condition. An \"Apply to each\" section is usually used to work with the output from this action.\r\\\n            When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.",
                "operationId": "GetFileItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "$filter",
                    "in": "query",
                    "description": "An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123).",
                    "required": false,
                    "x-ms-summary": "Filter Query",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  },
                  {
                    "name": "$orderby",
                    "in": "query",
                    "description": "An ODATA orderBy query for specifying the order of entries.",
                    "required": false,
                    "x-ms-summary": "Order By",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  },
                  {
                    "name": "$top",
                    "in": "query",
                    "description": "Total number of entries to retrieve (default = all).",
                    "required": false,
                    "x-ms-summary": "Top Count",
                    "x-ms-visibility": "advanced",
                    "type": "integer",
                    "format": "int32"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Limit Entries to Folder",
                    "x-ms-dynamic-values": {
                      "capability": "file-picker",
                      "parameters": {
                        "isFolder": true,
                        "fileFilter": [],
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-path": "Path"
                    },
                    "x-ms-dynamic-tree": {
                      "settings": {
                        "canSelectParentNodes": true,
                        "canSelectLeafNodes": false
                      },
                      "open": {
                        "operationId": "ListAllRootFolders",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          }
                        }
                      },
                      "browse": {
                        "operationId": "ListFolder",
                        "itemValuePath": "Path",
                        "itemTitlePath": "DisplayName",
                        "itemIsParent": "(IsFolder eq true)",
                        "itemFullTitlePath": "Path",
                        "parameters": {
                          "dataset": {
                            "parameterReference": "dataset"
                          },
                          "id": {
                            "selectedItemValuePath": "Id"
                          }
                        }
                      }
                    },
                    "type": "string"
                  },
                  {
                    "name": "viewScopeOption",
                    "in": "query",
                    "description": "Return entries contained in sub-folders (default = true)",
                    "required": false,
                    "x-ms-summary": "Include Nested Items",
                    "x-ms-dynamic-values": {
                      "operationId": "GetViewScopeOptions",
                      "parameters": {},
                      "value-path": "value",
                      "value-title": "name"
                    },
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "x-ms-pageable": {
                  "nextLinkName": "@odata.nextLink"
                },
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-files-(properties-only)"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/getfileitems": {
              "get": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Get files (properties only)",
                "description": "Gets the properties saved in the columns in the library for all folders and files stored in the library.\r\\\n            You can also filter down to the items that match a condition. An \"Apply to each\" section is usually used to work with the output from this action.\r\\\n            When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.",
                "operationId": "ODataStyleGetFileItems",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "type": "string"
                  },
                  {
                    "name": "$filter",
                    "in": "query",
                    "description": "An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123).",
                    "required": false,
                    "x-ms-summary": "Filter Query",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  },
                  {
                    "name": "$orderby",
                    "in": "query",
                    "description": "An ODATA orderBy query for specifying the order of entries.",
                    "required": false,
                    "x-ms-summary": "Order By",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  },
                  {
                    "name": "$top",
                    "in": "query",
                    "description": "Total number of entries to retrieve (default = all).",
                    "required": false,
                    "x-ms-summary": "Top Count",
                    "x-ms-visibility": "advanced",
                    "type": "integer",
                    "format": "int32"
                  },
                  {
                    "name": "folderPath",
                    "in": "query",
                    "description": "Select a folder, or leave blank for the whole library",
                    "required": false,
                    "x-ms-summary": "Limit Entries to Folder",
                    "type": "string"
                  },
                  {
                    "name": "viewScopeOption",
                    "in": "query",
                    "description": "Return entries contained in sub-folders (default = true)",
                    "required": false,
                    "x-ms-summary": "Include Nested Items",
                    "type": "string"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/ItemsList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-files-(properties-only)"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}": {
              "get": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Get item",
                "description": "Gets a single item by its id from a SharePoint list.",
                "operationId": "GetItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be retrieved",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Item"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetTable",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          },
                          "view": {
                            "parameter": "view"
                          }
                        },
                        "value-path": "Schema/Items"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "x-ms-openai-data": {
                  "openai-enabled": true,
                  "operations": [
                    {
                      "operationId": "GetItem",
                      "parameters": [
                        {
                          "name": "dataset",
                          "type": "upsert",
                          "properties": [
                            {
                              "name": "description",
                              "value": "The Sharepoint site address/url. Example: https://contoso.sharepoint.com/sites/sitename",
                              "type": "upsert"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-item"
                }
              },
              "delete": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Delete item",
                "description": "Deletes an item from a SharePoint list.",
                "operationId": "DeleteItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be deleted",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#delete-item"
                }
              },
              "patch": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Update item",
                "description": "Updates an item in a SharePoint list.",
                "operationId": "PatchItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTables",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be updated",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "item",
                    "in": "body",
                    "description": "Item with changed properties",
                    "required": true,
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Item"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetTable",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          },
                          "view": {
                            "parameter": "view"
                          }
                        },
                        "value-path": "Schema/Items"
                      }
                    },
                    "x-ms-summary": "Item"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Item"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetTable",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          },
                          "view": {
                            "parameter": "view"
                          }
                        },
                        "value-path": "Schema/Items"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#update-item"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/items({id})": {
              "get": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Get item",
                "description": "Gets a single item by its id from a SharePoint list.",
                "operationId": "ODataStyleGetItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be retrieved",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Item"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-item"
                }
              },
              "delete": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Delete item",
                "description": "Deletes an item from a SharePoint list.",
                "operationId": "ODataStyleDeleteItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be deleted",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK"
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#delete-item"
                }
              },
              "patch": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Update item",
                "description": "Updates an item in a SharePoint list.",
                "operationId": "ODataStylePatchItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint list name",
                    "required": true,
                    "x-ms-summary": "List Name",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be updated",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "item",
                    "in": "body",
                    "description": "Item with changed properties",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/Item"
                    },
                    "x-ms-summary": "Item"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Item"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#update-item"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/getfileitem": {
              "get": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Get file properties",
                "description": "Gets the properties saved in the columns in the library for the item specified by the item id.\r\\\n            You can add a \"Get file content\" step and use the \"File identifier\" property returned by this action to get to the contents of the file.\r\\\n            When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.",
                "operationId": "GetFileItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be retrieved",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Item"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "important",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-file-properties"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/items({id})/getfileitem": {
              "get": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Get file properties",
                "description": "Gets the properties saved in the columns in the library for the item specified by the item id.\r\\\n            You can add a \"Get file content\" step and use the \"File identifier\" property returned by this action to get to the contents of the file.\r\\\n            When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.",
                "operationId": "ODataStyleGetFileItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be retrieved",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Item"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-file-properties"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables/{table}/items/{id}/patchfileitem": {
              "patch": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Update file properties",
                "description": "Updates the properties stored in columns in a library for the item specified by the item id. Use \"Update file\" action to update file contents.\r\\\n            When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.",
                "operationId": "PatchFileItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTablesForLibraries",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        }
                      },
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be updated",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "item",
                    "in": "body",
                    "description": "Item with changed properties",
                    "required": true,
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Item"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetTable",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          },
                          "view": {
                            "parameter": "view"
                          }
                        },
                        "value-path": "Schema/Items"
                      }
                    },
                    "x-ms-summary": "Item"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "x-ms-dynamic-values": {
                      "operationId": "GetTableViews",
                      "parameters": {
                        "dataset": {
                          "parameter": "dataset"
                        },
                        "table": {
                          "parameter": "table"
                        }
                      },
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/definitions/Item"
                      },
                      "x-ms-dynamic-schema": {
                        "operationId": "GetTable",
                        "parameters": {
                          "dataset": {
                            "parameter": "dataset"
                          },
                          "table": {
                            "parameter": "table"
                          },
                          "view": {
                            "parameter": "view"
                          }
                        },
                        "value-path": "Schema/Items"
                      }
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#update-file-properties"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables({table})/items({id})/patchfileitem": {
              "patch": {
                "tags": [
                  "SharePointListTableData"
                ],
                "summary": "Update file properties",
                "description": "Updates the properties stored in columns in a library for the item specified by the item id. Use \"Update file\" action to update file contents.\r\\\n            When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.",
                "operationId": "ODataStylePatchFileItem",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  },
                  {
                    "name": "table",
                    "in": "path",
                    "description": "SharePoint library name",
                    "required": true,
                    "x-ms-summary": "Library Name",
                    "type": "string"
                  },
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Unique identifier of item to be updated",
                    "required": true,
                    "x-ms-summary": "Id",
                    "type": "integer",
                    "format": "int64"
                  },
                  {
                    "name": "item",
                    "in": "body",
                    "description": "Item with changed properties",
                    "required": true,
                    "schema": {
                      "$ref": "#/definitions/Item"
                    },
                    "x-ms-summary": "Item"
                  },
                  {
                    "name": "view",
                    "in": "query",
                    "description": "Avoid column threshold issues by only using columns defined in a view",
                    "required": false,
                    "x-ms-summary": "Limit Columns by View",
                    "x-ms-visibility": "advanced",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/Item"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#update-file-properties"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tables": {
              "get": {
                "tags": [
                  "SharePointListTable"
                ],
                "summary": "Get lists",
                "description": "Gets SharePoint lists from a site.",
                "operationId": "GetTables",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/TablesList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "advanced",
                "x-ms-openai-data": {
                  "openai-enabled": true,
                  "operations": [
                    {
                      "operationId": "GetTables",
                      "parameters": [
                        {
                          "name": "dataset",
                          "type": "upsert",
                          "properties": [
                            {
                              "name": "description",
                              "value": "The Sharepoint site address/url. Example: https://contoso.sharepoint.com/sites/sitename",
                              "type": "upsert"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-lists"
                }
              }
            },
            "/{connectionId}/datasets({dataset})/tables": {
              "get": {
                "tags": [
                  "SharePointListTable"
                ],
                "summary": "Get lists",
                "description": "Gets SharePoint lists from a site.",
                "operationId": "ODataStyleGetTables",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/TablesList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-lists"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tablesfor/libraries": {
              "get": {
                "tags": [
                  "SharePointListTable"
                ],
                "summary": "Get libraries",
                "description": "Get libraries",
                "operationId": "GetTablesForLibraries",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/TablesList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-libraries"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tablesfor/approval": {
              "get": {
                "tags": [
                  "SharePointListTable"
                ],
                "summary": "Get libraries where Content Approval is supported",
                "description": "Get libraries where Content Approval is supported",
                "operationId": "GetTablesForApproval",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/TablesList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-libraries-where-content-approval-is-supported"
                }
              }
            },
            "/{connectionId}/datasets/{dataset}/tablesfor/listsandlibraries": {
              "get": {
                "tags": [
                  "SharePointListTable"
                ],
                "summary": "Get lists and libraries",
                "description": "Get lists and libraries",
                "operationId": "GetTablesForListsAndLibraries",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "parameters": [
                  {
                    "name": "connectionId",
                    "in": "path",
                    "required": true,
                    "type": "string",
                    "x-ms-visibility": "internal"
                  },
                  {
                    "name": "dataset",
                    "in": "path",
                    "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                    "required": true,
                    "x-ms-summary": "Site Address",
                    "x-ms-url-encoding": "double",
                    "x-ms-dynamic-values": {
                      "operationId": "GetDataSets",
                      "parameters": {},
                      "value-collection": "value",
                      "value-path": "Name",
                      "value-title": "DisplayName"
                    },
                    "type": "string"
                  }
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "$ref": "#/definitions/TablesList"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "x-ms-visibility": "internal",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#get-lists-and-libraries"
                }
              }
            },
            "/ontableupdatedhook": {
              "post": {
                "tags": [
                  "SharePointListTableDataTrigger"
                ],
                "summary": "Endpoint for notifications from SharePoint WebHooks",
                "description": "Endpoint for notifications from SharePoint WebHooks",
                "operationId": "OnTableUpdatedHook",
                "consumes": [],
                "produces": [
                  "application/json",
                  "text/json",
                  "application/xml",
                  "text/xml"
                ],
                "responses": {
                  "200": {
                    "description": "OK",
                    "schema": {
                      "type": "string"
                    }
                  },
                  "default": {
                    "description": "Operation Failed."
                  }
                },
                "deprecated": false,
                "security": [],
                "x-ms-visibility": "internal",
                "x-ms-trigger": "single",
                "externalDocs": {
                  "url": "https://docs.microsoft.com/connectors/sharepointonline/#endpoint-for-notifications-from-sharepoint-webhooks"
                }
              }
            }
          },
          "definitions": {
            "PermissionsList": {
              "description": "List of Permissions",
              "type": "object",
              "properties": {
                "value": {
                  "description": "List of Permissions",
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Permission"
                  }
                }
              }
            },
            "Permission": {
              "description": "Permission object",
              "type": "object",
              "properties": {
                "id": {
                  "description": "Permission id",
                  "type": "string",
                  "x-ms-summary": "Permission Id"
                },
                "grantedTo": {
                  "$ref": "#/definitions/PermissionIdentitySet"
                },
                "grantedToIdentities": {
                  "description": "For link type permissions, the details of the users to whom permission was granted",
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/SharingLinkPermissionIdentitySet"
                  },
                  "x-ms-summary": "Sharing Link - Granted To"
                },
                "invitation": {
                  "$ref": "#/definitions/SharingInvitation"
                },
                "inheritedFrom": {
                  "$ref": "#/definitions/ItemReference"
                },
                "link": {
                  "$ref": "#/definitions/SharingLink"
                },
                "roles": {
                  "description": "The type of permission - read, write, owner, member",
                  "type": "array",
                  "items": {
                    "type": "string"
                  },
                  "x-ms-summary": "Permission Roles"
                }
              }
            },
            "PermissionIdentitySet": {
              "description": "The IdentitySet resource is a keyed collection of identity resources",
              "type": "object",
              "properties": {
                "application": {
                  "$ref": "#/definitions/ApplicationPermissionIdentity"
                },
                "group": {
                  "$ref": "#/definitions/GroupPermissionIdentity"
                },
                "user": {
                  "$ref": "#/definitions/UserPermissionIdentity"
                }
              }
            },
            "SharingLinkPermissionIdentitySet": {
              "description": "The IdentitySet resource is a keyed collection of identity resources",
              "type": "object",
              "properties": {
                "user": {
                  "$ref": "#/definitions/SharingLinkUserPermissionIdentity"
                }
              }
            },
            "SharingInvitation": {
              "description": "The SharingInvitation resource groups invitation-related data items into a single structure",
              "type": "object",
              "properties": {
                "email": {
                  "description": "The email address provided for the recipient of the sharing invitation",
                  "type": "string",
                  "x-ms-summary": "Sharing Invitation - Email"
                },
                "signInRequired": {
                  "description": "If true the recipient of the invitation needs to sign in in order to access the shared item",
                  "type": "boolean",
                  "x-ms-summary": "Sharing Invitation - Sign-in Required"
                }
              }
            },
            "ItemReference": {
              "description": "The ItemReference resource provides information necessary to address a DriveItem via the API",
              "type": "object",
              "properties": {
                "name": {
                  "description": "The name of the parent item",
                  "type": "string",
                  "x-ms-summary": "Inherited From - Item Name"
                },
                "path": {
                  "description": "Path that can be used to navigate to the parent item",
                  "type": "string",
                  "x-ms-summary": "Inherited From - Item Path"
                },
                "sharepointIds": {
                  "$ref": "#/definitions/SharePointIds"
                }
              }
            },
            "SharingLink": {
              "description": "Internal structure for sharing links",
              "type": "object",
              "properties": {
                "webUrl": {
                  "description": "A link to the item",
                  "type": "string",
                  "x-ms-summary": "Sharing Link"
                }
              }
            },
            "ApplicationPermissionIdentity": {
              "description": "The Identity resource represents an identity of an application",
              "type": "object",
              "properties": {
                "displayName": {
                  "description": "Application display name",
                  "type": "string",
                  "x-ms-summary": "Permission - Granted To - Application Display Name"
                }
              }
            },
            "GroupPermissionIdentity": {
              "description": "The Identity resource represents an identity of a group",
              "type": "object",
              "properties": {
                "displayName": {
                  "description": "Group display name",
                  "type": "string",
                  "x-ms-summary": "Permission - Granted To - Group Display Name"
                }
              }
            },
            "UserPermissionIdentity": {
              "description": "The Identity resource represents an identity of an user",
              "type": "object",
              "properties": {
                "displayName": {
                  "description": "User display name",
                  "type": "string",
                  "x-ms-summary": "Permission - Granted To - User Display Name"
                },
                "email": {
                  "description": "User email",
                  "type": "string",
                  "x-ms-summary": "Permission - Granted To - User Email"
                }
              }
            },
            "SharingLinkUserPermissionIdentity": {
              "description": "The Identity resource represents an identity of an user",
              "type": "object",
              "properties": {
                "displayName": {
                  "description": "User display name",
                  "type": "string",
                  "x-ms-summary": "User Display Name"
                },
                "email": {
                  "description": "User email",
                  "type": "string",
                  "x-ms-summary": "User Email"
                }
              }
            },
            "SharePointIds": {
              "description": "The SharePointIds resource groups the various identifiers for an item stored in a SharePoint site or OneDrive for Business into a single structure",
              "type": "object",
              "properties": {
                "listId": {
                  "description": "The unique identifier (guid) for the item's list in SharePoint",
                  "type": "string",
                  "x-ms-summary": "Inherited From - List Id"
                },
                "listItemId": {
                  "description": "An integer identifier for the item within the containing list",
                  "type": "string",
                  "x-ms-summary": "Inherited From - Item Id"
                },
                "listItemUniqueId": {
                  "description": "The unique identifier (guid) for the item within OneDrive for Business or a SharePoint site",
                  "type": "string",
                  "x-ms-summary": "Inherited From - Item Unique Id"
                },
                "siteId": {
                  "description": "The unique identifier (guid) for the item's site collection (SPSite)",
                  "type": "string",
                  "x-ms-summary": "Inherited From - Site Id"
                },
                "siteUrl": {
                  "description": "The SharePoint URL for the site that contains the item",
                  "type": "string",
                  "x-ms-summary": "Inherited From - Site Url"
                },
                "tenantId": {
                  "description": "The unique identifier (guid) for the tenancy",
                  "type": "string",
                  "x-ms-summary": "Inherited From - Tenant Id"
                },
                "webId": {
                  "description": "The unique identifier (guid) for the item's site (SPWeb)",
                  "type": "string",
                  "x-ms-summary": "Inherited From - Web Id"
                }
              }
            },
            "Object": {
              "type": "object",
              "properties": {}
            },
            "ItemPermissionUpdateBody": {
              "description": "Parameters for update permission action",
              "required": [
                "roles"
              ],
              "type": "object",
              "properties": {
                "roles": {
                  "description": "Specify updated roles for this permission.",
                  "type": "array",
                  "items": {
                    "type": "string",
                    "x-ms-dynamic-values": {
                      "operationId": "GetPermissionsRoleOptions",
                      "parameters": {},
                      "value-path": "value",
                      "value-title": "name"
                    }
                  },
                  "x-ms-summary": "Roles"
                }
              }
            },
            "ItemPermissionAddBody": {
              "description": "Parameters for add permission action",
              "required": [
                "recipients",
                "roles",
                "requireSignIn",
                "sendInvitation"
              ],
              "type": "object",
              "properties": {
                "recipients": {
                  "description": "A collection of recipients who will receive access and the sharing invitation.",
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/ItemPermissionRecipient"
                  },
                  "x-ms-summary": "Recipients"
                },
                "roles": {
                  "description": "Specify the roles that are be granted to the recipients of the sharing invitation.",
                  "type": "array",
                  "items": {
                    "type": "string",
                    "x-ms-dynamic-values": {
                      "operationId": "GetPermissionsRoleOptions",
                      "parameters": {},
                      "value-path": "value",
                      "value-title": "name"
                    }
                  },
                  "x-ms-summary": "Roles"
                },
                "requireSignIn": {
                  "description": "Specifies where the recipient of the invitation is required to sign-in to view the shared item.",
                  "type": "boolean",
                  "x-ms-summary": "Require Sign-In"
                },
                "sendInvitation": {
                  "description": "Specifies if an email or post is generated (true) or if the permission is just created (false).",
                  "type": "boolean",
                  "x-ms-summary": "Send Invitation"
                },
                "message": {
                  "description": "A plain text formatted message that is included in the sharing invitation. Maximum length 2000 characters.",
                  "type": "string",
                  "x-ms-summary": "Message"
                }
              }
            },
            "ItemPermissionRecipient": {
              "description": "This resource represents a person, group, or other recipient to share with using the invite action.",
              "required": [
                "email"
              ],
              "type": "object",
              "properties": {
                "email": {
                  "description": "The email address for the recipient, if the recipient has an associated email address.",
                  "type": "string",
                  "x-ms-summary": "Email"
                }
              }
            },
            "ItemPermissionCreateLinkBody": {
              "description": "Parameters for add permission action",
              "required": [
                "type",
                "scope"
              ],
              "type": "object",
              "properties": {
                "type": {
                  "description": "The type of sharing link to create",
                  "type": "string",
                  "x-ms-summary": "Link Type",
                  "x-ms-dynamic-values": {
                    "operationId": "GetSharingLinkTypeOptions",
                    "parameters": {},
                    "value-path": "value",
                    "value-title": "name"
                  }
                },
                "scope": {
                  "description": "Choose who your sharing link gives access to. \"Anyone\" option will only work if your administrator has enabled it.",
                  "type": "string",
                  "x-ms-summary": "Link Scope",
                  "x-ms-dynamic-values": {
                    "operationId": "GetSharingLinkScopeOptions",
                    "parameters": {},
                    "value-path": "value",
                    "value-title": "name"
                  }
                },
                "expirationDateTime": {
                  "format": "date-time",
                  "description": "The date after which the link will expire in yyyy-MM-dd format. Only applicable for anonymous links.",
                  "type": "string",
                  "x-ms-summary": "Link Expiration",
                  "x-ms-visibility": "advanced"
                }
              }
            },
            "SharingLinkPermission": {
              "description": "Internal structure for sharing links",
              "type": "object",
              "properties": {
                "link": {
                  "$ref": "#/definitions/SharingLink"
                }
              }
            },
            "Table": {
              "description": "Represents a table.",
              "type": "object",
              "properties": {
                "Name": {
                  "description": "The name of the table. The name is used at runtime.",
                  "type": "string"
                },
                "DisplayName": {
                  "description": "The display name of the table.",
                  "type": "string"
                },
                "DynamicProperties": {
                  "description": "Additional table properties provided by the connector to the clients.",
                  "type": "object",
                  "additionalProperties": {
                    "$ref": "#/definitions/Object"
                  },
                  "readOnly": true
                }
              }
            },
            "Item": {
              "description": "Table item entity",
              "type": "object",
              "properties": {
                "dynamicProperties": {
                  "type": "object",
                  "additionalProperties": {
                    "$ref": "#/definitions/Object"
                  }
                }
              },
              "additionalProperties": {
                "$ref": "#/definitions/Object"
              },
              "x-ms-dynamic-schema": {
                "operationId": "GetTable",
                "parameters": {
                  "dataset": {
                    "parameter": "dataset"
                  },
                  "table": {
                    "parameter": "table"
                  },
                  "view": {
                    "parameter": "view"
                  }
                },
                "value-path": "Schema/Items"
              }
            },
            "SPContentType": {
              "description": "Output object of the GetDocumentSetContentTypesInLibrary endpoint on the SPO Connector shim",
              "type": "object",
              "properties": {
                "Id": {
                  "description": "Content type Id",
                  "type": "string"
                },
                "Name": {
                  "description": "Content type name",
                  "type": "string"
                }
              }
            },
            "SPForASelectedFileResponse": {
              "description": "For a selected file hybrid trigger response",
              "type": "object",
              "properties": {
                "ID": {
                  "format": "int64",
                  "description": "File Identifier",
                  "type": "integer"
                },
                "itemUrl": {
                  "description": "File Url",
                  "type": "string"
                },
                "fileName": {
                  "description": "File Name",
                  "type": "string"
                }
              }
            },
            "HubSiteJoinApprovalOutput": {
              "description": "Output of the HubSiteJoinApproval trigger",
              "type": "object",
              "properties": {
                "RequestingSiteUrl": {
                  "description": "Requesting Site Url",
                  "type": "string"
                },
                "RequestingSiteId": {
                  "description": "Requesting Site Id",
                  "type": "string"
                },
                "RequestingSiteTitle": {
                  "description": "Requesting Site Title",
                  "type": "string"
                },
                "ApprovalCorrelationId": {
                  "description": "Approval Correlation Id",
                  "type": "string"
                }
              }
            },
            "CopyFileParameters": {
              "description": "Body parameters for SharePoint copy file operation",
              "required": [
                "sourceFileId",
                "destinationDataset",
                "destinationFolderPath",
                "nameConflictBehavior"
              ],
              "type": "object",
              "properties": {
                "sourceFileId": {
                  "description": "File Identifier",
                  "type": "string",
                  "x-ms-summary": "File to Copy",
                  "x-ms-dynamic-values": {
                    "capability": "file-picker",
                    "parameters": {
                      "isFolder": false,
                      "fileFilter": [],
                      "dataset": {
                        "parameter": "dataset"
                      }
                    },
                    "value-path": "Id"
                  },
                  "x-ms-dynamic-tree": {
                    "settings": {
                      "canSelectParentNodes": false,
                      "canSelectLeafNodes": true
                    },
                    "open": {
                      "operationId": "ListAllRootFolders",
                      "itemValuePath": "Id",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "dataset"
                        }
                      }
                    },
                    "browse": {
                      "operationId": "ListFolder",
                      "itemValuePath": "Id",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "dataset"
                        },
                        "id": {
                          "selectedItemValuePath": "Id"
                        }
                      }
                    }
                  }
                },
                "destinationDataset": {
                  "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                  "type": "string",
                  "x-ms-summary": "Destination Site Address",
                  "x-ms-dynamic-values": {
                    "operationId": "GetDataSets",
                    "parameters": {},
                    "value-collection": "value",
                    "value-path": "Name",
                    "value-title": "DisplayName"
                  }
                },
                "destinationFolderPath": {
                  "description": "Destination Folder",
                  "type": "string",
                  "x-ms-summary": "Destination Folder",
                  "x-ms-dynamic-values": {
                    "capability": "file-picker",
                    "parameters": {
                      "isFolder": true,
                      "fileFilter": [],
                      "dataset": {
                        "parameter": "destinationDataset"
                      }
                    },
                    "value-path": "Path"
                  },
                  "x-ms-dynamic-tree": {
                    "settings": {
                      "canSelectParentNodes": true,
                      "canSelectLeafNodes": false
                    },
                    "open": {
                      "operationId": "ListAllRootFolders",
                      "itemValuePath": "Path",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "parameters/destinationDataset"
                        }
                      }
                    },
                    "browse": {
                      "operationId": "ListFolder",
                      "itemValuePath": "Path",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "parameters/destinationDataset"
                        },
                        "id": {
                          "selectedItemValuePath": "Id"
                        }
                      }
                    }
                  }
                },
                "nameConflictBehavior": {
                  "format": "int32",
                  "description": "Pick one of the options available",
                  "type": "integer",
                  "x-ms-summary": "If another file is already there",
                  "x-ms-dynamic-values": {
                    "operationId": "GetMoveCopyNameConflictBehaviorOptions",
                    "parameters": {
                      "isMove": false
                    },
                    "value-path": "value",
                    "value-title": "name"
                  }
                }
              }
            },
            "SPBlobMetadataResponse": {
              "description": "The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized",
              "type": "object",
              "properties": {
                "ItemId": {
                  "format": "int64",
                  "description": "The value that can be used to Get or Update file properties in libraries.",
                  "type": "integer"
                },
                "Id": {
                  "description": "The unique id of the file or folder.",
                  "type": "string"
                },
                "Name": {
                  "description": "The name of the file or folder.",
                  "type": "string"
                },
                "DisplayName": {
                  "description": "The display name of the file or folder.",
                  "type": "string"
                },
                "Path": {
                  "description": "The path of the file or folder.",
                  "type": "string"
                },
                "LastModified": {
                  "format": "date-time",
                  "description": "The date and time the file or folder was last modified.",
                  "type": "string"
                },
                "Size": {
                  "format": "int64",
                  "description": "The size of the file or folder.",
                  "type": "integer"
                },
                "MediaType": {
                  "description": "The media type of the file or folder.",
                  "type": "string"
                },
                "IsFolder": {
                  "description": "A boolean value (true, false) to indicate whether or not the blob is a folder.",
                  "type": "boolean"
                },
                "ETag": {
                  "description": "The etag of the file or folder.",
                  "type": "string"
                },
                "FileLocator": {
                  "description": "The filelocator of the file or folder.",
                  "type": "string"
                }
              }
            },
            "MoveFileParameters": {
              "description": "Body parameters for SharePoint move file operation",
              "required": [
                "sourceFileId",
                "destinationDataset",
                "destinationFolderPath",
                "nameConflictBehavior"
              ],
              "type": "object",
              "properties": {
                "sourceFileId": {
                  "description": "File Identifier",
                  "type": "string",
                  "x-ms-summary": "File to Move",
                  "x-ms-dynamic-values": {
                    "capability": "file-picker",
                    "parameters": {
                      "isFolder": false,
                      "fileFilter": [],
                      "dataset": {
                        "parameter": "dataset"
                      }
                    },
                    "value-path": "Id"
                  },
                  "x-ms-dynamic-tree": {
                    "settings": {
                      "canSelectParentNodes": false,
                      "canSelectLeafNodes": true
                    },
                    "open": {
                      "operationId": "ListAllRootFolders",
                      "itemValuePath": "Id",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "dataset"
                        }
                      }
                    },
                    "browse": {
                      "operationId": "ListFolder",
                      "itemValuePath": "Id",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "dataset"
                        },
                        "id": {
                          "selectedItemValuePath": "Id"
                        }
                      }
                    }
                  }
                },
                "destinationDataset": {
                  "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                  "type": "string",
                  "x-ms-summary": "Destination Site Address",
                  "x-ms-dynamic-values": {
                    "operationId": "GetDataSets",
                    "parameters": {},
                    "value-collection": "value",
                    "value-path": "Name",
                    "value-title": "DisplayName"
                  }
                },
                "destinationFolderPath": {
                  "description": "Destination Folder",
                  "type": "string",
                  "x-ms-summary": "Destination Folder",
                  "x-ms-dynamic-values": {
                    "capability": "file-picker",
                    "parameters": {
                      "isFolder": true,
                      "fileFilter": [],
                      "dataset": {
                        "parameter": "destinationDataset"
                      }
                    },
                    "value-path": "Path"
                  },
                  "x-ms-dynamic-tree": {
                    "settings": {
                      "canSelectParentNodes": true,
                      "canSelectLeafNodes": false
                    },
                    "open": {
                      "operationId": "ListAllRootFolders",
                      "itemValuePath": "Path",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "parameters/destinationDataset"
                        }
                      }
                    },
                    "browse": {
                      "operationId": "ListFolder",
                      "itemValuePath": "Path",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "parameters/destinationDataset"
                        },
                        "id": {
                          "selectedItemValuePath": "Id"
                        }
                      }
                    }
                  }
                },
                "nameConflictBehavior": {
                  "format": "int32",
                  "description": "Pick one of the options available",
                  "type": "integer",
                  "x-ms-summary": "If another file is already there",
                  "x-ms-dynamic-values": {
                    "operationId": "GetMoveCopyNameConflictBehaviorOptions",
                    "parameters": {
                      "isMove": true
                    },
                    "value-path": "value",
                    "value-title": "name"
                  }
                }
              }
            },
            "CopyFolderParameters": {
              "description": "Body parameters for SharePoint copy folder operation",
              "required": [
                "sourceFolderId",
                "destinationDataset",
                "destinationFolderPath",
                "nameConflictBehavior"
              ],
              "type": "object",
              "properties": {
                "sourceFolderId": {
                  "description": "File Identifier",
                  "type": "string",
                  "x-ms-summary": "Folder to Copy",
                  "x-ms-dynamic-values": {
                    "capability": "file-picker",
                    "parameters": {
                      "isFolder": true,
                      "fileFilter": [],
                      "dataset": {
                        "parameter": "dataset"
                      }
                    },
                    "value-path": "Id"
                  },
                  "x-ms-dynamic-tree": {
                    "settings": {
                      "canSelectParentNodes": true,
                      "canSelectLeafNodes": false
                    },
                    "open": {
                      "operationId": "ListAllRootFolders",
                      "itemValuePath": "Id",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "dataset"
                        }
                      }
                    },
                    "browse": {
                      "operationId": "ListFolder",
                      "itemValuePath": "Id",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "dataset"
                        },
                        "id": {
                          "selectedItemValuePath": "Id"
                        }
                      }
                    }
                  }
                },
                "destinationDataset": {
                  "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                  "type": "string",
                  "x-ms-summary": "Destination Site Address",
                  "x-ms-dynamic-values": {
                    "operationId": "GetDataSets",
                    "parameters": {},
                    "value-collection": "value",
                    "value-path": "Name",
                    "value-title": "DisplayName"
                  }
                },
                "destinationFolderPath": {
                  "description": "Destination Folder",
                  "type": "string",
                  "x-ms-summary": "Destination Folder",
                  "x-ms-dynamic-values": {
                    "capability": "file-picker",
                    "parameters": {
                      "isFolder": true,
                      "fileFilter": [],
                      "dataset": {
                        "parameter": "destinationDataset"
                      }
                    },
                    "value-path": "Path"
                  },
                  "x-ms-dynamic-tree": {
                    "settings": {
                      "canSelectParentNodes": true,
                      "canSelectLeafNodes": false
                    },
                    "open": {
                      "operationId": "ListAllRootFolders",
                      "itemValuePath": "Path",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "parameters/destinationDataset"
                        }
                      }
                    },
                    "browse": {
                      "operationId": "ListFolder",
                      "itemValuePath": "Path",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "parameters/destinationDataset"
                        },
                        "id": {
                          "selectedItemValuePath": "Id"
                        }
                      }
                    }
                  }
                },
                "nameConflictBehavior": {
                  "format": "int32",
                  "description": "Pick one of the options available",
                  "type": "integer",
                  "x-ms-summary": "If another folder is already there",
                  "x-ms-dynamic-values": {
                    "operationId": "GetMoveCopyNameConflictBehaviorOptions",
                    "parameters": {
                      "isMove": false
                    },
                    "value-path": "value",
                    "value-title": "name"
                  }
                }
              }
            },
            "MoveFolderParameters": {
              "description": "Body parameters for SharePoint move folder operation",
              "required": [
                "sourceFolderId",
                "destinationDataset",
                "destinationFolderPath",
                "nameConflictBehavior"
              ],
              "type": "object",
              "properties": {
                "sourceFolderId": {
                  "description": "File Identifier",
                  "type": "string",
                  "x-ms-summary": "Folder to Move",
                  "x-ms-dynamic-values": {
                    "capability": "file-picker",
                    "parameters": {
                      "isFolder": true,
                      "fileFilter": [],
                      "dataset": {
                        "parameter": "dataset"
                      }
                    },
                    "value-path": "Id"
                  },
                  "x-ms-dynamic-tree": {
                    "settings": {
                      "canSelectParentNodes": true,
                      "canSelectLeafNodes": false
                    },
                    "open": {
                      "operationId": "ListAllRootFolders",
                      "itemValuePath": "Id",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "dataset"
                        }
                      }
                    },
                    "browse": {
                      "operationId": "ListFolder",
                      "itemValuePath": "Id",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "dataset"
                        },
                        "id": {
                          "selectedItemValuePath": "Id"
                        }
                      }
                    }
                  }
                },
                "destinationDataset": {
                  "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                  "type": "string",
                  "x-ms-summary": "Destination Site Address",
                  "x-ms-dynamic-values": {
                    "operationId": "GetDataSets",
                    "parameters": {},
                    "value-collection": "value",
                    "value-path": "Name",
                    "value-title": "DisplayName"
                  }
                },
                "destinationFolderPath": {
                  "description": "Destination Folder",
                  "type": "string",
                  "x-ms-summary": "Destination Folder",
                  "x-ms-dynamic-values": {
                    "capability": "file-picker",
                    "parameters": {
                      "isFolder": true,
                      "fileFilter": [],
                      "dataset": {
                        "parameter": "destinationDataset"
                      }
                    },
                    "value-path": "Path"
                  },
                  "x-ms-dynamic-tree": {
                    "settings": {
                      "canSelectParentNodes": true,
                      "canSelectLeafNodes": false
                    },
                    "open": {
                      "operationId": "ListAllRootFolders",
                      "itemValuePath": "Path",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "parameters/destinationDataset"
                        }
                      }
                    },
                    "browse": {
                      "operationId": "ListFolder",
                      "itemValuePath": "Path",
                      "itemTitlePath": "DisplayName",
                      "itemIsParent": "(IsFolder eq true)",
                      "itemFullTitlePath": "Path",
                      "parameters": {
                        "dataset": {
                          "parameterReference": "parameters/destinationDataset"
                        },
                        "id": {
                          "selectedItemValuePath": "Id"
                        }
                      }
                    }
                  }
                },
                "nameConflictBehavior": {
                  "format": "int32",
                  "description": "Pick one of the options available",
                  "type": "integer",
                  "x-ms-summary": "If another folder is already there",
                  "x-ms-dynamic-values": {
                    "operationId": "GetMoveCopyNameConflictBehaviorOptions",
                    "parameters": {
                      "isMove": true
                    },
                    "value-path": "value",
                    "value-title": "name"
                  }
                }
              }
            },
            "TablesList": {
              "description": "Represents a list of tables.",
              "type": "object",
              "properties": {
                "value": {
                  "description": "List of Tables",
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Table"
                  }
                }
              }
            },
            "PatchFileItemWithPredictedValuesParameters": {
              "description": "Body parameters for SharePoint PatchFileItemWithPredictedValues HttpRequest operation",
              "type": "object",
              "properties": {
                "modelId": {
                  "description": "Enter modelId of the Model which is used for prediction",
                  "type": "string",
                  "x-ms-summary": "ModelId"
                },
                "predictResult": {
                  "description": "Enter request content in JSON",
                  "type": "string",
                  "x-ms-summary": "PredictResult"
                }
              }
            },
            "DataSetsMetadata": {
              "description": "Dataset metadata",
              "type": "object",
              "properties": {
                "tabular": {
                  "$ref": "#/definitions/TabularDataSetsMetadata"
                },
                "blob": {
                  "$ref": "#/definitions/BlobDataSetsMetadata"
                }
              }
            },
            "TabularDataSetsMetadata": {
              "description": "Tabular dataset metadata",
              "type": "object",
              "properties": {
                "source": {
                  "description": "Dataset source",
                  "type": "string"
                },
                "displayName": {
                  "description": "Dataset display name",
                  "type": "string"
                },
                "urlEncoding": {
                  "description": "Dataset url encoding",
                  "type": "string"
                },
                "tableDisplayName": {
                  "description": "Table display name",
                  "type": "string"
                },
                "tablePluralName": {
                  "description": "Table plural display name",
                  "type": "string"
                }
              }
            },
            "BlobDataSetsMetadata": {
              "description": "Blob dataset metadata",
              "type": "object",
              "properties": {
                "source": {
                  "description": "Blob dataset source",
                  "type": "string"
                },
                "displayName": {
                  "description": "Blob dataset display name",
                  "type": "string"
                },
                "urlEncoding": {
                  "description": "Blob dataset url encoding",
                  "type": "string"
                }
              }
            },
            "BlobMetadataResponse": {
              "description": "Represents blob datasets metadata response",
              "type": "object",
              "properties": {
                "Id": {
                  "description": "The unique id of the file or folder.",
                  "type": "string"
                },
                "Name": {
                  "description": "The name of the file or folder.",
                  "type": "string"
                },
                "DisplayName": {
                  "description": "The display name of the file or folder.",
                  "type": "string"
                },
                "Path": {
                  "description": "The path of the file or folder.",
                  "type": "string"
                },
                "LastModified": {
                  "format": "date-time",
                  "description": "The date and time the file or folder was last modified.",
                  "type": "string"
                },
                "Size": {
                  "format": "int64",
                  "description": "The size of the file or folder.",
                  "type": "integer"
                },
                "MediaType": {
                  "description": "The media type of the file or folder.",
                  "type": "string"
                },
                "IsFolder": {
                  "description": "A boolean value (true, false) to indicate whether or not the blob is a folder.",
                  "type": "boolean"
                },
                "ETag": {
                  "description": "The etag of the file or folder.",
                  "type": "string"
                },
                "FileLocator": {
                  "description": "The filelocator of the file or folder.",
                  "type": "string"
                }
              }
            },
            "BlobMetadata": {
              "description": "Blob metadata",
              "type": "object",
              "properties": {
                "Id": {
                  "description": "The unique id of the file or folder.",
                  "type": "string"
                },
                "Name": {
                  "description": "The name of the file or folder.",
                  "type": "string"
                },
                "DisplayName": {
                  "description": "The display name of the file or folder.",
                  "type": "string"
                },
                "Path": {
                  "description": "The path of the file or folder.",
                  "type": "string"
                },
                "LastModified": {
                  "format": "date-time",
                  "description": "The date and time the file or folder was last modified.",
                  "type": "string"
                },
                "Size": {
                  "format": "int64",
                  "description": "The size of the file or folder.",
                  "type": "integer"
                },
                "MediaType": {
                  "description": "The media type of the file or folder.",
                  "type": "string"
                },
                "IsFolder": {
                  "description": "A boolean value (true, false) to indicate whether or not the blob is a folder.",
                  "type": "boolean"
                },
                "ETag": {
                  "description": "The etag of the file or folder.",
                  "type": "string"
                },
                "FileLocator": {
                  "description": "The filelocator of the file or folder.",
                  "type": "string"
                }
              }
            },
            "BlobMetadataPage": {
              "description": "Represents a page of blob metadata.",
              "type": "object",
              "properties": {
                "value": {
                  "description": "Blob metadata collection.",
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/BlobMetadata"
                  },
                  "readOnly": true
                }
              }
            },
            "SPListExpandedUser": {
              "description": "SharePoint expanded user field",
              "type": "object",
              "properties": {
                "Claims": {
                  "description": "user claims",
                  "type": "string"
                },
                "DisplayName": {
                  "description": "user title",
                  "type": "string"
                },
                "Email": {
                  "description": "user email",
                  "type": "string"
                },
                "Picture": {
                  "description": "user picture",
                  "type": "string"
                },
                "Department": {
                  "description": "user department",
                  "type": "string"
                },
                "JobTitle": {
                  "description": "user job title",
                  "type": "string"
                },
                "@odata.type": {
                  "type": "string"
                }
              }
            },
            "SPListEntity": {
              "description": "Lightweight object representing a list \"entity\" (field)",
              "type": "object",
              "properties": {
                "Id": {
                  "description": "The Id of the SPField",
                  "type": "string"
                },
                "EntityType": {
                  "description": "What type of entity (field) this is",
                  "enum": [
                    "User"
                  ],
                  "type": "string"
                }
              }
            },
            "PublishedResult": {
              "description": "Output object of the CheckIfFileIsPublished endpoint on the SPO Connector shim",
              "type": "object",
              "properties": {
                "IsFilePublished": {
                  "description": "A boolean value (true, false) to indicate whether the scheduled version of the file has been published",
                  "type": "boolean"
                }
              }
            },
            "SetApprovalStatusOutput": {
              "description": "SetApprovalStatus output",
              "type": "object",
              "properties": {
                "ETag": {
                  "description": "ETag of the item after the approval status was set",
                  "type": "string"
                },
                "ApprovalLink": {
                  "description": "A link to the item that needs approval",
                  "type": "string"
                },
                "PublishStartDate": {
                  "description": "Date time at which the item will be Published",
                  "type": "string"
                },
                "ContentApprovalStatus": {
                  "description": "The content approval status of the list item",
                  "type": "string"
                },
                "ScheduledVersion": {
                  "description": "The version of the item that has been scheduled",
                  "type": "string"
                }
              }
            },
            "CreateNewDocumentSetParameters": {
              "required": [
                "path",
                "contentTypeId"
              ],
              "type": "object",
              "properties": {
                "path": {
                  "description": "Example: folder1/folder2/dsName",
                  "type": "string",
                  "x-ms-summary": "Document Set Path"
                },
                "contentTypeId": {
                  "description": "Example: 0x0120D520",
                  "type": "string",
                  "x-ms-summary": "Content Type Id",
                  "x-ms-dynamic-values": {
                    "operationId": "GetDocumentSetContentTypesInLibrary",
                    "parameters": {
                      "dataset": {
                        "parameter": "dataset"
                      },
                      "table": {
                        "parameter": "table"
                      }
                    },
                    "value-path": "Id",
                    "value-title": "Name"
                  }
                },
                "DynamicProperties": {
                  "type": "object",
                  "additionalProperties": {
                    "$ref": "#/definitions/Object"
                  },
                  "x-ms-dynamic-properties": {
                    "operationId": "GetTable",
                    "parameters": {
                      "dataset": {
                        "parameterReference": "dataset"
                      },
                      "table": {
                        "parameterReference": "table"
                      },
                      "contentTypeId": {
                        "parameterReference": "parameters/contentTypeId"
                      }
                    },
                    "itemValuePath": "Schema/Items"
                  }
                }
              }
            },
            "CreateNewFolderParameters": {
              "description": "Body parameters for SharePoint Create New Folder operation",
              "required": [
                "path"
              ],
              "type": "object",
              "properties": {
                "path": {
                  "description": "Example: folder1/folder2/folder3",
                  "type": "string",
                  "x-ms-summary": "Folder Path"
                }
              }
            },
            "FileCheckInParameters": {
              "description": "Body parameters for SharePoint checkin file operation",
              "required": [
                "comment",
                "checkinType"
              ],
              "type": "object",
              "properties": {
                "comment": {
                  "description": "Type comments describing what has changed in this version",
                  "type": "string",
                  "x-ms-summary": "Comments"
                },
                "checkinType": {
                  "format": "int32",
                  "description": "Select the type of version you would like to check in",
                  "type": "integer",
                  "x-ms-summary": "Check in type",
                  "x-ms-dynamic-values": {
                    "operationId": "GetFileCheckInTypeOptions",
                    "value-path": "value",
                    "value-title": "name"
                  }
                }
              }
            },
            "ItemGrantAccessBody": {
              "description": "Parameters for grant access action",
              "required": [
                "recipients",
                "roleValue"
              ],
              "type": "object",
              "properties": {
                "recipients": {
                  "format": "email",
                  "description": "A collection of recipients who will receive the sharing invitation",
                  "type": "string",
                  "x-ms-summary": "Recipients",
                  "x-ms-dynamic-values": {
                    "builtInOperation": "AadGraph.GetUsers",
                    "parameters": {},
                    "value-path": "mail"
                  }
                },
                "roleValue": {
                  "description": "Specify a role that is to be granted to the recipients",
                  "type": "string",
                  "x-ms-summary": "Roles",
                  "x-ms-dynamic-values": {
                    "operationId": "GetItemAccessRoleOptions",
                    "parameters": {},
                    "value-path": "value",
                    "value-title": "name"
                  }
                },
                "emailBody": {
                  "description": "A plain text formatted message that is included in the sharing invitation",
                  "type": "string",
                  "x-ms-summary": "Message"
                },
                "sendEmail": {
                  "description": "Specify whether recipients should receive an email notification message",
                  "type": "boolean",
                  "x-ms-summary": "Notify Recipients"
                }
              }
            },
            "SPListItemAttachment": {
              "description": "SharePoint list item attachment",
              "type": "object",
              "properties": {
                "Id": {
                  "description": "File identifier",
                  "type": "string"
                },
                "AbsoluteUri": {
                  "description": "Link to attachment",
                  "type": "string"
                },
                "DisplayName": {
                  "description": "Name",
                  "type": "string"
                }
              }
            },
            "TableMetadata": {
              "description": "Table metadata",
              "type": "object",
              "properties": {
                "name": {
                  "description": "Table name",
                  "type": "string"
                },
                "title": {
                  "description": "Table title",
                  "type": "string"
                },
                "x-ms-permission": {
                  "description": "Table permission",
                  "type": "string"
                },
                "x-ms-capabilities": {
                  "$ref": "#/definitions/TableCapabilitiesMetadata"
                },
                "schema": {
                  "$ref": "#/definitions/Object"
                },
                "referencedEntities": {
                  "$ref": "#/definitions/Object"
                },
                "webUrl": {
                  "description": "Url link",
                  "type": "string"
                }
              }
            },
            "TableCapabilitiesMetadata": {
              "description": "Metadata for a table (capabilities)",
              "type": "object",
              "properties": {
                "sortRestrictions": {
                  "$ref": "#/definitions/TableSortRestrictionsMetadata"
                },
                "filterRestrictions": {
                  "$ref": "#/definitions/TableFilterRestrictionsMetadata"
                },
                "selectRestrictions": {
                  "$ref": "#/definitions/TableSelectRestrictionsMetadata"
                },
                "isOnlyServerPagable": {
                  "description": "Server paging restrictions",
                  "type": "boolean"
                },
                "filterFunctionSupport": {
                  "description": "List of supported filter capabilities",
                  "type": "array",
                  "items": {
                    "enum": [
                      "eq",
                      "ne",
                      "gt",
                      "ge",
                      "lt",
                      "le",
                      "and",
                      "or",
                      "contains",
                      "startswith",
                      "endswith",
                      "length",
                      "indexof",
                      "replace",
                      "substring",
                      "substringof",
                      "tolower",
                      "toupper",
                      "trim",
                      "concat",
                      "year",
                      "month",
                      "day",
                      "hour",
                      "minute",
                      "second",
                      "date",
                      "time",
                      "now",
                      "totaloffsetminutes",
                      "totalseconds",
                      "floor",
                      "ceiling",
                      "round",
                      "not",
                      "negate",
                      "add",
                      "sub",
                      "mul",
                      "div",
                      "mod",
                      "sum",
                      "min",
                      "max",
                      "average",
                      "countdistinct",
                      "null"
                    ],
                    "type": "string"
                  }
                },
                "serverPagingOptions": {
                  "description": "List of supported server-driven paging capabilities",
                  "type": "array",
                  "items": {
                    "enum": [
                      "top",
                      "skiptoken"
                    ],
                    "type": "string"
                  }
                }
              }
            },
            "TableSortRestrictionsMetadata": {
              "description": "Metadata for a table (sort restrictions)",
              "type": "object",
              "properties": {
                "sortable": {
                  "description": "Indicates whether this table has sortable columns",
                  "type": "boolean"
                },
                "unsortableProperties": {
                  "description": "List of unsortable properties",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "ascendingOnlyProperties": {
                  "description": "List of properties which support ascending order only",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            "TableFilterRestrictionsMetadata": {
              "description": "Metadata for a table (filter restrictions)",
              "type": "object",
              "properties": {
                "filterable": {
                  "description": "Indicates whether this table has filterable columns",
                  "type": "boolean"
                },
                "nonFilterableProperties": {
                  "description": "List of non filterable properties",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "requiredProperties": {
                  "description": "List of required properties",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            "TableSelectRestrictionsMetadata": {
              "description": "Metadata for a table (select restrictions)",
              "type": "object",
              "properties": {
                "selectable": {
                  "description": "Indicates whether this table has selectable columns",
                  "type": "boolean"
                }
              }
            },
            "GetItemChangesMetadataResponse": {
              "description": "Output object of GetItemChangesMetadata operation",
              "type": "object",
              "properties": {
                "schema": {
                  "$ref": "#/definitions/Object"
                }
              }
            },
            "SharePointHttpRequestBodyParameters": {
              "description": "Body parameters for SharePoint HttpRequest operation",
              "required": [
                "method",
                "uri"
              ],
              "type": "object",
              "properties": {
                "method": {
                  "description": "Http Method",
                  "default": "GET",
                  "enum": [
                    "GET",
                    "PUT",
                    "POST",
                    "PATCH",
                    "DELETE"
                  ],
                  "type": "string",
                  "x-ms-summary": "Method"
                },
                "uri": {
                  "description": "Example: _api/web/lists/getbytitle('Documents')",
                  "type": "string",
                  "x-ms-summary": "Uri"
                },
                "headers": {
                  "description": "Enter JSON object of request headers",
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  },
                  "x-ms-summary": "Headers",
                  "x-ms-editor": "dictionary"
                },
                "body": {
                  "description": "Enter request content in JSON",
                  "type": "string",
                  "x-ms-summary": "Body"
                }
              }
            },
            "ApproveHubSiteJoinResponse": {
              "description": "Result object of ApproveHubSiteJoin action",
              "type": "object",
              "properties": {
                "ApprovalToken": {
                  "description": "Approval Token",
                  "type": "string"
                }
              }
            },
            "DataSetsList": {
              "description": "List of datasets",
              "type": "object",
              "properties": {
                "value": {
                  "description": "List of datasets",
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/DataSet"
                  }
                }
              }
            },
            "DataSet": {
              "description": "Dataset",
              "type": "object",
              "properties": {
                "Name": {
                  "description": "Dataset name",
                  "type": "string"
                },
                "DisplayName": {
                  "description": "Dataset display name",
                  "type": "string"
                },
                "query": {
                  "description": "Pass-through Native Queries",
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/PassThroughNativeQuery"
                  },
                  "readOnly": true
                }
              }
            },
            "Procedure": {
              "description": "Procedure",
              "type": "object",
              "properties": {
                "Name": {
                  "description": "Procedure name",
                  "type": "string"
                },
                "DisplayName": {
                  "description": "Procedure display name",
                  "type": "string"
                }
              }
            },
            "PassThroughNativeQuery": {
              "description": "static schema for pass-through native query execution",
              "type": "object",
              "properties": {
                "Language": {
                  "description": "Query language",
                  "type": "string"
                }
              }
            },
            "ItemsList": {
              "description": "List of Items",
              "type": "object",
              "properties": {
                "value": {
                  "description": "List of Items",
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Item"
                  }
                }
              }
            },
            "DeletedItemList": {
              "description": "List of Deleted items",
              "type": "object",
              "properties": {
                "value": {
                  "description": "List of Deleted Items",
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/DeletedItem"
                  }
                }
              }
            },
            "DeletedItem": {
              "description": "An item deleted from a SharePoint list or library",
              "type": "object",
              "properties": {
                "ID": {
                  "format": "int64",
                  "description": "List item id",
                  "type": "integer"
                },
                "Name": {
                  "description": "File name of the item in document libraries, display name of the item in lists",
                  "type": "string"
                },
                "FileNameWithExtension": {
                  "description": "File name with extension of the item in document libraries, same as Name of the item in lists",
                  "type": "string",
                  "x-ms-summary": "Filename with extension"
                },
                "DeletedByUserName": {
                  "description": "The name of the user who deleted this item",
                  "type": "string",
                  "x-ms-summary": "Deleted by"
                },
                "TimeDeleted": {
                  "format": "date-time",
                  "description": "When this item was deleted",
                  "type": "string",
                  "x-ms-summary": "Time deleted"
                },
                "IsFolder": {
                  "description": "A true/false value to indicate if the item is a folder",
                  "type": "boolean",
                  "x-ms-summary": "Is folder"
                }
              }
            }
          },
          "x-ms-capabilities": {
            "file-picker": {
              "open": {
                "operationId": "ListAllRootFolders",
                "parameters": {
                  "dataset": {
                    "parameter": "dataset"
                  }
                }
              },
              "browse": {
                "operationId": "ListFolder",
                "parameters": {
                  "dataset": {
                    "parameter": "dataset"
                  },
                  "id": {
                    "value-property": "Id"
                  }
                }
              },
              "value-title": "DisplayName",
              "value-folder-property": "IsFolder",
              "value-media-property": "MediaType"
            }
          },
          "x-ms-connector-metadata": [
            {
              "propertyName": "Website",
              "propertyValue": "https://products.office.com/sharepoint/collaboration"
            }
          ],
          "externalDocs": {
            "url": "https://docs.microsoft.com/connectors/sharepointonline"
          }
        },
        "tier": "Standard",
        "operationDefinitions": {
          "GetOnUpdatedItems": {
            "trigger": "Batch",
            "triggerHint": "To see it work now, modify a list item in the SharePoint folder you selected.",
            "inputsSchema": {
              "type": "object",
              "properties": {
                "dataset": {
                  "type": "string",
                  "title": "Site Address",
                  "x-ms-dynamic-list": {
                    "operationId": "GetDataSets",
                    "parameters": {},
                    "itemsPath": "value",
                    "itemValuePath": "Name",
                    "itemTitlePath": "DisplayName"
                  },
                  "description": "Example: https://contoso.sharepoint.com/sites/sitename",
                  "minLength": 1,
                  "x-ms-property-name-alias": "dataset"
                },
                "table": {
                  "type": "string",
                  "title": "List Name",
                  "x-ms-dynamic-list": {
                    "operationId": "GetTables",
                    "parameters": {
                      "dataset": {
                        "parameterReference": "dataset",
                        "required": true
                      }
                    },
                    "itemsPath": "value",
                    "itemValuePath": "Name",
                    "itemTitlePath": "DisplayName"
                  },
                  "description": "SharePoint list name",
                  "minLength": 1,
                  "x-ms-property-name-alias": "table"
                },
                "view": {
                  "type": "string",
                  "title": "Limit Columns by View",
                  "x-ms-dynamic-list": {
                    "operationId": "GetTableViews",
                    "parameters": {
                      "dataset": {
                        "parameterReference": "dataset",
                        "required": true
                      },
                      "table": {
                        "parameterReference": "table",
                        "required": true
                      }
                    },
                    "itemValuePath": "Name",
                    "itemTitlePath": "DisplayName"
                  },
                  "description": "Avoid column threshold issues by only using columns defined in a view",
                  "x-ms-visibility": "advanced",
                  "x-ms-property-name-alias": "view"
                }
              },
              "required": [
                "dataset",
                "table"
              ]
            },
            "responsesSchema": {
              "200": {
                "type": "object",
                "properties": {
                  "body": {
                    "type": "object",
                    "properties": {
                      "value": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "x-ms-dynamic-properties": {
                            "operationId": "GetTable",
                            "parameters": {
                              "dataset": {
                                "parameterReference": "dataset",
                                "required": true
                              },
                              "table": {
                                "parameterReference": "table",
                                "required": true
                              },
                              "view": {
                                "parameterReference": "view",
                                "required": false
                              }
                            },
                            "itemValuePath": "Schema/Items"
                          },
                          "description": "Table item entity"
                        },
                        "description": "List of Items",
                        "x-ms-property-name-alias": "body/value"
                      }
                    },
                    "required": [],
                    "description": "List of Items",
                    "x-ms-property-name-alias": "body"
                  }
                }
              }
            },
            "pageable": false,
            "isChunkingSupported": false,
            "description": "Triggers when an item is created, and also each time it is modified."
          }
        }
      }
    },
    "createdTime": "2024-03-08T10:40:38.837964Z",
    "lastModifiedTime": "2024-05-02T16:08:00.5906629Z",
    "flowSuspensionReason": "None",
    "environment": {
      "name": "Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",
      "type": "Microsoft.ProcessSimple/environments",
      "id": "/providers/Microsoft.ProcessSimple/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d"
    },
    "definitionSummary": {
      "triggers": [
        {
          "type": "OpenApiConnection",
          "swaggerOperationId": "GetOnUpdatedItems",
          "apiOperation": {
            "name": "GetOnUpdatedItems",
            "id": "/providers/Microsoft.PowerApps/apis/shared_sharepointonline/apiOperations/GetOnUpdatedItems",
            "type": "Microsoft.ProcessSimple/apis/apiOperations",
            "properties": {
              "summary": "When an item is created or modified",
              "description": "Triggers when an item is created, and also each time it is modified.",
              "visibility": "important",
              "trigger": "batch",
              "pageable": false,
              "isChunkingSupported": false,
              "isNotification": false,
              "annotation": {
                "status": "Production",
                "family": "GetOnUpdatedItems",
                "revision": 1
              },
              "externalDocs": {
                "url": "https://docs.microsoft.com/connectors/sharepointonline/#when-an-item-is-created-or-modified",
                "description": "Learn more"
              },
              "api": {
                "id": "/providers/Microsoft.PowerApps/apis/shared_sharepointonline",
                "displayName": "SharePoint",
                "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1685/1.0.1685.3700/sharepointonline/icon.png",
                "brandColor": "#036C70",
                "tier": "Standard"
              },
              "operationType": "OpenApiConnection",
              "swaggerTags": [
                "SharePointListTableDataTrigger"
              ]
            }
          },
          "metadata": {
            "operationMetadataId": "0c830afe-5bfb-4af1-85bc-12ab218a1a2b"
          },
          "api": {
            "name": "shared_sharepointonline",
            "id": "/providers/Microsoft.PowerApps/apis/shared_sharepointonline",
            "type": "/providers/Microsoft.PowerApps/apis",
            "properties": {
              "displayName": "SharePoint",
              "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1685/1.0.1685.3700/sharepointonline/icon.png",
              "metadata": {
                "source": "marketplace",
                "brandColor": "#036C70",
                "useNewApimVersion": "true",
                "version": {
                  "previous": "releases/v1.0.1682\\1.0.1682.3677",
                  "current": "releases/v1.0.1685\\1.0.1685.3700"
                }
              },
              "tier": "Standard",
              "isCustomApi": false,
              "description": "SharePoint helps organizations share and collaborate with colleagues, partners, and customers. You can connect to SharePoint Online or to an on-premises SharePoint 2016 or 2019 farm using the On-Premises Data Gateway to manage documents and list items."
            }
          }
        }
      ],
      "actions": [
        {
          "type": "InitializeVariable",
          "metadata": {
            "operationMetadataId": "629b46ae-5ede-4eb3-92b6-bc2ada4c51c0"
          }
        },
        {
          "type": "ApiConnection",
          "swaggerOperationId": "ListFeedItems",
          "metadata": {
            "flowSystemMetadata": {
              "swaggerOperationId": "ListFeedItems"
            }
          }
        }
      ]
    },
    "creator": {
      "tenantId": "e1dd4023-a656-480a-8a0e-c1b1eec51e1d",
      "objectId": "fe36f75e-c103-410b-a18a-2bf6df06ac3a",
      "userId": "fe36f75e-c103-410b-a18a-2bf6df06ac3a",
      "userType": "ActiveDirectory"
    },
    "installationStatus": "NotApplicable",
    "provisioningMethod": "FromDefinition",
    "flowFailureAlertSubscribed": true,
    "referencedResources": [
      {
        "service": "sharepoint",
        "resource": {
          "site": "https://mathijsdev2.sharepoint.com",
          "list": "b9066cf6-f8cd-44cd-a4a7-12eb90c51073"
        },
        "referencers": [
          {
            "referenceSourceType": "Triggers",
            "operationId": "/providers/Microsoft.PowerApps/apis/shared_sharepointonline/apiOperations/GetOnUpdatedItems"
          }
        ]
      }
    ],
    "licenseData": {
      "performanceProfile": {
        "throttles": {
          "mode": "Low"
        }
      },
      "flowLicenseName": "placeholder"
    },
    "isManaged": false,
    "machineDescriptionData": {},
    "flowOpenAiData": {
      "isConsequential": false,
      "isConsequentialFlagOverwritten": false
    }
  },
  "displayName": "When an item is created or modified -> Initialize variable",
  "description": "",
  "triggers": "OpenApiConnection",
  "actions": "InitializeVariable"
};