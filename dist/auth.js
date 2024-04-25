const formDOM = document.querySelector('.form');
const usernameInputDOM = document.querySelector('.email-input')
const passwordInputDOM = document.querySelector('.password-input')
// const formAlertDOM = document.querySelector('.form-alert')
const resultDOM = document.querySelector('.result')
const btnDOM = document.querySelector('#data')
const tokenDOM = document.querySelector('.token')

const axios = window.axios;

const routes = {
  '/': './login.html',
  '/home.html': './home.html' // Assuming you have separate HTML files
}

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
  } else {
    // Handle cases where URL doesn't match a route (e.g., 404)
    console.warn(`Route not found for: ${path}`);
  }
});

formDOM.addEventListener('submit', async (e) => {
    
  // console.log('-------check --------------');
  
  // formAlertDOM.classList.remove('text-success')
  // tokenDOM.classList.remove('text-success')

  e.preventDefault()
  const email = usernameInputDOM.value
  const password = passwordInputDOM.value
  
  try {
    const { data } = await axios.post('/api/v1/auth/login', { email, password })
    // formAlertDOM.style.display = 'block'
    // formAlertDOM.textContent = data.msg
    // formAlertDOM.classList.add('text-success')
    usernameInputDOM.value = ''
    passwordInputDOM.value = ''
    localStorage.setItem('token', data.token)
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'token present'
    tokenDOM.classList.add('text-success')
    navigate('/home.html'); 
    
  } catch (error) {
    // formAlertDOM.style.display = 'block'
    // formAlertDOM.textContent = error.response.data.msg
    localStorage.removeItem('token')
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'no token present'
    tokenDOM.classList.remove('text-success')
  }
  // setTimeout(() => {
    // formAlertDOM.style.display = 'none'
  // }, 2000)
})

btnDOM.addEventListener('click', async () => {
  try {

    await checkToken()

  } catch (error) {
    localStorage.removeItem('token')
    resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`
  }
})

const checkToken = () => {
  tokenDOM.classList.remove('text-success');  
  const token = localStorage.getItem('token');
  if (token) {
    tokenDOM.textContent = 'token present';
    tokenDOM.classList.add('text-success');
    // window.location.href = '/home.html';  
    // Use History API for smoother navigation
    window.history.pushState({}, '', './home.html');
    window.dispatchEvent(new Event('popstate'));
  } 
  else{
    console.log('------------- check login -------');
    
    if (window.location.pathname !== '/') {
      return window.location.href = '/';
    }
  }
  // else if (window.location.pathname !== '/login.html') {
  //   console.log('---- check ----- token');
  //   window.location.href = '/';
  // }
  
}


checkToken();
