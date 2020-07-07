const submitForm = async function(){

    const arr = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    }

    try{
        await fetch('https://form-sending.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(arr)
          });
    } catch(error){
        alert(error)
    }
}


export default submitForm