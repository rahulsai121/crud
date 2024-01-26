function handleFormSubmit(event) {
  event.preventDefault();

  const user = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const newUser = {
    username: user,
    email: email,
    phone: phone,
  };

  axios.post('https://crudcrud.com/api/3f7b616e5b794097ae9d64dff26e906b/input',newUser)
  .then(res => {showOnscreen(res.data);
    
    document.querySelector('#username').value='';
    document.querySelector('#email').value='';
    document.querySelector('#phone').value='';

  })
  .catch(err =>console.error(err))

event.target.username.value=' ';
    event.target.email.value=' ';
    event.target.phone.value=' ';
}
window.addEventListener("DOMContentLoaded",()=>{
    
    axios.get("https://crudcrud.com/api/3f7b616e5b794097ae9d64dff26e906b/input")
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
    const liText = document.createTextNode(${first} -${second} - ${third});

     const button = document.createElement('button');
     button.textContent = 'Delete';
     button.id=del${i};
     button.onclick = function(event) {
      
     axios.delete(https://crudcrud.com/api/3f7b616e5b794097ae9d64dff26e906b/input/${i})
     .then(res=>deleteFunction(i))
     .catch(err=>console.log(err))
      };



  const button2 = document.createElement('button');
  button2.textContent = 'Edit';
  button2.id=dele${i}
  button2.onclick = function(event) {
   axios.delete(https://crudcrud.com/api/3f7b616e5b794097ae9d64dff26e906b/input/${i})
  .then(res=>editFunction(first,second,third,i));
  };



    li.appendChild(liText);
    li.appendChild(button);
    li.appendChild(button2);
    ul.appendChild(li);
    }


    function editFunction(na,em,ph,ide){

    const input1=document.querySelector('#username');
    const input2=document.querySelector('#email');
    const input3=document.querySelector('#phone');

    input1.value=na;
    input2.value=em;
    input3.value=ph;
    deleteFunction(e${ide})
  
    }



    function deleteFunction(x){
      let ul=document.querySelector('ul');
      let child=document.querySelector(#del${x});

      if(child){
        ul.removeChild(child.parentNode)
       }
      }