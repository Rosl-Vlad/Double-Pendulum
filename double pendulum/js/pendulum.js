$('#set_variables_form').submit(function (e) {
  e.preventDefault();
  if (flg1 == 0) {
    m1[0]     = $('#mass1').val();
    m2[0]     = $('#mass2').val();
    Phi1[0]   = $('#angle1').val()/90*(Math.PI);
    Phi2[0]   = $('#angle2').val()/180*(Math.PI);
    g[0]      = $('#gravity').val();
    d2Phi1[0] = 0;
    d2Phi2[0] = 0;
    dPhi1[0]  = 0;
    dPhi2[0]  = 0;
    pointsX1  = [];
    pointsY1  = [];
    flg1 = 1;
    document.getElementById('pendulum1').value = 'stop';
    run();
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('pendulum1').value = 'start';
    flg1 = 0;
  }
});

$('#set_variables').submit(function (f) {
  f.preventDefault();
  if (flg2 == 0) {
    m1[1]     = $('#mass11').val();
    m2[1]     = $('#mass21').val();
    Phi1[1]   = $('#angle11').val()/90*(Math.PI);
    Phi2[1]   = $('#angle21').val()/180*(Math.PI);
    g[1]      = $('#gravity1').val();
    d2Phi1[1] = 0;
    d2Phi2[1] = 0;
    dPhi1[1]  = 0;
    dPhi2[1]  = 0;
    pointsX2  = [];
    pointsY2  = [];
    flg2 = 1;
    document.getElementById('pendulum2').value = 'stop';
    run();
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('pendulum2').value = 'start';
    flg2 = 0;
  }
});

function drawCircle(myCircle, context, i) {
  context.beginPath();
  context.arc(myCircle.x, myCircle.y, myCircle.mass[i], 0, 2 * Math.PI, false);
  if (i == 0) {
    context.fillStyle = '#A62000';
  } else {
    context.fillStyle = '#00A480';
  }
  context.fill();
}


function drawLine(myLine, context) {
  context.beginPath();
  context.moveTo(myLine.x0, myLine.y0);
  context.lineTo(myLine.x, myLine.y);
  context.strokeStyle = 'black';
  context.lineWidth = 3;
  context.stroke();
}

function drawPoint(context, d) {
  if (pointsX1.length > 255) {
    pointsX1.shift();
    pointsY1.shift();
  }
  if (pointsX2.length > 255) {
    pointsX2.shift();
    pointsY2.shift();
  }
  if (d == 3) {
    for (var i = 0; i < pointsX1.length; i++) {
      if (color == 255) { 
        colorflg = 1;
      } else if (color == 0) {
        colorflg = 0;
      }
      if (colorflg == 0) {
        color += 1;
      } else {
        color -= 1;
      }
      context.beginPath();
      context.arc(pointsX1[i], pointsY1[i], 1, 0, 2 * Math.PI, false);
      context.fillStyle = "rgb(" + color + "," + 32 + "," + 0 + ")";
      context.fill();
    }
    for (var i = 0; i < pointsX2.length; i++) {
      if (color == 255) { 
        colorflg = 1;
      } else if (color == 0) {
        colorflg = 0;
      }
      if (colorflg == 0) {
        color += 1;
      } else {
        color -= 1;
      }
      context.beginPath();
      context.arc(pointsX2[i], pointsY2[i], 1, 0, 2 * Math.PI, false);
      context.fillStyle = "rgb(" + 0 + "," + color + "," + 131 + ")";
      context.fill();
    }
  } else {
    if (d == 0) {
      for (var i = 0; i < pointsX1.length; i++) {
        if (color == 255) { 
          colorflg = 1;
        } else if (color == 0) {
          colorflg = 0;
        }
        if (colorflg == 0) {
          color += 1;
        } else {
          color -= 1;
        }
        context.beginPath();
        context.arc(pointsX1[i], pointsY1[i], 1, 0, 2 * Math.PI, false);
        context.fillStyle = "rgb(" + color + "," + 32 + "," + 0 + ")";
        context.fill();
      }
    } else {
      for (var i = 0; i < pointsX2.length; i++) {
        if (color == 255) { 
          colorflg = 1;
        } else if (color == 0) {
          colorflg = 0;
        }
        if (colorflg == 0) {
          color += 1;
        } else {
          color -= 1;
        }
        context.beginPath();
        context.arc(pointsX2[i], pointsY2[i], 1, 0, 2 * Math.PI, false);
        context.fillStyle = "rgb(" + 0 + "," + color + "," + 131 + ")";
        context.fill();
      }
    }
  }
}

function animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context) {
  if (flg2 && flg1) {
    for (var i = 0; i < 2; i++) {
      mu      =  1 + m1[i] / m2[i];
      d2Phi1[i]  =  (g[i]*(Math.sin(Phi2[i])*Math.cos(Phi1[i]-Phi2[i])-mu*Math.sin(Phi1[i]))-(l2[0]*dPhi2[i]*dPhi2[i]+l1[0]*dPhi1[i]*dPhi1[i]*Math.cos(Phi1[i]-Phi2[i]))*Math.sin(Phi1[i]-Phi2[i]))/(l1[0]*(mu-Math.cos(Phi1[i]-Phi2[i])*Math.cos(Phi1[i]-Phi2[i])));
      d2Phi2[i]  =  (mu*g[i]*(Math.sin(Phi1[i])*Math.cos(Phi1[i]-Phi2[i])-Math.sin(Phi2[i]))+(mu*l1[0]*dPhi1[i]*dPhi1[i]+l2[0]*dPhi2[i]*dPhi2[i]*Math.cos(Phi1[i]-Phi2[i]))*Math.sin(Phi1[i]-Phi2[i]))/(l2[0]*(mu-Math.cos(Phi1[i]-Phi2[i])*Math.cos(Phi1[i]-Phi2[i])));
      dPhi1[i]   += d2Phi1[i]*time;
      dPhi2[i]   += d2Phi2[i]*time;
      Phi1[i]    += dPhi1[i]*time;
      Phi2[i]   += dPhi2[i]*time;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 2; i++) {

      myCircle1.x = X0[0]+l1[0]*Math.sin(Phi1[i]);
      myCircle1.y = Y0[0]+l1[0]*Math.cos(Phi1[i]);
      myCircle2.x = X0[0]+l1[0]*Math.sin(Phi1[i])+l2[0]*Math.sin(Phi2[i]);
      myCircle2.y = Y0[0]+l1[0]*Math.cos(Phi1[i])+l2[0]*Math.cos(Phi2[i]);
      
      if (i == 0) {
        pointsX1.push(myCircle2.x);
        pointsY1.push(myCircle2.y);
      } else if (i == 1) {
        pointsX2.push(myCircle2.x);
        pointsY2.push(myCircle2.y);
      }
      myLine1.x  = myCircle1.x;
      myLine1.y  = myCircle1.y;
      myLine2.x0 = myCircle1.x;
      myLine2.y0 = myCircle1.y;
      myLine2.x  = myCircle2.x;
      myLine2.y  = myCircle2.y;
      drawPoint(context, 3);
      drawLine(myLine1, context);
      drawLine(myLine2, context);
      drawCircle(myCircle1, context, i);
      drawCircle(myCircle2, context, i);
      drawPoint(context, 3);
    }
  } else if (flg2 || flg1) {
    if (flg2) {
      var i = 1;
    } else {
      var i = 0;
    }
    
    mu      =  1 + m1[i] / m2[i];
    d2Phi1[i]  =  (g[i]*(Math.sin(Phi2[i])*Math.cos(Phi1[i]-Phi2[i])-mu*Math.sin(Phi1[i]))-(l2[0]*dPhi2[i]*dPhi2[i]+l1[0]*dPhi1[i]*dPhi1[i]*Math.cos(Phi1[i]-Phi2[i]))*Math.sin(Phi1[i]-Phi2[i]))/(l1[0]*(mu-Math.cos(Phi1[i]-Phi2[i])*Math.cos(Phi1[i]-Phi2[i])));
    d2Phi2[i]  =  (mu*g[i]*(Math.sin(Phi1[i])*Math.cos(Phi1[i]-Phi2[i])-Math.sin(Phi2[i]))+(mu*l1[0]*dPhi1[i]*dPhi1[i]+l2[0]*dPhi2[i]*dPhi2[i]*Math.cos(Phi1[i]-Phi2[i]))*Math.sin(Phi1[i]-Phi2[i]))/(l2[0]*(mu-Math.cos(Phi1[i]-Phi2[i])*Math.cos(Phi1[i]-Phi2[i])));
    dPhi1[i]   += d2Phi1[i]*time;
    dPhi2[i]   += d2Phi2[i]*time;
    Phi1[i]    += dPhi1[i]*time;
    Phi2[i]    += dPhi2[i]*time;

    context.clearRect(0, 0, canvas.width, canvas.height);

    myCircle1.x = X0[0]+l1[0]*Math.sin(Phi1[i]);
    myCircle1.y = Y0[0]+l1[0]*Math.cos(Phi1[i]);
    myCircle2.x = X0[0]+l1[0]*Math.sin(Phi1[i])+l2[0]*Math.sin(Phi2[i]);
    myCircle2.y = Y0[0]+l1[0]*Math.cos(Phi1[i])+l2[0]*Math.cos(Phi2[i]);
    
    if (i == 0) {
      pointsX1.push(myCircle2.x);
      pointsY1.push(myCircle2.y);
    } else {
      pointsX2.push(myCircle2.x);
      pointsY2.push(myCircle2.y);
    }
    myLine1.x  = myCircle1.x;
    myLine1.y  = myCircle1.y;
    myLine2.x0 = myCircle1.x;
    myLine2.y0 = myCircle1.y;
    myLine2.x  = myCircle2.x;
    myLine2.y  = myCircle2.y;
    drawLine(myLine1, context);
    drawLine(myLine2, context);
    drawCircle(myCircle1, context, i);
    drawCircle(myCircle2, context, i);
    drawPoint(context, i);
  }
}

var colorflg = 0;
var color = 0;
var flg1 = 0;
var flg2 = 0;
var pointsX1 = [];
var pointsY1 = [];
var pointsX2 = [];
var pointsY2 = [];
var d2Phi1 = [0, 0];
var d2Phi2 = [0, 0];
var dPhi1  = [0, 0];
var dPhi2  = [0, 0];
var Phi1   = [(Math.PI), (Math.PI)];
var Phi2   = [(Math.PI)/2, (Math.PI)];
var m1     = [20, 20];
var m2     = [20, 20];
var l1     = [150];
var l2     = [150];
var X0     = [350];
var Y0     = [200];
var g      = [9.8, 9.8];
var time   = 0.05;

var canvas  = document.getElementById('myCanvas');
document.body.style.backgroundColor = "#292F36";
var context = canvas.getContext('2d');
var init    = {};

function run(){
  var myLine1 = {x0: X0[0], y0: Y0[0], x: 0, y: 0};
  var myLine2 = {x0: 0, y0: 0, x: 0, y: 0};
  var myCircle1 = {x: X0[0]+l1[0]*Math.sin(Phi1[0]), y: Y0[0]+l1[0]*Math.cos(Phi1[0]), mass: m1};
  var myCircle2 = {x: X0[0]+l1[0]*Math.sin(Phi1[0])+l2[0]*Math.sin(Phi2[0]), y: Y0[0]+l1[0]*Math.cos(Phi1[0])+l2[0]*Math.cos(Phi2[0]), mass: m2};
  clearInterval(init);
  context.clearRect(0, 0, canvas.width, canvas.height);
  init = setInterval(function(){
    animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context);
  }, 5);
}