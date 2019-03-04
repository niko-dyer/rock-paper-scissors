var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var choices = ['Rock', 'Paper', 'Scissors']

rock.addEventListener('click', function() {
    var random = Math.floor(Math.random() * choices.length)
    var choice = choices[random]
    document.getElementById('user').innerHTML = 'User: Rock'
    if (choice == 'Rock') {
        document.getElementById('result').innerHTML = 'Tie'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    } else if (choice == 'Scissors') {
        document.getElementById('result').innerHTML = 'You Win!'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    } else {
        document.getElementById('result').innerHTML = 'You Lose!'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    }
})

paper.addEventListener('click', function() {
    var random = Math.floor(Math.random() * choices.length)
    var choice = choices[random]
    document.getElementById('user').innerHTML = 'User: Paper'
    if (choice == 'Paper') {
        document.getElementById('result').innerHTML = 'Tie'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    } else if (choice == 'Rock') {
        document.getElementById('result').innerHTML = 'You Win!'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    } else {
        document.getElementById('result').innerHTML = 'You Lose!'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    }
})

scissors.addEventListener('click', function() {
    var random = Math.floor(Math.random() * choices.length)
    var choice = choices[random]
    document.getElementById('user').innerHTML = 'User: Scissors'
    if (choice == 'Scissors') {
        document.getElementById('result').innerHTML = 'Tie'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    } else if (choice == 'Paper') {
        document.getElementById('result').innerHTML = 'You Win!'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    } else {
        document.getElementById('result').innerHTML = 'You Lose!'
        document.getElementById('opponent').innerHTML = 'Opponent: ' + choice
    }
})