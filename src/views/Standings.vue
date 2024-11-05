<script setup>
import YearPicker from '../components/YearPicker.vue';
import StandingsTable from '../components/standings/StandingsTable.vue';

import { standing } from "../components/standings/stand.js"
</script>

<template>
    <div>
        <YearPicker />
        <div class="wrap-tables">

            <div class="wrap-table-left-side">
                <StandingsTable class="table-left-side">
                    <template #thead>
                        <th class="left-table-head info-label-table">AL LEADERS</th>
                        <th v-for="(stand, index) in standing" class="left-table-head main-left-th" >
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
                        <th>W</th>
                        <th>L</th>
                        <th>PTC</th>
                        <th>WCGB</th>
                        <th>L10</th>
                        <th>STRK</th>
                        <th>RS</th>
                        <th>RA</th>
                        <th>DIFF</th>
                    </template>
                    <template #tbody>
                        <tr v-for="stand in standing">
                            <td>{{stand.stats.W}}</td>
                            <td>{{stand.stats.L}}</td>
                            <td>{{stand.stats.PTC}}</td>
                            <td>{{stand.stats.WCGB}}</td>
                            <td>{{stand.stats.L10}}</td>
                            <td>{{stand.stats.STRK}}</td>
                            <td>{{stand.stats.RS}}</td>
                            <td>{{stand.stats.RA}}</td>
                            <td>{{stand.stats.DIFF}}</td>
                        </tr>
                    </template>
                </StandingsTable>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrap-tables {
    display: flex;
    width: 100%;

    margin-top: 59px;
    background-color: #FFF;
    border-bottom: 2px solid #F3F3F3;
}

/* left */
.wrap-table-left-side {
    min-width: 90px;
}

.left-table-head:first-child {
    font-size: 10px;
    padding: 10px 14px;
    white-space: nowrap;
}
.left-table-head {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 14px;
}

.main-left-th, .table-right-side td {
    height: 55px;
}
.table-right-side th {
    padding: 10px 0;
}

.left-table-head .logo-team-img-wrap {
    margin-right: 10px;
}

/* right */
.wrap-table-right-side {
    overflow: scroll;
    white-space: nowrap;

    /* background-color: white; */
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
.table-right-side tr, .main-left-th {
    border-top: 2px solid #F3F3F3;
}

.table-right-side tr:hover {
    background-color: rgb(243, 243, 243);
}

th {
    font-size: 10px;
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