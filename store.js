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
    .then(res => showOnscreen(res.data))
    .catch(err =>console.error(err))

    event.target.username.value=' ';
    event.target.email.value=' ';
    event.target.phone.value=' ';
  }

window.addEventListener("DOMContentLoaded",()=>{
          
    axios.get("https://crudcrud.com/api/71aad4755a1b4d51b3eea949ad28fbee/data")
    .then(res=>{
        console.log('ok')
        for(let i=0;i<res.data.length;i++)
        {
            showOnscreen(res.data[i])
        }
    })
})

function showOnscreen(x){
    let first=x.username;
    let second=x.email;
    let third=x.phone;
    let i=x._id;
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const liText = document.createTextNode(`${first} ${second} ${third}`);

     const button = document.createElement('button');
     button.textContent = 'Delete';
     button.onclick = function(event) {    };



  const button2 = document.createElement('button');
  button2.textContent = 'Edit';
  button2.onclick = function(event) {  };
    li.appendChild(liText);
    li.appendChild(button);
    li.appendChild(button2);
    ul.appendChild(li);
    }