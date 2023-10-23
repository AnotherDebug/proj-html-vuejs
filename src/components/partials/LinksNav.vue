<script>
export default {
    name: 'LinksNav',
    props: {
        link: Object
    }
}
</script>


<template>
    <li><a :href="link.href">{{ link.text }}</a></li>
</template>


<style lang="scss" scoped >
@use '../../scss/partials/variables' as *;

li {

    display: inline-block;
    padding: 0 15px;

    a {
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        color: $dimgray-color;

        &:hover {
            color: $yellow-color;
            transition: all 0.2s;

            &:after {
                position: absolute;
                content: '\2bc6';
                color: $white-color;
                font-size: 20px;
                top: 59px;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 3;

            }
        }

    }
}
</style>