//step-1: set event
document.getElementById('btn-login')
      .addEventListener('click', function(event){
        // step-2: prevant default behavior (reloading browser)
        event.preventDefault();
    console.log('login page');

    // step3: get the phone Number
    const phoneNumber = document.getElementById('phone-number').value;
       console.log(phoneNumber);
} )