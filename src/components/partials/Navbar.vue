<script>
export default {
    name: 'Navbar'
}
</script>


<template>
    <div class="navBar d-flex">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">WORK</a></li>
            <li><a href="#">ARTICLES</a></li>
        </ul>

    </div>
</template>


<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;
.navBar {
    align-items: center;
    margin-left: 250px;

    ul {
        list-style: none;
        padding-right: 15px;

        li {
            display: inline-block;
            padding: 0 15px;

            a {
                text-decoration: none;
                color: $dimgray-color;
            }
        }
    }
}</style>