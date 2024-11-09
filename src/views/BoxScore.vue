<script setup>
import StandingsTable from "../components/standings/StandingsTable.vue"

import { players } from "../components/box.js"
import { ref } from "vue"

const tableHeadBoxScore = ['MIN', 'FGA', 'FGM', 'FG%', '3PM', '3PA', '3P%', 'FTM', 'FTA', 'FT%', 'OREB', 'DREB', 'REB', 'AST', 'BLK', 'STL', 'PF', 'TOP', 'PTS', '+/-']

const gamePlayerScore = ref([])
players.value.forEach((pl) => {
    gamePlayerScore.value.push({statistics: Object.values(pl.statistics)})
})
</script>

<template>
    <div>
        <div class="wrap-tables">

            <div class="wrap-table-left-side">
                <StandingsTable class="table-left-side">
                    <template #thead>
                        <th class="left-table-head">PLAYER</th>
                        <th v-for="player in players" class="left-table-head main-left-th" >
                            <span class="info-name-pl">{{player.nameI}}</span>    
                            <span>{{player.position}}</span>    
                        </th>
                    </template>
                </StandingsTable>
            </div>
            
            <div class="wrap-table-right-side">
                <StandingsTable class="table-right-side">
                    <template #thead>
                        <th v-for="table_h in tableHeadBoxScore">{{ table_h }}</th>
                    </template>

                    <template #tbody>
                        <tr v-for="pl in gamePlayerScore">
                            <td v-for="p in pl.statistics">
                                {{ p }}
                            </td>
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
    min-width: 110px;
}

.left-table-head:first-child {
    font-size: 10px;
    padding: 10px 14px;
    white-space: nowrap;
}

.info-name-pl {
    color: #0268d6;
    margin-right: 5px;
}
.main-left-th {
    font-size: 14px;
    color: black;
}

.left-table-head {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10px;
    white-space: nowrap;

    font-weight: 500;
}

.main-left-th, .table-right-side td {
    height: 55px;
}
.table-right-side th {
    padding: 10px 0;
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

.table-right-side th {
    font-size: 10px;
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