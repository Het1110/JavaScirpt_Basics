function reverses(){
    var inputElement = document.getElementById("inputString");
    var inputString = inputElement.value;
    var rev = "";
    for(var i =0 ; i<inputString.length ; i++){
        rev = rev + inputString[inputString.length-1-i];
    }
    document.getElementById("output1").textContent = rev;
}
function palindrome(){
    var inputElement = document.getElementById("inputString1");
    var number  = inputElement.value;
    var inNumeric = /^\d+$/.test(number);
    var rem, t, rev = 0;
    t = number;
    while(number > 0)
    {
        rem = number % 10;
        number = parseInt(number / 10);
        rev = rev*10 + rem;
    }
    if(!inNumeric){
        document.getElementById("output2").textContent = "The input is not a Number";
    }
    else{
        if(rev==t){
            document.getElementById("output2").textContent = "The number is a Palindrome.";
        }
        else{
            document.getElementById("output2").textContent = "The number is not a Palindrome.";
        }
    }
}
function bill(){
    var inputElement1 = document.getElementById("inputString2");
    var inputElement2 = document.getElementById("inputString3");
    var number1  = Number(inputElement1.value);
    var number2  = Number(inputElement2.value);
    var inNumeric = /^\d+$/.test(number1);
    var inNumeric2 = /^\d+$/.test(number2);
    if(inNumeric && inNumeric2){
        var billtotal = Number(number1 + (number1*(number2/100)));
        document.getElementById("output3").textContent = "$"+(billtotal).toFixed(2);
    }
    else{
         document.getElementById("output3").textContent = "Enter Valid Numbers";
    }
}
