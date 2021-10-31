//alert('Povleci slike na mesto ob besedilu!');

class Zgodbe{
    constructor(naslov, slika, datoteka){       //naslov->na kolesu, slika->.bmp, datoteka->tekst
        this._naslov=naslov;
        this._slika=slika;
        this._datoteka=datoteka;
    }

    get Naslov(){
        return this._naslov;
    }
    get Slika(){
        return this._slika;
    }
    get Datoteka(){
        return this._datoteka;
    }
}

const zgo=new Array;
zgo[0]=new Zgodbe("NA KOLESU", "OZADJE1.BMP", "PRIP01");        //www/PRIPOVED.TXT -> Ozadje1.Bmp 
zgo[1]=new Zgodbe("RAZRED", "OZADJE2.BMP", "PRIP02");
zgo[2]=new Zgodbe("ROJSTNI DAN", "OZADJE3.BMP", "PRIP03");
zgo[3]=new Zgodbe("MOJA SOBA", "OZADJE4.BMP", "PRIP04");
zgo[4]=new Zgodbe("ŽIVALI", "OZADJE5.BMP", "PRIP05");
zgo[5]=new Zgodbe("ORKESTER", "OZADJE6.BMP", "PRIP06");
zgo[6]=new Zgodbe("ŠOLARKA", "OZADJE7.BMP", "PRIP07");
zgo[7]=new Zgodbe("ZIMA", "OZADJE8.BMP", "PRIP08");
zgo[8]=new Zgodbe("PETRA POMETA SOBO", "OZADJE9.BMP", "PRIP09");
zgo[9]=new Zgodbe("HIŠA", "OZADJE10.BMP", "PRIP10");
zgo[10]=new Zgodbe("META PIŠE", "OZADJE11.BMP", "PRIP11");
zgo[11]=new Zgodbe("KNJIGA", "OZADJE12.BMP", "PRIP12");
zgo[12]=new Zgodbe("TELEVIZOR", "OZADJE13.BMP", "PRIP13");
zgo[13]=new Zgodbe("NA POČITNICAH", "OZADJE14.BMP", "PRIP14");       //NA POÈITNICAH
zgo[14]=new Zgodbe("MIHA", "OZADJE15.BMP", "PRIP15");
zgo[15]=new Zgodbe("PRI NAS DOMA", "OZADJE16.BMP", "PRIP16");

var VsaOzadja= ["PRIPOVED/OZADJE1.BMP", "PRIPOVED/OZADJE2.BMP", "PRIPOVED/OZADJE3.BMP", "PRIPOVED/OZADJE4.BMP", "PRIPOVED/OZADJE5.BMP", "PRIPOVED/OZADJE6.BMP", "PRIPOVED/OZADJE7.BMP", "PRIPOVED/OZADJE8.BMP", "PRIPOVED/OZADJE9.BMP", "PRIPOVED/OZADJE10.BMP", "PRIPOVED/OZADJE11.BMP", "PRIPOVED/OZADJE12.BMP", "PRIPOVED/OZADJE13.BMP", "PRIPOVED/OZADJE14.BMP", "PRIPOVED/OZADJE15.BMP", "PRIPOVED/OZADJE16.BMP"];

dat = new Array;

dat['PRIP01'] = new Array;
dat['PRIP01'][0] ="TINE VOZI <KOLO>."
dat['PRIP01'][1] ="KOLO JE <RDECE>."
dat['PRIP01'][2] ="NA KOLESU JE <KOSARA>."
dat['PRIP01'][3] ="META SEDI NA <ZIDU>."

dat['PRIP02'] = new Array;
dat['PRIP02'][0] ="NA TABLI JE <RACUN>."
dat['PRIP02'][1] ="OB TABLI JE <OMARA>."
dat['PRIP02'][2] ="POD TABLO JE <KLOP>."
dat['PRIP02'][3] ="POD KLOPJO JE <KOS>."

dat['PRIP03'] = new Array;
dat['PRIP03'][0] ="NA MIZI JE <TORTA>."
dat['PRIP03'][1] ="NA TORTI SO <SVECE>."
dat['PRIP03'][2] ="POD MIZO JE <SVINCNIK>."
dat['PRIP03'][3] ="NA STOLU JE <MUCA>."

dat['PRIP04'] = new Array;
dat['PRIP04'][0] ="NA MIZI JE <TELEFON>."
dat['PRIP04'][1] ="POD MIZO JE <ZOGA>."
dat['PRIP04'][2] ="NAD MIZO JE <OKNO>."
dat['PRIP04'][3] ="NA OKNU JE <ROZA>."

dat['PRIP05'] = new Array;
dat['PRIP05'][0] ="MU, MU, MUKA <KRAVA>."
dat['PRIP05'][1] ="MIJAV, MIJAV, MIJAVKA <MUCA>."
dat['PRIP05'][2] ="HOV, HOV, LAJA <KUZA>."
dat['PRIP05'][3] ="KIKIRIKI! SE JEZI <PETELIN>."

dat['PRIP06'] = new Array;
dat['PRIP06'][0] ="META PISKA NA <FLAVTA>."
dat['PRIP06'][1] ="MARKO TOLČE PO <BOBEN>."
dat['PRIP06'][2] ="TINE BRENKA NA <KITARA>."

dat['PRIP07'] = new Array;
dat['PRIP07'][0] ="MAJA IMA <TORBA>."
dat['PRIP07'][1] ="TORBA JE RDEČA IN <MODRA>."
dat['PRIP07'][2] ="V VREČKI IMA <COPATE>."

dat['PRIP08'] = new Array;
dat['PRIP08'][0] ="ZA IGLUJEM SE SKRIVA <ESKIM>."
dat['PRIP08'][1] ="V ROKI IMA <PALICA>."
dat['PRIP08'][2] ="PO NEBU PLAVA MODER <OBLAK>."

dat['PRIP09'] = new Array;
dat['PRIP09'][0] ="V ROKI IMA <METLA>."
dat['PRIP09'][1] ="V KLETKI JE <PAPAGAJ>."
dat['PRIP09'][2] ="PAPAGAJ JE <MODRA>."

dat['PRIP10'] = new Array;
dat['PRIP10'][0] ="NA HIŠI JE ŠTEVILKA <ENA>."
dat['PRIP10'][1] ="DEKLICE SKAČEJO <GUMITVIS>."
dat['PRIP10'][2] ="META IMA <ZOGO>."

dat['PRIP11'] = new Array;
dat['PRIP11'][0] ="META SEDI ZA <MIZO>."
dat['PRIP11'][1] ="V ROKI IMA <SVINCNIK>."
dat['PRIP11'][2] ="NA MIZI IMA ZVEZEK IN <RAVNILO>."
dat['PRIP11'][3] ="V ZVEZEK PIŠE LEPE <CRKE>."

dat['PRIP12'] = new Array;
dat['PRIP12'][0] ="NA TLEH LEŽI <META>."
dat['PRIP12'][1] ="BERE <KNJIGA>."
dat['PRIP12'][2] ="POSLUŠA JO <MUCA>."

dat['PRIP13'] = new Array;
dat['PRIP13'][0] ="META GLEDA <TV>."
dat['PRIP13'][1] ="NA OMARI SO <KNJIGE>."
dat['PRIP13'][2] ="V KOŠU IMA <IGRACE>."
dat['PRIP13'][3] ="PO KOŠU LEZE <PAJEK>."

dat['PRIP14'] = new Array;
dat['PRIP14'][0] ="NA ŠOTORU PLAPOLA <ZASTAVA>."
dat['PRIP14'][1] ="IZ ŠOTORA GLEDAJO <NOGE>."
dat['PRIP14'][2] ="TINE SPUŠČA <ZMAJ>."

dat['PRIP15'] = new Array;
dat['PRIP15'][0] ="MIHA ZALIVA <ROZAA>."
dat['PRIP15'][1] ="V ROKI IMA <KANGLICA>."
dat['PRIP15'][2] ="KANGLICA JE <RDECA>."
dat['PRIP15'][3] ="NA ROŽI JE <MUHA>."

dat['PRIP16'] = new Array;
dat['PRIP16'][0] ="OČKA BERE <CASOPIS>."
dat['PRIP16'][1] ="V KOŠARI SPI <DOJ>."
dat['PRIP16'][2] ="NA POLICAH SO <KNJIGE>."

/*
var stNaloge=0;
function pridobiT(){
    var a=document.getElementById("TEKST");
    var p=a.getElementsByTagName("span");
    for(var i=0; i<dat[zgo[stNaloge].Datoteka].length; i++){
        p[i].innerHTML=dat[zgo[stNaloge].Datoteka][i];
    }
}
pridobiT();
*/

function premik(){
    $('.premik').draggable({
        cursor: 'grabbing',
        revert: 'invalid',
        helper: 'clone',
        snap: 'true',
        start: function (event, ui)
        {
        $(this).parent().find('#adminTimeReservation').css('display','block');
        if($(this).parent().hasClass('spustljivo'))  //preveri če je trenuten class droppable
          $(this).parent().droppable("enable")      //če je mu vklopimo droppapble
        },
        drag: function (event, ui){}
        });//draggable
        $('.spustljivo').droppable({
        drop: function(ev, ui) {
        $(this).prepend(ui.draggable);
        if(!($(this).hasClass('smeti')))
          $(this).droppable("disable") //izkopi droppable, ko na njega spustimo 1 element
        ui.draggable.position({
          my: 'center center',
          at: 'center center',
          of: this,
        });
            preveri();                        //nekaj();
        }
        });//droppable
}
premik();

$.fn.shuffleChildren = function() {
    $.each(this.get(), function(index, el) {
        var $el = $(el);
        var $find = $el.children();
    
        $find.sort(function() {
        return 0.5 - Math.random();
        });
    
        $el.empty();
        $find.appendTo($el);
    });
    };

function preveri(){
    var Div=document.getElementsByClassName('spustljivo');
    var pravilno=true
    var Pravilne=0;
    for(var k=0; k<Div.length; k++){
        St1=dat[zgo[stNaloge].Datoteka][k].indexOf("<");
        St2=dat[zgo[stNaloge].Datoteka][k].indexOf(">");
        St1++;
        ImeDat=dat[zgo[stNaloge].Datoteka][k].substring(St1, St2);
        var Slike=Div[k].getElementsByTagName('img');
        //console.log(ImeDat)
        //console.log(Slike[0].alt)
        if(Slike.length!=0){
            if(Slike[0].alt==ImeDat){
                Pravilne++;

            }else{
                $(Slike[0]).appendTo('.Izbira');
                $(Div[k]).droppable('enable');
                pravilno=false
            }
        }
    }
    if(pravilno) {
        var st=document.getElementById("Pravilne").innerHTML
        st=parseInt(st)
        st++
        document.getElementById("Pravilne").innerHTML=st
    } else {
        var st=document.getElementById("Napacne").innerHTML
        console.log(document.getElementById("Napacne").innerHTML)
        st=parseInt(st)
        st++
        document.getElementById("Napacne").innerHTML=st
    }
    if(Pravilne==Div.length){
        predvajajZvok('ZVOKI/BRAVO1.WAV');
        alert("Pravilno!");
        nastaviPrave();
    }
}

function predvajajZvok(medija){
    zvok=document.getElementById('zvok');
    zvok.volume=0.5;
    zvok.pause();
    zvok.src=medija;
    zvok.currentTime=0;
    zvok.play();
}


function rand(max) {
    return Math.floor(Math.random() * max);
}
console.log("Random število je: ", rand(16));

var stNaloge=0;
function nastaviPrave(){                                    //https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
    //document.getElementsByClassName('VSlika').src="PRIPOVED/OZADJE2.BMP";
    //var velika=document.getElementsByClassName('VSlika');
    //velika.src="PRIPOVED/"+zgo[Slika].slika.toUpperCase()+".BMP";
    //velika.src="PRIPOVED/OZADJE4.BMP";

    var ImeDat="";
    var St1="";
    var St2="";

    stNaloge=rand(16);                                 //index naloge po vrsti

    /*
    var a=document.getElementById("TEKST");
    var p=a.getElementsByTagName("span");
    for(var i=0; i<dat[zgo[stNaloge].Datoteka].length; i++){    //nastavi tekst
        St1=dat[zgo[stNaloge].Datoteka][i].indexOf("<");
        St2=dat[zgo[stNaloge].Datoteka][i].indexOf(">");
        ImeDat=dat[zgo[stNaloge].Datoteka][i].substring(0, St1);
        p[i].innerHTML=ImeDat;
    }
    */
    
    $(".Besede").empty();
    $(".Izbira").empty();
    var Slika=document.createElement('img');
    Slika.classList.add("premik");
    for(var i=0; i<dat[zgo[stNaloge].Datoteka].length; i++){
        St1=dat[zgo[stNaloge].Datoteka][i].indexOf("<");
        St2=dat[zgo[stNaloge].Datoteka][i].indexOf(">");
        St1++;
        ImeDat=dat[zgo[stNaloge].Datoteka][i].substring(St1, St2);
        Slika.src="PRIPOVED/"+ImeDat+".BMP";
        Slika.alt=ImeDat;
        $(".Izbira").append(Slika.cloneNode(true));
    }

    
    var Text=document.createElement('span');
    var Div=document.createElement('div');

    Text.classList.add("TEKST");
    Div.classList.add("spustljivo");
    for(var j=0; j<dat[zgo[stNaloge].Datoteka].length; j++){
        var Primer=document.createElement('div');
        St1=dat[zgo[stNaloge].Datoteka][j].indexOf("<");
        St2=dat[zgo[stNaloge].Datoteka][j].indexOf(">");
        ImeDat=dat[zgo[stNaloge].Datoteka][j].substring(0, St1);
        Text.innerHTML=ImeDat;
        $(".Besede").append(Primer);
        Primer.appendChild(Text.cloneNode(true));
        Primer.appendChild(Div.cloneNode(true));
    }

    $(".VSlika").attr("src","PRIPOVED/"+zgo[stNaloge].Slika);

    /*
    var prvaIz=document.getElementById('PRVA_IZVIRA');
    var drugIz=document.getElementById('DRUGA_IZVIRA');
    var tretjIz=document.getElementById('TRETJA_IZVIRA');
    var četrIz=document.getElementById('ČETRTA_IZVIRA');
    */

    /*
   var Slike=$(".Izbira img");
    for(var j=0; j<dat[zgo[stNaloge].Datoteka].length; j++){      //zamenja 4 slike iz izbire (če ima 3, zadjo sliko skrije)
        St1=dat[zgo[stNaloge].Datoteka][j].indexOf("<");
        St2=dat[zgo[stNaloge].Datoteka][j].indexOf(">");
        St1++;
        ImeDat=dat[zgo[stNaloge].Datoteka][j].substring(St1, St2);
        Slike[j].src="PRIPOVED/"+ImeDat+".BMP";
    }
    console.log(dat[zgo[stNaloge].Datoteka].length);
    console.log(ImeDat);
    */

    /*
    var cetrta=document.getElementById('cetrta_skatla');        //var z borderjem
    if(dat[zgo[stNaloge].Datoteka].length==3){
        Slike[3].style.display="none";
        p[3].style.display="none";
        cetrta.style.display="none";            //skrije border
    }
    */

    /*
    var prvaIz=document.getElementById('PRVA_IZVIRA');
    var drugIz=document.getElementById('DRUGA_IZVIRA');
    var tretjIz=document.getElementById('TRETJA_IZVIRA');
    var četrIz=document.getElementById('ČETRTA_IZVIRA');

    prvaIz.src="PRIPOVED/ZOGA.BMP";
    drugIz.src="PRIPOVED/TELEFON.BMP";
    tretjIz.src="PRIPOVED/OKNO.BMP";
    četrIz.src="PRIPOVED/ROZA.BMP";
    */
   
   $(".Izbira").shuffleChildren();
   $(".Izbira").shuffleChildren();
   premik();
}
//nastaviPrave();

console.log(dat[zgo[0].Datoteka]);