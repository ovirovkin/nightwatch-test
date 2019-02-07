var config = require('../../nightwatch.conf.js');
var homePage;

module.exports = {

  beforeEach: function(browser, done) {
    homePage = browser.page.home();
    homePage.maximizeWindow().navigate().waitForElementPresent('img[src*="sample-3.jpg"]', function(){
      done();
    });
  },

  'Can find dialog with correct product info when adding item to the cart': function(browser) {
    homePage.addProductToCart('Blouse');

    browser.page.successDialog()
      .assert.containsText('@productHeading', 'Product successfully added to your shopping cart')
      .assert.containsText('@productDetails', 'Blouse')
      .assert.containsText('@productDetails', 'Black, S')
      .assert.containsText('@productDetails', 'Quantity 1')
      .assert.containsText('@productDetails', 'Total $27.00')
      .saveScreenshot(config.TEST_RESULTS_PATH + 'can-find-dialog-with-correct-product-info.png')
  },

  'Can find dialog with correct cart status info when adding item to the cart': function(browser) {
    homePage.addProductToCart('Blouse');

    browser.page.successDialog()
      .assert.containsText('@cartHeading', 'There is 1 item in your cart.')
      .assert.containsText('@totalProducts', 'Total products $27.00')
      .assert.containsText('@totalShipping', 'Total shipping  $2.00')
      .assert.containsText('@total', 'Total $29.00')
      .saveScreenshot(config.TEST_RESULTS_PATH + 'can-find-dialog-with-correct-cart-status-info.png')
  },

  afterEach: function(homePage, done) {
    homePage.end(function() {
      done()
    })
  }
};
