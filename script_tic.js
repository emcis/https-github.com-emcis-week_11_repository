// Function called whenever a box is selected
function btnfunc() {
    // When a button is clicked two functions are executed
    // the btnfunc declares variables for each button in the DOM
    // by getting the current values. the variables are set equal to the value in the
    // input box assigned to each button and the DOM method
    // returns an Element object representing the element 
    // whose id property matches the specified string
    // the rest of this code the status of player x and player 0
    // each time a button is clicked
    // before btnfunc is executed the btnfunc_number is checked
    // for three things, what player X or 0, is the flag=1 if yes
    // place an X or 0 or if flag=0, the button (element) is disabled,
    // once the btnfunc_number is executed then btnfunc is executed
    
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("btn1").value;
    b2 = document.getElementById("btn2").value;
    b3 = document.getElementById("btn3").value;
    b4 = document.getElementById("btn4").value;
    b5 = document.getElementById("btn5").value;
    b6 = document.getElementById("btn6").value;
    b7 = document.getElementById("btn7").value;
    b8 = document.getElementById("btn8").value;
    b9 = document.getElementById("btn9").value;
 
    // for this function named btnfunc the following conditional statements
    // check the different ways Player X can win
    // If player X wins then all of the other buttons are
    // disabled and the game is over. 

    // this is the first row
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X wins";
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        window.alert('Player X wins');
    }
    // this is the left column of the grid
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X wins";
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
 
        window.alert('Player X wins');
    }
    // this is the the bottom row of the grid
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X wins";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        window.alert('Player X wins');
    }
    // this is the right column of the grid
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X wins";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        window.alert('Player X wins');
    }
    // this is the left diagonal of the grid
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X wins";
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        window.alert('Player X wins');
    }
       // this is the right diagonal of the grid
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X wins";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        window.alert('Player X wins');
    }
       // this is the middle column of the grid
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X wins";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn9").disabled = true;
        window.alert('Player X wins');
    }
       // this is the middle row of the grid
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X wins";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        window.alert('Player X wins');
    }
 
   
    // Checking for Player 0 starts, Is player 0 wins or
    // not and after that disabled all the other fields
    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 wins";
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        window.alert('Player 0 wins');
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 wins";
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        window.alert('Player 0 wins');
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 wins";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        window.alert('Player 0 wins');
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 wins";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        window.alert('Player 0 wins');
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 wins";
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        window.alert('Player 0 wins');
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 wins";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        window.alert('Player 0 wins');
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 wins";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn9").disabled = true;
        window.alert('Player 0 wins');
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 wins";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        window.alert('Player 0 wins');
    }
      

  // if both Player X and Player 0 have not won then the 
  // there is a check to see if there is a tie,
  // essentially if all cells are 
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {
 
        
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
                
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
               
        }
    }
}
 
// The function below resets B(new game) the input boxes to 
// empty when the new game button is clicked in the DOM

function btnfunc_2() {
    location.reload();
    document.getElementById('btn1').value = '';
    document.getElementById("btn2").value = '';
    document.getElementById("btn3").value = '';
    document.getElementById("btn4").value = '';
    document.getElementById("btn5").value = '';
    document.getElementById("btn6").value = '';
    document.getElementById("btn7").value = '';
    document.getElementById("btn8").value = '';
    document.getElementById("btn9").value = '';
 
}
 
// a flag variable is used to do something while the
// condition is true (boolean) and then change it to a different value

// based on the condition of the flag variable
// a value of X or 0 is put in the box.
// the value of flag is also set to 0 which takes the button
// out of play
 
flag = 1;
function btnfunc_3() {
    if (flag == 1) {
        // if flag =1 then it's Player's X turn 
        document.getElementById("btn1").value = "X";
        // after the value has been put in the box
        // the button "b1" is disabled
        document.getElementById("btn1").disabled = true;
        flag = 0; // f;ag=0 implies it is Player's 0 turn
    }
    else {
        document.getElementById("btn1").value = "0";
        document.getElementById("btn1").disabled = true;
        flag = 1;
    }
}
 
function btnfunc_4() {
    if (flag == 1) {
        document.getElementById("btn2").value = "X";
        document.getElementById("btn2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn2").value = "0";
        document.getElementById("btn2").disabled = true;
        flag = 1;
    }
}
 
function btnfunc_5() {
    if (flag == 1) {
        document.getElementById("btn3").value = "X";
        document.getElementById("btn3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn3").value = "0";
        document.getElementById("btn3").disabled = true;
        flag = 1;
    }
}
 
function btnfunc_6() {
    if (flag == 1) {
        document.getElementById("btn4").value = "X";
        document.getElementById("btn4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn4").value = "0";
        document.getElementById("btn4").disabled = true;
        flag = 1;
    }
}
 
function btnfunc_7() {
    if (flag == 1) {
        document.getElementById("btn5").value = "X";
        document.getElementById("btn5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn5").value = "0";
        document.getElementById("btn5").disabled = true;
        flag = 1;
    }
}
 
function btnfunc_8() {
    if (flag == 1) {
        document.getElementById("btn6").value = "X";
        document.getElementById("btn6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn6").value = "0";
        document.getElementById("btn6").disabled = true;
        flag = 1;
    }
}
 
function btnfunc_9() {
    if (flag == 1) {
        document.getElementById("btn7").value = "X";
        document.getElementById("btn7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn7").value = "0";
        document.getElementById("btn7").disabled = true;
        flag = 1;
    }
}
 
function btnfunc_10() {
    if (flag == 1) {
        document.getElementById("btn8").value = "X";
        document.getElementById("btn8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn8").value = "0";
        document.getElementById("btn8").disabled = true;
        flag = 1;
    }
}
 
function btnfunc_11() {
    if (flag == 1) {
        document.getElementById("btn9").value = "X";
        document.getElementById("btn9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn9").value = "0";
        document.getElementById("btn9").disabled = true;
        flag = 1;
    }
}
