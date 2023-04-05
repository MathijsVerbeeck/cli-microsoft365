# spo commandset remove

Remove a ListView Command Set that is added to a site.

## Usage

```sh
m365 spo commandset remove [options]
```

## Options

`-u, --webUrl <webUrl>`
: Url of the site.

`-t, --title [title]`
: The title of the ListView Command Set. Specify either `title`, `id` or `clientSideComponentId`.

`-i, --id [id]`
: The id of the ListView Command Set. Specify either `title`, `id` or `clientSideComponentId`.

`-c, --clientSideComponentId [clientSideComponentId]`
: The id of the ListView Command Set. Specify either `title`, `id` or `clientSideComponentId`.

`-s, --scope [scope]`
: Scope of the ListView Command Set. Allowed values: `Site`, `Web`, `All`. Defaults to `All`.

`--confirm`
: Don't prompt for confirming removal of the ListView Command Set

--8<-- "docs/cmd/_global.md"

## Examples

Remove a ListView Command Set by title.

```sh
m365 spo commandset remove --title "Some customizer" --webUrl https://contoso.sharepoint.com/sites/sales
```

Remove a ListView Command Set by id.

```sh
m365 spo commandset remove --id 14125658-a9bc-4ddf-9c75-1b5767c9a337 --webUrl https://contoso.sharepoint.com/sites/sales
```

Remove a ListView Command Set by clientSideComponentId.

```sh
m365 spo commandset remove --clientSideComponentId 7096cded-b83d-4eab-96f0-df477ed7c0bc --webUrl https://contoso.sharepoint.com/sites/sales
```

## Response

The command won't return a response on success.