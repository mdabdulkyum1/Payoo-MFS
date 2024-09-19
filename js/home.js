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
        document.getElementById('main-balance').innerText = newBalance;
        console.log(mainBalance, addBalance)
    });
// set event for cash out in main blanch
document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const mainBalance = getTextFiledById('main-balance');
        // add balance
        const addBalance = getInputFiledById('cash-out-balance');
        const newBalance = mainBalance - addBalance;
        // update to main balance
        document.getElementById('main-balance').innerText = newBalance;
        console.log(mainBalance, addBalance)
    });

    document.getElementById('add-money-action-btn')
    .addEventListener('click', function(){
        hideForm('add-money-form');
    });
    document.getElementById('cast-out-action-btn')
    .addEventListener('click', function(){
        hideForm('cash-out-form');
    });