//class is blue print of object , a pre defined structure to create objects
//object is an instance of class

class Car{
    // constructor(name,year){
    //         console.log("This is Constructor");
    //         this.name=name;
    //         this.year=year;
    // }
    constructor(hero,dir){
        // this.fun2(hero,dir);
    }   

    fun(name,year){
        console.log(`Hello,My Car is ${name} and its Manufactured Year is ${year}`);
    }
    fun2(hero,dir){
        console.log(`The protogonist of OG movie is the current Deputy CM of AP ${hero} and it is directed by ${dir}`);
    }
}

let obj2=new Car("Pawan Kalyan","Sujeeth");
// obj2.fun("Honda",2022);



///----------------------TASK -> pass argumnets to a function via instance---------------------------------

function favMovie(movie,actor){
    return{
        fun:()=>{
            console.log(`Hello, My Favorite Movie is ${movie} and my fav Hero is ${actor}`);
        }
    }
}

let ans=favMovie("Kushi","Pawan Kalyan");
ans.fun();


///--------------------------------------------------------------ARRAYS-----------------------


const movies=["Kushi","Jhonny","Badri","OG",'Panjaa'];
console.log(movies);
for(const ele of movies){
    console.log(ele);
}


///----------------------- .map for Arrays----------------
//1.Add Game Prefic to Array and print it as an array
console.log(movies.map( ele=>'Game: '+ele));

for( const ele of movies){
    console.log("Game: "+ele);
}


//********************************_____________SLICE,SPREAD & REST_______________________**************************************/
//1-----


const item1=['idly','dosa'];
item1.push('sambar');
const item2=['vada'];

console.log(item1,item2); //output= [ 'idly', 'dosa', 'sambar' ] [ 'vada' ]

//2----------

const tier2=['Nani','Ram'];
const tier1=tier2;

tier2.push('siddu');
console.log(tier2,tier1); //output=[ 'Nani', 'Ram', 'siddu' ] [ 'Nani', 'Ram', 'siddu' ]

//we make array tier1 with same values as in tier2 . 
/*
Both tier1 and tier2 refer to the same array in memory. 
So if you modify arr2, it will also change arr1 because they are referencing the same object. 
*/
//3-------------------------------TO avoid above Error We use SLICE method--------------------------


const disasters=['agv','gk'];
const flops=disasters.slice();
disasters.push('jhonny');
console.log(disasters,flops); //output=[ 'agv', 'gk', 'jhonny' ] [ 'agv', 'gk' ]

//whenver we r using three dots(...) in sqaure brackets its called SPREAD operator
//whenver we r using three dots(...) in circular brackets its called REST operator


//spread operaotr do the same work as slice done in above


//4-----------------------SPREAD------------------------- in sqaure & curly brackets i.e,, inside array or inside the object 


const arr1=[1,2,3];
const arr2=[...arr1];
arr1.push(90);
console.log(arr1,arr2); //output=[ 1, 2, 3, 90 ] [ 1, 2, 3 ]


//Use SPREAD in Objects


//5-----------------REST --------------------- in opened closed  brackets

const items=(a,b,c)=>[a,b,c];

console.log(items('vizag','kmp','gwk','NAD'));

//sometime we dont know how manhy values we r passing ,so we r using rest operator for passing argumnets
const values=(...itms)=>{
    return itms;
}

console.log(values(1,2,3,4,5,6,7,8,9));


//_________________________________- Destructer___________________________________________
//in Objects

const market={stock:'JIO'};
const lpu=market.stock;
console.log(lpu);

const person={
    name:'ajay',age:20,
}
const {name,age}=person;
console.log(name,age);

// In Arrays
const  dinner=['DOSA','IDLY'];
const [val1,val2]=dinner;
console.log(val1,val2);

//____________________________ARROW Function_______________________________________________----



// function sum(a,b)
// {
//     document.write(a+b);
// }
// let arr=[2,3];
// sum(...arr);


const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(x => x * x);
console.log(squared);


//______________________________________Array__________________________


const array = Array(9).fill(0);
console.log(array); // Output: [0, 0, 0, 0, 0, 0, 0, 0, 0]
