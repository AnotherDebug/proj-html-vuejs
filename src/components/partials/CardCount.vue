<script>
export default {
    name: 'CardCount',
    props: {
        count: Object
    }
}
</script>


<template>
    <div class="counter">
        <i :class="count.icon"></i>
        <p class="countNum">{{ count.numbers }}</p>
        <p class="title">{{ count.title }}</p>
    </div>
</template>


<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;
.counter {
                color: $yellow-color;
                text-align: center;
                text-transform: uppercase;

                i {
                    margin-bottom: 30px;
                }

                .countNum {
                    font-size: 25px;
                }

                .title {
                    color: $white-color;
                    margin: 5px 50px;
                }
            }
</style>