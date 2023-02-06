# scssvariables

This module can import SCSS variables as JavaScript variables.

## Installation

Use the following command to install this package

```
npm install scssvariables
```

## Usage

```javascript
const ScssVariables = require("scssvariables");

const scssText = `$primary-color: #ff0000;
$secondary-color: #00ff00;
$tertiary-color: #0000ff;`;

const scssVariables = new ScssVariables(scssText);

console.log(scssVariables.get("primary-color")); // #ff0000
console.log(scssVariables.get("secondary-color")); // #00ff00
console.log(scssVariables.get("tertiary-color")); // #0000ff
```

To check an SCSS file, you can read the file contents into a string and pass it as the scssText argument to the ScssVariables class. For example:

```javascript
const fs = require("fs");
const ScssVariables = require("scssvariables");

const scssText = fs.readFileSync("path/to/scss/file.scss", "utf-8");
const scssVariables = new ScssVariables(scssText);

console.log(scssVariables.get("primary-color"));
```

## API

# ScssVariables

`constructor(scssText)`

The ScssVariables class takes a scssText argument, which is the string of SCSS code that you want to parse.

`get(variableName)`

The get method takes a variableName argument, which is the name of the SCSS variable you want to retrieve. It returns the value of the SCSS variable, if it exists. If the variable is not found in the scssText, undefined will be returned.

## Contributing

If you have suggestions for improving this module, feel free to open an issue or create a pull request.
