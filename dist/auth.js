const formDOM = document.querySelector('#loginForm');
  const emailInputDOM = document.querySelector('input[name="mail"]');
  const passwordInputDOM = document.querySelector('input[name="pwd"]');
  const resultDOM = document.querySelector('.result');
  const tokenDOM = document.querySelector('.token');

  const axios = window.axios;

  async function checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      tokenDOM.textContent = 'Token present';
      tokenDOM.classList.add('text-success');
    } else {
      tokenDOM.textContent = 'No token present';
      tokenDOM.classList.remove('text-success');
    }
  }

  // Call the function after the DOMContentLoaded event
  window.addEventListener('DOMContentLoaded', checkToken);

  formDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    const mail = emailInputDOM.value;
    const pwd = passwordInputDOM.value;

    if (!(mail && pwd)) {
      resultDOM.innerHTML = '<p>Please provide email and password</p>';
      return;
    }

    try {
      const response = await axios.post('/login', { mail, pwd });
    
      console.log('Response from server:', response);
      const token = response.data.AccessToken; // Assuming token is in response.data.AccessToken
      emailInputDOM.value = '';
      passwordInputDOM.value = '';
      localStorage.setItem('token', token);
      resultDOM.innerHTML = '';
      tokenDOM.textContent = 'Token present';
      tokenDOM.classList.add('text-success');
      // Redirect to home page after successful login
      window.location.href = './home.html';  
    } catch (error) {
      localStorage.removeItem('token');
      resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`;
      tokenDOM.textContent = 'No token present';
      tokenDOM.classList.remove('text-success');
    }
  });