const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_e51s0bh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        console.log(this)
      btn.value = 'Send Email';
      alert('Sent!');
this.reset()
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});