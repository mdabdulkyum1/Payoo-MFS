// set log out 
document.getElementById('log-out').addEventListener('click', function(event) {
  event.preventDefault();
    window.location.href = 'index.html';
    // switch to login page
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
    document.getElementById('transactions-btn')
    .addEventListener('click', function(){
        hideForm('transactions-container');
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
        

        // transactions-history 
        const ul = document.getElementById('transactions-history');
        // create li
        const li = document.createElement('li');
        li.classList.add('bg-green-100','text-green-700','text-2xl','px-5','py-2','mb-2', 'rounded-sm')
        li.innerHTML = `Money added ${addBalance} taka <i class="fa-solid fa-trash-can cursor-pointer"></i>`;
        if(!isNaN(addBalance)){
            ul.appendChild(li);
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


        // transactions-history 
        const ul = document.getElementById('transactions-history');
        // create li
        const li = document.createElement('li');
        li.classList.add('bg-red-100','text-red-700','text-2xl','px-5','py-2','mb-2', 'rounded-sm')
        li.innerHTML = `Cash Out ${cashOutBalance} taka <i class="fa-solid fa-trash-can cursor-pointer"></i>`;
        if(!isNaN(cashOutBalance)){
            ul.appendChild(li);
        }




           // clear input filed
           document.getElementById('cash-out-balance').value = "";
           document.getElementById('cash-pin').value = "";
    });

/* add Transactions
* 
*/ 
