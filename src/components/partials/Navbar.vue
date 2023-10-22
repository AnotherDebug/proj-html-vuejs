<script>
import LinksNav from './LinksNav.vue';
export default {
    name: 'Navbar',
    components: {
        LinksNav
    }
}
</script>


<template>
    <div class="navBar d-flex">
        <ul>
            <LinksNav />
            <LinksNav />
            <LinksNav />
            <LinksNav />
            <LinksNav />
            <!-- <li><a href="#">ABOUT</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">WORK</a></li>
            <li><a href="#">ARTICLES</a></li> -->
        </ul>

    </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

.navBar {
    align-items: center;
    margin-left: 270px;

    ul {
        list-style: none;
        padding-right: 15px;
    }
}
</style>