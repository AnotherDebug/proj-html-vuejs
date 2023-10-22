<script>
export default {
    name: 'ContactsFooter'
}
</script>


<template>
    <li class="d-flex">
        <i class="fa-solid fa-globe"></i>
        <p>Corporate Location
            1600 Amphitheatre Parkway
            London WC1 1BA</p>
    </li>
</template>


<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;

li {
    color: lighten($dimgray-color, $amount: 20%);
    margin-bottom: 10px;

    i {
        padding-right: 15px;
    }
}
</style>