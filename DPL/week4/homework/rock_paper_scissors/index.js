var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var choices = ['Rock', 'Paper', 'Scissors']

rock.addEventListener('click', function() {
    var random = Math.floor(Math.random() * choices.length)
    var choice = choices[random]
    document.getElementById('user').innerHTML = 'User: Rock'
    document.getElementById('rock-img').style.display = "flex"
    if (choice == 'Rock') {
        document.getElementById('result').innerHTML = 'Tie'
        document.getElementById('result').style.color = 'blue'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    } else if (choice == 'Scissors') {
        document.getElementById('result').innerHTML = 'You Win!'
        document.getElementById('result').style.color = 'green'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
        document.getElementById('scissors-img').style.display = 'flex'
    } else {
        document.getElementById('result').innerHTML = 'You Lose!'
        document.getElementById('result').style.color = 'red'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
        document.getElementById('paper-img').style.display = 'flex'
    }
    setTimeout(function(){
        window.location.reload(1);
     }, 3000)
})

paper.addEventListener('click', function() {
    var random = Math.floor(Math.random() * choices.length)
    var choice = choices[random]
    document.getElementById('user').innerHTML = 'User: Paper'
    document.getElementById('paper-img').style.display = 'flex';
    if (choice == 'Paper') {
        document.getElementById('result').innerHTML = 'Tie'
        document.getElementById('result').style.color = 'blue'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    } else if (choice == 'Rock') {
        document.getElementById('result').innerHTML = 'You Win!'
        document.getElementById('result').style.color = 'green'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
        document.getElementById('rock-img').style.display = "flex";
    } else {
        document.getElementById('result').innerHTML = 'You Lose!'
        document.getElementById('result').style.color = 'red'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
        document.getElementById('scissors-img').style.display = 'flex';
    }
    setTimeout(function(){
        window.location.reload(1);
     }, 3000)
})

scissors.addEventListener('click', function() {
    var random = Math.floor(Math.random() * choices.length)
    var choice = choices[random]
    document.getElementById('user').innerHTML = 'User: Scissors'
    document.getElementById('scissors-img').style.display = 'flex';
    if (choice == 'Scissors') {
        document.getElementById('result').innerHTML = 'Tie'
        document.getElementById('result').style.color = 'blue'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    } else if (choice == 'Paper') {
        document.getElementById('result').innerHTML = 'You Win!'
        document.getElementById('result').style.color = 'green'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
        document.getElementById('paper-img').style.display = 'flex';
    } else {
        document.getElementById('result').innerHTML = 'You Lose!'
        document.getElementById('result').style.color = 'red'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
        document.getElementById('rock-img').style.display = "flex";
    }
    setTimeout(function(){
        window.location.reload(1);
     }, 3000)
})