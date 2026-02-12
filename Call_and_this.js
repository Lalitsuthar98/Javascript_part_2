// call and this 
function setusername(username){
    this.username = username; 
    // return this;
}
function createuser(username,email,password){
    this.email = email;
    this.password = password;
    setusername.call(this,username); // problem only send the refernce not call use we want to use the call  orInal problem ha ke execution context hatgeya so variable was also clear  (call) hold the reference so we pass the ever context 
}
const user1 = new createuser("Lalit suthar","Lalit@gmail.com",134);
console.log(user1);
