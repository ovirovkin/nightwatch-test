const dialogCommands = {
  closeDialog: function() {
    return this.click('@continueShopping')
    .waitForElementNotVisible('@continueShopping')
  }
};

module.exports = {
  commands: [dialogCommands],
  elements: {
    productHeading: {selector: '.layer_cart_product h2'},
    productDetails: {selector: '.layer_cart_product'},
    cartHeading: {selector: '.layer_cart_cart .ajax_cart_product_txt'},
    totalProducts: {selector: "div[class='layer_cart_row']:nth-child(2)"},
    totalShipping: {selector: "div[class='layer_cart_row']:nth-child(3)"},
    total: {selector: "div[class='layer_cart_row']:nth-child(4)"},
    continueShopping: {selector: '.continue'},
    proceedToCheckout: {selector: "a[title='Proceed to checkout']"},
  }
};