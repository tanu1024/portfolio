var form = document.getElementById('contact-form');

// Listen for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form data
  var name = form.elements.name.value;
  var email = form.elements.email.value;
  var message = form.elements.message.value;

  // Get a reference to the database service
  var database = firebase.database();

  // Write the data to the database
  database.ref('contacts').push({
    name: name,
    email: email,
    message: message
  });

  // Clear the form
  form.reset();

  // Show a success message
  alert('Thank you for your message!!');
});
