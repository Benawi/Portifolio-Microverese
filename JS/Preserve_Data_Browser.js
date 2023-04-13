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
  dataName.value = formData.user_name;
  dataEmail.value = formData.user_email;
  dataMessage.value = formData.user_message;
}
/* Code partner, please add your code here */
/* Set local storage */
function setStorage() {
  localStorage.setItem('form_data', JSON.stringify(allData()));
  setForm();
}
/* check the current value associated with the given key, or
    null if the given key does not exist. */
if (!localStorage.getItem('form_data')) {
  setStorage();
} else {
  setForm();
}
/* Sets the value of element's first attribute
whose qualified name is qualifiedName to value. */
dataName.setAttribute('onchange', 'setStorage()');
dataEmail.setAttribute('onchange', 'setStorage()');
dataMessage.setAttribute('onchange', 'setStorage()');