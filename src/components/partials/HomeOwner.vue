<script>
export default {
    name: 'HomeOwner',
    props: {
        owner: Object,
    },
    data() {
        return{
            counter: 0
        }
    },
}
</script>


<template>
    <div class="homeOwner d-flex" :class="{'hide': this.owner.id !== counter}">
        <h2>{{ owner.title }}</h2>
        <div class="testimonial">
            <img :src="owner.image" alt="">
        </div>
        <p>{{ `"${owner.text}"` }}</p>
        <div class="nameTestimonial">
            <p>{{ owner.name }}</p>
        </div>
        <div class="testimonials d-flex ">
            <p class="first"></p>
            <p class="second"></p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

.homeOwner {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            background-color: $yellow-color;
            width: 150px;
            height: 2px;
            top: 150%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .nameTestimonial {
        text-transform: uppercase;
        font-weight: 600;
    }

    .testimonial {
        width: 110px;
        height: 110px;
        margin-top: 40px;

        img {
            height: 100%;
            border-radius: 50%;
        }
    }

    p {
        margin-top: 20px;

    }

    .testimonials {
        .first {
            width: 10px;
            height: 10px;
            background-color: $white-color;
            border-radius: 50%;
            margin: 15px 10px;
            cursor: pointer;
        }

        .second {
            margin-top: 15px;
            width: 10px;
            height: 10px;
            border: 1px solid $white-color;
            border-radius: 50%;
            cursor: pointer;
        }
    }
}
</style>