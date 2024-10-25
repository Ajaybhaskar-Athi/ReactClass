let name="Pawan";
var age=56;
name="ajay";
console.log(name,age);

// ---Functions

function OG(d,p){
    return "The PK's Original Gangster directed by "+d+" and Produced by "+p;
}

console.log(OG("Sujeeth","DVV Danayya"));

const helper=()=>"Ajay Bhaskar";
console.log(helper());

// -------------GlobalScope

let fName='Priyanka';

function display(){
    let lName=" Mohan";
    console.log(fName+lName);
    
}

console.log("First Name is : "+fName);
display();


// ---------Local scope

const calc=()=>{
    const a=23;
    console.log(a*a);
    
}

calc();


// ----Block Scope **************************

// let and const are block scope varibles

// In JavaScript, block scope refers to variables that are accessible only within the block they are defined in.
//  A block is defined by a pair of curly braces { }, such as in loops, conditionals, or functions.
// JavaScript has three types of scope:

// Global Scope: Variables declared outside of any function or block are in the global scope.
// Function Scope: Variables declared inside a function using var are scoped to that function.
// Block Scope: Variables declared inside a block (with let or const) are only accessible within that block.


var num=3;
function functionScope(){
    var num=2;
    console.log(num);
}
functionScope(); //2
console.log(num);//3


function blockScope(){
    var x="ajay";
    let y="pawan";
    const z="Original"
    if(true){
        var x="Bhaskar";
        let y="kalyan";
        const z="Gangster";
        console.log("Inside Block the value of x : "+x+" , value of y : "+y+" and the value of z : "+z);
    }
    console.log("outside Block the value of x : "+x+" , value of y : "+y+" and value of z : "+z);

}

blockScope();



// -----Objecs

 student={ //we can omit the datatype also
    name:"Akshaya",
    age:20,
    fun:function(){
        console.log("Function Inside The Object : "+student.name);
    },
    fun2:()=>{
        console.log("Student Age is : "+student.age);
    }
};
student.fun();
student.fun2();


