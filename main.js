const app = Vue.createApp({
  data(){
    return {
      product: 'Socks',
      description: 'Your next favourite pair of socks',
      image: './assets/images/socks_green.jpeg',
      urlShop: 'https://www.vuevixens.org/',
      inStock: false,
      inventory: 10,

    }
  }
})

