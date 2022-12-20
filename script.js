//Menu amburger usando jQuery

//$(document).ready(function(){

  //let  slideAtual = 1
  //let listaSlides = ["banner-f1", "banner-cs", "banner-Lol"]

//  setInterval(mudarSlide, 2000);

  //function mudarSlide(){
    // Remover o slider anterior
    //if (slideAtual > 0){
    //$("#carrossel").removeClass(listaSlides[slideAtual -1])
    //}
    //else{
      //$("#carrossel").removeClass(listaSlides[2])

    //}
    
    // Exibir o slide atual
    //$("#carrossel").addClass(listaSlides[slideAtual])
    
    // Indicar qual o slide atual
    //console.log("O slide atual é: = ",slideAtual)
    //slideAtual ++

    //if (slideAtual > 2){
      //  slideAtual = 0
    //}
    
  //}

//Ou da forma a baixo para funcionar de forma mais generica

$(document).ready(function(){

  let  slideAtual = 1
  let listaSlides = ["banner-f1", "banner-cs", "banner-Lol"]

  setInterval(mudarSlide, 2000);

  function mudarSlide(){
    // Remover o slider anterior
    if (slideAtual > 0){
    $("#carrossel").removeClass(listaSlides[slideAtual -1])
    }
    else{
      $("#carrossel").removeClass(listaSlides[listaSlides.length - 1])

    }
    
    // Exibir o slide atual
    $("#carrossel").addClass(listaSlides[slideAtual])
    
    // Indicar qual o slide atual
    console.log("O slide atual é: = ",slideAtual)
    slideAtual ++

    if (slideAtual > listaSlides.length -1){
        slideAtual = 0
    }
    
  }



  //function mudarSlide(){
    // Remover o slider anterior
    //$("#carrossel").removeClass(listaSlides[slideAtual -1])
    
    // Exibir o slide atual
    // $("#carrossel").addClass(listaSlides[slideAtual])
    
    // Indicar qual o slide atual
    //console.log("O slide atual é: = ",slideAtual)
    // slideAtual ++

    //if (slideAtual > 2){
    //    slideAtual = 0
  //  }
//  }


  $("#barras").click(function(){
      if ($("#menu").hasClass("menu-ativo")){
          $("#menu").removeClass("menu-ativo")
      }
      else{
          $("#menu").addClass("menu-ativo")
      }
  })
})


//$(document).ready(function(){
    //$("#barras").click(function(){
    // alert ("Evento do botão");
  //})
//})

//$(document).ready(function(){
  //alert("teste executando jQuery")
//})



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

//Menu amburger usando Java Script

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