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