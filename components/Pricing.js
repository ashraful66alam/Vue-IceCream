app.component("pricing",{
    props:{
        variants:{
            type:Array
        }
    },
    template:
    /*html*/
    `<div class="pricing">
        <p v-for="(variant) in variants" :key="variant.id">{{variant.name}} costs <span> {{variant.price}}</span> </p>
    </div>`
})