// get all id 
/*
*  input number filed id = mobile-number
*  input pin          id = pin
*  login btn          id = login-btn
*/

// add event with login button
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin').value;

    if(mobileNumber === '01754462008' && pinNumber === '1234'){
        window.location.href = 'home.html';
    }else{
        alert("Wrong pin or phone number !")
    }
});