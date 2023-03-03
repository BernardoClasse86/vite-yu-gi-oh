<script>
import axios from 'axios'
import MainCard from './MainCard.vue'
import store from '../store'

export default {
    components: {
        MainCard,

    },
    data() {
        return {
            store,
        }
    },
    computed: {
        cards() {
            return this.store.cards
        }

    },
    methods: {
        fetchCards() {
            axios
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
                .then((res) => {
                    // console.log(res)
                    // console.log(res.data)
                    // console.log(res.data.data)
                    this.store.cards = res.data.data
                    // console.log(this.cards)
                    // console.log(this.store.cards)
                })
        }
    },
    created() {
        this.fetchCards()
    }

}

</script>

<template>
    <div class="container">

        <ul class="card-grid">

            <MainCard v-for="card in store.cards" :key="card.id" :card="card" />

        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as*;
@use '../style/partials/reset' as*;
@use '../style/partials/variables' as*;

.card-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    row-gap: 1rem;
}
</style>