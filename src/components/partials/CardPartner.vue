<script>
export default {
    name: 'CardPartner',
    props: {
        itemP: Object
    }
}
</script>


<template>
    <div class="cardPartner">
        <img :src="itemP.icon" alt="">
    </div>
</template>


<style lang="scss" scoped>
.cardPartner {
    width: 200px;
    padding: 20px;

    img {
        width: 100%;
    }
}
</style>