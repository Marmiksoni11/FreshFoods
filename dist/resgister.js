// const submitBTN = document.querySelector('#submit')

// submitBTN.addEventListener('click') 

const form = document.getElementById('signup');
const submitButton = document.getElementById('submit');

const axios = window.axios;


const navigate = (url) => {
  
    window.history.pushState({}, '', url);
    fetch(url) // Fetch content for the new page (optional)
    .then(response => response.text())
    .then(html => {
      console.log(html);
      document.documentElement.innerHTML = html; // Update page content
      })
      .catch(error => console.error(error));
    
}
  
  window.addEventListener('popstate', () => {
    const path = window.location.pathname;
    const route = routes[path];
    if (route) {
        navigate(route);
        window.history.pushState({}, '', './index.html');
        window.dispatchEvent(new Event('popstate'))
    } else {
      // Handle cases where URL doesn't match a route (e.g., 404)
      console.warn(`Route not found for: ${path}`);
    }
  });

submitButton.addEventListener('click', async (event) => {
    console.log('-------check----');
    
  event.preventDefault(); 

  if (!form.checkValidity()) {
    form.reportValidity(); 
    return;
  }


  const name = document.querySelector('.inputs input[type="name"]').value;
  const email = document.querySelector('.inputs input[type="email"]').value;
  const password = document.querySelector('.inputs input[type="password"]').value;

  try {
    const { data } = await axios.post('/api/v1/auth/register', {
      name, 
      email,
      password,
    })

    console.log(data);
    navigate('/index.html');
    // Handle successful registration (e.g., display success message, redirect to login page)
    // resultDOM.innerHTML = '<p>Registration successful! Please log in.</p>';
    // usernameInputDOM.value = '';
    // emailInputDOM.value = '';
    // passwordInputDOM.value = '';
     // Redirect to login page after successful registration
  } catch (error) {

    console.log(error);
    
    // Handle registration errors (e.g., display error message)
    // resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`;
  }
});
