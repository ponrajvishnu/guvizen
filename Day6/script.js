// alert("I'm invoked!");

// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working


let admin = 9, fname = 10.5;
fname = "Guvi";
lname = "Geek";
admin = fname + lname;

// alert(admin);
// alert("test");
// alert(`Hello ${admin}`);

// let a = prompt("Enter First Number");
// let b = prompt("Enter Second Number");
// alert(parseInt(a) + parseInt(b));


var c = "2" > "12";
console.log(c);

if(c){
    console.log("Code is Blasted");
}else{
    console.log("Diffused");
}
// Answer: If the above code it will return Code is Blasted, Bcoz we compare the two numbers with less than operator ("2" > "12") the above mentioned code variable C have two string(mention number with double qoutes so its consider a string) consider that the result is true so it will retun Code is Blasted.
// Change the value "2" > "3" - it will return Diffused.


let a = prompt("Enter a number?");
if(a){
    console.log( 'OMG it works for any number inc 0' );
}else{
    console.log( "Success" );
}
//How to get the success in console. - Answer: submit the prompt with out any value, we got success in console.


let value = prompt('How many runs you scored in this ball');
value = parseInt(value); // Convert String to Number
console.log(typeof(value));
if (value === 4) {
    console.log("You hit a Four");
} else if (value === 6) {
    console.log("You hit a Six");
} else {
    console.log("I couldn't figure out");
}
//Answer - You enter the number in prompt its return the value to string so we get "I couldn't figure out.". So we convert the string to number format we get the correct score in console.


let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : ''; // Correct Answer
//console.log(message);

//Correct Answer
let messages;
if(messages == null || messages == 2 || messages == undefined ){
    messages = "welcome boss";
}else{
    messages = "Go away";
}
console.log(messages);


//Correct Answer - Fix the code to welcome the boss
let messagess;
let lock = '';

//Dont change any code below this 
if(null || lock || undefined ){
  messagess = "Go away";
}else{
 messagess = "welcome";
}
console.log(messagess);


//Correct Answer
let msg;
let locks = '';
//Dont change any code below this
if(locks && " " || undefined ){
  msg = "Go away";
}else{
 msg = "welcome";
}
console.log(msg);


//You can change only 2 characters - Correct Answer (Replace the -- after the i)
let i = 3;
while (i) {
  console.log( i-- );
}


// Change the code to print 1 to 10 in 4 lines - Answer
let val = 10;
for(let i = 1;i <= val;i++){
    console.log(i);
} 


//Change the code to print even numbers - Answer
let num = 20;
for(let i = 0;i <= num;i++){
    if(i % 2 === 0){
        console.log(i);
    }
}


// Change the code to print all the gifts - Answer
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}


var lemein = "0";
var lemeout = 0;
var msgs = "";
if(lemein){
    msgs += "hi";
}
if(lemeout){
    msgs += 'Hello';
}
console.log(msgs);
//Answer - "hi". lemein is contain number(0) but it placed within double quotes so its consider string. lemeout have number is zero. In if condition consider lemeout value is false bcoz it have value is zero.   


// Write a code to print the numbers in the array
// Output: 1234567891011
let str = '';
for(let i = 1; i <= 11;i++ ){
    str += i;
}
console.log(str);


// Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11
let nums = 11;
let str1 = '';
for(let i = 1; i <= nums;i++ ){
    if(i == nums){
        str1 += i;
    }else{
        str1 += i + ',';
    }
}
console.log(str1.trim());

//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
//Output: 11 10 9 8 7 6 5 4 3 2 1
let arr = '';
for(let i = nums;i > 0;i--){
    arr += i + ' ';
}
console.log(arr);


// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let arrs = [];
for(let i = 1;i <= numsArr.length;i++){
    if(i % 2 === 0){
        arrs.push('even');
    }else{
        arrs.push(i);
    }
}
console.log(arrs);


// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
let arrval = [];
for(let i = 1;i <= numsArr.length;i++){
    if(numsArr[i] % 2 == 0){
        arrval.push('even');
    }else{
        arrval.push(i);
    }
}
console.log(arrval);

let vals = '';
numsArr.reduce((a,b) => {
    return vals = parseInt(a) + parseInt(b);
},0);
console.log(vals);

let ar = [];
let ans = '';
numsArr.filter((x) => {
    if(x % 2 === 0){
        ar.push(x);
    }
});

ar.reduce((a,b) => {
    return ans = parseInt(a) + parseInt(b);
});
console.log(ans);


var sum = 100;
for(let i = 0;i < numsArr.length;i++){
    if(numsArr[i] % 2 != 0){
        sum += parseInt(numsArr[i]);
    }else{
        sum -= parseInt(numsArr[i]);
    }
}
console.log(sum);