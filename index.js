let scorecardGuest = document.getElementById("scorecardGuest");
let scorecardHome = document.getElementById("scorecardHome");
let reset = document.getElementById("resetBtn");

scorecardGuest.value = 0;
scorecardHome.value = 0;

let incrementOneHome = document.getElementById("incrementOneHome");
let incrementTwoHome = document.getElementById("incrementTwoHome");
let incrementThreeHome = document.getElementById("incrementThreeHome");

let incrementOneGuest = document.getElementById("incrementOneGuest");
let incrementTwoGuest = document.getElementById("incrementTwoGuest");
let incrementThreeGuest = document.getElementById("incrementThreeGuest");

// FOR HOME SCREEN
incrementOneHome.addEventListener("click", function() {
    scorecardHome.value ++;
});
incrementTwoHome.addEventListener("click", function() {
    scorecardHome.value = Number(scorecardHome.value) + 2;
});
incrementThreeHome.addEventListener("click", function() {
    scorecardHome.value = Number(scorecardHome.value) + 3;
});

// FOR GUEST SCREEN
incrementOneGuest.addEventListener("click", function() {
    scorecardGuest.value ++;
});
incrementTwoGuest.addEventListener("click", function() {
    scorecardGuest.value = Number(scorecardGuest.value) + 2;
});
incrementThreeGuest.addEventListener("click", function() {
    scorecardGuest.value = Number(scorecardGuest.value) + 3;
});

// FOR RESET BUTTON
reset.addEventListener("click", function() {
    scorecardHome.value = 0;
    scorecardGuest.value = 0;
})