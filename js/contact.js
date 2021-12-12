(() => {
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(contactForm);
    const formAlert = document.getElementById('form-alert');

    // Hide the alert message when submitting the form
    formAlert.innerHTML = "";
    formAlert.classList.add('hidden');
    formAlert.classList.remove('alert-success');
    formAlert.classList.remove('alert-danger');

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    }).then(() => {
      console.log('Message sent successfully');
      // clear the form
      contactForm.reset();
      // show succes message
      formAlert.classList.remove('hidden');
      formAlert.classList.add('alert-success');
      formAlert.innerHTML = 'Message sent successfully';
    }).catch((error) => {
      console.log(error);
      // show error message
      formAlert.classList.remove('hidden');
      formAlert.classList.add('alert-error');
      formAlert.innerHTML = 'Message could not be sent. Please try again later.';
    });
  }
})();
