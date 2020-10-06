// import dependencies
const write = require("write-json");

// success message
const successMessage = "Inserted successfuly";

/**
 * @name writeJson
 * @description A function to create json file with passed data
 *
 * @module write-json
 *
 * @param {String} fileName
 * @param {Any} data
 */
function writeJson(fileName, data) {
  write(`./data/${fileName}.json`, data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(successMessage);
    }
  });
}

// export
module.exports = {
  successMessage,
  writeJson,
};
