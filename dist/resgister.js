const form = document.getElementById('signup');
const submitButton = document.getElementById('submit');

const axios = window.axios;

submitButton.addEventListener('click', async (event) => {
    event.preventDefault(); 

    if (!form.checkValidity()) {
        form.reportValidity(); 
        return;
    }

    const formData = new FormData(form);
  
    try {
        const { data } = await axios.post('/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log(data);
        // Handle successful registration (e.g., display success message, redirect to login page)
        // Redirect to login page after successful registration
        window.location.href = './index.html';
    } catch (error) {
        console.error(error);
        // Handle registration errors (e.g., display error message)
        // resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`;
    }
});
