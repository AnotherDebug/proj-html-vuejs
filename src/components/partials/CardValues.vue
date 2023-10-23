<script>
export default {
    name: 'CardValues',
    props: {
        item: Object
    }
}
</script>


<template>
    <div class="col">
        <div class="card d-flex ">
            <div class="heading">
                <div class="logo">
                    <i :class="item.icon"></i>
                </div>
                <p class="title">{{ item.title }}</p>
            </div>
            <div class="info">
                <p>{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

.col {
    text-align: center;
    width: calc(100% / 4);
    margin: 0 10px;

    .card {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .heading {
            .logo {
                margin-top: 50px;
                width: 100px;
                height: 100px;
                font-size: 25px;
                border-radius: 50%;
                line-height: 100px;

                i {
                    color: $white-color;
                }
            }

            p {
                position: relative;
                margin: 10px 0;

                &::after {
                    content: '';
                    position: absolute;
                    background-color: lighten($dimgray-color, $amount: 20%);
                    width: 20px;
                    height: 2px;
                    top: 100%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    margin-top: 10px;
                }
            }

            &:hover .logo {
                background-color: $yellow-color !important;
                transition: 0.5s;
                transform: scale(0.9);
                cursor: pointer;
            }

            &:hover p {
                color: $yellow-color;
                transition: 0.5s;
                cursor: pointer;
            }
        }

        .info {
            color: lighten($dimgray-color, $amount: 20%);

            p {
                margin-top: 20px;
                line-height: 30px;
            }
        }
    }
}

.col:nth-child(1) {
    .logo {
        background-color: $darkTurquoise-color;
    }
}

.col:nth-child(2) {
    .logo {
        background-color: $dodgerBlue-color;
    }
}

.col:nth-child(3) {
    .logo {
        background-color: $orange-color;
    }
}

.col:nth-child(4) {
        .logo {
            background-color: $green-color;
        }
    }
</style>