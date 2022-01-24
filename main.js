const app = Vue.createApp({
    data() {
        return {
            variants:[
                {id:1, name:'Vanilla', price:100},
                {id:2, name:'Chocolate', price:160},
                {id:3, name:'Strawberry', price:90},
                {id:4, name:'Orange', price:130},
                {id:5, name:'Lemon', price:120}
            ],
            logo:'images/logo.svg',
            cart: [],
            showModal: false
            
        }
    },
    methods: {
        addToCart(variantId){
            console.log(this.cart);
            this.cart.push(this.variants.find(variant=>variant.id===variantId));
        },
        removeFromCart(variantId){
            console.log(this.cart);
            let position=this.cart.findIndex(variant=>variant.id===variantId);
            if (position>-1) {
            this.cart.splice(position,1);
            }
           
        },
        toggleModal(){
            this.showModal=!this.showModal;
        },
        clearCart(){
            this.cart=[];
        }
    },
    computed:{
        total(){
            return this.cart.reduce((t,variant)=>t+variant.price,0)
        }
    }
    
});

// app.mount('#app');