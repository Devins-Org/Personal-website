/* Contact.js 

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec';

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  submitButton.disabled = true;

  const requestBody = new FormData(form);
  
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
      if (response.ok) {
        showAlert('Success!', 'success');
      } else {
        showAlert('Error!', 'error');
      }
      submitButton.disabled = false;
    })
    .catch(error => {
      showAlert('Error!', 'error');
      submitButton.disabled = false;
    });
}

function showAlert(message, type) {
  const alertElement = document.createElement('div');
  alertElement.className = `alert alert-${type}`;
  alertElement.textContent = message;
  
  // Display the alert for a few seconds and then remove it
  document.body.appendChild(alertElement);
  setTimeout(() => {
    document.body.removeChild(alertElement);
  }, 3000);
}
*/




/* Contact.js II 

console.log('We are connected!');

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec';

form.addEventListener('submit', e => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
      console.log('Success!', response);
      alert('Success!');
      submitButton.disabled = false;
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Error!');
      submitButton.disabled = false;
    });
});
*/



// Contact.js III

const form = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec';

form.addEventListener('submit', e => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
      alert('Success!');
      submitButton.disabled = false;
    })
    .catch(error => {
      alert('Error: ' + error.message);
      submitButton.disabled = false;
    });
});
