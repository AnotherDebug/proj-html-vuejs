<script>
import { store } from '../../data/store';
import LinksNav from './LinksNav.vue';
export default {
    name: 'Navbar',
    components: {
        LinksNav
    },
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <div class="navBar d-flex">
        <ul>
            <LinksNav v-for="(link, index) in store.topbarMenu" 
            :key="index"
            :link="link"/>
           
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