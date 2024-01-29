const path = require('path');
const mainModuleFileName = require.main.filename;  // This provides the filename of the main module
const mainModuleDirname = path.dirname(mainModuleFileName);  // This extracts the directory name
module.exports = mainModuleDirname;
