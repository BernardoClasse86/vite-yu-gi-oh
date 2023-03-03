<script>
export default {

}
</script>

<template>
    <div class="container">
        <div class="header-row">

            <img class="logo-thumb" src="/images/yu-gi-oh-logo.png" alt="">

            <div class="header__title">Yu-Gi-Oh! API</div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as*;
@use '../style/partials/reset' as*;
@use '../style/partials/variables' as*;

.header-row {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1rem 0;
    box-shadow: 0 -7px 3px -3px rgb(255, 217, 105), 0 7px 3px -3px rgb(255, 217, 105);

    .logo-thumb {
        width: 200px;
    }

    .header__title {
        font-size: 2rem;
        font-style: italic;
        color: white;
        font-weight: bolder;
        text-shadow: 2px 2px 8px $gold-shadow;
    }
}
</style>