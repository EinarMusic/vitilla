<script setup>
import StandingsTable from '../components/standings/StandingsTable.vue';

import { ref } from "vue"

const standing = ref(null)

standing.value = [
    {   
            logo: 'https://midfield.mlbstatic.com/v1/team/119/spots/72',
            name: 'LAD',   
            stats: {
                W: '90',
                L: '87',
                PTC: '.500',
                WCGB: '-',
                L10: '90',
                STRK: '90',
                RS: '90',
                RA: '90',
                DIFF: '90'
            }
    },
    {
            logo: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
            name: 'BAL',
            stats: {
                W: '80',
                L: '77',
                PTC: '.400',
                WCGB: '-',
                L10: '80',
                STRK: '80',
                RS: '80',
                RA: '80',
                DIFF: '80'
            }
    }
]

</script>

<template>
    <div>
        <div class="wrap-tables">

            <div class="wrap-table-left-side">
                <StandingsTable class="table-left-side">
                    <template #thead>
                        <th class="left-table-head">AL LEADERS</th>
                        <th v-for="(stand, index) in standing" class="left-table-head" >
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

    margin-top: 108px;

    /* border: 1px solid red; */
    padding-top: 10px;
}

/* left */
.wrap-table-left-side {
    min-width: 90px;

    /* border: 1px solid red; */
}

.left-table-head:first-child {
    font-size: 10px;
    padding: 0px 14px;
    white-space: nowrap;
}
.left-table-head {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    padding: 11px 14px;
}

.left-table-head .logo-team-img-wrap {
    margin-right: 10px;
}

.left-table-head, .table-right-side tr, .table-right-side th {
    border-bottom: 1px solid black;
}
/* right */
.wrap-table-right-side {
    overflow: scroll;
    white-space: nowrap;

    background-color: white;

    /* border: 1px solid red; */
    /* margin-top: px; */
}
.table-right-side {
    display: inline;
    overflow-x: auto;

    white-space: nowrap;
}

.table-right-side td {
    font-size: 14px;
    padding: 12.5px 18px;
}

.table-right-side tr:hover {
    background-color: rgb(243, 243, 243);
}
.table-left-side th:hover {
    background-color: rgb(243, 243, 243);
}

th {
    font-size: 10px;
    /* font-size: 14px; */
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