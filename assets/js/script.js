
// Brittney start
var money = "$10,000";
var startBtnEl = document.getElementById("btn")

var startGame  = function() {
getPlayerName();
localStorage.setItem("pMoney", money);
localStorage.setItem("pName", getPlayerName());
 window.location.replace(" ");
};

var getPlayerName = function () {
    var name = document.getElementById("username").value;
    // var name = " ";
    // console.log("player " + name);
    return name;
};
startBtnEl.addEventListener("click", startGame);
// Brittney end
