const fs = require("fs");

/**
 *
 * Read the file parse its contents as json and pass the
 * result to callback if anything goes wrong
 * print error &* invoke the callback with null
 *
 */

function readConfigFile(path, callback) {
  fs.readFile(path, "utf-8", (err, text) => {
    if (err) {
      console.log("Error while reading the file: ", err);
      callback(null);
      return;
    }

    let data = null;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.log("Something went wrong while parsing: ", e);
    }
    callback(data);
  });
}

/**
 * we can promisify above function
 * using util.promisify()
 */

/*

const util = require("util");
const pfs = {
  readFile: util.promisify(fs.readFile),
};

function readConfigFile(path) {
    return pfs.readFile(path, "utf-8").then(text => {
        return JSON.parse(text);
    })
}

*/

/**
 * using async will also do the same as above
 */