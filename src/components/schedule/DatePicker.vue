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
    currentDay: {
        type: String,
        default: ''
    },
})

const emits = defineEmits(["updateDatePicker"])

const userDay = ref(null)
const userMonth = ref(null)

const swiperRefDay = ref(null);
const swiperRefMonth = ref(null);

const centerSelectedDate = (swiperRef, date, center, seconds = 1000) => {
    swiperRef.value.slideToLoop(date - center, seconds)
}

const setSwiperRefDay = (swiper) => {
    swiperRefDay.value = swiper;
    centerSelectedDate(swiperRefDay, 29, 2) // because first time some items no display
    userDay.value = props.currentDay
    centerSelectedDate(swiperRefDay, props.currentDay, 3)
};

const setSwiperRefMonth = (swiper) => {
    swiperRefMonth.value = swiper;
    userMonth.value = props.currentMonth
    centerSelectedDate(swiperRefMonth, props.currentMonth, 1)
};

const selectDay = (day) => {
    userDay.value = day
    emits('updateDatePicker', `${userMonth.value}`, `${userDay.value}`)

    centerSelectedDate(swiperRefDay, day, 1)
}

const selectMonth = (month) => {
    userMonth.value = month
    emits('updateDatePicker', `${userMonth.value}`, `${userDay.value}`)

    if (month == 2 && userDay.value >= 29) {
        userDay.value = 15
        centerSelectedDate(swiperRefDay, userDay.value, 1)
    }
    
    centerSelectedDate(swiperRefMonth, month, 1)
}

// @realIndexChange="swiperChange()"
// const swiperChange = () => {}
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
                <swiper-slide v-for="(month, index) in schedule.monthsDisplay">
                    <span 
                    class="month-el" @click="selectMonth(index+1)" 
                    :style="{ background: userMonth == index+1 ? '#08327d' : 'none', color: userMonth == index+1 ? 'white' : 'black'}" 
                    >
                        {{ month }} 2024
                    </span>
                </swiper-slide>
            </swiper>

            <swiper class="wiper" @swiper="setSwiperRefDay"
                :centeredSlides="true"
                :slides-per-view="7" 
                :space-between="0"
                :speed="500"
                :loop="true"
                :pagination="true"
            >
                <swiper-slide class="content-days" v-for="(days, index) in schedule.daysDisplay">
                    <span>{{ new Date(days).toLocaleDateString('es-ES', {weekday: 'long'}).slice(0, 3) }}</span>
                    <span class="days-el" 
                        @click="selectDay(index+1)"
                        :style="{
                            background: userDay == index+1 ? '#08327d' : 'none',
                            color: userDay == index+1 ? 'white' : 'black',
                            border: true ? '1px solid black' : 'none',
                        }" 
                    >
                        {{ index+1 }}
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