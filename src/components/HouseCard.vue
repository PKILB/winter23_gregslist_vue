<template>
    <div class="HouseCard card">
        <router-link :to="{ name: 'House', params: { houseId: house.id}}">
            <img class="rounded-top img-fluid w-100 h-100" :src="house.img" :alt="house.price">
        </router-link>

        <div class="card-body">
            <p><b>Bathrooms: {{ house.bathrooms }} </b></p>
            <p><b>Bedrooms: {{ house.bedrooms }} </b></p>  
            <p><b>Levels: {{ house.levels }} - ${{ house.price }}</b></p>
        </div>
        <div class="card-footer text-end" v-if="showSeller">
            <!-- <span class="on-hover me-3">{{ houses.seller.name }}</span> -->
            <!-- <img :src="houses.seller.picture" :alt="house.seller.name" height="40" width="40" class="rounded-circle"> -->
        </div>


    </div>
</template>


<script>
import { House } from '../models/House.js';

export default {
    props: {
        house: { type: House, required: true},
        showSeller: { type:Boolean, default: true}
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>