const getValue = () =>{
    let firstname=document.getElementById('firstname').value;
    // alert("firstname:"+firstname) 
    let lastname=document.getElementById('lastname').value;
    

    let email=document.getElementById('email').value ;
    let password=document.getElementById('password').value;
    let date=document.getElementById('date').value;
    console.log(firstname,lastname,email,password,date);
    return{
      name:firstname,
      last:lastname,
      email:email,
      password:password,
      date:date
      
    }
  }





    //make object of all values that user inputs and return object from there
 //get value from functions that return from upper block of code and make alert for every field that is in object
// const a=5
//  const handleAlert = ()=>{
//     alert(a)  
// }