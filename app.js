 navigator.serviceWorker.register('sw.js');



let btnMenu = document.querySelector('.menu');
let nav = document.querySelector('.nav');
let cerrarMenu = document.querySelector('.cerrarMenu');
let back_menu = document.querySelector('.back_menu');

    let modal = document.querySelector('.modal');
    let modal2 = document.querySelector('.modal2');

    let modalCerrar = document.querySelector('.modal_cerrar');
    let modalCerrar2 = document.querySelector('.modal_cerrar2');

    let jugador1 = document.querySelector(".puntosJugador1");
    let jugador2 = document.querySelector(".puntosJugador2");
    
    let btnSumar1 = document.querySelector('.btnSumar1');
    let btnRestar1 = document.querySelector('.btnRestar1');
    
    let btnSumar2 = document.querySelector('.btnSumar2');
    let btnRestar2 = document.querySelector('.btnRestar2');

    let reiniciar = document.querySelector('.reiniciar');

    let contador1 = 0;
    let contador2 = 0;

    let victoria1 = document.querySelector('#victoria1');
    let victoria2 = document.querySelector('#victoria2');

    let contVictoria1 = 0;
    let contVictoria2 = 0;

    let reiniciarVictorias = document.querySelector('.reiniciarVictorias');

    // INICIO  menu

    btnMenu.addEventListener('click', ()=>{
    
        // nav.classList.add('mostrarMenu');
        back_menu.classList.add('mostrar_back_menu');
        nav.style.marginLeft = "0px";
       
    
    })

    cerrarMenu.addEventListener('click',()=>{

        nav.style.marginLeft = "-240px";
        back_menu.classList.remove('mostrar_back_menu');
    })


     //  FIN menu


    

    document.addEventListener("DOMContentLoaded",()=>{
    
        jugador1.textContent = 0;
        jugador2.textContent = 0;

     if(jugador1 < 0){
            btnRestar1.disabled = true;
           }

        if(jugador2 < 0){
        btnRestar2.textContent = true;
        }
    })
 
 
    function mostrarModal() {
        
        modal.classList.add('mostrarModal');
    }

    function mostrarModal2() {
    
        modal2.classList.add('mostrarModal2');
    
    }
    

    btnSumar1.addEventListener('click', ()=> {
    
        contador1++;
        jugador1.innerHTML = contador1;

        if(contador1 == 30){
            contVictoria1++;
            victoria1.textContent = contVictoria1;
        }

        if(contador1 == 30){
            setTimeout(() => {
                mostrarModal();
            }, 500);
        }

        if(contador1 > 0 ){
            btnRestar1.disabled = false;
           }
        
    })


    btnRestar1.addEventListener('click', () => {
    
        contador1--;
        jugador1.innerHTML = contador1;


        if(contador1 == 0){
            btnRestar1.disabled = true;
           } 

    })



    btnSumar2.addEventListener('click', () => {
    
        contador2++;
        jugador2.innerHTML = contador2;
        
        
        if(contador2  == 30){
            setTimeout(() => {

                mostrarModal2();
 
            }, 500);
        }

        if(contador2 == 30){
            contVictoria2++;
            victoria2.textContent = contVictoria2;
        }

        if(contador2 > 0){
            btnRestar2.disabled = false;
        }
        
    })

    btnRestar2.addEventListener('click', () => {

        contador2--;
        jugador2.innerHTML = contador2;

        if(contador2 == 0){
            btnRestar2.disabled = true;
           } 
        
    })



    reiniciar.addEventListener('click', () =>{
 
        contador1 = 0;
        jugador1.textContent = contador1;

        contador2 = 0;
        jugador2.textContent = contador2;


        btnRestar1.disabled = true;
        btnRestar2.disabled = true;
    })


    reiniciarVictorias.addEventListener('click', ()=>{
    
        contVictoria1 = 0;
        victoria1.textContent = contVictoria1;



        contVictoria2 = 0;
        victoria2.textContent = contVictoria2;
    

    })


    modalCerrar.addEventListener('click', ()=>{

        modal.classList.remove('mostrarModal');

    })

 
    modalCerrar2.addEventListener('click', ()=>{
        modal2.classList.remove('mostrarModal2');
    })
    //MODAL
    
    // const mas = document.querySelector('#mas');
    // const ventanaModal = document.querySelector('.ventana-modal');
    // const cerrarModal = document.querySelector('.cerrarModal');
    
    //   mas.addEventListener('click',()=>{
      
    //     ventanaModal.style.display = "block";
        
    //     })
        
        
    //   cerrarModal.addEventListener('click',()=>{
    //     ventanaModal.style.display = "none";
    //     valorCategoria.textContent = '';
    //     valorNota.textContent = '';
    //     })
        
    // //------------------MODAL-FIN----------------
    
    
    
    // //FECHA Y SALUDO
    // let header = document.querySelector('.header');
    // let imgDiaNoche = document.querySelector('.diaYnoche');
    // let saludo = document.querySelector('.saludo');
    // let fechaSemana = document.querySelector('.fecha');
  
    
    // let fecha = new Date();
    
    // let diaSemana = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    // let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre', 'Octubre','Noviembre','Diciembre'];
    
    // console.log(`${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mes[fecha.getMonth()]} de ${fecha.getFullYear()}`)
    
    // fechaSemana.textContent = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mes[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    
    
    
    
    // //--------------------------FIN--------------------------------
    
    
    
    // //--------------------------FUNCION SALUDO--------------------------------
    
    // let hora = fecha.getHours();
    
    // function establecerSaludo() {
    
    // if(hora >= 00 && hora < 12 ){
    // saludo.textContent = `¡Buen día!`;
   
    //     if(hora >= 6 && hora <= 9){
        
    //         header.classList.add('colorAmanecer');
    //         imgDiaNoche.classList.add('imagenTarde');
        
    //     } else if(hora >= 10 ){
    //         header.classList.add('colorDia');
    //         imgDiaNoche.classList.add('imagenDia');
            
    //     }
        
        
    // } else if(hora >= 12 && hora < 21 ){
    //     saludo.textContent = `¡Buenas tardes!`;
    //     imgDiaNoche.classList.add('imagenTarde');
    //     if(hora >= 12 && hora <= 18){
            
    //         header.classList.add('colorDia');
    //         imgDiaNoche.classList.add('imagenDia');
    //     } else if(hora >= 19 && hora <= 20){
            
    //         header.classList.add('colorAtardecer');
    //         imgDiaNoche.classList.add('imagenTarde');
    //     } 

    // } else if(hora >= 21 && hora < 24 )
    // saludo.textContent = `¡Buenas noches!`;
    
    // if(hora <= 5){
            
    //     header.classList.add('colorNoche');
    //     imgDiaNoche.classList.add('imagenNoche');
    // }  else if(hora >= 21 && hora <= 23){

    //     header.classList.add('colorNoche');
    //     imgDiaNoche.classList.add('imagenNoche');
    // }
    
    // } 
    
    // establecerSaludo();
    
    // //------------- FIN --------------------
    
    //     // Guardar datos
    
    //     let contenedorNotas = document.querySelector('.contenedorNotas');
    //     let nota = document.querySelector('#nota');
    //     let categoria = document.querySelector('#categoria');
    //     let btnGuardar = document.querySelector('.btnGuardar');
    //     let listaNotas = [];
    //     let misNotas = [];
        
    //     let horaNota = fecha.getHours(); 
    //     let minutosNota = fecha.getMinutes();   
    //     let hsYmin  = `${horaNota}:${minutosNota}`;
    
    //     console.log(hsYmin);
     
    // btnGuardar.addEventListener('click', (e)=>{

    //     e.preventDefault()
    //     let valorNota = nota.value;
    
    //     let valorCategoria = categoria.value;
    //     let valorHora = hsYmin;
    //     let error = document.querySelector('.error');
    //     let error1 = document.querySelector('.error1');

    //     if(valorNota == ''){
        
    //         error.textContent = `Falta ingresar un valor`;
    //         error.style.color = 'red';
    //         error.style.backgroundColor = '#ff00004a';

    //     } else if(valorCategoria == ''){
    //         error1.textContent = `Falta ingresar un valor`;
    //         error1.style.color = 'red';
    //         error1.style.backgroundColor = '#ff00004a';
    //     }
    //       else {
        
    //         error.textContent = ``;
    //         error1.textContent = ``;
    //         let notas = new Nota(valorNota, valorCategoria,valorHora);
    //         misNotas.push(notas);
    //         localStorage.setItem("notas", JSON.stringify(misNotas));    
    //         mostrarNotas();
    //         console.log(misNotas);


    //         function modalClose(){
    //             ventanaModal.style.display = "none";
    //         }   
    //         modalClose();
    //     }

    //     valorNota.textContent = ``;
    //     valorCategoria.textContent = ``;
    // })
    


    // function leerNotas() {
    //     let lista = JSON.parse(localStorage.getItem("notas"));
        
    //     if(lista){
    //     misNotas = lista;
    //     } else{
    //     misNotas = [];
    //     }
    //     mostrarNotas();
    // }



    
    // //    MOSTRAR DATOS
    
    // function mostrarNotas(){
    
    //         contenedorNotas.innerText = "";
             
    //         misNotas.forEach(nota => {
    
    //         console.log(nota)
    
    
    //         let divNota = document.createElement("div");
    //             divNota.classList = 'contNota';
            
    //         let contCat = document.createElement("div");
    //             contCat.classList = 'contCat';
    
    //         let contMensaje = document.createElement("div");
    //             contMensaje.classList = 'contMensaje';
    
    //         let contHora = document.createElement("div");
    //             contHora.classList = 'contHora';
    
    //         let conImg = document.createElement('div');
    //             conImg.classList = 'conImg';
    //         let img = document.createElement("img");
    //             img.classList = "imgCategoria" ;
    
    //         let contCategoria = document.createElement("div");
    //             contCategoria.classList = 'contCategoria';
    //         let categ = document.createElement("h2");
    //             categ.classList = 'categ';
    //             categ.textContent = nota.categoria;
    
    //         let pNota = document.createElement("p");
    //             pNota.classList = 'valorNota';
    //             pNota.textContent = nota.nombre;
            
    //         let hrCont = document.createElement('div');
    //         let notaHora = document.createElement("p");
    //             notaHora.classList = 'notaHora';
    //             notaHora.textContent = nota.hora;
     
    
    //          let elimCont = document.createElement('div');
    //          let eliminar = document.createElement("img");
    //              eliminar.classList = "btnEliminar";
    //              eliminar.setAttribute('src', './recursos/eliminar.png');
    
    //              eliminar.addEventListener('click',()=>{
    
    //              borrarNotas(nota.categoria);
    
    //            })
    
    //             if(nota.categoria == "Actividades"){
                
    //                 img.setAttribute('src', './recursos/actividad.png')
    //                 divNota.style.backgroundColor = "#0080003d";
                   
    //             } else if(nota.categoria == "Mercado"){
                
    //                 img.setAttribute('src', './recursos/mercado.png')
    //                 divNota.style.backgroundColor = '#80005731';
                     
    //             } else if(nota.categoria == "Indumentaria"){
                
    //                 img.setAttribute('src', './recursos/indumentaria.png')
    //                 divNota.style.backgroundColor = "#7300803e";
                   
    //             } else if(nota.categoria == "Ocio"){
                
    //                 img.setAttribute('src', './recursos/ocio.png')
    //                 divNota.style.backgroundColor = '#1518ca40';
                     
    //             } else if(nota.categoria == "Trabajo"){
                
    //                 img.setAttribute('src', './recursos/trabajo.png')
    //                 divNota.style.backgroundColor = '#ca8b1543';
                  
    //             } else if(nota.categoria == "Escuela"){
                
    //                 img.setAttribute('src', './recursos/escuela.png')
    //                 divNota.style.backgroundColor = '   #15c4ca45';
                
    //             } else {
    //                 img.setAttribute('src', './recursos/otro.png')
    //                 divNota.style.backgroundColor ='#a0ca1543';              
    //             }
    
    //             conImg.append(img)
    //             contCategoria.append(categ)
    //             contCat.append(conImg);
    //             contCat.append(contCategoria);
    
    //             contMensaje.append(pNota);
    
    //             hrCont.append(notaHora);
    //             contHora.append(hrCont);
    
    //             elimCont.append(eliminar)
    //             contHora.append(elimCont);
    
    //             divNota.append(contCat);
    //             divNota.append(contMensaje);
    //             divNota.append(contHora);
    
    //             contenedorNotas.append(divNota);   
            
    //         });
    //     }
     
    //     leerNotas();
        
    //     //ELIMINAR
        
    //     function borrarNotas(categoria){
    
    //         let categoriaDelete = misNotas.findIndex((nota) =>{
    //             return nota.categoria == categoria;
    
    //         });
            
    //         misNotas.splice(categoriaDelete, 1);
    //         localStorage.setItem("notas", JSON.stringify(misNotas));        
    //         mostrarNotas();
              
    //     }
        
 