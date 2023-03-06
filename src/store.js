import { reactive } from 'vue'

const store = reactive({
    cards: [],
    cardNameSearch: '',
    cardTypeSelect: 'EFFECT MONSTER',
})

export default store