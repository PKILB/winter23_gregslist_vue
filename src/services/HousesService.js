import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {
    async getHouses() {
        const res = await api.get('auth/api/houses')
        console.log('[get houses]', res.data)
        AppState.houses = res.data.map(h => new House(h))
        console.log(AppState.houses)
    }

    async createHouse(houseData) {
        const res = await api.post('auth/api/houses', houseData)
        AppState.houses.push(res.data)
        return res.data
    }

    async getHouseById(houseId) {
        AppState.house = null
        const res = await api.get('auth/api/houses/' + houseId)
        AppState.house = res.data
    }
}

export const housesService = new HousesService