<script>
import store from '../store'

export default {
    data() {
        return {
            store,
            selectTypeOptions: [
                'Effect Monster',
                'Flip Effect Monster',
                'Flip Tuner Effect Monster',
                'Gemini Monster',
                'Normal Monster',
                'Normal Tuner Monster',
                'Pendulum Effect Monster',
                'Pendulum Effect Ritual Monster',
                'Pendulum Flip Effect Monster',
                'Pendulum Normal Monster',
                'Pendulum Tuner Effect Monster',
                'Ritual Effect Monster',
                'Ritual Monster',
                'Spell Card',
                'Spirit Monster',
                'Toon Monster',
                'Trap Card',
                'Tuner Monster',
                'Union Effect Monster',
                'Fusion Monster',
                'Link Monster',
                'Pendulum Effect Fusion Monster',
                'Synchro Monster',
                'Synchro Pendulum Effect Monster',
                'Synchro Tuner Monster',
                'XYZ Monster',
                'XYZ Pendulum Effect Monster',
                'Skill Card',
                'Token'
            ],
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

        <div class="select-card-type select-filter">
            <select class="select-choice" @change="$emit('onOptionChange')" v-model="store.cardTypeSelect" id="">
                <option v-for="option in selectTypeOptions" :value="option" :key="option">{{ option.toUpperCase() }}
                </option>

            </select>
        </div>



    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/reset' as*;
@use '../style/partials/variables' as*;

.filters-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .input-filter,
    .select-filter {
        padding: 1rem;
        border: 1px solid $title-shadow;

        .name-search,
        .select-choice {
            padding: 0.75rem;
            background-color: $gold-shadow;
        }
    }

}
</style>