<script>
export default {
    name: 'CardCount',
    props: {
        count: Object
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        startCount(total) {
            //settaggio tempo del setInterval
            let intervalTime = total > 3000 ? 0.1 : 1;

            const interval = setInterval(() => {
                if (this.counter < total) {
                    //settaggio del counter
                    let increment = total > 3000 ? 3 : 1;
                    this.counter += increment;
                } else {
                    clearInterval(interval);
                }
            }, intervalTime);
        }
    },
    mounted() {
        this.startCount(this.count.numbers);
    }
}
</script>


<template>
    <div class="counter">
        <i :class="count.icon"></i>
        <p class="countNum">{{ counter }}</p>
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