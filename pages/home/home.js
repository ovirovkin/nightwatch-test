const productCommands = {
  addProductToCart: function(productName) {
     // hover over the product name
     return this.useXpath().moveToElement(`.//*[@id="homefeatured"]//*[contains(@class, "col-xs-12")]//*[contains(text(), "${productName}")]`, 10, 10)
     // click 'Add to cart' button
     .click(`.//*[@id="homefeatured"]//*[contains(@class, "col-xs-12")]//*[contains(text(), "${productName}")]//..//..//..//a[@title="Add to cart"]`)
     // wait for pop-up
     .useCss().waitForElementVisible('#layer_cart .img-responsive')
  }
};

module.exports = {
    url: 'http://automationpractice.com/index.php',
    commands: [productCommands],
    elements: {
      products: {selector: '#homefeatured .col-xs-12'},
      productNames: {selector: '#homefeatured .product-name'}
    }
};