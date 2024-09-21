function getInputFiledById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFiledById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


// hide all form 
function hideForm(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transactions-container').classList.add('hidden');

    // current id 
    document.getElementById(id).classList.remove('hidden')
    return;
}


function formatDate() {
    const now = new Date();

    // Get components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are 0-indexed, so add 1
    const year = now.getFullYear().toString().slice(-2); // Get last 2 digits of the year

    // Determine AM/PM
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert to 12-hour format, adjust midnight (0) to 12

    // Add leading zeros to minutes if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Format the date and time
    const formattedTime = `${hours}:${minutes}${ampm} ${day}/${month < 10 ? '0' + month : month}/${year}`;
    
    return formattedTime;
}
