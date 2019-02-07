module.exports = {
    elements: {
      viewMyShoppingCart: { selector: "a[title='View my shopping cart']" },
      cartQuantity: { selector: '.shopping_cart .ajax_cart_quantity' },
      product: { selector: '.shopping_cart .ajax_cart_product_txt' },
      products: { selector: '.shopping_cart .ajax_cart_product_txt_s' },
      emptyCart: { selector: '.ajax_cart_no_product' },

      quantity: { selector: '.quantity' },
      productImage: { selector: '.cart-images img' },
      productName: { selector: '.cart_block_product_name' },
      productAttributes: { selector: '.product-atributes a' },
      productPrice: { selector: '.cart-info .price' },
      removeProduct: { selector: '.ajax_cart_block_remove_link' },

      shipping: { selector: "div[class^='cart-prices-line']:nth-child(1)" },
      total: { selector: "div[class^='cart-prices-line']:nth-child(2)" },

      checkOut: { selector: '#button_order_cart' }
    }
};