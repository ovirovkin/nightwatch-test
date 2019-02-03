var config = require('../nightwatch.conf.js');
var searchPage;

module.exports = {
  beforeEach(browser, done) {
    searchPage = browser.page.emojiSearch();
    searchPage.navigate().waitForElementVisible('@emojiImages', function(){
      done();
    });
  },

  'Can find "Yum" emoji': function() {
    searchPage
      .setValue('@input', 'Yum')
      .assert.containsText('@emojis', 'Yum')
      .saveScreenshot(config.TEST_RESULTS_PATH + 'can-find-yum-emoji.png')
  },
  
  'Cannot find emoji that does not exists': function() {
    searchPage
      .setValue('@input', 'test')
      .assert.elementNotPresent('@emojis')
      .saveScreenshot(config.TEST_RESULTS_PATH + 'cannot-find-empji-that-does-not-exists.png')
  },

  after(searchPage, done) {
    searchPage.end(function() {
      done()
    })
  }
};
