<template>
  <div class="housesPage">
    <div class="container">
      <div class="row flex-grow-1">
        <div class="col-md-4" v-for="h in houses">
          <HouseCard :house ="h" />
        </div>
      </div>
    </div>

    <div class="row sticky-bottom">
      <div class="col-12 text-end">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#test-modal">🏠</button>
      </div>
    </div>
    
    <Modal id ="test-modal" modal-title="Add a House 🏠">
      <HouseForm />
    </Modal>
    
  </div>
</template>


<script>
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
import HouseForm from '../components/HouseForm.vue';

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                Pop.error(error, "[Getting Houses]");
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
            // account: computed(() => AppState.account),
            houses: computed(() => AppState.houses)
        };
    },
    components: { HouseForm }
}
</script>


<style lang="scss" scoped>

</style>
