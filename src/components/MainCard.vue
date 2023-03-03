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
    background-image: url(/images/yu-gi-oh-card-back.jpg);
    background-position: center;
    background-repeat: no-repeat;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 0.75rem;
    box-shadow: 0 0 5px 5px $card-text;

    img {
        object-fit: contain;
        cursor: pointer;
    }

    img:hover {
        box-shadow: 0 0 5px 5px $gold-shadow;
    }

    .card__title {
        font-size: 0.85rem;
        color: black;
        font-weight: bold;
        padding: 0.5rem;
        box-shadow: 0 0 5px 5px white;
        background-color: $card__title-bg;
        border: 3px solid $card-text;
        margin: 0 1rem;
    }

    .card__type {
        font-size: 0.75rem;
        font-style: italic;
        font-weight: bold;
        padding: 1rem;
        margin: 0 1.5rem;
        color: black;
        box-shadow: 0 0 5px 5px white;
        background-color: $card__text-bg;
        border: 2px solid $card-text;
    }
}
</style>