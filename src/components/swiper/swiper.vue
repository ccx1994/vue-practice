<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../assets/v2-3871865883943494572f946051e06968.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../../assets/v2-049481169f4c12178b2dbe86894c33f0.jpg">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import './swiper.js'

    export default {
        name: 'my-swiper',
        data(){
            return{
                mySwiper:''
            }
        },
        mounted: function(){
            let that = this;
            that.mySwiper = new Swiper('.swiper-container',{
                autoplay : 5000,
                speed:1000,
                autoplayDisableOnInteraction : false,
                loop : true,
                pagination : '.swiper-pagination'
            })
        },
    }
</script>
<style lang="scss">
    @import './swiper.css';
    .swiper-container{
        height:25rem;

        img{
            width:100%;
            height:100%;
        }
    }
</style>