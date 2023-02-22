<template>
  <div class="housesPage">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <!-- <HouseCard :house ="h" /> -->
        </div>
      </div>
    </div>

  </div>
  <div class="row">
    <div class="col-12 text-end">
      <button class="btn btn-primary">🏠</button>
    </div>
  </div>
</template>


<script>
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { onMounted } from 'vue';

export default {
  setup(){
    async function getHouses() {
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      getHouses()
    })

    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
