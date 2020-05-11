# stylelint-config-nahid

##### My sharable and pluggable Stylelint configuration.

## Contents

-   [`stylelint`](https://www.npmjs.com/package/stylelint)
-   [`stylelint-config-prettier`](https://www.npmjs.com/package/stylelint-config-prettier)
-   [`stylelint-config-sass-guidelines`](https://www.npmjs.com/package/stylelint-config-sass-guidelines)
-   [`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard)
-   [`stylelint-config-wordpress`](https://www.npmjs.com/package/stylelint-config-wordpress)
-   [`stylelint-prettier`](https://www.npmjs.com/package/stylelint-prettier)
-   [`stylelint-scss`](https://www.npmjs.com/package/stylelint-scss)

## Features

-   Lints CSS and SCSS according to latest standards using [Stylelint](https://www.npmjs.com/package/stylelint).
-   Formats CSS & SCSS using [Prettier](https://www.npmjs.com/package/prettier).

## Requirements

-   [NodeJS](https://nodejs.org/en/) ( >=12.0.0 )
-   [NPM](https://www.npmjs.com/) ( >=6.14.5 )

## Installation

1. If your project doesn't have a `package.json` file already, create one using the [`npm init` command](https://docs.npmjs.com/cli-commands/init.html).
2. Run the command: `npx install-peerdeps --dev stylelint-config-nahid`
3. Create a file named `.stylelintrc` and insert the following there:

```json
{
	"extends": [ "stylelint-config-nahid" ]
}
```

This object can also be added in your `package.json` file instead under the `stylelint` property.

Learn more about using shareable Stylelint config [here](https://stylelint.io/user-guide/configure).

## Usage

1. You can try running the following command `stylelint .` to run Stylelint. Look at Stylelint's command-line interface guide [here](https://stylelint.io/user-guide/usage/cli).
2. I prefer adding two scripts to the `package.json` file:

```json
"scripts": {
	"lint-css": "stylelint \"**/*.{css,scss,sass}\"",
	"lint-css:fix": "stylelint \"**/*.{css,scss,sass}\" --fix"
}
```

That way, I can run `npm run lint-css` and `npm run lint-css:fix` to lint and lint/fix all the CSS & SCSS files in the codebase.

The documentation for Stylelint as a whole can be found [here](https://stylelint.io/user-guide/get-started).
