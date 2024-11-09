<script setup>
import YearPicker from '../components/YearPicker.vue';
import StandingsTable from '../components/standings/StandingsTable.vue';

import { standing } from "../components/standings/stand.js"
import { ref } from "vue"

const tableHeadStand = ['W', 'L', 'PTC', 'WCGB', 'L10', 'STRK', 'RS', 'RA', 'DIFF']

const eventStanding = ref([])
standing.value.forEach((st) => {
    eventStanding.value.push({stats: Object.values(st.stats)})
})

</script>

<template>
    <div>
        <YearPicker class="date-picker" />
        <div class="wrap-tables">

            <div class="wrap-table-left-side">
                <StandingsTable class="table-left-side">
                    <template #thead>
                        <th class="left-table-head">AL LEADERS</th>
                        <th v-for="stand in standing" class="left-table-head main-left-th" >
                            <div class="logo-team-img-wrap">
                                <img :src="stand.logo" alt="">
                            </div>
                            <span>{{stand.name}}</span>    
                        </th>
                    </template>
                </StandingsTable>
            </div>
            
            <div class="wrap-table-right-side">
                <StandingsTable class="table-right-side">
                    <template #thead>
                        <th>
                            <p v-for="stand in tableHeadStand">
                                {{ stand }}
                            </p>
                        </th>
                    </template>

                    <template #tbody>
                        <tr v-for="stand in eventStanding">
                            <div>
                                <td v-for="st in stand.stats">
                                    {{ st }}
                                </td>
                            </div>
                        </tr>
                    </template>
                </StandingsTable>
            </div>
        </div>
    </div>
</template>

<style scoped>
.date-picker {
    z-index: 9999;
}
.wrap-tables {
    display: flex;

    width: 100%;
    margin-top: 59px;

    background-color: #F3F3F3;
    border-bottom: 5px solid #F3F3F3;
}

/* left */
.wrap-table-left-side {
    min-width: 110px;
}

.left-table-head:first-child {
    font-size: 10px;
    padding: 10px 14px;
    white-space: nowrap;
}

.main-left-th {
    font-size: 14px;
    margin-right: 5px;
}

/*  */
.left-table-head {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10px;
    margin: 5px 0px 0 5px;

    z-index: 2;
    
    white-space: nowrap;

    background-color: white;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    border-right: 5px solid #F3F3F3;
}

 /*  */ /*  */
.wrap-table-right-side {
    margin-top: 5px;
}

.table-right-side div {
    display: inline-flex;
    justify-content: center; 
    align-items: center;

    background-color: white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    height: 55px;
    margin: 5px 5px 0 5px;
}
.table-right-side div:hover {
    background-color: rgb(243, 243, 243);
}

.main-left-th {
    height: 55px;
}

.table-right-side th {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    width: 100%;
    font-size: 10px;
    padding-left: 5px;

    background-color: white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 5px solid #F3F3F3;
}
.table-right-side p { 
    width: 100%;
    padding: 10px 0;
}

.left-table-head .logo-team-img-wrap {
    margin-right: 10px;
}

/* right */
.wrap-table-right-side {
    overflow: scroll;
    white-space: nowrap;
}
.table-right-side {
    display: inline;
    overflow-x: auto;

    white-space: nowrap;
}

.table-right-side td {
    font-size: 14px;
    padding: 0 18px;
}

.logo-team-img-wrap, .logo-team-img-wrap img {
    height: 24px;
    width: 24px;
}


/* Hide scrollbar for Chrome, Safari and Opera */
.wrap-table-right-side::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.wrap-table-right-side {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>