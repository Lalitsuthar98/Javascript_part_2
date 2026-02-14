
// getter and setter  
// class user{
//     constructor(email,password){
//         this.email = email;
//         this.password = password;
//     }  

//     get email(){
//         return this._email;
//     }
//     set email(value){
//         this._email = value;
//     }
//     get password(){
//         return this._password.toUpperCase();
//     }
//     set password(value){
//       this._password = value
//     }
// }; 
// const user1 = new user("hi@gmail.com","abcdef");
// console.log(user1.password);
// console.log(user1.email);  

// old method using the function 

function user(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,"email", {
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
           this._email = value
        }
    })

    Object.defineProperty(this,"password", {
        get:function(){
            return this._password.toUpperCase();
        },
        set:function(value){
           this._password = value;
        }
    })
}

const user2 = new user("hello@gmail.com","fksdjf");
console.log(user2.email);
console.log(user2.password);