
var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual//GUIA 2 PARTE 3
    pincel.style.backgroundColor = colorActual;
  })
     
);

//GUIA 1 - Parte 1 
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");

//GUIA 1 - Parte 2
 
  for (var i = 0; i < nombreColores.length; i++) {
  var nuevoDiv = document.createElement("div");
  nuevoDiv.style.backgroundColor = nombreColores[i];
  nuevoDiv.className = "color-paleta";
  paleta.appendChild(nuevoDiv);
}

  
//GUIA 1 - Parte 3

    for (var i = 0; i<1750; i++){
  var nuevoPixel = document.createElement("div");
  nuevoPixel.className = "pixel "; 
  grillaPixeles.appendChild(nuevoPixel);
  }


//GUIA 2 - Parte 1
 var pincel = document.getElementById("indicador-de-color");
 
 paleta.addEventListener('click', modificarpincel);

 function modificarpincel(paleta){
   console.log(paleta.target)
   pincel.style.backgroundColor = paleta.target.style.backgroundColor;
 }

 //GUIA 2 - Parte 2 


grillaPixeles.addEventListener('click', function(grillaPixeles){

  grillaPixeles.target.style.backgroundColor = pincel.style.backgroundColor;
});


// GUIA 2 - Parte 4 y 5 
var mouseMovimiento = false;


grillaPixeles.addEventListener("mousedown",function(){
  mouseMovimiento = true;
});
  
grillaPixeles.addEventListener("mouseover",modificarpixel);

function modificarpixel(grillaPixeles){
  if (mouseMovimiento == true){
    grillaPixeles.target.style.backgroundColor = pincel.style.backgroundColor;
   }
}
 
grillaPixeles.addEventListener("mouseup", function (){
  mouseMovimiento = false;
}); 
    
 
//GUIA 3 - Parte 1
 
 $('#borrar').click(function(){
   $('#grilla-pixeles div').animate({'background-color': 'white'},1000);
 });


//GUIA 3 - Parte 2 - 
$('#batman').click(function(){
  cargarSuperheroe(batman);
})

$('#wonder').click(function(){
  cargarSuperheroe(wonder);
})

$('#flash').click(function(){
  cargarSuperheroe(flash);
})

$('#invisible').click(function(){
  cargarSuperheroe(invisible);
})

//GUIA 3- Parte 3 -
$('#guardar').click(function(){
  guardarPixelArt();
})





































