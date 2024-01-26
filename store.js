function handleFormSubmit(event) {
    event.preventDefault();
  
    const user = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    //let userDetails = JSON.parse(localStorage.getItem('userdetails')) || [];
  
    const newUser = {
      username: user,
      email: email,
      phone: phone,
    };
  
    //userDetails.push(newUser);
  


    //localStorage.setItem('UserDetails', JSON.stringify(userDetails));
  

    axios.post('https://crudcrud.com/api/71aad4755a1b4d51b3eea949ad28fbee/data',newUser)
    .then(res => console.log(res))
    .catch(err =>console.error(err))

  }