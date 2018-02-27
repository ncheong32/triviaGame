// set timer for 90s upon index.html page loading
var timeleft = 90;
var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdownTimer").textContent = timeleft;
   // page to jump to test result page when time left < 0
    if(timeleft <= 0)
        window.open("./resultsPage.html","_self")
    },1000);

// calculate results on resultsPage
// use button and click function to check results

function check () {

	// count # of correct, wrong and unanswered questions. Define variables first.
	var numCorrect = 0;
	var numWrong = 0;
	var numUnanswered = 0;
	
	// define value of answers to Q1-8 (i.e. "correct", "wrong", or unanswered/radio button unchecked)
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	
	console.log(question1);
	console.log(question2);
	console.log(question3);
	console.log(question4);
	console.log(question5);
	console.log(question6);
	console.log(question7);
	console.log(question8);
	
	// check if Q1 is correct, wrong or unanswered, and add result to final score accordingly.
	if (question1 == "correct") {
		numCorrect++;
	}		else if (question1 == "wrong") {
				numWrong++;
			} else if (question1 == "") {
				numUnanswered++;
				}
	// check if Q2 is correct, wrong or unanswered, and add result to final score accordingly.
	if (question2 == "correct") {
			numCorrect++;
		}		else if (question2 == "wrong") {
					numWrong++;
				} else if (question2 == "") {
					numUnanswered++;
					}
	// check if Q3 is correct, wrong or unanswered, and add result to final score accordingly.
	if (question3 == "correct") {
			numCorrect++;
		}		else if (question3 == "wrong") {
					numWrong++;
				} else if (question3 == "") {
					numUnanswered++;
					}

	// check if Q4 is correct, wrong or unanswered, and add result to final score accordingly.
	if (question4 == "correct") {
			numCorrect++;
		}		else if (question4 == "wrong") {
					numWrong++;
				} else if (question4 == "") {
					numUnanswered++;
					}	

	// check if Q5 is correct, wrong or unanswered, and add result to final score accordingly.
	if (question5 == "correct") {
			numCorrect++;
		}		else if (question5 == "wrong") {
					numWrong++;
				} else if (question5 == "") {
					numUnanswered++;
					}		

	// check if Q6 is correct, wrong or unanswered, and add result to final score accordingly.	
	if (question6 == "correct") {
			numCorrect++;
		}		else if (question6 == "wrong") {
					numWrong++;
				} else if (question6 == "") {
					numUnanswered++;
					}

	// check if Q7 is correct, wrong or unanswered, and add result to final score accordingly.	
	if (question7 == "correct") {
			numCorrect++;
		}		else if (question7 == "wrong") {
					numWrong++;
				} else if (question7 == "") {
					numUnanswered++;
					}

	// check if Q8 is correct, wrong or unanswered, and add result to final score accordingly.
	if (question8 == "correct") {
			numCorrect++;
		}		else if (question8 == "wrong") {
					numWrong++;
				} else if (question8 == "") {
					numUnanswered++;
					}	

	console.log(numCorrect);
	console.log(numWrong);
	console.log(numUnanswered);

	// open resultsPage
	
	window.open("./resultsPage.html","_self");

	document.results.getElementById('correctNumber').innerHTML = "Correct: ";
		document.getElementById('wrongNumber').innerHTML = "Wrong: ";
		document.getElementById('unanswered').innerHTML = "Unanswered: ";


}

// unable to get results to show on results page