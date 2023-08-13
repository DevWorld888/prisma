const btn = document.getElementById('buttonSendEmail');
document.getElementById('form')
 .addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('hola');
    btn.value = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'template_lx68pja';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      document.getElementById('alertmessage').style.display = 'block';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
    
 })
