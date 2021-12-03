// JavaScript Document
  agregarEvento(window,'load',iniciar,false);

  function iniciar(){
	  var letra= '';
	  errores= 0;
	  intentos= 6;

	  noIntentos= document.getElementById('noIntentos');

	  for(let i=65;i<91;i++){
		  var contenedorLetras= document.getElementById('contenedorLetras');
		  var letra= letra+'<div class= "letter-button" id= "letra'+String.fromCharCode(i)+'">'+String.fromCharCode(i)+'</div>';
		  contenedorLetras.innerHTML=letra;
	  }
	  letras=document.getElementsByClassName('letter-button');
	  for(let i=0;i<letras.length;i++){
		  agregarEvento(letras[i],'click',jugar,false);
	  }
	  palabras=new Array('pardo','hormiguero','polar','andino','perezoso','anteojos');
	  numeroAzar=Math.floor(Math.random()*6);
	  palabraSecreta=document.getElementById('palabraSecreta');
	  respuesta=[];
	  palabra='';
	  divClassLetra='<div class="letter">';
	  for(let i=0;i<palabras[numeroAzar].length;i++){
		  respuesta[i]=divClassLetra+'_</div> ';
		  palabra=palabra+respuesta[i];
		  //contenedorPalabra.innerHTML=respuesta[i];
	  }
	  palabraSecreta.innerHTML=palabra;
	  var botonJugar=document.getElementById('botonJugar');
	  agregarEvento(botonJugar,'click',function(){ location.href='index.html';},false);
  }
  function jugar(e){
	  if(e){
		  id=e.target.id;
	  }else{
		  if(window.event){
			  id=window.event.srcElement.id;
		  }
	  }
	  var letraCorrecta=false;
	  var palabra='';
	  var letraPulsada=id.charAt(5);
	  for(let i=0;i<palabras[numeroAzar].length;i++){
		  if(palabras[numeroAzar].toUpperCase().charAt(i)==letraPulsada){
			  respuesta[i]=divClassLetra+letraPulsada+'</div>';	
			  letraCorrecta=true;
		  }
		  palabra=palabra+respuesta[i];
		  //contenedorPalabra.innerHTML=respuesta[i];
	  }
	  var imagen=document.getElementById('imagen');
	  palabraSecreta.innerHTML=palabra;
	  if(letraCorrecta==false){
		  colorLetra='';
		  errores++;
		  intentos=intentos-1;
		  noIntentos.innerHTML=intentos;
		  img=errores+1;
		  imagen.src='img/a'+img+'.png';
		  if(errores==6){
			  alert('Perdiste :c\nPulsa jugar de nuevo para continuar');
			  for(let i=0;i<letras.length;i++){	
				  removerEvento(letras[i],'click',jugar);
			  }
			  palabra='';
			  for(let i=0;i<palabras[numeroAzar].length;i++){
				  if(divClassLetra+palabras[numeroAzar].toUpperCase().charAt(i)+'</div>'==respuesta[i]){
					  colorLetra='<div style="color:blue;" class="letra alinearHorizontal">'+respuesta[i]+'</div>';
					  respuesta[i]=colorLetra;	
				  }else{
					  respuesta[i]=divClassLetra+palabras[numeroAzar].toUpperCase().charAt(i)+'</div>';
				  }
				  palabra=palabra+respuesta[i];
			  }
			  palabraSecreta.innerHTML=palabra;
		  }
	  }else{
		  var palabraCompleta=true;
		  for(let i=0;i<palabras[numeroAzar].length;i++){
			  if(respuesta[i]==divClassLetra+'_</div> '){
				  palabraCompleta=false;
			  }
		  }
		  if(palabraCompleta){
			  alert('Ganaste :D\nPulsa jugar de nuevo para continuar');
			  for(let i=0;i<letras.length;i++){	
				  removerEvento(letras[i],'click',jugar);
			  }
		  }
	  }
  }
  function agregarEvento(elemento,evento,funcion,captura){
	  if(window.addEventListener){
		  elemento.addEventListener(evento,funcion,captura);
	  }else if(window.attachEvent){
		  elemento.attachEvent('on'+evento,captura);
	  }else{
		  alert('Error al agregar el evento');
	  }
  }
  function removerEvento(elemento,evento,funcion){
	  if(window.removeEventListener){
		  elemento.removeEventListener(evento,funcion);
	  }else if(window.detachEvent){
		  elemento.detachEvent(evento,funcion);
	  }else{
		  alert('Error al remover el evento');
	  }
  }