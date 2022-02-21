// login 
async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }



// signup
async function signupFormHandler(event) {

    event.preventDefault();

    const username = doument.querySelector(#username-signup).value.trim();
    const email = doument.querySelector(#email-signup).value.trim();
    const password = doument.querySelector(#password-signup).value.trim();

    if ( username && email && password) {
        await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });
       if(response.ok) {
           document.location.replace('/');
       } else {
           alert(response.statusText);
       }
    }


}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler );
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);