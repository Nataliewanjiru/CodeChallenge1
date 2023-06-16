// promt student for their studentMark;

let studentMarks=Number(prompt("What are your marks?", "Should be between 0 and 100"))


// code that outputs grade of student;
function grade(marks){
 if(marks >79 && marks <=100){
     alert("You have an A!");
 }else if(marks >= 60 && marks <= 79){
    alert("You have a B!");
 }else if(marks >49 && marks <= 59){
    alert("You have a C!");
 }else if(marks >=40 && marks <= 49){
    alert("You have a D!")
 }else if(marks >0 && marks <40){
    alert("You have an E!")
 } else{
    alert("Sorry but your input is out of range!")
 }
}

grade(studentMarks)