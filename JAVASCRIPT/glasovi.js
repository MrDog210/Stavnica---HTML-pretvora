// sry vnaprej za špageti kodo
var slike = new Array;
var st=0;
var crka='A';
var pravilnih=0;
var stPravilnih=0;
var predvaja=false;
for(var i=65;i<=89;i++){
    for(var j=0;j<2;j++){
        if(String.fromCharCode(i)=='Q'){
            crka='Č'
        } else if (String.fromCharCode(i)=='W'){
            crka='Š'
        } else if (String.fromCharCode(i)=='X'){
            crka='Z'
        } else if (String.fromCharCode(i)=='Y'){
            crka='Ž'
        } else {
            crka=String.fromCharCode(i);
        }
        slike[st]=crka+j;
        //console.log(slike[st]);
        //console.log(st);
        st++;
    }
}
var izbire = new Array;
izbire[0]=document.getElementById('s1');
izbire[1]=document.getElementById('s2');
izbire[2]=document.getElementById('s3');
izbire[3]=document.getElementById('s4');

function napolnirandom(a2){
    var a1 = [];
    for (var i=0; i<4; i++) { a1.push(i); }
    //var a2 = [];
    while (a1.length) {
        var pos = Math.random()*a1.length;
        var element = a1.splice(pos, 1)[0];
        a2.push(element);
    }
    
}

function naslednjo(){
    predvaja=false;
    var nekaj=0;
    pravilnih=0;
    for(var i=0;i<4;i++){
        izbire[i].style.border="4px solid white";
    }
    var crka2="A";
    var namig = document.getElementById('crka');
    var randomst = Math.floor(Math.random() * 50);
    crka=slike[randomst].charAt(0)
    namig.innerHTML=crka;
    var vrstnired=new Array;
    napolnirandom(vrstnired)
    stPravilnih=(Math.floor(Math.random() * 2))+1;
    console.log(stPravilnih)
    var stPon=0;
    //console.log("St pon")
    for(;stPon<stPravilnih;stPon++){
        if(stPravilnih==1){
            var nevem=(Math.floor(Math.random() * 2));
            izbire[vrstnired[stPon]].src="GLASOVI/"+crka+nevem+".BMP";
            izbire[vrstnired[stPon]].alt=crka+nevem;
        } else {
            izbire[vrstnired[stPon]].src="GLASOVI/"+crka+stPon+".BMP";
            izbire[vrstnired[stPon]].alt=crka+stPon;
        }
        //console.log(stPon)
    }
    console.log("druga")
    for (var i=stPon; i<4; i++){
        console.log(i)
        randomst = Math.floor(Math.random() * 50);
        crka2=slike[randomst].charAt(0)
        //console.log(crka2)
        while(crka2==crka || crka2==izbire[vrstnired[i-1]].src.charAt(8)){
            //console.log(izbire[vrstnired[i-1]].src.charAt(8))
            randomst = Math.floor(Math.random() * 50);
            crka2=slike[randomst].charAt(0)
        }
        nekaj=(Math.floor(Math.random() * 2));
        izbire[vrstnired[i]].src="GLASOVI/"+crka2+nekaj+".BMP";
        izbire[vrstnired[i]].alt=crka2+nekaj;
    }
    //console.log("konec")
}

function predvajajZvok(medija){
    zvok=document.getElementById('zvok');
    zvok.volume=0.5;
    zvok.pause();
    zvok.src=medija;
    zvok.currentTime=0;
    zvok.play();
}

function preveriPravilnost(){
    if(pravilnih==stPravilnih){
        predvajajZvok("ZVOKI/BRAVO1.WAV")
        setTimeout(naslednjo,2000)
    }
    predvaja=false;
}

function preveri(slika){
    //console.log(slika.alt)
    if(!document.getElementById('zvok').paused || predvaja==true)
        return
    if(slika.alt.charAt(0)==document.getElementById('crka').innerHTML && slika.style.border=="4px solid white"){
        var prav = document.getElementById('pravilno');
        var s = parseInt(prav.innerHTML);
        s++;
        prav.innerHTML=s;
        slika.style.border="4px solid blue";
        pravilnih++;
    } else if (slika.style.border=="4px solid white") {
        var naro = document.getElementById('narobe');
        var s = parseInt(naro.innerHTML);
        s++;
        naro.innerHTML=s;
        slika.style.border="4px solid red";
    }
    //console.log(slika.style.border);
    predvaja=true;
    predvajajZvok("ZVOKI/OZNACI.WAV")
    setTimeout(function(){
        predvajajZvok("GLASOVI_GOVOR/"+slika.alt+".WAV")
    },200)
    setTimeout(preveriPravilnost,2200)
    
}
naslednjo()
window.alert("KAJ SE ZAČENJA Z NAPISANO ČRKO?\nOZNAČI SLIČICE.")

function navodila(){
    predvajajZvok("GOVOR/GLASOVII.WAV")
}








/*
var slike = new Array;
var st=0;
var crka='A';
var pravilnih=0;
for(var i=65;i<=89;i++){
    for(var j=0;j<2;j++){
        if(String.fromCharCode(i)=='Q'){
            crka='Č'
        } else if (String.fromCharCode(i)=='W'){
            crka='Š'
        } else if (String.fromCharCode(i)=='X'){
            crka='Z'
        } else if (String.fromCharCode(i)=='Y'){
            crka='Ž'
        } else {
            crka=String.fromCharCode(i);
        }
        slike[st]=crka+j;
        //console.log(slike[st]);
        console.log(st);
        st++;
    }
}
var izbire = new Array;
izbire[0]=document.getElementById('s1');
izbire[1]=document.getElementById('s2');
izbire[2]=document.getElementById('s3');
izbire[3]=document.getElementById('s4');

function napolnirandom(a2){
    var a1 = [];
    for (var i=0; i<4; i++) { a1.push(i); }
    //var a2 = [];
    while (a1.length) {
        var pos = Math.random()*a1.length;
        var element = a1.splice(pos, 1)[0];
        a2.push(element);
    }
    
}

function naslednjo(){
    var nekaj=0;
    pravilnih=0;
    for(var i=0;i<4;i++){
        izbire[i].style.border="4px solid white";
    }
    var crka2="A";
    var namig = document.getElementById('crka');
    var randomst = Math.floor(Math.random() * 50);
    crka=slike[randomst].charAt(0)
    namig.innerHTML=crka;
    var vrstnired=new Array;
    napolnirandom(vrstnired)
    izbire[vrstnired[0]].src="GLASOVI/"+crka+0+".BMP";
    izbire[vrstnired[0]].alt=crka+0;
    izbire[vrstnired[1]].src="GLASOVI/"+crka+1+".BMP";
    izbire[vrstnired[1]].alt=crka+1;
    for (var i=2; i<4; i++){
        randomst = Math.floor(Math.random() * 50);
        crka2=slike[randomst].charAt(0)
        console.log(crka2)
        while(crka2==crka || crka2==izbire[vrstnired[i-1]].src.charAt(8)){
            console.log(izbire[vrstnired[i-1]].src.charAt(8))
            randomst = Math.floor(Math.random() * 50);
            crka2=slike[randomst].charAt(0)
        }
        nekaj=(Math.floor(Math.random() * 2));
        izbire[vrstnired[i]].src="GLASOVI/"+crka2+nekaj+".BMP";
        izbire[vrstnired[i]].alt=crka2+nekaj;
    }
}
function predvajajZvok(medija){
    zvok=document.getElementById('zvok');
    zvok.pause();
    zvok.src=medija;
    zvok.currentTime=0;
    zvok.play();
}

function preveriPravilnost(){
    zvok=document.getElementById('zvok');
    setTimeout(1000);  
    if(pravilnih==2){
        predvajajZvok("ZVOKI/BRAVO1.WAV")
        setTimeout(naslednjo,2000)
    }
}

function preveri(slika){
    console.log(slika.alt)
    if(!document.getElementById('zvok').paused)
        return
    if(slika.alt.charAt(0)==document.getElementById('crka').innerHTML && slika.style.border=="4px solid white"){
        var prav = document.getElementById('pravilno');
        var s = parseInt(prav.innerHTML);
        s++;
        prav.innerHTML=s;
        slika.style.border="4px solid blue";
        pravilnih++;
    } else if (slika.style.border=="4px solid white") {
        var naro = document.getElementById('narobe');
        var s = parseInt(naro.innerHTML);
        s++;
        naro.innerHTML=s;
        slika.style.border="4px solid red";
    }
    console.log(slika.style.border);
    predvajajZvok("ZVOKI/OZNACI.WAV")
    preveriPravilnost();
}
naslednjo()
*/





/* backup
var slike = new Array;
var st=0;
var crka='A';
var pravilnih=0;
for(var i=65;i<=89;i++){
    for(var j=0;j<2;j++){
        if(String.fromCharCode(i)=='Q'){
            crka='Č'
        } else if (String.fromCharCode(i)=='W'){
            crka='Š'
        } else if (String.fromCharCode(i)=='X'){
            crka='Z'
        } else if (String.fromCharCode(i)=='Y'){
            crka='Ž'
        } else {
            crka=String.fromCharCode(i);
        }
        slike[st]=crka+j;
        //console.log(slike[st]);
        console.log(st);
        st++;
    }
}
var izbire = new Array;
izbire[0]=document.getElementById('s1');
izbire[1]=document.getElementById('s2');
izbire[2]=document.getElementById('s3');
izbire[3]=document.getElementById('s4');

function napolnirandom(a2){
    var a1 = [];
    for (var i=0; i<4; i++) { a1.push(i); }
    //var a2 = [];
    while (a1.length) {
        var pos = Math.random()*a1.length;
        var element = a1.splice(pos, 1)[0];
        a2.push(element);
    }
    
}

function naslednjo(){
    pravilnih=0;
    for(var i=0;i<4;i++){
        izbire[i].style.border="4px solid white";
    }
    var crka2="A";
    var namig = document.getElementById('crka');
    var randomst = Math.floor(Math.random() * 50);
    crka=slike[randomst].charAt(0)
    namig.innerHTML=crka;
    var vrstnired=new Array;
    napolnirandom(vrstnired)
    izbire[vrstnired[0]].src="GLASOVI/"+crka+0+".BMP";
    izbire[vrstnired[0]].alt=crka;
    izbire[vrstnired[0]].vred=crka;
    izbire[vrstnired[1]].src="GLASOVI/"+crka+1+".BMP";
    izbire[vrstnired[1]].alt=crka;
    izbire[vrstnired[1]].vred=crka;
    for (var i=2; i<4; i++){
        randomst = Math.floor(Math.random() * 50);
        crka2=slike[randomst].charAt(0)
        console.log(crka2)
        while(crka2==crka || crka2==izbire[vrstnired[i-1]].src.charAt(8)){
            console.log(izbire[vrstnired[i-1]].src.charAt(8))
            randomst = Math.floor(Math.random() * 50);
            crka2=slike[randomst].charAt(0)
        }
        izbire[vrstnired[i]].src="GLASOVI/"+crka2+(Math.floor(Math.random() * 2))+".BMP";
        izbire[vrstnired[i]].alt="0";
    }
}
function predvajajZvok(medija){
    zvok=document.getElementById('zvok');
    zvok.pause();
    zvok.src=medija;
    zvok.currentTime=0;
    zvok.play();
  }
function preveri(slika){
    console.log(slika.alt)
    if(!document.getElementById('zvok').paused)
        return
    if(slika.alt=='1') {
        console.log('izbrano')
    } else if(slika.alt==document.getElementById('crka').innerHTML){
        var prav = document.getElementById('pravilno');
        var s = parseInt(prav.innerHTML);
        s++;
        prav.innerHTML=s;
        slika.alt='1'
        slika.style.border="4px solid blue";
        pravilnih++;
    } else {
        var naro = document.getElementById('narobe');
        var s = parseInt(naro.innerHTML);
        s++;
        naro.innerHTML=s;
        slika.alt='1'
        slika.style.border="4px solid red";
    }
    console.log(slika.src);
    if(pravilnih==2){
        predvajajZvok("ZVOKI/BRAVO1.WAV")
        setTimeout(naslednjo,2000)
    }
}
naslednjo()
*/