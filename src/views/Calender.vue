<script setup>
import ScheduleTables from '../components/schedule/ScheduleTables.vue';
import DatePicker from '../components/schedule/DatePicker.vue';

import { ref } from "vue"
import { months, currentDate, generateDatePicker } from "../composables/schedule.js"

const schedule = ref({monthsDisplay: months})
const [currentYear, currentMonth, currentDay] = currentDate

schedule.value.daysDisplay = generateDatePicker(currentYear, currentMonth)

const updateDatePicker = (month) => {
    schedule.value.daysDisplay = generateDatePicker('2024', month)
}

</script>

<template>
  <DatePicker class="date-picker"
    :schedule="schedule"
    :currentYear="currentYear"
    :currentMonth="currentMonth"
    :currentDay="currentDay"
    v-on:updateDatePicker="updateDatePicker"
  />
  <ScheduleTables class="schedule"/>
</template>

<style scoped>
.date-picker {
    position: fixed;
    top: 0;

    width: 100%;
    z-index: 1;

    border-bottom: 1px solid #F3F3F3;
}
.schedule {
    margin-top: 119px;
}
</style>
