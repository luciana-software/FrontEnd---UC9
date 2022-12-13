// alert("Agora rodando em arquivo externo")
//function Pesquisar(){
   // alert("Pesquisa realizada")
//}

//function cadastrarNewsletter(){
  //  let numero 1 = 5
    //let numero 2 = 10
    //let resultado = numero 1 + numero2
    //console.log(resultado)
//}

//function cadastrarNewsletter(){
  //  let email = document.getElementById("campo-email").value
    //alert(email)
//}

function pesquisar(){
    let pesquisar = document.getElementById("campo-pesquisar").value
    alert(pesquisar)
}

function mostrarMenu($evento){
  //identificar o elemento do menu
  let menu = document.getElementById("menu")
  
  //if(menu.style.display == "none")
  if(getComputedStyle (menu).display == "none"){
    menu.style.display = "flex"
  }
  else{
    menu.style.display = "none"
  }

  //mudar visualização do menu
  event.preventDefault();
}