<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <li class="card">

        <img :src="card.card_images[0].image_url" alt="">
        <h3 class="card__title">{{ card.name }}</h3>
        <p class="card__type">{{ card.archetype }}</p>

    </li>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as*;
@use '../style/partials/reset' as*;
@use '../style/partials/variables' as*;

.card {
    text-align: center;
    border: 2px solid grey;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 0.75rem;

    img {
        aspect-ratio: 1;
        object-fit: contain;
    }

    .card__title {
        font-size: 0.85rem;
        color: black;
        font-weight: bold;
        padding: 0.5rem;
        background-color: burlywood;
        border: 1px solid brown;
        margin: 0 1rem;
    }

    .card__type {
        font-size: 0.75rem;
        font-style: italic;
        font-weight: bold;
        padding: 1rem;
        margin: 0 1.5rem;
        background-color: aqua;
        border: 1px solid aquamarine;
    }
}
</style>