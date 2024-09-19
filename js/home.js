// set log out 
document.getElementById('log-out').addEventListener('click', function(event) {
  event.preventDefault();
  
    window.location.href = 'index.html';
    // switch to login page
 
});


// set event for cash out in main blanch
document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const mainBalance = getTextFiledById('main-balance');
        // add balance
        const addBalance = getInputFiledById('add-balance');
        const newBalance = mainBalance + addBalance;
        // update to main balance
        document.getElementById('main-balance').innerText = newBalance;

    });