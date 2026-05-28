const user = {
    username: "Ayush",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("ayush", 12, true)
const userTwo = new User("himi", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

// Constructor func. nya instance deta h har bar.


//step1:- new keyword use krte hi ek empty object create hota h. jisko instance bola jata h
//step2:-Constructor func. new keyword ke karn call hota h
//step31:-this keyword se inject hojate h
//step4:-at last func me miljate h

