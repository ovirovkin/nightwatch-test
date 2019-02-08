var config = require('../../../nightwatch.conf.js');
var homePage;

module.exports = {

  beforeEach: function(browser, done) {
    homePage = browser.page.home();
    homePage.maximizeWindow().navigate().waitForElementPresent('img[src*="sample-3.jpg"]', function(){
      done();
    });
  },

  'Cart counter increased when adding item to cart': function(browser) {
    homePage.addProductToCart('Blouse');
    browser.page.successDialog().closeDialog();

    browser.page.header()
      .moveToElement('@viewMyShoppingCart', 5, 5)
      .assert.containsText('@cartQuantity', '1')
      .assert.attributeContains('@product', 'style', 'display: inline;')
      .assert.attributeContains('@products', 'style', 'display: none;')
      .saveScreenshot(config.TEST_RESULTS_PATH + 'Cart-counter-increased-when-adding-item-to-cart.png')
  },

  'Can find added product in the cart': function(browser) {
    homePage.addProductToCart('Blouse');
    browser.page.successDialog().closeDialog();

    browser.page.header()
      .moveToElement('@viewMyShoppingCart', 5, 5)
      .assert.attributeContains('@productImage', 'alt', 'Blouse')
      .assert.containsText('@quantity', '1')
      .assert.containsText('@productName', 'Blouse')
      .assert.containsText('@productAttributes', 'Black, S')
      .assert.containsText('@productPrice', '$27.00')
      .saveScreenshot(config.TEST_RESULTS_PATH + 'can-find-added-product-in-the-cart.png')
  },

  'Total sum is correct when adding two products': function(browser) {
    browser
    .perform(function() {
      homePage.addProductToCart('Blouse');
      browser.page.successDialog().closeDialog();
    })
    .perform(function() {
      homePage.addProductToCart('Faded Short Sleeve T-shirts');
    browser.page.successDialog().closeDialog();
    });
    
    browser.page.header()
      .moveToElement('@viewMyShoppingCart', 5, 5)
      .assert.containsText('@total', '$45.51')
      .saveScreenshot(config.TEST_RESULTS_PATH + 'total-sum-is-correct-when-adding-two-products.png')
  },


  'Cart displays correct shipping and total': function(browser) {
    homePage.addProductToCart('Blouse');
    browser.page.successDialog().closeDialog();

    browser.page.header()
      .moveToElement('@viewMyShoppingCart', 5, 5)
      .assert.containsText('@shipping', '$2.00')
      .assert.containsText('@total', '$29.00')
      .saveScreenshot(config.TEST_RESULTS_PATH + 'cart-displays-correct-shipping-and-total.png')
  },

  'Can remove product from cart': function(browser) {
    homePage.addProductToCart('Blouse');
    browser.page.successDialog().closeDialog();

    browser.page.header()
      .moveToElement('@viewMyShoppingCart', 5, 5)
      .click('@removeProduct')
      .assert.containsText('@emptyCart', '(empty)')
      .saveScreenshot(config.TEST_RESULTS_PATH + 'can-remove-product-from-cart.png')
  },

  'Checkout link redirects to order page': function(browser) {
    homePage.addProductToCart('Blouse');
    browser.page.successDialog().closeDialog();

    browser.page.header()
      .moveToElement('@viewMyShoppingCart', 5, 5)
      .waitForElementVisible('@checkOut')
      .click('@checkOut')
      .assert.urlContains('controller=order')
      .saveScreenshot(config.TEST_RESULTS_PATH + 'checkout-link-redirects-to-order-page.png')
  },

  'Cannot expand cart when empty': function(browser) {
    browser.page.header()
      .moveToElement('@viewMyShoppingCart', 5, 5)
      .assert.cssClassPresent("@cartQuantity", "unvisible")
      .assert.cssClassPresent("@product", "unvisible")
      .assert.cssClassPresent("@products", "unvisible")
      .saveScreenshot(config.TEST_RESULTS_PATH + 'total-sum-is-correct-when-adding-two-products.png')
  },

  afterEach: function(homePage, done) {
    homePage.end(function() {
      done()
    })
  }
};
