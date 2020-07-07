import "./utils/animations"
import "./utils/swiper"

import validator from  "./utils/validator"
import errorText from "./utils/error-text"
import submitForm from "./utils/submit-form"

document.addEventListener("DOMContentLoaded", function() {
    errorText.hide()
  });



document.getElementById('form-reg').addEventListener('submit', function(e){
    e.preventDefault()
    if (validator.init()) {
        submitForm()
    }
})