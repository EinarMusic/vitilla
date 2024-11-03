<script setup>
import 'swiper/css/pagination';
import 'swiper/css';

import { ref } from "vue"
import { Swiper, SwiperSlide } from 'swiper/vue';

const props = defineProps({
    
    schedule: {
        type: Object,
        default: {}
    },
    currentYear: {
        type: String,
        default: ''
    },
    currentMonth: {
        type: String,
        default: ''
    },
})

const emits = defineEmits(["updateDatePicker"])

const userMonth = ref(null)
const swiperRefMonth = ref(null);

const centerSelectedDate = (swiperRef, date, center, seconds = 1000) => {
    swiperRef.value.slideToLoop(date - center, seconds)
}

const setSwiperRefMonth = (swiper) => {
    swiperRefMonth.value = swiper;
    userMonth.value = props.currentMonth
    centerSelectedDate(swiperRefMonth, 4, 1)
};

</script>

<template>
    <div class="date-picker">
        <div class="picker">

            <swiper class="mySwiper" @swiper="setSwiperRefMonth"
                :centeredSlides="true"
                :slides-per-view="3" 
                :space-between="0"
                :speed="500"
                :loop="true"
                :pagination="true"
            >
                <swiper-slide v-for="(month, index) in [2021, 2022, 2023, 2024]">
                    <span class="month-el" :style="{ background: month == 2024 ? '#08327d' : 'none', color: month == 2024 ? 'white' : 'black'}">
                        {{month}}
                    </span>
                </swiper-slide>
            </swiper>

        </div>
    </div>
</template>

<style scoped>
.date-picker {
    position: fixed;
    top: 0;

    width: 100%;
    z-index: 1;

    border-bottom: 1px solid #F3F3F3;
    background: #fff;
}

.picker {
    padding-bottom: 10px;
}

.swiper {
  height: 48px;
  font-size: 14px;
  font-weight: 500;
}

.swiper-slide {
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
}

.content-days {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.month-el {
    display: inline-block;
    padding: 0 5px;
    border-radius: 6px;
}
.days-el {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 25px;
    height: 25px;
    border-radius: 100%;
}
</style>