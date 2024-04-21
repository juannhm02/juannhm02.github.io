{
    const fwSkills={
        MongoDB:['#01DF01',"70%"],
        React: ['#81DAF5',"30%"],
        Docker:['#0080FF',"50%"],
        Hibernate:['#FFBF00',"40%"],
        NodeJS:['#6DA55F',"30%"]
    };
    const palabras = ['Presidente del CEEPS', 'Ingeniero Informático','Desarrollador Web'];
    
    document.addEventListener('DOMContentLoaded',function(){    
        animarMenu();
        animarPalabra();
        animarSkill();
        scrollMenu();
        scrollViewport();
    });

    const scrollViewport=function(){
      ScrollReveal().reveal('.presentacion', { delay: 500 });
      ScrollReveal().reveal('#sobreMi', { delay: 500 });
      ScrollReveal().reveal('#proyectos', { delay: 500 });
      ScrollReveal().reveal('#contacto', { delay: 500 });
      ScrollReveal().reveal('footer div', { delay: 500 });
    }

    const resetActiveClass=function(){
      $(".nav-link").each(function(){
        $(this).removeClass("nav-menu-link_active");
      });
    }

    const scrollMenu = function(){
      
      $(document).scroll(function(){
        $("section").each(function(){
          if($(document).scrollTop()<=$("#sobreMi").offset().top-5 && $(document).scrollTop()>0 ){
            resetActiveClass();
            $("a[href='#inicio']").addClass("nav-menu-link_active");
          }else if($(document).scrollTop()<=$("#servicios").offset().top-5 && $(document).scrollTop()>=$("#sobreMi").offset().top){
            resetActiveClass();
            $("a[href='#sobreMi']").addClass("nav-menu-link_active");
          }else if($(document).scrollTop()<=$("#proyectos").offset().top-5 && $(document).scrollTop()>=$("#servicios").offset().top){
            resetActiveClass();
            $("a[href='#servicios']").addClass("nav-menu-link_active");
          }else if($(document).scrollTop()<=$("#contacto").offset().top-5 && $(document).scrollTop()>=$("#proyectos").offset().top){
            resetActiveClass();
            $("a[href='#proyectos']").addClass("nav-menu-link_active");
          }else if($(document).scrollTop()>=$("#contacto").offset().top-5){
            resetActiveClass();
            $("a[href='#contacto']").addClass("nav-menu-link_active");
          }
        });
      });

    }

    const animarMenu=function(){
      const navToggle = document.querySelector(".nav-toggle");
      const ul = document.querySelector(".nav-menu");
      const enlaces=document.querySelectorAll(".nav-link");
      
      navToggle.addEventListener("click", () => {
        ul.classList.toggle("nav-menu_visible");
        if(ul.classList.contains("nav-menu_visible")){
          enlaces.forEach(enlace => {
            enlace.addEventListener("click", () => {
              ul.classList.remove("nav-menu_visible");
            });
          });
        }
        if (ul.classList.contains("nav-menu_visible")) {
          navToggle.setAttribute("aria-label", "Cerrar menú");
        } else {
          navToggle.setAttribute("aria-label", "Abrir menú");
        }
      });

      enlaces.forEach(enlace => {
        enlace.addEventListener("click", () => {
          if(enlace.classList.contains("nav-menu-link_active")){
            return;
          }else{
            enlaces.forEach(enlace => {
              enlace.classList.remove("nav-menu-link_active");
            });
            enlace.classList.add("nav-menu-link_active");
          }
        });
      });
    }

    const animarSkill=function(){
        let otraSkill=document.querySelectorAll('.otraSkill');  
        let barraSkill=document.querySelectorAll('.barraSkill');

        otraSkill.forEach((elemento,index)=>{
            let nombreSkill=otraSkill[index].textContent;
            elemento.style.backgroundColor=fwSkills[nombreSkill][0];
            elemento.style.border="2px solid black";
            elemento.style.width=fwSkills[nombreSkill][1];
        });

        barraSkill.forEach((elemento,index)=>{
            let nombreSkill=otraSkill[index].textContent;
            elemento.style.backgroundColor=fwSkills[nombreSkill][0];
        });
    }

    const animarPalabra=function(){
        
        let palabraAnimada = document.getElementById('palabraAnimada'),
        palabraAnimadaContent = palabraAnimada.innerHTML,
        addingWord = false,
        counter = 0;

        setInterval(function(){

            if(palabraAnimadaContent.length > 0 && !addingWord ) {
              palabraAnimada.innerHTML = palabraAnimadaContent.slice(0, -1);
              palabraAnimadaContent = palabraAnimada.innerHTML;
            } else {
              addingWord = true;
            }
        
            if( addingWord ){
              if( palabraAnimadaContent.length < palabras[counter].length  ) {
                palabraAnimada.innerHTML = palabras[counter].slice(0, palabraAnimadaContent.length + 1);
                palabraAnimadaContent = palabraAnimada.innerHTML;
              } else {
                if( counter < palabras.length) {
                  counter ++
                }
                addingWord = false;
              }
            }

            if( counter == palabras.length) {
              counter = 0;
            }
      
        }, 200);
    }
     
    
}