{
    let i = 1

    function logDiv() {
        console.log('------------' + i + '------------')
        i++
    }
}

function getLog(log) {
    console.log(log)
}
//----------------------------------------//
const myreq = new Request('https://random-data-api.com/api/v2/users?size=100')
let userCounter = 0
let loadbar = document.getElementById('fill')
async function getUser() {
    loadbar.style.background='green'
    let i = 100
    let limit = parseInt(Math.random()*70)+10
    getLog(limit)
    let temp = setInterval(() => {
        loadbar.style.right = i + '%'
        i--
        if (i == limit) {
            clearInterval(temp)
            loadbar.style.transition='0.4s'
        }
    }, 1);
    try {
        await fetch(myreq).then((req) => {
            req.json().then(function (x) {
                x.forEach((element, index) => {
                    userCounter++
                    let user = document.createElement('div')
                    user.setAttribute('class', 'user')
                    user.innerHTML = `
                    ${userCounter}
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
        loadbar.style.right='0%'
        setTimeout(() => {
        loadbar.style.transition='none'
        document.getElementById('loadPop').classList.add('hidden')
        }, 500);
    } catch {
        loadbar.style.background = 'red'
    }
}
getUser()

document.getElementById('load').addEventListener('click', () => {
    document.getElementById('loadPop').classList.remove('hidden')
    getUser()
})