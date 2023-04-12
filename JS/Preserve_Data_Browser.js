 /* Get all form elements/components */
 const dataName = document.getElementById('user_name');
 const dataEmail = document.getElementById('user_email');
 const dataMessage = document.getElementById('user_message');
 /* store  elements to an array  */
const values = [dataName, dataEmail, dataMessage];

/* Get values of elements  */
function allData() {
    const obj = {};
  
    for (let i = 0; i < values.length; i += 1) {
      obj[values[i].id] = values[i].value;
    }
  
    return obj;
  }
  /* Set an item of form */
function setForm() {
    const formData = JSON.parse(localStorage.getItem('form_data'));
  
    inputName.value = formData.user_name;
    inputEmail.value = formData.user_email;
    inputMessage.value = formData.user_message;
  }
  /* Please add your code here */


  