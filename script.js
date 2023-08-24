const form = document.getElementById('signup-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    
    // You can now use the 'name' and 'email' variables to do something, like sending the data to a server.
    
    alert(`Thank you, ${name}! You've been added to the email list.`);
    
    form.reset();
});
