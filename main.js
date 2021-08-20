const app = Vue.createApp({
  data(){
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'Your next favourite pair of socks',
      selectedVariant: 0,
      onSale: true,
      urlShop: 'https://www.vuevixens.org/',
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {id: 2234, color: 'green', image: './assets/images/socks_green.jpeg', quantity: 50},
        {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpeg', quantity: 0},
      ]
      

    }
  },
  methods: {
    addToCart(){
      this.cart ++
    },
    removeFromCart(){
      this.cart --
    },
    updateVariant(index){
      this.selectedVariant = index

    }
  },
  computed: {
    title(){
      if(this.onSale) return this.brand + ' ' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].image
    },
    inStock(){
      return this.variants[this.selectedVariant].quantity
    }
  }
})

