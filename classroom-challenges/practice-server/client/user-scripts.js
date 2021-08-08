/************************
 *** USER SIGNUP ***
 ************************/
 function userSignUp() {
    //console.log('userSignUp Function Called')
    let userEmail = document.getElementById('emailSignup').value;
    let userPass = document.getElementById('pwdSignup').value;
    let newUserData = { 
        user: { 
            email: userEmail, 
            password: userPass 
        } 
    };
    console.log(`NEWUSERDATA ==> ${userEmail}  ${userPass}`);
    console.log(userEmail);
    console.log(userPass);
    fetch('http://localhost:3000/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
        //console.log('working')
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
        tokenChecker()
    })
    .catch((err) => {
        console.log(err)
    })
}

/************************
 *** USER LOGIN ***
 ************************/
function userLogin() {
   let userEmail = document.getElementById('emailLogin').value;
   let userPass = document.getElementById('pwdLogin').value;
   let userData = {
       user: {
           email: userEmail,
           password: userPass
       }
   };
   fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
   })
   .then(response => response.json())
   .then(function (response) {
       let token = response.sessionToken;
       localStorage.setItem('SessionToken', token);
       tokenChecker()
   })
    .catch((err) => {
        console.log(err)
    })
}

/************************
 *** USER LOGOUT ***
 ************************/
function userLogout() {
    localStorage.setItem('SessionToken', undefined)
    console.log(`SessionToken ==> ${localStorage.sessionToken}`)
    tokenChecker()
}


/************************
 *** TOKEN CHECKER  ***
 ************************/
 function tokenChecker() {
    console.log('tokenChecker Function Called')
}
tokenChecker()