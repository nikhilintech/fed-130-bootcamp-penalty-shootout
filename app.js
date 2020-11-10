

var team1 = {
    name:'Manchester United',
    goals:[],
    score:0
};
var team2 = {
    name:'Barcelona',
    goals:[],
    score:0
};
var turn;
window.onload = ()=>{
    selecTurn();
    updateButtonText();
    updateScore();
    updateNames();
}
var selecTurn = () =>{
    turn = Math.round(Math.random());
}
var updateButtonText = () =>{
    var button = document.getElementById("strike-button");
    var result  = document.getElementById("result");
    result.style.visibility = "";
    if(team1.goals.length == 5 && team2.goals.length == 5){
        button.remove(); //delete the strike button
        // check if match is draw
        result.textContent = team1.score === team2.score? `It is a draw`:`${team1.score>team2.score?team1.name:team2.name} Wins`;
    }else{
        // check if the strike is over
        turn = team1.goals.length === 5? 1: team2.goals.length === 5?0: turn;
        button.textContent = `Strike (${turn===1?team2.name:team1.name})`;
    }
    console.log(turn);
}
var updateScore = ()=>{
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    updateRuns();
    
}
var updateRuns = () =>{
    var teamOneRunsElement = document.getElementById("team-1-round-runs").children;
    
    var teamTwoRunsElement = document.getElementById("team-2-round-runs").children;
    team1.goals.forEach((run,index)=>{
        (run === 1)?
        teamOneRunsElement[index].style.background="green":
        teamOneRunsElement[index].style.background="red";
    });
    team2.goals.forEach((run,index)=>{
        (run === 1)?
        teamTwoRunsElement[index].style.background="green":
        teamTwoRunsElement[index].style.background="red";
    });
    
}
var updateNames = () =>{
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}
var strikeButtonName = () =>{
    var temp = Math.floor(Math.random()*100);
    console.log(temp)
    if(turn === 1){
        (temp<=50)?team2.goals.push(0):team2.goals.push(1); // update runs
        team2.score = calculateScore(team2.goals);
    }else{
        (temp<=50)?team1.goals.push(0):team1.goals.push(1); // update runs
        team1.score = calculateScore(team1.goals);
    }
    updateButtonText();
    updateScore();
}
var calculateScore = (goals) =>{
    var total = 0;
    goals.forEach((item)=>{
        total = total + item;
    })
    return total;    
}

