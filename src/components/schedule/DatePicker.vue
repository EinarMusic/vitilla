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
    userDay.value = props.currentDay
    centerSelectedDate(swiperRefDay, props.currentDay, 4)
};

const setSwiperRefMonth = (swiper) => {
    swiperRefMonth.value = swiper;
    userMonth.value = props.currentMonth
    centerSelectedDate(swiperRefMonth, props.currentMonth, 2)
};

const selectDay = (day) => {
    userDay.value = day
    centerSelectedDate(swiperRefDay, day, 4)
}

const selectMonth = (month) => {
    userMonth.value = month
    emits('updateDatePicker', `${month}`)

    if (month == 2 && userDay.value >= 29) {
        userDay.value = 15
        centerSelectedDate(swiperRefDay, userDay.value, 4)
    }
    
    if (month != 1) centerSelectedDate(swiperRefMonth, month, 2)

}

// @realIndexChange="swiperChange()"
// const swiperChange = () => {}
</script>

<template>
    <div class="date-picker">
        <div class="picker">

            <swiper class="mySwiper" @swiper="setSwiperRefMonth"
                :centeredSlidesBounds="true"
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
                :centeredSlidesBounds="true"
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
    /* background-color: #F3F3F3; */
    background: #fff;
}

.picker {
    padding: 10px 0;
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
    display: inline-block;
    padding: 3px 5px;
    border-radius: 100%;
}
</style>