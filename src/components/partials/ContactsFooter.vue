<script>
export default {
    name: 'ContactsFooter',
    props: {
        contact: Object
    }
}
</script>


<template>
    <li class="d-flex">
        <i :class="contact.icon"></i>
        <p>{{ contact.text }}</p>
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