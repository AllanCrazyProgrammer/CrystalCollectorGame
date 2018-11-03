var randomNum = Math.floor((Math.random() * 60) + 19);
var totalPoints = 0;
var wins = 0;
var loses = 0;



function addPoints() {
    totalPoints += randomAtk;
}

function result() {
    if (totalPoints > randomNum) {
        randomNum = Math.floor((Math.random() * 60) + 19);
        $("#rndNum").text(randomNum);
        loses++;
        totalPoints = 0;
        $("#score").text(0);
        $("#losses").text("Losses: " + loses);
    }
    else if(totalPoints === randomNum){
        randomNum = Math.floor((Math.random() * 60) + 19);
        $("#rndNum").text(randomNum);
        wins++;
        totalPoints = 0;
        $("#score").text(0);
        $("#wins").text("Wins: " + wins);
    }
}


$("#btn-1").click(function () {

    randomAtk = Math.floor((Math.random() * 12) + 1);
    console.log(randomAtk);
    addPoints();
    $("#score").text(totalPoints);
    result();
});

$("#btn-2").click(function () {
    randomAtk = Math.floor((Math.random() * 6) + 1);
    console.log(randomAtk);
    addPoints();
    $("#score").text(totalPoints);
    result();
});

$("#btn-3").click(function () {
    randomAtk = Math.floor((Math.random() * 20) + 1);
    console.log(randomAtk);
    addPoints();
    $("#score").text(totalPoints);
    result();
});

$("#btn-4").click(function () {
    randomAtk = Math.floor((Math.random() * 3) + 1);
    console.log(randomAtk);
    addPoints();
    $("#score").text(totalPoints);
    result();
});

document.getElementById("rndNum").innerHTML = randomNum;
