<script>
export default {
    name: 'HomeOwner'
}
</script>


<template>
    <div class="homeOwner d-flex ">
        <h2>Our Home Owners Say</h2>
        <div class="testimonial">
            <img src="home-testimonial-113165296.jpg" alt="">
        </div>
        <p>"No man but feels more of a man in the world if he have but a bit of ground that he can call his own.
            However small it is on the surface, it is four thousand miles deep; and that is a very handsome
            property."</p>
        <div class="nameTestimonial">
            <p>harry smith &bull; new home owner</p>
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