let questions = [
{
	question: "What is last month of the year?",
	choices: ["January","Decembar","August","April"],
	correctAnswer: 1
},
{
	question: "What is first month of the year?",
	choices: ["January","Decembar","August","April"],
	correctAnswer: 0
},
{
	question: "What is 6th month of the year?",
	choices: ["January","Decembar","August","June"],
	correctAnswer: 3
},
{
	question: "What is 10th month of the year?",
	choices: ["January","Decembar","October","April"],
	correctAnswer: 2
}
];

let currentQuestion = 0;
let correctAns = 0;
let quizOver = false;
let qlength = questions.length;
let state = true;

// console.log(qlength)

//all the querySelector items
let qBox = document.querySelector('.question');
let chBox = document.querySelector('.choiceList');
let qzMsgBox = document.querySelector('.quizeMessage');
let resBox = document.querySelector('.result');
let nxtBtn = document.querySelector('.nextButton');


// console.log(qBox)
//create list item
function createListItem(value) {
	let li = document.createElement("li");
	li.innerText = value;
	li.classList.add("option","q")
	chBox.appendChild(li)
}

//make option list
function listItem(value) {
  createListItem(value)

}

function checkans() {
	this.classList.remove('q')
	this.classList.add('select')

	let disList = document.querySelectorAll('.q')
	for(let i=0; i<disList.length; i++) {
		disList[i].classList.add('disable')
}

	let ans = questions[currentQuestion].choices[questions[currentQuestion].correctAnswer]
	let ch = this.innerText
	if(ans === ch) {
		correctAns += 1
		console.log(correctAns)
		qzMsgBox.innerHTML = `<p style='color: green;'>Right Ans</p>`;
	setTimeout(function(){ 
		qzMsgBox.innerText = ""
	}, 3000);
	} else {
		qzMsgBox.innerHTML = `<p style='color: red;'>Wrong Ans</p>`;
	setTimeout(function(){ 
		qzMsgBox.innerText = ""
	}, 3000);
	}
	state = true
	currentQuestion += 1
	}

function generateQ() {
	if(state) {
		state = false
	   if (currentQuestion < qlength) {
	   	chBox.innerHTML = "";
    	qBox.innerText = questions[currentQuestion].question;
    	let ch = questions[currentQuestion].choices;

    	ch.forEach(listItem)
    	let options = document.querySelectorAll('.option')
  		for(let i=0; i<options.length; i++) {
  			options[i].addEventListener('click',checkans,);
  		}
    } else {
    	qzMsgBox.innerHTML = `<p>Quiz Over. Reload to Start again.<br>Score: ${correctAns}</p>`;
    	setTimeout(function(){ 
		qzMsgBox.innerText = ""
	}, 5000);
    }
} else {
	qzMsgBox.innerHTML = `<p>Please select an answer</p>`;
	setTimeout(function(){ 
		qzMsgBox.innerText = ""
	}, 3000);
}
}

function ready() {
	generateQ(currentQuestion)
	
	nxtBtn.addEventListener('click',generateQ)
	
  }


document.addEventListener("DOMContentLoaded", ready);