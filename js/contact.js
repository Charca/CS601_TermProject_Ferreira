(() => {
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(contactForm);

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    }).then(() => {
      alert('Thank you for your message!')
    }).catch((error) => {
      alert(error);
    });
  }
})();
