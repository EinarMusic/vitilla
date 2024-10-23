<template>
    <div class="calender" v-for="i in 7">
        <div class="game-date">
            <div class="date-label">Viernes, 18 de Octubre, 2024</div>
        </div>
        <div class="individual-games">
            <div class="team-matchup" v-for="i in 1">

                <div class="team-info">
                    <div class="visit-team">
                        <img src="https://midfield.mlbstatic.com/v1/team/119/spots/72" alt="">
                    </div>
                    <div>en</div>
                    <div class="home-team">
                        <img src="https://midfield.mlbstatic.com/v1/team/110/spots/72" alt="">
                    </div>
                </div>

                <div class="game-info">
                    <!-- <div class="matchup-date">8:00 PM</div> -->
                    <div class="matchup-result">ÁGU 3 - ESC 1</div>
                    <!-- <div class="matchup-pitchers">C. Rodon vs T. Bibee</div> -->
                    <!-- <div class="winner-pitcher">C. Rodon</div> -->
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.calender {
    background-color: #F3F3F3;
    padding: 0 0 3px 0;
}

.game-date {
    text-align: start;
    padding: 15px;

    font-size: 16px;
    font-weight: 700;

    text-wrap: balance;
}

.team-matchup {
    display: flex;
    align-items: center;
    
    padding: 15px;
    margin-top: 2px;

    background-color: white;
}

.game-info, .team-info {
    display: flex;
}

.team-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80px;
    margin-right: 20px;
    font-size: 12px;
}

.visit-team, .home-team {
    width: 24px;
    height: 24px;
}
.visit-team img, .home-team img{
    width: 24px;
    height: 24px;
}

.game-info {
    letter-spacing: 0.4px;
    font-size: 14px;
    font-weight: 500;
}

.game-info .matchup-date, .game-info .matchup-result {
    margin-right: 20px;
}
</style>