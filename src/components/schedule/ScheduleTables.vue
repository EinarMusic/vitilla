<script setup>

</script>

<template>
    <div class="calender">
        <div class="individual-games">

            <div class="team-matchup" v-for="i in 15">

                <div class="wrap-info">

                    <div class="team-info">
                        <div class="visit-team">
                            <img src="https://midfield.mlbstatic.com/v1/team/119/spots/72" alt="">
                        </div>
                        <div>en</div>
                        <div class="home-team">
                            <img src="https://midfield.mlbstatic.com/v1/team/110/spots/72" alt="">
                        </div>
                    </div>

                    <div class="wrap-game-info">
                        <div class="game-info">
                            <div class="matchup-date">8:00 PM</div>
                            <div class="matchup-result">ÁGU 3 - ESC 1</div>
                            <div class="winner-pitcher">C. Rodon</div>
                            <div class="matchup-pitchers">C. Rodon vs T. Bibee</div>
                        </div>
                    </div>  

                </div>

            </div>
            
        </div>
    </div>
</template>

<style scoped>

.calender {
    margin-top: 108px;
    padding: 0 0 3px 0;
    background-color: #F3F3F3;
}

.wrap-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin-top: 2px;

    background-color: white;
}

.team-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-left: 15px;

    width: 80px;
    font-size: 12px;
}

.wrap-game-info, .team-info {
    padding: 15px 0;
}

.visit-team, .home-team, .visit-team img, .home-team img {
    width: 24px;
    height: 24px;
}

.wrap-game-info {
    display: flex;
    flex-wrap: nowrap;
    flex: 1;

    overflow: scroll;
    white-space: nowrap;

    margin-left: 20px;

    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.4px;
}

.game-info div {
    display: inline;
    overflow-x: auto;
    white-space: nowrap;

    margin-right: 20px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.wrap-game-info::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.wrap-game-info {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>