app.component('product-display',{
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="image" :alt="product" :class="{'out-of-stock-img' : !inStock}">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <a :href="urlShop">More info here</a>
          <p v-if='inStock >= 10'>In Stock</p>
          <p v-else-if='inStock < 10 && inStock > 0'>Almost sold out!</p>
          <p v-else>Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>
          <product-details :details="details"></product-details>
          <div 
            class="color-circle" 
            v-for='(variant, index) in variants' 
            :key='variant.id' 
            @mouseover='updateVariant(index)' 
            :style='{backgroundColor: variant.color}'>
          </div>

        </div>
        <button class="button" @click='addToCart'>+</button>
        <button class="button" @click='removeFromCart'>-</button>
      </div>
    </div>`,
    data(){
      return {
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
      },
      shipping(){
        if(this.premium) {
          return 'Free'
        } 
        return 2.99
      }
    }
})
