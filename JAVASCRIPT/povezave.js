class Povezave {
    constructor(stSlik, s1, b1, z1, s2, b2, z2, s3, b3, z3, s4, b4, z4, s5, b5, z5, s6, b6, z6, s7, b7, z7, s8, b8, z8) {
      this._stSlik=stSlik;
      this._slike=[s1, s2, s3, s4, s5, s6, s7, s8];
      this._besede=[b1, b2, b3, b4, b5, b6, b7, b8];
      this._zvoki=[z1, z2, z3, z4, z5, z6, z7, z8];
    }
    get stSlik(){
        return this._stSlik;
    }
    get slike(){
        return this._slike;
    }
    get besede(){
        return this._besede;
    }
    get zvoki(){
        return this._zvoki;
    }
}

const pov = new Array;
pov[0] = new Povezave(7, "poveza10.bmp", "vlak", "vlak.wav", "poveza11.bmp", "koledar", "koledar.wav", "poveza35.bmp", "ravnilo", "ravnilo.wav", "poveza13.bmp", "omara", "omara.wav", "poveza14.bmp", "ananas", "ananas.wav", "poveza15.bmp", "sonce", "sonce.wav", "poveza2.bmp", "eskim", "eskim.wav", "", "", "");
pov[1] = new Povezave(7, "poveza25.bmp", "klop", "klop.wav", "poveza26.bmp", "pajek", "pajek.wav", "poveza5.bmp", "kit", "kit.wav", "poveza32.bmp", "tabla", "tabla.wav", "poveza29.bmp", "avtobus", "avtobus.wav", "poveza30.bmp", "slon", "slon.wav", "poveza31.bmp", "nit", "nit.wav", "", "", "");
pov[2] = new Povezave(8, "poveza40.bmp", "vrč", "vrc.wav", "poveza41.bmp", "čopič", "copic.wav", "poveza42.bmp", "češnji", "cesnji.wav", "poveza43.bmp", "iglu", "iglu.wav", "poveza44.bmp", "ura", "ura.wav", "poveza45.bmp", "avion", "avion.wav", "poveza31.bmp", "nit", "nit.wav", "poveza32.bmp", "tabla", "tabla.wav");
pov[3] = new Povezave(7, "poveza57.bmp", "copat", "copat.wav", "poveza58.bmp", "traktor", "traktor.wav", "poveza59.bmp", "raketa", "raketa.wav", "poveza6.bmp", "avto", "avto.wav", "poveza61.bmp", "osem", "osem.wav", "poveza62.bmp", "muca", "muca.wav", "poveza63.bmp", "aspirin", "aspirin.wav", "", "", "");
pov[4] = new Povezave(8, "poveza37.bmp", "koš", "koss.wav", "poveza65.bmp", "šotor", "sotor.wav", "poveza20.bmp", "rak", "rak.wav", "poveza67.bmp", "kokoš", "kokoss.wav", "poveza38.bmp", "škarje", "skarje.wav", "poveza24.bmp", "ena", "ena.wav", "poveza6.bmp", "avto", "avto.wav", "poveza71.bmp", "osel", "osel.wav");
pov[5] = new Povezave(8, "poveza72.bmp", "zvonec", "zvonec.wav", "poveza73.bmp", "cekar", "cekar.wav", "poveza74.bmp", "rilec", "rilec.wav", "poveza75.bmp", "citre", "citre.wav", "poveza2.bmp", "eskim", "eskim.wav", "poveza77.bmp", "motor", "motor.wav", "poveza35.bmp", "ravnilo", "ravnilo.wav", "poveza13.bmp", "omara", "omara.wav");
pov[6] = new Povezave(8, "poveza27.bmp", "krt", "krt.wav", "poveza89.bmp", "tri", "tri.wav", "poveza43.bmp", "iglu", "iglu.wav", "poveza91.bmp", "umivalnik", "umivalni.wav", "poveza92.bmp", "kaktus", "kaktus.wav", "poveza93.bmp", "slap", "slap.wav", "poveza94.bmp", "packa", "packa.wav", "poveza95.bmp", "antena", "antena.wav");
pov[7] = new Povezave(7, "poveza17.bmp", "mak", "mak.wav", "poveza92.bmp", "kaktus", "kaktus.wav", "poveza98.bmp", "smreka", "smreka.wav", "poveza87.bmp", "arašidi", "arasidi.wav", "povez100.bmp", "igla", "igla.wav", "poveza29.bmp", "avtobus", "avtobus.wav", "povez102.bmp", "srce", "srce.wav", "", "", "");
pov[8] = new Povezave(8, "povez103.bmp", "sito", "sito.wav", "povez104.bmp", "očala", "ocala.wav", "povez105.bmp", "akvarij", "akvarij.wav", "povez106.bmp", "jelen", "jelen.wav", "povez107.bmp", "noj", "noj.wav", "povez108.bmp", "jasli", "jasli.wav", "povez109.bmp", "iris", "iris.wav", "povez110.bmp", "snežak", "snezak.wav");
pov[9] = new Povezave(7, "povez111.bmp", "pismo", "pismo.wav", "poveza36.bmp", "oblak", "oblak.wav", "povez113.bmp", "kitara", "kitara.wav", "poveza14.bmp", "ananas", "ananas.wav", "povez115.bmp", "stožec", "stozec.wav", "poveza73.bmp", "cekar", "cekar.wav", "povez117.bmp", "roka", "roka.wav", "", "", "");
pov[10] = new Povezave(7, "poveza26.bmp", "pajek", "pajek.wav", "poveza27.bmp", "krt", "krt.wav", "poveza32.bmp", "tabla", "tabla.wav", "poveza29.bmp", "avtobus", "avtobus.wav", "poveza30.bmp", "slon", "slon.wav", "poveza31.bmp", "nit", "nit.wav", "poveza4.bmp", "torta", "torta.wav", "", "", "");
pov[11] = new Povezave(7, "poveza17.bmp", "mak", "mak.wav", "poveza19.bmp", "kuhar", "kuhar.wav", "poveza20.bmp", "rak", "rak.wav", "poveza21.bmp", "kipar", "kipar.wav", "poveza23.bmp", "rože", "roze.wav", "poveza24.bmp", "ena", "ena.wav", "povez105.bmp", "akvarij", "akvarij.wav", "", "", "");
pov[12] = new Povezave(7, "poveza49.bmp", "lonec", "lonec.wav", "ciciban.bmp", "ciciban", "ciciban.wav", "poveza51.bmp", "nos", "nos.wav", "poveza52.bmp", "storž", "storz.wav", "poveza53.bmp", "žaba", "zaba.wav", "poveza6.bmp", "avto", "avto.wav", "poveza55.bmp", "oklep", "oklep.wav", "", "", "");
pov[13] = new Povezave(7, "poveza33.bmp", "bager", "bager.wav", "poveza35.bmp", "ravnilo", "ravnilo.wav", "poveza36.bmp", "oblak", "oblak.wav", "poveza37.bmp", "koš", "koss.wav", "poveza38.bmp", "škarje", "skarje.wav", "poveza24.bmp", "ena", "ena.wav", "poveza95.bmp", "antena", "antena.wav", "", "", "");
pov[14] = new Povezave(8, "petelin.bmp", "petelin", "petelin.wav", "poveza31.bmp", "nit", "nit.wav", "poveza32.bmp", "tabla", "tabla.wav", "poveza29.bmp", "avtobus", "avtobus.wav", "povez102.bmp", "srce", "srce.wav", "poveza2.bmp", "eskim", "eskim.wav", "poveza77.bmp", "motor", "motor.wav", "racman.bmp", "racman", "racman.wav");
pov[15] = new Povezave(7, "racunal.bmp", "računalnik", "racunal.wav", "kokosi.bmp", "kokoši", "kokosi.wav", "poveza43.bmp", "iglu", "iglu.wav", "poveza91.bmp", "umivalnik", "umivalni.wav", "kozarec.bmp", "kozarec", "kozarec.wav", "poveza57.bmp", "copat", "copat.wav", "poveza4.bmp", "torta", "torta.wav", "", "", "");
pov[16] = new Povezave(7, "coln.bmp", "čoln", "coln.wav", "nogavica.bmp", "nogavica", "nogavica.wav", "poveza6.bmp", "avto", "avto.wav", "poveza55.bmp", "oklep", "oklep.wav", "pav.bmp", "pav", "pav.wav", "poveza10.bmp", "vlak", "vlak.wav", "krava.bmp", "krava", "krava.wav", "", "", "");
pov[17] = new Povezave(7, "konj.bmp", "konj", "konj.wav", "jadrnica.bmp", "jadrnica", "jadrnica.wav", "poveza6.bmp", "avto", "avto.wav", "ovci.bmp", "ovci", "ovci.wav", "povez109.bmp", "iris", "iris.wav", "poveza93.bmp", "slap", "slap.wav", "petelin.bmp", "petelin", "petelin.wav", "", "", "");
pov[18] = new Povezave(7, "pek.bmp", "pek", "pek.wav", "poveza37.bmp", "koš", "koss.wav", "poveza65.bmp", "šotor", "sotor.wav", "poveza59.bmp", "raketa", "raketa.wav", "poveza29.bmp", "avtobus", "avtobus.wav", "poveza30.bmp", "slon", "slon.wav", "poveza51.bmp", "nos", "nos.wav", "", "", "");
pov[19] = new Povezave(7, "poveza36.bmp", "oblak", "oblak.wav", "kocija.bmp", "kočija", "kocija.wav", "poveza29.bmp", "avtobus", "avtobus.wav", "poveza15.bmp", "sonce", "sonce.wav", "poveza24.bmp", "ena", "ena.wav", "povez105.bmp", "akvarij", "akvarij.wav", "povez108.bmp", "jasli", "jasli.wav", "", "", "");

//console.log(pov[2]);

var trenutnoSt=0;   //tu se shrani koliko slik je že bilo izbranih
var vrstniRed = new Array;
var vrstniRedPov = new Array;
napolnirandom(vrstniRedPov,20);
var stResenih=-1;
var trenutnaPov=0;  //tu se shrani katero povezavo trnutno uporabljamo

function napolnirandom(a2,stRandSt){
    var a1 = [];
    for (var i=0; i<stRandSt; i++) { a1.push(i); }
    //var a2 = [];
    while (a1.length) {
        var pos = Math.random()*a1.length;
        var element = a1.splice(pos, 1)[0];
        a2.push(element);
    }
}

function izbrisi(){
    for(var i=0;i<pov[trenutnaPov].stSlik;i++){
        var element = document.getElementsByClassName('slika'+(i+1));
        var span = element[0].getElementsByTagName('span');
        if(span[0].innerHTML!="1")
            span[0].innerHTML=""
    }
    trenutnoSt=2;
}

function izbrisiVse(){
    for(var i=0;i<pov[trenutnaPov].stSlik;i++){
        var element = document.getElementsByClassName('slika'+(i+1));
        var span = element[0].getElementsByTagName('span');
        span[0].innerHTML=""
    }
    trenutnoSt=2;
}

function predvajajZvok(medija){
    var zvok=document.getElementById('zvok');
    zvok.volume=0.5;
    zvok.pause();
    zvok.src=medija;
    zvok.currentTime=0;
    zvok.play();
}

function reciSlika(ele){
    var zvok=document.getElementById('zvok');
    var slika = ele.getElementsByTagName('img');
    var i = parseInt(slika[0].alt);
    if((zvok.paused) || ((zvok.src.indexOf(pov[trenutnaPov].zvoki[i].toUpperCase()) ==-1 ))){
        predvajajZvok(("GOVOR/"+pov[trenutnaPov].zvoki[i].toUpperCase()))
    }
}

function naslednjo(){
    stResenih++;
    console.log(stResenih)
    if(stResenih==20){
        window.alert("REŠIL SI VSE POVEZAVE!\nBRAVO")
        window.location.href = "meni.html";
    }
    trenutnaPov=vrstniRedPov[stResenih];
    vrstniRed=[];
    napolnirandom(vrstniRed,pov[trenutnaPov].stSlik);
    console.log(vrstniRed)
    izbrisiVse();
    for(var i=0;i<pov[trenutnaPov].stSlik;i++){
        if(vrstniRed[i]==0){
            document.getElementById('s'+(i+1)).src="POVEZAVE/"+pov[trenutnaPov].slike[vrstniRed[i]].toUpperCase();
            document.getElementById('s'+(i+1)).alt=vrstniRed[i];
            var element = document.getElementsByClassName('slika'+(i+1));
            var span = element[0].getElementsByTagName('span');
            span[0].innerHTML="1";
        } else {
            document.getElementById('s'+(i+1)).src="POVEZAVE/"+pov[trenutnaPov].slike[vrstniRed[i]].toUpperCase();
            document.getElementById('s'+(i+1)).alt=vrstniRed[i];
        }
    }
    var s8 = document.getElementsByClassName('slika8');
    if(pov[trenutnaPov].stSlik==7)
        s8[0].style.display="none";
    else
        s8[0].style.display="flex";
}

function preveriResitve(){
    var pravilno = true;
    for(var i=0;(i<pov[trenutnaPov].stSlik) && (pravilno==true);i++){
        var element = document.getElementsByClassName('slika'+(i+1));
        var st = element[0].getElementsByTagName('span');
        st=(parseInt(st[0].innerHTML))-1;
        //console.log(st)
        //console.log(vrstniRed[i])
        if(st!=vrstniRed[i])
            pravilno=false;
    } 
    if(pravilno){
        window.alert("PRAVILNO!")
        naslednjo();
        var ele=document.getElementById('pravilno');
    } else {
        var ele=document.getElementById('narobe');
        window.alert("NAROBE!")
        izbrisi();
    }
    var st= parseInt(ele.innerHTML);
    st++;
    ele.innerHTML=st;
}

function preveri(ele){
    var st = ele.getElementsByTagName('span');
    if(st[0].innerHTML==""){
        st[0].innerHTML=trenutnoSt;
        trenutnoSt++;
        var slika = ele.getElementsByTagName('img');
        st=(parseInt(st[0].innerHTML))-1;
        if(slika[0].alt!=st){
            predvajajZvok("ZVOKI/NAROBE5.WAV")
            var ele=document.getElementById('narobe');
        } else
            var ele=document.getElementById('pravilno');
        var st= parseInt(ele.innerHTML);
        st++;
        ele.innerHTML=st;
    }
    if(trenutnoSt==(pov[trenutnaPov].stSlik+1)){
        preveriResitve()
    }
}

naslednjo();
window.alert("POIMENUJ NARISANE STVARI.\nENA BESEDA SE KONČUJE, DRUGA SE ZAČENJA Z ISTIM GLASOM.\nPOVEŽI JIH.")

/*
class Povezave {
    constructor(stSlik, s1, b1, z1, s2, b2, z2, s3, b3, z3, s4, b4, z4, s5, b5, z5, s6, b6, z6, s7, b7, z7, s8, b8, z8) {
      this.stSlik=stSlik;
      this.s1=s1;
      this.b1=b1;
      this.z1=z1;
      this.s2=s2;
      this.b2=b2;
      this.z2=z2;
      this.s3=s3;
      this.b3=b3;
      this.z3=z3;
      this.s4=s4;
      this.b4=b4;
      this.z4=z4;
      this.s5=s5;
      this.b5=b5;
      this.z5=z5;
      this.s6=s6;
      this.b6=b6;
      this.z6=z6;
      this.s7=s7;
      this.b7=b7;
      this.z7=z7;
      this.s8=s8;
      this.b8=b8;
      this.z8=z8;
    }
}

const pov1 = new Povezave(7, "poveza10.bmp", "vlak", "vlak.wav", "poveza11.bmp")
*/
/*
pov[0] = new Povezave(7, "poveza10.bmp", "vlak", "vlak.wav", "poveza11.bmp", "koledar", "koledar.wav",
"poveza35.bmp",
"ravnilo",
"ravnilo.wav",
"poveza13.bmp",
"omara",
"omara.wav",
"poveza14.bmp",
"ananas",
"ananas.wav",
"poveza15.bmp",
"sonce",
"sonce.wav",
"poveza2.bmp",
"eskim",
"eskim.wav",
"",
"",
"");
*/