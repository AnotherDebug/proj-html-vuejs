<script>
export default {
    name: 'CardCount'
}
</script>


<template>
    <div class="counter">
        <i class="fa-solid fa-suitcase fa-2xl"></i>
        <p class="countNum">3534</p>
        <p class="title">PLANNING APPLICATIONS</p>
    </div>
</template>


<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;
.counter {
                color: $yellow-color;
                text-align: center;


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