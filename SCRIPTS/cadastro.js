let btn = document.querySelector('#verpassword')
let btnConfim = document.querySelector('#verconfirmpassword')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha =document.querySelector('#password')
let labelSenha = document.querySelector('#labelpassword')
let validSenha = false

let confirmSenha = document.querySelector('#confirm-password')
let labelConfirmSenha = document.querySelector('#labelConfirm-password')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

// -------------------------------------------------//

nome.addEventListener('keyup', () => {
    if(nome. value. length <= 2 ) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira um nome válido'
        nome.setAttribute('style', 'border-color:red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }   
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
      labelUsuario.setAttribute('style', 'color: red')
      labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
      usuario.setAttribute('style', 'border-color: red')
      validUsuario = false
    } else {
      labelUsuario.setAttribute('style', 'color: green')
      labelUsuario.innerHTML = 'Usuário'
      usuario.setAttribute('style', 'border-color: green')
      validUsuario = true
    }
  })

senha.addEventListener('keyup',()=> {
    if(senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else if (!/[A-Z]/.test(senha.value)) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira pelo menos 1 caracteres maiúsculo'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else if (!/[\W_]/.test(senha.value)){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira pelo menos 1 símbolo'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
  })

confirmSenha.addEventListener('keyup', () => {
    if(senha.value == confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: green')
      labelConfirmSenha.innerHTML = 'Confirmar Senha'
      confirmSenha.setAttribute('style', 'border-color: green')
      validConfirmSenha = true
    } else {
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    }
  })
  
function cadastrar() {
    if(validNome && validUsuario && validSenha && validConfirmSenha) {
        let listaUser = JSON.parse(localStorage.getItem['listaUser'] || '[]')

        let senhaCriptografada = Crypto.SHA512(senha.value).toString()

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senhaCriptografada
            }
        )
        
    }
  
    localStorage.setItem('listUser', JSON.stringify(listaUser))
}