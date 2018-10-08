var IntentoSelec=0;
var TotalInt=0;

function deshabilitar1(){
	document.getElementById("SelecProve").disabled=true;
	document.getElementById("SelecClean").disabled=true;
}

function deshabilitarOp1(){
	document.getElementById("SelecOne").disabled=true;
	document.getElementById("SelecTwo").disabled=true;
	document.getElementById("SelecThree").disabled=true;
}

function habilitarOp1(){
	document.getElementById("SelecOne").disabled=false;
	document.getElementById("SelecTwo").disabled=false;
	document.getElementById("SelecThree").disabled=false;
}

function deshabilitarOp2(){
	document.getElementById("BooleanOne").disabled=true;
	document.getElementById("BooleanTwo").disabled=true;

}

function habilitarOp2(){
	document.getElementById("BooleanOne").disabled=false;
	document.getElementById("BooleanTwo").disabled=false;
}

deshabilitar1();

function selec1(){
	if(document.getElementById("SelecOne")||document.getElementById("SelecTwo")||
	document.getElementById("SelecThree").checked==true){
		document.getElementById("SelecProve").disabled=false;
		document.getElementById("SelecClean").disabled=false;
	}else{
		deshabilitar1();
	}
}

function SelecComprobe(){
	IntentoSelec+=1;
	TotalInt+=1;
	if(document.getElementById("SelecOne").checked==true){
		if(document.getElementById("SelecOne").value==1){
			document.getElementById("tic1").style="display: hidden";
			deshabilitar1();
			deshabilitarOp1();
		}else{
			document.getElementById("error1").style="display: hidden";
			document.getElementById("SelecProve").disabled=true;
			deshabilitarOp1();
		}
	}else if(document.getElementById("SelecTwo").checked==true){
		if(document.getElementById("SelecTwo").value==1){
			document.getElementById("tic2").style="display: hidden";
			deshabilitar1();
			deshabilitarOp1();
		}else{
			document.getElementById("error2").style="display: hidden";
			document.getElementById("SelecProve").disabled=true;
			deshabilitarOp1();
		}
	}else if(document.getElementById("SelecThree").checked==true){
		if(document.getElementById("SelecThree").value==1){
			document.getElementById("tic3").style="display: hidden";
			deshabilitar1();
			deshabilitarOp1();
		}else{
			document.getElementById("error3").style="display: hidden";
			document.getElementById("SelecProve").disabled=true;
			deshabilitarOp1();
		}
	}document.getElementById("IntentosSelec").innerHTML = "Intentos: "+IntentoSelec;
	document.getElementById("Total").innerHTML = "Total Intentos: "+TotalInt;
	if(IntentoSelec==3){
		document.getElementById("SelecProve").disabled=true;
		document.getElementById("SelecClean").disabled=true;
		deshabilitarOp1();
	}
}

var IntentoBoolean=0;

function deshabilitar2(){
	document.getElementById("BooleanProve").disabled=true;
	document.getElementById("BooleanClean").disabled=true;
}

deshabilitar2();

function selec2(){
	if(document.getElementById("BooleanOne")||document.getElementById("BooleanTwo").checked==true){
		document.getElementById("BooleanProve").disabled=false;
		document.getElementById("BooleanClean").disabled=false;
	}else{
		deshabilitar2();
	}
}

function BooleanComprobe(){
	IntentoBoolean+=1;
	TotalInt+=1;
	if(document.getElementById("BooleanOne").checked==true){
		if(document.getElementById("BooleanOne").value==1){
			document.getElementById("tic4").style="display: hidden";
			deshabilitar2();
			deshabilitarOp2();
		}else{
			document.getElementById("error4").style="display: hidden";
			document.getElementById("BooleanProve").disabled=true;
			deshabilitarOp2();
		}
	}else if(document.getElementById("BooleanTwo").checked==true){
		if(document.getElementById("BooleanTwo").value==1){
			document.getElementById("tic5").style="display: hidden";
			deshabilitar2();
			deshabilitarOp2();
		}else{
			document.getElementById("error5").style="display: hidden";
			document.getElementById("BooleanProve").disabled=true;
			deshabilitarOp2();
		}
	}document.getElementById("IntentosBoolean").innerHTML = "Intentos: "+IntentoBoolean;
	document.getElementById("Total").innerHTML = "Total Intentos: "+TotalInt;
	if(IntentoBoolean==2){
		deshabilitar2();
		deshabilitarOp2();
	}
}

function DevelopComprobe(){
    TotalInt+=1;
    document.getElementById("TextGood").innerHTML="Este es el texto que realmente es bueno";
    document.getElementById("Develop").disabled=true;
    deshabilitar3();
    document.getElementById("Total").innerHTML = "Total Intentos: "+TotalInt;
}

function SelecCleaner(){
	var des1=document.getElementsByName("Selec");
	document.getElementById("tic1").style="display: none";
	document.getElementById("tic2").style="display: none";
	document.getElementById("tic3").style="display: none";
	document.getElementById("error1").style="display: none";
	document.getElementById("error2").style="display: none";
	document.getElementById("error3").style="display: none";
	deshabilitar1();
	habilitarOp1();
	for(var i=0;i<des1.length;i++){
		des1[i].checked=false;
	}
}

function BooleanCleaner(){
	var des2=document.getElementsByName("Boolean");
	document.getElementById("tic4").style="display: none";
	document.getElementById("tic5").style="display: none";
	document.getElementById("error4").style="display: none";
	document.getElementById("error5").style="display: none";
	deshabilitar2();
	habilitarOp2();
	for(var i=0;i<des2.length;i++){
		des2[i].checked=false;
	}
}

function deshabilitar3(){
	document.getElementById("DevelopProve").disabled=true;
	document.getElementById("DevelopClean").disabled=true;
}

function habilitar3(){
	document.getElementById("DevelopProve").disabled=false;
	document.getElementById("DevelopClean").disabled=false;
}

deshabilitar3();

function DevelopCleaner(){
	 document.getElementById("Develop").value="";
	 deshabilitar3();
}

function Vacio(){
	if(document.getElementById("Develop").value!=""){
		habilitar3();
	}else{
		deshabilitar3();
	}
}
