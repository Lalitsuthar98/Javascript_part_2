// After the ES6

// class user {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encrptpassword(){
//         return `${this.password}abc`
//     } 
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// };

// const user1 = new user("Lalit suthar","ls2817584@gmail.com",12345432);
// console.log(user1.encrptpassword());
// console.log(user1.changeusername());

// behind the scene 

// function user(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// user.prototype.encrptpassword = function(){
//     return `${this.password}abc`;
// } 
// user.prototype.changeusername = function(){
//     return `${this.username.toUpperCase()}`
// } 

// const user2 = new user("Lalit suthar","Lalit@gmail.com",123445);
// console.log(user2.changeusername());
// console.log(user2.encrptpassword());


// Inhertance in javascript 

// class user{
//     constructor(username){
//         this.username = username;
//     }
//     logme(){
//         console.log(`USERNAME IS : ${this.username}`);
//     }
// };

// class teacher extends user{
//     constructor(username,email,password){
//          super(username);
//         this.email = email;
//         this.password = password;   
//     }

    
// }

// const teacher1 = new teacher("hitesh ","hitesh@gmail.com",12345);
// teacher1.logme(); 

// static property 

class user{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`USERNAME : ${this.username}`);
    }
    static createdID(){
        return Math.floor(Math.random() * 100 +1);
    }
};
const user3 = new user("vishal suthar");
console.log(user.createdID());



