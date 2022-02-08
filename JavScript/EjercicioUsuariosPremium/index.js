const users = [
    {username: "ppc90", age: 30 , premium: false},
    {username: "lu65", age: 24 , premium: false},
    {username: "maria3", age: 36 , premium: false},
    {username: "abc123", age: 20 , premium: true},
    {username: "sergio58", age: 26 , premium: true},
    
];


const userpremium = users.filter(function(user){
    return user.premium==true;
});
console.log(userpremium[0]);
console.log(userpremium[1]);

//const array = [users[0], users[1], users[2]]
//console.log(array)


const userNotpremium = users.filter(function(user){
  return user.premium==false;
});
console.log(userNotpremium[0],userNotpremium[1],userNotpremium[2]);


// creo que se puede hacer de la siguiente manera:
//for (i=0; i<=userNotpremium; i++){
 //console.log(userNotpremium[i]);
//}