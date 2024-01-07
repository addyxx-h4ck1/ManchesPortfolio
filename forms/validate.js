const form = document.querySelector('form')

/// on submit event/////
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //collecting form inputs///
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');

    ///create message object from form input values///

    const messageSent = {
        'Name': name.value,
        'Email': email.value,
        'Subject': subject.value,
        'Message': message.value
    }
    /////send to Gmail via AJAX//////////

    fetch("https://formsubmit.co/ajax/proxxyweb@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(messageSent)
})
    .then(response => {
        const logMessage = document.querySelector('.sent-message')
        const sendButton = document.querySelector('.text-center')

        ///on success///
        logMessage.style.display = 'block';
        
        /// clear the inputs///
        name.value = ''
        email.value = ''
        subject.value = ''
        message.value = ''
    })

    .catch(error => console.log(error));
})
