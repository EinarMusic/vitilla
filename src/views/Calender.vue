<script setup>
import DatePicker from '../components/schedule/DatePicker.vue';
import NoGame from '../components/schedule/NoGame.vue';
import ScheduleTables from '../components/schedule/ScheduleTables.vue';

import { ref } from "vue"
import { months, currentDate, generateDatePicker } from "../composables/schedule.js"

const schedule = ref({monthsDisplay: months})
const [currentYear, currentMonth, currentDay] = currentDate

schedule.value.daysDisplay = generateDatePicker(currentYear, currentMonth)

const updateDatePicker = (month, day) => {
    schedule.value.daysDisplay = generateDatePicker('2024', month)
    getListOfGame('2024', month, day)
}

// we need month with day.
const getListOfGame = (year, month, day) => {
  // getDate(month, day)
  console.log(year, month, day)
}

</script>

<template>
  <DatePicker
    :schedule="schedule"
    :currentYear="currentYear"
    :currentMonth="currentMonth"
    :currentDay="currentDay"
    v-on:updateDatePicker="updateDatePicker"
  />

  <NoGame v-if="false"/>
  <ScheduleTables />
</template>

<style scoped>
</style>
