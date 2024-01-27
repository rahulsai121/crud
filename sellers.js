function sellerAdmit(event){
    event.preventDefault();

    let numb=event.target.price.value;
    let name=event.target.name.value;
    let option=event.target.option.value;


    let item={
        numb:`${numb}`,
        name:`${name}`,
        option:`${option}`
    }


    axios.post('https://crudcrud.com/api/e29047ec23a94a8585ea4a664b860f01/admin',item)
    .then(res=>showOnscreen(res.data))
    .catch(err=>console.log(err));

    event.target.price.value=' ';
    event.target.name.value=' ';
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/e29047ec23a94a8585ea4a664b860f01/admin')
    .then(res=>{
        for (let i=0;i<res.data.length;i++){
            showOnscreen(res.data[i])
        }
    })
    .catch(err=>console.log(err));
})

function showOnscreen(x){
    let i=x._id;
    let num=x.numb;
    let name=x.name;
    let option=x.option;

    let ul=document.getElementById(`${option}ul`);

    let li=document.createElement('li');
    li.id=`li${i}`
    let liText=document.createTextNode(`*${num}-${option}-${name} `)

    let button=document.createElement('button')
    button.textContent='Dlete Order'
    button.onclick=function (event){
        axios.delete(`https://crudcrud.com/api/e29047ec23a94a8585ea4a664b860f01/admin/${i}`)
        .then(res=>deleteFunction(option,i))
        .catch(err=>console.log(err));
    }


    li.appendChild(liText);
    li.appendChild(button);


    ul.appendChild(li);

}
function deleteFunction(x,y){
    let ul=document.getElementById(`${x}ul`)
    let li=document.getElementById(`li${y}`);

    ul.removeChild(li);

}