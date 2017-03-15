var table; // DOM Игровое поле
var gameText = ''; // Коментарий игры
var bet; // сумма ставки
var gamer = new Array();
var winNumbers = new Array();
var betNumbers = 0;
var betInput; //input ставки
var userCount; // счет игрока
var ballance;
var bank = 0; // банк
var kayf; // Коэффицент

var clean;
var start;
var startGame;
var makeBet; // buttons

var newGame;
var betting;
var gameBlock; // blocks

function EmptyField() {
    table.innerHTML = "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
	let number = 1;
	for (let i=0; i<8; i++) {
        	for (let j=0; j<10; j++) {
				table.rows[i].cells[j].innerHTML = number;
				table.rows[i].cells[j].style.background = '-webkit-gradient(radial, 160 30, 43, 150 -50, 480, from(#000000), to(#FFFFFF))';
				table.rows[i].cells[j].addEventListener('click', UserTurn);
				number++;
        	}
    };
    gamer = [];
	winNumbers = [];
	kayf = 0;
	clean.style.display = 'inline-block';
	start.innerHTML = "Старт";
	gameText.innerHTML = "";
};

function Search(array, elem) {
	let count = 0;
	for (let i=0; i<array.length; i++) {
		if (array[i] == elem) {
				count++;
		}
	}
	return count;
};

function UserTurn() {
	if (gamer.length < 10) {
		this.style.background = '-webkit-gradient(radial, 165 0, 0, 238 -257, 465, from(#CC0000), to(#000000))';
    	this.removeEventListener('click', UserTurn);
		gamer.push(this.innerHTML);
		gameText.innerHTML = "Выбрано " + gamer.length + " номеров"
	}
};

function PaintField() {

    if (arguments.length > 0) {
        gameText.innerHTML = arguments[0];
    };
};

function Start() {
    if (gamer.length <= 10) {
		for (let i=0; i<8; i++) {
        	for (let j=0; j<10; j++) {
				table.rows[i].cells[j].removeEventListener('click', UserTurn);
        	}
    };
		this.style.display = 'none';
		clean.style.display = 'none';
		let x = 0;
		let y = 0;
		do {
			x = 0;
			winNumbers = [];
			for (let i=0; i<20; i++) {
				do {
					y = Math.floor(Math.random()*80) + 1;
				} while(Search(winNumbers, y) > 0);
				winNumbers.push(y);
			}
			for (let i=0; i<winNumbers.length; i++) {
				if (Search(gamer, winNumbers[i]) > 0) {
					x++;
				}
			}
			console.log('winNumbers ' + winNumbers);
			console.log('gamer ' + gamer);
			switch(x) {
				case 0:
					switch(gamer.length) {
						case 7:
							kayf = 1;
							break;
						case 8:
							kayf = 1;
							break;
						case 9:
							kayf = 2;
							break;
						case 10:
							kayf = 2;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				case 1:
					switch(gamer.length) {
						case 1:
							kayf = 3;
							break;
						case 2:
							kayf = 1;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				case 2:
					switch(gamer.length) {
						case 2:
							kayf = 10;
							break;
						case 3:
							kayf = 2;
							break;
						case 4:
							kayf = 1;
							break;
						case 5:
							kayf = 1;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				case 3:
					switch(gamer.length) {
						case 3:
							kayf = 45;
							break;
						case 4:
							kayf = 10;
							break;
						case 5:
							kayf = 3;
							break;
						case 6:
							kayf = 2;
							break;
						case 7:
							kayf = 2;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				case 4:
					switch(gamer.length) {
						case 4:
							kayf = 80;
							break;
						case 5:
							kayf = 20;
							break;
						case 6:
							kayf = 15;
							break;
						case 7:
							kayf = 4;
							break;
						case 8:
							kayf = 5;
							break;
						case 9:
							kayf = 2;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				case 5:
					switch(gamer.length) {
						case 5:
							kayf = 150;
							break;
						case 6:
							kayf = 60;
							break;
						case 7:
							kayf = 20;
							break;
						case 8:
							kayf = 15;
							break;
						case 9:
							kayf = 10;
							break;
						case 10:
							kayf = 5;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				case 6:
					switch(gamer.length) {
						case 6:
							kayf = 500;
							break;
						case 7:
							kayf = 80;
							break;
						case 8:
							kayf = 50;
							break;
						case 9:
							kayf = 25;
							break;
						case 10:
							kayf = 30;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				case 7:
					switch(gamer.length) {
						case 7:
							kayf = 1000;
							break;
						case 8:
							kayf = 200;
							break;
						case 9:
							kayf = 125;
							break;
						case 10:
							kayf = 100;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				case 8:
					switch(gamer.length) {
						case 8:
							kayf = 2000;
							break;
						case 9:
							kayf = 1000;
							break;
						case 10:
							kayf = 300;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				case 9:
					switch(gamer.length) {
						case 9:
							kayf = 5000;
							break;
						case 10:
							kayf = 2000;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				case 10:
					switch(gamer.length) {
						case 10:
							kayf = 10000;
							break;
						default:
							kayf = 0;
							break;
					}
					break;
				default:
					kayf = 0;
					break;
			}
		} while((bet * kayf) > bank);
		for (let k=0; k<winNumbers.length; k++) {
			for (let i=0; i<8; i++) {
        		for (let j=0; j<10; j++) {
					if (table.rows[i].cells[j].innerHTML == winNumbers[k]) {
						if (Search(gamer, winNumbers[k]) > 0) {
							setTimeout(function() {
								table.rows[i].cells[j].style.background = '-webkit-gradient(radial, 165 0, 0, 238 -257, 465, from(#00CA00), to(#000000))';
							}, 2000);
						} else {
							setTimeout(function() {
								table.rows[i].cells[j].style.background = '-webkit-gradient(radial, 165 0, 0, 238 -257, 465, from(#0000C8), to(#000000))';
							}, 2000);
						}
			        }
				}
    		}
		}

		setTimeout(function() {
			gameText.innerHTML = x + ' совпадений из ' + gamer.length;
			if (kayf > 0) {
				ballance += kayf * bet;
				userCount.innerHTML = ballance;
			}
			start.innerHTML = "Еще раз?";
			start.removeEventListener('click', Start);
			start.addEventListener('click', NewGame);
			start.style.display = 'inline-block';
		}, 3000);
		
	}
	
};



function NewGame() {
        newGame.style.display = 'none';
        betting.style.display = 'block';
		gameBlock.style.display = 'none';
		EmptyField();
		start.removeEventListener('click', NewGame);
		start.addEventListener('click', Start);
    }


function MakeBet() {
        betInput = document.querySelector('#bet');
        bet = +betInput.value;
		ballance = +userCount.innerHTML;
        let betText = document.querySelector('div.text');
        if ((bet.isNaN) || (!((bet > 99) && (bet <= ballance)))) {
            betInput.value = 100;
            bet = 0;
            betText.innerHTML = 'Введите корректную сумму ставки';
            return;
        }
        betting.style.display = 'none';
        gameBlock.style.display = 'block';
		betText.innerHTML = 'Ваша ставка:'
        ballance -= bet;
		userCount.innerHTML = ballance;
       	bank += bet;
		
	}

function gameStart() {
    table = document.querySelector('#game-field');
    gameText = document.querySelector('#game-text');
	
    userCount = document.querySelector('#money');
	
    
    startGame = document.querySelector('#start-game');
    startGame.addEventListener('click', NewGame);
    makeBet = document.querySelector('#make-bet');
    makeBet.addEventListener('click', MakeBet);
	start = document.querySelector('#start');
	start.addEventListener('click', Start);
	clean = document.querySelector('#clean');
	clean.addEventListener('click', EmptyField);
    
    betting = document.querySelector('#betting');
    newGame = document.querySelector('#new-game');
    
    gameBlock = document.querySelector('#game');
	EmptyField();
}
	
    




document.addEventListener("DOMContentLoaded", gameStart);

