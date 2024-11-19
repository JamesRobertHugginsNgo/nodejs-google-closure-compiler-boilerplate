
# Google Closure Compiler Node.js Script

This script automates the execution of Google Closure Compiler and can be easily integrated into other automation workflows. It's designed to optimize JavaScript code by eliminating unnecessary variables, constants, functions, and conditionals—resulting in cleaner, more efficient code while maintaining readability.

Tested with Node.js v20.14.0 and Google Closure Compiler v20240317.0.0. Ensure your `package.json` includes `"type": "module"`.

## Installation

Install the required dependencies by running the following command:

```bash
npm install --save-dev google-closure-compiler
```

## Running the Script

To execute the script, use the following command:

```bash
node src/index.js
```

## Documentation

For more detailed information on Google Closure Compiler, including available flags and options, refer to the following resources:

- [Google Closure Compiler Documentation](https://developers.google.com/closure/compiler)
- [Closure Compiler Flags and Options Wiki](https://github.com/google/closure-compiler/wiki/Flags-and-Options)
