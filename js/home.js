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
      
      // set uniq id 
      let uniq = 0;
      uniq++;
      
        li.innerHTML = `Money added ${addBalance} taka <i id="delete-a-${uniq}" class="fa-solid fa-trash-can cursor-pointer"></i>`;
        if(!isNaN(addBalance)){
            ul.appendChild(li);
        }


const deleteIcon = document.querySelector(`#delete-a-${uniq}`);
        console.log(deleteIcon);
        
        deleteIcon.addEventListener('click', function () {
           ul.removeChild(li);
        })





        // clear input filed
        document.getElementById('add-balance').value = "";
        document.getElementById('pin').value = "";
      

    });
// set event for cash out in main blanch
// unic id
let count = 0;
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
        li.classList.add('bg-red-100','text-red-700','text-2xl','px-5','py-2','mb-2', 'rounded-sm');
        
        if(!isNaN(cashOutBalance)){
            ul.appendChild(li);
        }



        
        
                // unique id genaretw 
                
                count++;
        
        li.innerHTML = `Cash Out ${cashOutBalance} taka <i id="delete-${count}" class="fa-solid fa-trash-can cursor-pointer"></i>`;
        
        const deleteIcon = document.querySelector(`#delete-${count}`);
        console.log(deleteIcon);
        
        deleteIcon.addEventListener('click', function () {
           ul.removeChild(li);
        })

           // clear input filed
           document.getElementById('cash-out-balance').value = "";
           document.getElementById('cash-pin').value = "";
    });

/* add Transactions
* 
*/ 
/*let count = 0;

document.getElementById('cash-out-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const mainBalance = getTextFiledById('main-balance');
    const cashOutBalance = getInputFiledById('cash-out-balance');
    const newBalance = mainBalance - cashOutBalance;

    // Check if cash out amount is valid
    if (!isNaN(cashOutBalance)) {
        if (cashOutBalance > mainBalance) {
            alert(`No no no, Your balance is: ${mainBalance}`);
            document.getElementById('cash-out-balance').value = "";
            document.getElementById('cash-pin').value = "";
            return;
        }

        // Update the main balance
        document.getElementById('main-balance').innerText = newBalance;
    } else {
        alert("Please Enter a Valid Number");
        return;
    }

    // Transactions history
    const ul = document.getElementById('transactions-history');
    
    // Create the `li` element
    const li = document.createElement('li');
    li.classList.add('bg-red-100', 'text-red-700', 'text-2xl', 'px-5', 'py-2', 'mb-2', 'rounded-sm');
    
    // Generate unique ID for the delete icon
    count++;
    
    li.innerHTML = `Cash Out ${cashOutBalance} taka <i id="delete-${count}" class="fa-solid fa-trash-can cursor-pointer"></i>`;
    
    // Append the `li` to the transaction history
    ul.appendChild(li);

    // Find the delete icon and add a click event listener to remove the `li`
    const deleteIcon = document.querySelector(`#delete-${count}`);
    console.log(deleteIcon);

    deleteIcon.addEventListener('click', function() {
        ul.removeChild(li); // Remove the `li` element when the delete icon is clicked
    });

    // Clear input fields
    document.getElementById('cash-out-balance').value = "";
    document.getElementById('cash-pin').value = "";
});
*/



 
