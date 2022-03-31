var n = 5;
var string = "";
for(var i = 1; i <= n; i++){
    for(var j = n; j < i; j--){
       string += " ";
    }
    for(var k = 0; k < i * 2 -1; k++){
        string += "*";

    }
    string += "<br/>"
}
console.log(`<pre> &{string} </pre>`);