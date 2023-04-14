
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';

   emailjs.sendForm(serviceID, "template_e51s0bh", this)
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