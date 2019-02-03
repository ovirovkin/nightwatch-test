const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const PKG = require('./package.json');
const TEST_RESULTS_PATH = "./test-results/" + PKG.version + "/";

module.exports = {
  "src_folders": [ "tests" ],
  "page_objects_path": "pages",
  "output_folder": TEST_RESULTS_PATH,
  "selenium": {
    "start_process": true,
    "server_path": seleniumServer.path,
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path
    }
  },
  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true, 
        "on_failure" : true,
        "path": TEST_RESULTS_PATH
      },
      "globals": {
        "waitForConditionTimeout": 5000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "chromeOptions" : {
          "args" : ["headless"],
        }
      }
    },
    // "chrome": {
    //   "desiredCapabilities": {
    //     "browserName": "chrome",
    //     "javascriptEnabled": true,
    //     "acceptSslCerts": true,
    //     "chromeOptions" : {
    //       "args" : ["headless"],
    //     }
    //   }
    // }
  }
}

function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count.toString();
}

var FILECOUNT = 0; // "global" screenshot file count
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath (browser) {
  var a = browser.options.desiredCapabilities;
  var meta = [a.platform];
  meta.push(a.browserName ? a.browserName : 'any');
  meta.push(a.version ? a.version : 'any');
  meta.push(a.name);
  var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
  return TEST_RESULTS_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.TEST_RESULTS_PATH = TEST_RESULTS_PATH;