function check(){

    var score = 0

    var right_answer_1 = document.getElementById("q1-a1");
    var q1_answer_2 = document.getElementById("q1-a2")
    var q1_answer_3 = document.getElementById("q1-a3")
    var q1_answer_4 = document.getElementById("q1-a4")

    if (right_answer_1.checked == true){
        score++
        alert("Q1 Answer right")
    }
    else {
    alert("Q1 Answer wrong")
    }





var right_answer_2 = document.getElementById("q2-a2")
var q1_answer_2 = document.getElementById("q2-a1")
var q2_answer_3 = document.getElementById("q2-a3")
var q3_answer_4 = document.getElementById("q2-a4")
    if (right_answer_2.checked == true){
        score++
        alert ("Q2 Answer Right")
    }
    else {
        alert ("Q2 Answer wrong")
    }









var right_answer_3= document.getElementById("q3-a3")
var q3_answer_2 = document.getElementById("q2-a1")
var q3_answer_3 = document.getElementById("q2-a2")
var q3_answer_4 = document.getElementById("q2-a4")
    if (right_answer_3.checked == true){
        score++
        alert ("Q3 Answer Right")
    }
    else {
        alert ("Q3 Answer wrong")
    }

alert("your score is :" + score++)

}