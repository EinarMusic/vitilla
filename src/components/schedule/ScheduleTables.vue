<template>
    <div class="calender">
        <div class="individual-games">
            <div class="team-matchup" v-for="i in 15">

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
                    <div class="matchup-date">8:00 PM</div>
                    <!-- <div class="matchup-result">ÁGU 3 - ESC 1</div> -->
                    <!-- <div class="matchup-pitchers">C. Rodon vs T. Bibee</div> -->
                    <!-- <div class="winner-pitcher">C. Rodon</div> -->
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.calender {
    padding: 0 0 3px 0;
    background-color: #F3F3F3;
}

.team-matchup {
    display: flex;
    align-items: center;
    
    margin-top: 2px;
    padding: 15px 0 15px 15px;

    background-color: white;
}

.team-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80px;
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
    display: flex;
    flex: 1;

    margin-left: 20px;

    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.4px;
}

.game-info .matchup-date, .game-info .matchup-result {
    margin-right: 20px;
}
</style>