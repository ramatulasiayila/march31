// var stu = [["tulasi",80],["baby",76],["swathi",65],["ganga",56],["divya",34]];
// var avg = 0;
// for (var i = 1; i < stu.length; i++){
//     avg += stu[i][1];
//     var avg1 = (avg/stu.length);

// }
var avg1 = parseInt(prompt())
if(avg1 < 100){
    console.log("Grade : A")
}
else if(avg1 < 90){
    console.log("Grade : B")
}
else if(avg1 < 80){
    console.log("Grade : C")
}

else if(avg1 < 60){
    console.log("Grade : D")
}
else{
    console.log("FAIL")
}


