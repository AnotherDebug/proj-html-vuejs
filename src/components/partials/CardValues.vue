<script>
export default {
    name: 'CardValues'
}
</script>


<template>
    <div class="col">
        <div class="card d-flex ">
            <div class="heading">
                <div class="logo">
                    <i class="fa-solid fa-house fa-2xl"></i>
                </div>
                <p>Great service</p>
            </div>
            <div class="info">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam expedita molestiae
                </p>
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
                background-color: $darkTurquoise-color;
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
                background-color: $yellow-color;
                transition: 0.5s;
            }

            &:hover p {
                color: $yellow-color;
                transition: 0.5s;
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
</style>