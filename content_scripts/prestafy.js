﻿
function prestafy(request, sender, sendResponse) {
  setearFecha(request.tipoPrestamo);
  browser.runtime.onMessage.removeListener(prestafy);
}


function setearFecha(tipoPrestamo){
var dateText='';
var f=new Date();
var m=f.getMonth()+1;
var d=f.getDate();
var ds=f.getDay();
var aaaa=f.getFullYear();
var mi=f.getMinutes();
var mm=(m<10) ? '0'+m:m;

var x = document.getElementById('duedatespec');
var y = document.getElementsByTagName("div");
var i;

for (i = 0; i < y.length; i++) {
	if (y[i].className=="checkout-settings"){
		y[i].style.display = "block";
	}
}

mi=(mi<10)? '0'+mi:mi;
  
  if (tipoPrestamo=="Unico"){
	d=(ds==5) ? d+3:d+1;
    var dd=(d<10)? '0'+d:d;
    dateText=dd+'/'+mm+'/'+aaaa;
    x.value=dateText +' 14:00';
  }
  if (tipoPrestamo=='Sala'){
    try{
		var hh=f.getHours()+3;
		var hora='19:50';
		var dd=(d<10) ? '0'+d:d;
		dateText=dd+'/'+mm+'/'+aaaa
		x.value=dateText + ' '+hora; 
	}
	catch(err) {alert("Error:"+err)}
  }
  if (tipoPrestamo=='Normal'){
		 x.value=null;
}
}
browser.runtime.onMessage.addListener(prestafy);
