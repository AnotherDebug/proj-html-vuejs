<script>
export default {
    name: 'SocialIcons',
    props: {
        icon: Object
    }
}
</script>


<template>
    <li>
        <a :href="icon.href" :title="icon.title"><i :class="icon.icon"></i></a>
    </li>
</template>


<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;

li {
    list-style: none;

    a {
        position: relative;
        margin-left: 20px;
        color: lighten($dimgray-color, $amount: 20%);

        &:hover {
            color: lighten($black-color, $amount: 10%);
            transition: 0.5s;
        }
    }
}
</style>