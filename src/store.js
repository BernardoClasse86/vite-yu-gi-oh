import { reactive } from 'vue'

const store = reactive({
    cards: [],
    cardNameSearch: '',
    cardArchtypeSelect: '',
})

export default store