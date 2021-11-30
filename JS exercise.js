//1

let salaries={
    John: 100,
    Ann: 160,
    Pete:130
}

let sum=0;
for(let x in salaries){
    sum+=salaries[x]
}
console.log(sum)


//2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu){

    for (let i in menu){
        if (typeof menu[i]==='number'){
            console.log(menu[i]*2)
        }
        else{
            console.log(menu[i])
        }
    }
}

multiplyNumeric(menu)

//3

let emailPattern = /@[a-zA-Z.-]+\./
let str='@Yahoo.'
function checkEmailId(str){      
    
    if (emailPattern.test(str)) {
        return true
      } 
    else {
        return false
      }
  } 

console.log(checkEmailId(str))

//4
let str= new String()
let newStr='...'
let maxlength=0

function truncate(str, maxlength) {

    if(str.length<=maxlength){
        console.log(str)
    }
    else{
        console.log(str.slice(0,maxlength-1)+newStr)
    }
}

truncate("What I'd like to tell on this topic is:", 20)

//5
var names= new Array("James", "Brennie")
console.log(names)

names.push("Robert")
console.log(names)

if(names.length%2==1){
    var midItem=(names.length-1)/2
    names.splice(midItem,1,"Calvin")
    console.log(names)
}

names.shift()
console.log(names)

names.splice(0,0,"Rose","Regal")
console.log(names)

