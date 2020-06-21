class user{

    constructor(fristName , secondName ,email ,password){
        this.fristName= fristName ;
        this.secondName= secondName ;
        this.password=password ;
        this.email= email;
    }
 welcome(){
     return `${this.fristName} ${this.secondName} you are logged in successfully`
 }
 bye(){
     return `${this.fristName} ${this.secondName} you are logged out successfully`
 }
}
class details extends user{
    constructor(fristName, secondName ,email ,password ,age ,gender ,address){
        super(fristName ,secondName ,email ,password)
        this.age =age ;
        this.gender=gender ;
        this.address =address ;
    }
}


let fristuser = new user('ghali' , 'hebashy' ,'ghahli_99@gamil.com' , 5642871) ;
let seconduser = new user('nader' , 'samaan' ,'samaan_199@gyhoo.com' , 'sam1245868gab') ;
let thirduser = new user('denail' , 'baklis' ,'baklisgrd_6589@gamil.com' , 'happ58gab896tab56') ;
let fourthuser = new user('rezponzal' , 'corft' ,'Rapzgh_95@gamil.com' , 548632548632) ;
let fri =new details('ghali' , 'hebashy' ,'ghahli_99@gamil.com' , 5642871 , 45 ,'male', '5 st.saint jhan 36 block ')
let sec =new details('nader' , 'samaan' ,'samaan_199@gyhoo.com' , 'sam1245868gab', 65 ,'male', '5 st.saint jan 50 block ')
let thir =new details('denail' , 'baklis' ,'baklisgrd_6589@gamil.com' , 'happ58gab896tab56', 24,'male', '5 st.mon dieue de marie 215 block ')
let four =new details('rezponzal' , 'corft' ,'Rapzgh_95@gamil.com' , 548632548632 , 21 ,'female', '5 st.tesharlize copr 500 block ')
console.log(fristuser);
console.log(fri)
console.log(sec)
console.log(thir)
console.log(four)
console.log(fristuser.welcome());
console.log(fristuser.bye());

console.log(seconduser.welcome());
console.log(seconduser.bye());

console.log(thirduser.welcome());
console.log(thirduser.bye());

console.log(fourthuser.welcome());
console.log(fourthuser.bye());


