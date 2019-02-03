var config = require('../nightwatch.conf.js');
var searchPage;

module.exports = {

  beforeEach(browser, done) {
    searchPage = browser.page.emojiSearch();
    searchPage.maximizeWindow().navigate().waitForElementVisible('@emojiImages', function(){
      done();
    });
  },

  'Can find "Yum" emoji': function(browser) {
    searchPage
      .setValue('@input', 'Yum')
      .assert.containsText('@emojis', 'Yum')
      .saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz1.png')
  },
  
  'Cannot find emoji that does not exists': function(browser) {
    searchPage
      .setValue('@input', 'test')
      .assert.elementNotPresent('@emojis')
      .saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz2.png')
  },

  after(searchPage) {
    searchPage.end();
  }

};
