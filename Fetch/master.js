{
    let i = 1
    function logDiv() {
        console.log('------------'+i+'------------')
        i++
    }
}

function getLog(log){
    console.log(log)
}
//----------------------------------------//

async function getUser(){
    await fetch('https://random-data-api.com/api/v2/users?size=100').then((req)=>{
        req.json().then(function(x){
            x.forEach((element,index) => {
                let user = document.createElement('div')
                user.setAttribute('class','user')
                user.innerHTML= `
                ${index+1}
                <span>User ID: ${x[index].uid}</span>
                <span>Name: ${x[index].first_name}</span>
                <span>Family name: ${x[index].last_name}</span>
                <span>Username: ${x[index].username}</span>
                <span>E-mail: ${x[index].email}</span>
                <span>Gender: ${x[index].gender}</span>
                <span>Employment: ${x[index].employment.title}</span>
                <span>City: ${x[index].address.city}</span>
                <span>Credit Card: ${x[index].credit_card.cc_number}</span>
                <span>Plan: ${x[index].subscription.plan}</span>
                `
                document.getElementById('target').appendChild(user)
            });
        })
    })
}

document.getElementById('load').addEventListener('click',getUser)