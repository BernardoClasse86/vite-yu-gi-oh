<script>
import store from '../store'

export default {
    data() {
        return {
            store,
        }
    },
}
</script>


<template>
    <div class="filters-container">

        <div class="input-filter">
            <input @keyup.enter="$emit('onSearchName')" class="name-search" type="text" v-model="store.cardNameSearch"
                placeholder="Type the card name">
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/reset' as*;
@use '../style/partials/variables' as*;

.filters-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    align-items: center;

    .input-filter {
        padding: 1rem;
        border: 1px solid brown;

        .name-search {
            padding: 0.75rem;
            background-color: $gold-shadow;
        }
    }
}
</style>