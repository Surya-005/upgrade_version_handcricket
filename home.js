let finger = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
let playername;
let summary = {
    players: {
        player1: '',
        player2: ''
    },
    toss: {
        tosswon: '',
        decition: ''
    },
    firsthalf: {
        score: '',
        opponent_need: ''
    },
    secondhalf: {
        opponentscore: '',
        result: ''
    }
}
// toss
let toss_decition = document.querySelector('.toss_decition')
//odd or even button
let sub_o_e = document.getElementById('submit')
let tossstart = document.getElementById('toss')
//toss six buttons
let buttons = document.querySelector('.buttons')
// player_profile
let player_profile = document.querySelector('.player_profile')
//computer value for toss(odd or even)
let comv = document.querySelector('#cv');
//human value for toss(odd or even)
let humv = document.querySelector('#hv');
//computer value + human value
let oddoreven = document.querySelector('#ooe');
//toss result who won the toss
let toss_result = document.querySelector('#toss_result');
//batsman decision after toss won
let tosswon = document.getElementById('tosswon')
//computer decision array
let computer_tosswon = ['batting', 'bowling']
//this is the button of retoss
let computer_tosswon_decition = document.querySelector('.computer_tosswon')//computer decision after toss won
var finalval;
let computer_decition;
let human_decision;
let batsman;
let bowler;
let human_what_to_do = document.querySelector('.human_what_to_do');
let tossdetails = document.querySelector('.tossdetails');
// first half
let player1 = document.querySelector('#humanScore')
let player2 = document.querySelector('#computerbowl')
let scoreboard = document.getElementById('scoreBoard')
let firstHalfResult = document.getElementById('first_half_result')
let runsneed = document.getElementById('runsneed')
scoreboard.innerHTML = 0;
//target run to win
let towin
// secondhalf
let firstHalfScore = document.getElementById('first_half_score')
let playertwo = document.querySelector('#humanbowl')
let playerone = document.querySelector('#computerScore')
let secondHalfResult = document.getElementById('second_half_result')
let secondscoreboard = document.getElementById('secondscoreBoard')
secondscoreboard.innerHTML = 0;
let need = document.getElementById('need')
let firsthalf_batsman_score = document.querySelector('#first_half #batsman_score')
let secondhalf_batsman_score = document.querySelector('#second_half #batsman_score')
let firsthalf_button = document.querySelectorAll('#gamebutton button')
let secondhalf_button = document.querySelectorAll('#bowlbutton button')

function aboutopen() {
    document.querySelector('.about ol').style.display = 'flex'
}
function closebutton(class_name) {
    document.querySelector(`.${class_name}`).style.display = 'none'
}
function gototoss(e) {
    playername = document.getElementById('player_name').value;
    if (playername) {
        e.preventDefault();
        document.querySelector('.popup').style.display = 'flex';
        document.querySelector('.entiretoss').style.display = 'flex';
        summary.players.player1 = playername;
        summary.players.player2 = 'computer';
        document.querySelector('.popup .playername').innerHTML = playername.toUpperCase()
        document.querySelector('.player1 p').innerHTML = playername.toUpperCase()
        document.querySelector('.score .playername').innerHTML = playername.toUpperCase()
        toss_decition.style.display = 'flex'
        document.querySelector('.landing_page').style.display = 'none'
        player_profile.style.display = 'flex'
    }
}
function humanvalue(value) {
    let com_decision = document.querySelector('.com_decision');
    toss_decition.style.display = 'none'
    finalval = value;
    document.querySelector('.hum_decision').innerHTML = `(${value})`;
    value == 'odd' ? com_decision.innerHTML = '(even)' : com_decision.innerHTML = '(odd)';
    buttons.style.display = 'flex';
}
//toss number button
function toss(e) {
    //here e refers current event for example button
    btn = e.target.innerHTML
    let computervalue = Math.floor((Math.random() * 7))
    buttons.style.display = 'none'
    toss_decition.style.display = 'none'
    humv.setAttribute('src', `./gameImages/fingers/${finger[btn]}.png`);
    comv.setAttribute('src', `./gameImages/fingers/${finger[computervalue]}.png`);
    result_oddoreven = Number(btn) + Number(computervalue)
    let result = ''
    document.querySelector('.result').style.display = 'flex'
    if (result_oddoreven == 0) {
        oddoreven.innerHTML = "here 0 consider as even"
    }
    else if (result_oddoreven % 2 == 0) {
        oddoreven.innerHTML = result_oddoreven + "  It Is Even"
        result = 'even'
    }
    else { oddoreven.innerHTML = result_oddoreven + "  It Is Odd"; result = 'odd' }
    if (finalval == result) {
        document.querySelector('.result #toss_result').innerHTML = 'you won the toss';
        toss_result.innerHTML = 'you won the toss'
        summary.toss.tosswon = `${playername} won the toss`
        tosswon.style.display = 'block'
        computer_tosswon_decition.innerHTML = '';
    }
    else {
        document.querySelector('.result #toss_result').innerHTML = 'computer won the toss';
        toss_result.innerHTML = 'computer won the toss'
        summary.toss.tosswon = `computer won the toss`
        computer_decition = computer_tosswon[Math.floor(Math.random() * 2)];
        document.querySelector('.result .computer_tosswon').innerHTML = `computer choose to ${computer_decition}`;
        computer_tosswon_decition.innerHTML = `computer choose to ${computer_decition}`;
        tosswon.style.display = 'none'
        computer_decition == 'batting' ? setTimeout(bowling, 3000, playername, 'bat first') : setTimeout(batting, 3000, playername, 'bowl first')
        document.querySelector('#toss h1').style.display = 'none'
    }
}
function batting(plname, decision) {
    document.querySelector('.popup').style.display = 'flex';
    document.querySelector('.entiretoss').style.display = 'none'
    document.getElementById('first_half').style.display = 'flex'
    document.querySelector('.playername_').innerHTML = plname.toUpperCase()
    document.querySelector('#first_half .score .playername').innerHTML = playername.toUpperCase()
    human_decision = 'batting';
    batsman = playername;
    bowler = 'computer';
    summary.toss.decition = 'choose ' + decision
    tossdetails.innerHTML = `${toss_result.innerHTML} and ${summary.toss.decition}`
    document.querySelector('#first_half .hum_decision').innerHTML = `(${human_decision})`;
    human_decision == 'batting' ? document.querySelector('#first_half .com_decision').innerHTML = '(bowling)' : document.querySelector('#first_half .com_decision').innerHTML = '(batting)';
    document.querySelector('.who_plays_batting_in_firsthalf').innerHTML = batsman;
    human_what_to_do.innerHTML = 'so you want to put values. if your value matches to computer value you will out.';
    for (let i = 0; i < firsthalf_button.length; i++) {
        firsthalf_button[i].style.cssText = 'background:url("./gameimages/bat.png") center/contain  no-repeat'
    }
}
function bowling(plname, decision) {
    document.querySelector('.score .playername').innerHTML = playername.toUpperCase()
    document.querySelector('.popup').style.display = 'flex';
    document.querySelector('.entiretoss').style.display = 'none'
    document.getElementById('first_half').style.display = 'flex'
    document.querySelector('#first_half .score .playername').innerHTML = playername.toUpperCase()
    document.querySelector('#first_half .hum_decision').innerHTML = `(${decision})`;
    decision == 'bowling' ? document.querySelector('#first_half .com_decision').innerHTML = '(batting)' : document.querySelector('#first_half .com_decision').innerHTML = '(bowling)';
    human_decision = 'bowling';
    document.querySelector('.playername_').innerHTML = plname.toUpperCase()
    batsman = 'computer';
    bowler = playername
    summary.toss.decition = 'choose ' + decision
    tossdetails.innerHTML = `${summary.toss.tosswon} and ${summary.toss.decition}`
    document.querySelector('#first_half .hum_decision').innerHTML = `(${human_decision})`;
    human_decision == 'bowling' ? document.querySelector('#first_half .com_decision').innerHTML = '(batting)' : document.querySelector('#first_half .com_decision').innerHTML = '(bowling)';
    document.querySelector('.who_plays_batting_in_firsthalf').innerHTML = batsman;
    human_what_to_do.innerHTML = 'now you need to guess the value of computer that is the only way to out computer';
    for (let i = 0; i < firsthalf_button.length; i++) {
        firsthalf_button[i].style.cssText = 'background:url("./gameimages/redball.png") center/contain  no-repeat'
    }
}
function score(humanvalue) {
    let hums = humanvalue.target.innerHTML
    let coms = Math.floor((Math.random() * 7))
    player1.setAttribute('src', `./gameImages/fingers/${finger[hums]}.png`);
    player2.setAttribute('src', `./gameImages/fingers/${finger[coms]}.png`);
    if (Number(hums) == coms) {
        document.getElementById('gamebutton').style.display = 'none'
        firstHalfResult.innerHTML = scoreboard.innerHTML == 0 ? `${batsman} duck out` : `${batsman} out`
        towin = Number(scoreboard.innerHTML) + 1;
        summary.firsthalf.score = `${batsman} scored ${towin - 1} ${(towin - 1) <= 1 ? 'run' : 'runs'}`;
        runsneed.innerHTML = `${bowler} need ${towin} ${towin <= 1 ? 'run' : 'runs'} to win`;
        summary.firsthalf.opponent_need = runsneed.innerHTML;
        setTimeout(secondhalf, 2000)
        firsthalf_batsman_score.innerHTML = 'out'
        firsthalf_batsman_score.style.cssText = 'color:gold;text-shadow:2px 2px black;font-size:4em';
    }
    else {
        if (human_decision == 'batting') {
            scoreboard.innerHTML = Number(scoreboard.innerHTML) + Number(hums)
            firsthalf_batsman_score.innerHTML = hums;
            if (firsthalf_batsman_score.innerHTML == 4 || firsthalf_batsman_score.innerHTML == 6) {
                firsthalf_batsman_score.style.cssText = 'color:rgb(2, 252, 2);;font-size:4em;text-shadow:2px 2px black'
            }
            else {
                firsthalf_batsman_score.style.cssText = 'font-size:3em;color:whitesmoke'
            }
        }
        else {
            scoreboard.innerHTML = Number(scoreboard.innerHTML) + coms;
            firsthalf_batsman_score.innerHTML = coms;
            if (firsthalf_batsman_score.innerHTML == 4 || firsthalf_batsman_score.innerHTML == 6) {
                firsthalf_batsman_score.style.cssText = 'color:rgb(2, 252, 2);font-size:4em;text-shadow:2px 2px black'
            }
            else {
                firsthalf_batsman_score.style.cssText = 'font-size:3em;color:whitesmoke'
            }
        }
    }
}
function secondhalf() {
    document.querySelector('#second_half .score .playername').innerHTML = playername.toUpperCase()
    document.getElementById('first_half').style.display = 'none'
    document.querySelector('.popup').style.display = 'flex'
    document.querySelector('.popup .tossdetails').innerHTML = '';
    document.querySelector('.popup .popup_greetings').innerHTML = '';
    document.getElementById('second_half').style.display = 'flex';
    firstHalfScore.innerHTML = `${summary.firsthalf.score} and ${summary.firsthalf.opponent_need}`;
    batsman == playername ? batsman = 'computer' : batsman = playername;
    bowler == playername ? bowler = 'computer' : bowler = playername;
    document.querySelector('.player_name').innerHTML = playername.toUpperCase();
    document.querySelector('.who_plays_batting_in_secondhalf').innerHTML = batsman;
    if (batsman == playername) {
        human_what_to_do.innerHTML = 'so you want to put values. if your value matches to computer value you will out.';
        document.querySelector('#second_half .hum_decision').innerHTML = `(batting)`;
        document.querySelector('#second_half .com_decision').innerHTML = `(bowling)`;
        for (let i = 0; i < secondhalf_button.length; i++) {
            secondhalf_button[i].style.cssText = 'background:url("./gameimages/bat.png") center/contain  no-repeat'
        }
    }
    else {
        human_what_to_do.innerHTML = 'now you need to guess the value of computer that is the only way to out computer';
        document.querySelector('#second_half .hum_decision').innerHTML = `(bowling)`;
        document.querySelector('#second_half .com_decision').innerHTML = `(batting)`;
        for (let i = 0; i < secondhalf_button.length; i++) {
            secondhalf_button[i].style.cssText = 'background:url("./gameimages/redball.png") center/contain  no-repeat'
        }
    }
}
function ball(event) {
    let humscore = event.target.innerHTML
    let comscore = Math.floor((Math.random() * 7))
    playertwo.setAttribute('src', `./gameImages/fingers/${finger[humscore]}.png`);
    playerone.setAttribute('src', `./gameImages/fingers/${finger[comscore]}.png`);

    document.querySelector('.popup #first_half_result').innerHTML = '';
    document.querySelector('.popup .closebutton').style.display = 'none';
            
    if (Number(humscore) == comscore) {
        need.innerHTML = ''
        firstHalfScore.innerHTML = ''
        document.querySelector('.match_summary_button').style.display = 'flex'
        summary.secondhalf.opponentscore = `${batsman} scored ${secondscoreboard.innerHTML} ${(secondscoreboard.innerHTML) <= 1 ? 'run' : 'runs'} `;
        document.getElementById('bowlbutton').style.display = 'none'
        secondhalf_batsman_score.innerHTML = 'out'
        secondhalf_batsman_score.style.cssText = 'color:gold;text-shadow:2px 2px black;font-size:4em';
        if (secondscoreboard.innerHTML == towin - 1) {
            secondHalfResult.innerHTML = 'match draw'
            summary.secondhalf.result = secondHalfResult.innerHTML
            setTimeout(()=>{
                document.querySelector('.popup').style.display = 'flex';
                document.querySelector('.popup .human_what_to_do').innerHTML =secondHalfResult.innerHTML;    
                document.querySelector('.popup_message').style.cssText = 'height:40%;background: url("./gameImages/win.gif")center/contain;justify-content: end';
                document.querySelector('.popup_message .human_what_to_do').style.cssText= 'color:red;font-weight:900;font-size:2em';
            },2000)    
        }
        else
            secondHalfResult.innerHTML = `${bowler} won by ${towin - secondscoreboard.innerHTML} ${(towin - secondscoreboard.innerHTML) <= 1 ? 'run' : 'runs'}`;
            summary.secondhalf.result = secondHalfResult.innerHTML
            setTimeout(()=>{
                document.querySelector('.popup').style.display = 'flex';
                document.querySelector('.popup .human_what_to_do').innerHTML =secondHalfResult.innerHTML;    
                document.querySelector('.popup_message').style.cssText = 'height:40%;background: url("./gameImages/win.gif")center/contain;justify-content: end';
                document.querySelector('.popup_message .human_what_to_do').style.cssText= 'color:red;font-weight:900;font-size:2em';
            },2000)
        }
    else {
        let needs;
        if (human_decision == 'batting') {
            secondscoreboard.innerHTML = Number(secondscoreboard.innerHTML) + Number(comscore);
            needs = towin - Number(secondscoreboard.innerHTML);
            need.innerHTML = `${batsman} need ${needs} ${needs <= 1 ? 'run' : 'runs'} to win`;
            secondhalf_batsman_score.innerHTML = comscore
            if (secondhalf_batsman_score.innerHTML == 4 || secondhalf_batsman_score.innerHTML == 6) {
                secondhalf_batsman_score.style.cssText = 'color:rgb(2, 252, 2);font-size:4em;text-shadow:2px 2px black'
            }
            else {
                secondhalf_batsman_score.style.cssText = 'font-size:3em;color:whitesmoke'
            }
        }
        else {
            secondscoreboard.innerHTML = Number(secondscoreboard.innerHTML) + Number(humscore);
            needs = towin - Number(secondscoreboard.innerHTML);
            need.innerHTML = `${batsman} need ${needs} ${needs <= 1 ? 'run' : 'runs'} to win`;
            secondhalf_batsman_score.innerHTML = humscore
            if (secondhalf_batsman_score.innerHTML == 4 || secondhalf_batsman_score.innerHTML == 6) {
                secondhalf_batsman_score.style.cssText = 'color:rgb(2, 252, 2);;font-size:4em;text-shadow:2px 2px black'
            }
            else {
                secondhalf_batsman_score.style.cssText = 'font-size:3em;color:whitesmoke'
            }
        }
        if (secondscoreboard.innerHTML >= towin) {
            document.querySelector('.match_summary_button').style.display = 'flex'
            secondHalfResult.innerHTML = `${batsman} won the match`;
            summary.secondhalf.opponentscore = `${batsman} scored ${secondscoreboard.innerHTML} ${(secondscoreboard.innerHTML) <= 1 ? 'run' : 'runs'}`
            summary.secondhalf.result = secondHalfResult.innerHTML
            document.getElementById('bowlbutton').style.display = 'none'
            need.innerHTML = ''
            firstHalfScore.innerHTML = ''
            setTimeout(()=>{
                document.querySelector('.popup').style.display = 'flex';
                document.querySelector('.popup .human_what_to_do').innerHTML =secondHalfResult.innerHTML;    
                document.querySelector('.popup_message').style.cssText = 'height:40%;background: url("./gameImages/win.gif")center/contain;justify-content: end';
                document.querySelector('.popup_message .human_what_to_do').style.cssText= 'color:red;font-weight:900;font-size:2em';
            },2000)
        }
    }
}
// match summary
function matchSummary() {
    document.querySelector('.popup').style.display = 'none'
    document.getElementById('second_half').style.display = 'none'
    document.querySelector('.match_summary').style.display = 'flex'
    document.getElementById('toss_summary').innerHTML = summary.toss.tosswon
    document.getElementById('tossDecition_summary').innerHTML = summary.toss.decition
    document.getElementById('first_half_summary').innerHTML = summary.firsthalf.score
    document.getElementById("first_half_opponentneed_summary").innerHTML = summary.firsthalf.opponent_need
    document.getElementById("second_half_summary").innerHTML = summary.secondhalf.opponentscore
    document.getElementById("result_summary").innerHTML = summary.secondhalf.result
}
// home button
function home() {
    location.reload()
}

