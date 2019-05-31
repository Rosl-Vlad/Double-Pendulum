var elInput3 = document.querySelector('#mass1');
if (elInput3) {
  var w = parseInt(window.getComputedStyle(elInput3, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var etq = document.querySelector('.mass1');
  etq.style.color = "white";
  if (etq) {
    // el valor de la etiqueta (el tooltip) 
    etq.innerHTML = elInput3.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls = w / 100;

    etq.style.left = ((elInput3.value * pxls) - 15) + 'px';

    elInput3.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      etq.innerHTML = elInput3.value;
      // cambia la posición de la etiqueta (el tooltip) 
      etq.style.left = ((elInput3.value * pxls) - 15) + 'px';
      etq.style.color = "white";

    }, false);
  }
}
var elInput2 = document.querySelector('#mass2');
if (elInput2) {
  var w1 = parseInt(window.getComputedStyle(elInput2, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var etq2 = document.querySelector('.mass2');
  etq2.style.color = "white";
  if (etq) {
    // el valor de la etiqueta (el tooltip) 
    etq2.innerHTML = elInput2.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls = w1 / 100;

    etq.style.left = ((elInput2.value * pxls) - 15) + 'px';

    elInput2.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      etq2.innerHTML = elInput2.value;
      // cambia la posición de la etiqueta (el tooltip) 
      etq2.style.left = ((elInput2.value * pxls) - 15) + 'px';
      etq2.style.color = "white";

    }, false);
  }
}
var elInput1 = document.querySelector('#angle1');
if (elInput1) {
  var w2 = parseInt(window.getComputedStyle(elInput1, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var etq3 = document.querySelector('.angle1');
  etq3.style.color = "white";
  if (etq3) {
    // el valor de la etiqueta (el tooltip) 
    etq3.innerHTML = elInput1.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls = w2 / 100;

    etq3.style.left = ((elInput1.value * pxls) - 15) + 'px';

    elInput1.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      etq3.innerHTML = elInput1.value * 2;
      // cambia la posición de la etiqueta (el tooltip) 
      etq3.style.left = ((elInput1.value * pxls) - 15) + 'px';
      etq3.style.color = "white";

    }, false);
  }
}

var elInput4 = document.querySelector('#angle2');
if (elInput4) {
  var w4 = parseInt(window.getComputedStyle(elInput1, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var etq4 = document.querySelector('.angle2');
  etq4.style.color = "white";
  if (etq4) {
    // el valor de la etiqueta (el tooltip) 
    etq4.innerHTML = elInput4.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls = w4 / 100;

    etq4.style.left = ((elInput4.value * pxls) - 15) + 'px';

    elInput4.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      etq4.innerHTML = elInput4.value;
      // cambia la posición de la etiqueta (el tooltip) 
      etq4.style.left = ((elInput4.value * pxls) - 15) + 'px';
      etq4.style.color = "white";
    }, false);
  }
}


var elInput5 = document.querySelector('#gravity');
if (elInput5) {
  var w5 = parseInt(window.getComputedStyle(elInput5, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var etq5 = document.querySelector('.gravity');
  etq5.style.color = "white";
  if (etq5) {
    // el valor de la etiqueta (el tooltip) 
    etq5.innerHTML = elInput5.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls = w5 / 100;

    etq5.style.left = ((elInput5.value * pxls) - 15) + 'px';

    elInput5.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      etq5.innerHTML = elInput5.value;
      // cambia la posición de la etiqueta (el tooltip) 
      etq5.style.left = ((elInput5.value * pxls) - 15) + 'px';
      etq5.style.color = "white";

    }, false);
  }
}
var elInput31 = document.querySelector('#mass11');
if (elInput31) {
  var w6 = parseInt(window.getComputedStyle(elInput31, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var etq6 = document.querySelector('.mass11');
  etq6.style.color = "white";
  if (etq6) {
    // el valor de la etiqueta (el tooltip) 
    etq6.innerHTML = elInput31.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls1 = w6 / 100;

    etq6.style.left = ((elInput31.value * pxls1) - 15) + 'px';

    elInput31.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      etq6.innerHTML = elInput31.value;
      // cambia la posición de la etiqueta (el tooltip) 
      etq6.style.left = ((elInput31.value * pxls1) - 15) + 'px';
      etq6.style.color = "white";
    }, false);
  }
}
var elInput41 = document.querySelector('#mass21');
if (elInput41) {
  var w7 = parseInt(window.getComputedStyle(elInput41, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var etq7 = document.querySelector('.mass21');
  etq7.style.color = "white";
  if (etq7) {
    // el valor de la etiqueta (el tooltip) 
    etq7.innerHTML = elInput41.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls1 = w7 / 100;

    etq7.style.left = ((elInput41.value * pxls1) - 15) + 'px';

    elInput41.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      etq7.innerHTML = elInput41.value;
      // cambia la posición de la etiqueta (el tooltip) 
      etq7.style.left = ((elInput41.value * pxls1) - 15) + 'px';
      etq7.style.color = "white";
    }, false);
  }
}
var elInput11 = document.querySelector('#angle11');
if (elInput11) {
  var w8 = parseInt(window.getComputedStyle(elInput11, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var etq8 = document.querySelector('.angle11');
  etq8.style.color = "white";
  if (etq8) {
    // el valor de la etiqueta (el tooltip) 
    etq8.innerHTML = elInput11.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls1 = w8 / 100;

    etq8.style.left = ((elInput11.value * pxls1) - 15) + 'px';

    elInput11.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      etq8.innerHTML = elInput11.value * 2;
      // cambia la posición de la etiqueta (el tooltip) 
      etq8.style.left = ((elInput11.value * pxls1) - 15) + 'px';
      etq8.style.color = "white";

    }, false);
  }
}

var elInput51 = document.querySelector('#angle21');
if (elInput51) {
  var w9 = parseInt(window.getComputedStyle(elInput51, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var etq9 = document.querySelector('.angle21');
  etq9.style.color = "white";
  if (etq9) {
    // el valor de la etiqueta (el tooltip) 
    etq9.innerHTML = elInput51.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls1 = w9 / 100;

    etq9.style.left = ((elInput51.value * pxls1) - 15) + 'px';

    elInput51.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      etq9.innerHTML = elInput51.value;
      // cambia la posición de la etiqueta (el tooltip) 
      etq9.style.left = ((elInput51.value * pxls1) - 15) + 'px';
      etq9.style.color = "white";
    }, false);
  }
}


var elInput61 = document.querySelector('#gravity1');
if (elInput61) {
  var q = parseInt(window.getComputedStyle(elInput61, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var et = document.querySelector('.gravity1');
  et.style.color = "white";
  if (et) {
    // el valor de la etiqueta (el tooltip) 
    et.innerHTML = elInput61.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls2 = q / 100;

    et.style.left = ((elInput61.value * pxls2) - 15) + 'px';

    elInput61.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      et.innerHTML = elInput61.value;
      // cambia la posición de la etiqueta (el tooltip) 
      et.style.left = ((elInput61.value * pxls2) - 15) + 'px';
      et.style.color = "white";
    }, false);
  }
}
