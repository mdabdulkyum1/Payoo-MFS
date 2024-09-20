// set log out 
document.getElementById('log-out').addEventListener('click', function(event) {
  event.preventDefault();
  
    window.location.href = 'index.html';
    // switch to login page
 
});
// set event for add money in main blanch
document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const mainBalance = getTextFiledById('main-balance');
        // add balance
        const addBalance = getInputFiledById('add-balance');
        const newBalance = mainBalance + addBalance;
        // update to main balance
        if(!isNaN(addBalance)){
            document.getElementById('main-balance').innerText = newBalance;  
        }else{
            alert("Please Enter Vialed Number");
        }
        
        // clear input filed
        document.getElementById('add-balance').value = "";
        document.getElementById('pin').value = "";
      

    });
// set event for cash out in main blanch
document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const mainBalance = getTextFiledById('main-balance');
        // add balance
        const cashOutBalance = getInputFiledById('cash-out-balance');
        const newBalance = mainBalance - cashOutBalance;
        if(!isNaN(cashOutBalance) ){
            // update to main balance
            if(cashOutBalance > mainBalance){
                // clear input filed
                document.getElementById('cash-out-balance').value = "";
                document.getElementById('cash-pin').value = "";
                const sms = alert(`No no no, Your balance is: ${mainBalance}`)
                return sms;
            }
            document.getElementById('main-balance').innerText = newBalance;  
        }else{
            alert("Please Enter Vialed Number");
        }
           // clear input filed
           document.getElementById('cash-out-balance').value = "";
           document.getElementById('cash-pin').value = "";
    });


    // toggle buttons
    document.getElementById('add-money-action-btn')
    .addEventListener('click', function(){
        hideForm('add-money-form');
    });
    document.getElementById('cast-out-action-btn')
    .addEventListener('click', function(){
        hideForm('cash-out-form');
    });