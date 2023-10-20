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
    margin-left: 270px;

    ul {
        list-style: none;
        padding-right: 15px;

        li {

            display: inline-block;
            padding: 0 15px;

            a {
                position: relative;
                text-decoration: none;
                color: $dimgray-color;

                &:hover {
                    color: $yellow-color;
                    transition: all 0.2s;

                    &:after {
                        position: absolute;
                        content: '\2bc6';
                        color: $white-color;
                        font-size: 20px;
                        top: 70px;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 3;

                    }
                }

            }
        }
    }
}</style>