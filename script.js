//1. Write a Program that takes an array as input from the user and find out the product of the elements.

// sample input  1 2 3 4 5
// sample output 120


// let input=prompt("Enter a list of items separated by commas:");
// let array=input.split(",");

// let result=1;

// for(i=0;i<array.length;i++){
//     result=result*array[i];
// }
// alert(result);


// 2. Write a Program that takes an array as input from the user and find out the sum of the array elements.

// let array=[1,2,3,4,5];

// let sum=0;
// let i=0;
// let abtakkasum=0;
 
// for(i=0;i<array.length;i++){
//     abtakkasum=sum+array[i];
//     sum=abtakkasum;
//     console.log(abtakkasum);
// }
    
//5. Write a program which takes an array as input from the user and a number.check whether the number is present or not.

// let input=prompt("Enter a list of items separated by commas:");
//  let array=input.split(",");

// let val=prompt("enter the number for check")

//     for(let i=0;i<array.length;i++){
//         if( val==array[i]){
//           console.log(true);
//         }
//         else{
//          console.log(false);
//         }
//     }


// 6. you are given an array A containing the age of person in your locality, and your task is to find and return
//    an array containing the age of persons that are over 18.

// Sample input  6 11 23 3 45 72 68
// Sample output 23 45 72 68

// let array=[6,11,23,3,45,72,68];

// let array1=array.filter(function(val){
//   return val>18;
// });

// console.log(array1);
// alert(array1);

// 7. you are provided an array of integers and you have to increment all array element by 1 and then print whole array.

// Sample input 5 1 2 3 4 5
// Sample input 2 3 4 5 6 

// let array=[5,1,2,3,4,5];

// let res=0;

// for(let i=0;i<array.length;i++){
//   res=array[i]+1;
//   console.log(res);
//   alert(res);
// };

// 8. you are given an array A containing the maths marks of students in your class, and your task is to determine if all
//   the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32.


// let array=[7,13,89,45,98,67,45,54];

//  const count=0;

// let array1=array.filter(function(val){
//   return val=>32;
  
// });

// if(array1.length==array){
//   console.log("yes all students are passed");
// }
// else 
// {
//  console.log("no all students are not passed");
// }


// 9.prebuddy is very tasteful of clothes. He has N number of shirts hanging in the wardrobe .prebuddy likes to wear
 


//10.Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. if you know 
//    how to iterate through the array, you will easily be able to solve this. the problem statement is simple-given N
//    elements, find the minimum and maximum numbers among those elements.

//Sample input 66 33 11 44 66 22 77
// Sample output 11 77

// let array=[66,33,11,44,66,22,77];

// let max=array[0];
// let min=array[1];

// for(let i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i];
//         console.log(max);
//     }
//   else
//     if(min>array[i]){
//        min=array[i];
//        console.log(min);
//   }
// }

// OR

//  function findMinMax(){
//     let array=[66,31,11,44,66,22,77];

//     let minValue=Math.min(...array);
//     let maxValue=Math.max(...array);

//     console.log(minValue);
//     console.log(maxValue);
//  }
//  findMinMax();

// OR


let input=prompt("Enter array numbers");
 let array=input.split(",");


function findMinMax(){
    
        let minValue=Math.min(...array);
        let maxValue=Math.max(...array);
    
        console.log(minValue);
        console.log(maxValue);
     }
     findMinMax();