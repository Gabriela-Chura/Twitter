var nuevaTarea = document.getElementById("botonA");
nuevaTarea.setAttribute("onclick", "onButtonClick()");

var listaTareas = [];



function onButtonClick(){
     var lista = document.getElementById("lista"); 
     var texto = document.getElementById("texto");
	 
	
	 if(texto.value != ""|| texto.value.length != 0){
           listaTareas.push({nombre:texto.value, isDone: false});
		 texto.innerHTML="";
	 } else{
		 texto.setAttribute("placeholder","Debes agregar una tarea");
	 }
	
	texto.value= ""; 
	drawTasksList();
}
	

function drawTasksList(){
	var lista = document.getElementById("lista");
	lista.innerHTML="";
	for(var i in listaTareas)
{
var html = "<li class='twitter' " +
(listaTareas[i].isDone?"checked style='text-decoration:line-through'": "style='text-decoration:none'")
 + "><input id='squaredTwo' onclick='selectCheck("+i+")' type='checkbox' "+(listaTareas[i].isDone?"checked": "") + ">" + "<span id='new'>" + listaTareas[i].nombre + "</span><i id='estilo' onclick='deleteSpan("+i+")' class='icon-trash'></i></li>";
			lista.innerHTML += html; 
		}
}

function selectCheck (_value){
	if( listaTareas[_value].isDone == false){
		listaTareas[_value].isDone = true;
	} else {
		listaTareas[_value].isDone = false;
	}
	
	drawTasksList();
}

function deleteSpan(_valor){
	
	listaTareas.splice(_valor,1);
	
	drawTasksList();

}



    /*var lista = document.getElementById("lista"); 
    var texto = document.getElementById("texto");
    var nuevaTarea = document.getElementById("botonA");
    
   
    nuevaTarea.addEventListener("click",  onButtonClick);

    
    //Funciones

    function onButtonClick(evt)
    {
     
        agregarMensaje();
    }

    function agregarMensaje(){
        
        if(texto.value === ""|| texto.value.length == 0){
<<<<<<< HEAD
            alert("Ingrese una tarea"); 
=======
>>>>>>> master
           lista.removeChild(this.parentNode);
            
        }
        
    var item = document.createElement('li');
    var span = document.createElement('span');
    var icon = document.createElement('a');
    var checking = document.createElement('input');

	span.innerHTML = texto.value;
    checking.type = "checkbox"; 
    checking.className = "squaredTwo";
    checking.style = "margin-right: 5px;";
    icon.className = "icon-trash estilo"; 
    item.appendChild(checking);
	item.appendChild(span);
    item.appendChild(icon);
    item.className = "twitter";
	lista.appendChild(item);

	texto.value = '';
	texto.focus();
    
    
    checking.addEventListener('click', onTach);
	icon.addEventListener('click', onItemClick);
   
    }
        
      function onItemClick(evt)
    {
        lista.removeChild(evt.target.parentNode);
    }

    function onTach(evt)
    { console.log(evt.target);
       if(evt.target.checked) {
        
           evt.target.nextSibling.style.textDecoration = "line-through";
       }else{
           evt.target.nextSibling.style.textDecoration = "none";
       }
    }
     */
     

    
