function dados() {
    const ds = [
        {
            id: 69,
            login: "Pedro",
            password: "ximbinha69",
            email: "ximbinha20matar@gmail.com"
        },
        {
            id: 24,
            login: "Zamengo",
            password: "tuaMaeNoCafeDaTarde",
            email: "gostosa24@gmail.com"
        }
    ]
    return ds
}

const usuario = dados()

//console.log(`O seu login é: ${usuario[0].login}\nA sua senha é: ${usuario[0].password}`)

//let log = document.querySelector('#login').value 
//let senha = document.querySelector('#password').value

function login() {

    let log = document.querySelector('#login').value 
    let senha = document.querySelector('#password').value
    console.log(log)

    //laço for
    for (let i = 0; i < usuario.length; i++) {
        if (log == usuario[i].login && senha == usuario[i].password) {
            console.log('Você logou')
            alert('Você logou!')
        }
    }
    
}




