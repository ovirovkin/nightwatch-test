const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const PKG = require('./package.json');
const TEST_RESULTS_PATH = "./test-results/" + PKG.version + "/";

module.exports = {
  "src_folders": [ "tests" ],
  "page_objects_path": [ "pages", "pages/home", "pages/components/dialogs", "pages/components/header" ],
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
        "path": TEST_RESULTS_PATH,
        "on_failure" : true,
        "on_error": true,
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
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "chromeOptions" : {
          "args" : ["headless"],
        }
      }
    }
  }
}

module.exports.TEST_RESULTS_PATH = TEST_RESULTS_PATH;
