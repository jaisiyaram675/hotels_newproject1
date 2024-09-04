var fs = require("fs");
 var os = require("os");
 var user =os.userInfo();
 console.log(user);


//   by using you can get detail of the user
//  if you want to create a new file then you have to give file name , content and callback function
fs.appendFile("createdFile.txt","hi"+user.username+"!\n",function(err){
    
})

//  this means you can get detail of the notes of the other file in the same folder
const notes = require("./notes");
var age = notes.age ;
const result= notes.addNumber(45, 45);
 console.log(age);
 console.log(result);

//  new library in node.js  lodash 
var _ = require("lodash");
var person=[1,2,4,1,2,1,1,2,5,8,9,4,5,5,4,8,4,9,8,78,5,0,5,1,];
 var filter = _.uniq(person);
  console.log(filter);
//   json parsing or data 
const jsonString= '{"name": "gaurav","age": 45, "city": "noida"}';

jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);0
// conversion of json into string of json data 
const jsonObject1={
    name:"gaurav",
    age:45,
    city:"noida"
}
 const jsonData = JSON.stringify(jsonObject1);
 console.log(jsonData)
 console.log(typeof(jsonData));