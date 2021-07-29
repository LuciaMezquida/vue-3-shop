const app = Vue.createApp({
  data(){
    return {
      product: 'Socks',
      description: 'Your next favourite pair of socks',
      image: './assets/images/socks_green.jpeg',
      urlShop: 'https://www.vuevixens.org/',
      inStock: false,
      inventory: 10,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {id: 2234, color: 'green'},
        {id: 2235, color: 'blue'},
      ]
      

    }
  }
})

