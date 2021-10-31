class Okolje {
    constructor(imeOkolja, b1, b2, b3, b4, b5) {
      this._imeOkolja=imeOkolja;
      this._besede=[b1, b2, b3, b4, b5];
    }
    get imeOkolja(){
        return this._imeOkolja;
    }
    get besede(){
        return this._besede;
    }
}

const okolje = new Array;
okolje[0] = new Okolje("gozd", "jež", "lisica", "medved", "sova", "veverica");
okolje[1] = new Okolje("travnik", "krt", "mravlje", "muren", "pikapolonica", "polž");
okolje[2] = new Okolje("reka", "bober", "kačjipastir", "raca", "riba", "žaba");
okolje[3] = new Okolje("ledena", "mrož", "pingvin", "polarna_lisica", "polarni_medved", "tjulenj");
okolje[4] = new Okolje("puščava", "agama", "kača", "kamela", "puščavska_lisica", "škorpijon");
okolje[5] = new Okolje("gore", "gams", "orel", "ris", "ruševec_divji_petelin", "svizec");
okolje[6] = new Okolje("morje", "delfin", "hobotnica", "morska_zvezda", "rakovica", "školjke");     //morske_robe=*ribe
okolje[7] = new Okolje("džungla", "kača", "opica", "tiger", "tukan", "žaba");
okolje[8] = new Okolje("savana", "lev", "nosorog", "slon", "zebra", "žirafa");




var stPravilnih=0;

function predvajajZvok(medija){
    var zvok=document.getElementById('zvok');
    zvok.volume=0.5;
    zvok.pause();
    zvok.src=medija;
    zvok.currentTime=0;
    zvok.play();
}

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

var naloge=new Array;
napolnirandom(naloge,okolje.length)
var nekaj=0;
var trenutnaNal=naloge[nekaj];
function ponRandom(st, maxSt, stRandSt){
    //maxSt++;
    for(var i=0;i<stRandSt;i++)
        st[i]=Math.floor(Math.random() * maxSt);
}

function a(){
$('.premik').draggable({
    cursor: 'grabbing',
    revert: 'invalid',
    helper: 'clone',
    snap: 'true',
    cursorAt: { top: 0, left: 0 },
    start: function (event, ui)
    {
        $(this).parent().find('#adminTimeReservation').css('display','block');
        $('.premik').removeClass('povecaj')
        //if($(this).parent().hasClass('spustljivo'))  //preveri če je trenuten class droppable
        //    $(this).parent().droppable("enable")      //če je mu vklopimo droppapble
    },
    drag: function (event, ui){

    },
    stop: function() {
        $('.premik').addClass('povecaj')
        $('.spustljivo').children().removeClass('povecaj')
    }
    });//draggable
    $('.spustljivo').droppable({
        drop: function(ev, ui) {
        $(this).prepend(ui.draggable);
        //if(!($(this).hasClass('smeti')))
        // $(this).droppable("disable") //izkopi droppable, ko na njega spustimo 1 element
        ui.draggable.position({
          my: 'left top',
          at: 'left top',
          of: this,
        });
    //$('.smeti').empty();
    preveri();
    }
});//droppable
}

function rand(max) {
    return Math.floor(Math.random() * max);
}

function nastaviIgro(){
    $('.okolje-naslov').html(okolje[trenutnaNal].imeOkolja.toUpperCase());
    stPravilnih=rand(2)+4;
    $('.spustljivo').empty();
    $('.izbira').empty();
    var vrstniRedNalog=new Array;
    napolnirandom(vrstniRedNalog, okolje[trenutnaNal].besede.length)
    var slika=document.createElement('img')
    slika.classList.add('premik')
    slika.classList.add('povecaj')
    for(var i=0;i<stPravilnih;i++){    //ustvari pravilne
        slika.src="OKOLJA/"+okolje[trenutnaNal].imeOkolja+"/"+okolje[trenutnaNal].besede[vrstniRedNalog[i]]+".jpg";
        slika.alt=trenutnaNal;
        $('.izbira').append(slika.cloneNode(true));
        //console.log(slika.src)
    }
    var randomNaloga=0;
    var randVrstniRed=new Array;
    ponRandom(randVrstniRed, 5, (12-stPravilnih))
    //console.log(randVrstniRed)
    var div=document.getElementById('izbira')
    var slike=div.getElementsByTagName('img');
    for(var i=0;i<(12-stPravilnih);i++){    //ustvari napačne
        randomNaloga=rand(okolje.length);
        while(randomNaloga==trenutnaNal)
            randomNaloga=rand(okolje.length);
        slike=div.getElementsByTagName('img');
        for(var j=0;j<slike.length;j++){    //poskrbi da se element ne ponovi
            //console.log(j)
            if(slike[j].alt==okolje[randomNaloga].besede[randVrstniRed[i]]){
                //console.log("ponovno")
                j=0;
                randomNaloga=rand(okolje.length);
                while(randomNaloga==trenutnaNal)
                    randomNaloga=rand(okolje.length);
                randVrstniRed[i]=rand(5);
            }
        }
        slika.src="OKOLJA/"+okolje[randomNaloga].imeOkolja+"/"+okolje[randomNaloga].besede[randVrstniRed[i]]+".jpg";
        slika.alt=okolje[randomNaloga].besede[randVrstniRed[i]];
        $('.izbira').append(slika.cloneNode(true));
    }
    $('.okolje-spusti').css("background-image",'url("OKOLJA/'+okolje[trenutnaNal].imeOkolja+"/ok_"+okolje[trenutnaNal].imeOkolja+'.jpg")')
    //$('.okolje-ozadje').css("src",'url("OKOLJA/'+okolje[trenutnaNal].imeOkolja+"/ok_"+okolje[trenutnaNal].imeOkolja+'.jpg")')
    
    //console.log(stPravilnih);

    $(".izbira").shuffleChildren();

    a();
}

function preveri(){
    var mainDiv=$('.okolje-spusti');
    var slike=mainDiv[0].getElementsByTagName('img');
    var pravilnih=0;
    var st=0;
    var narobe=false
    for(var i=0;i<slike.length;i++){
        //console.log(slike)
        if(parseInt(slike[i].alt)==trenutnaNal){
            $(slike[i]).draggable('disable')
            pravilnih++;
        } else {
            st = parseInt(document.getElementById('narobe').innerHTML)
            st++;
            document.getElementById('narobe').innerHTML=st;
            $(slike[i]).remove()
            narobe=true
        }
    }
    if(narobe!=true){
        st = parseInt(document.getElementById('pravilno').innerHTML)
        st++;
        document.getElementById('pravilno').innerHTML=st;
    }
    if(pravilnih==1)
        zamegliOzadje()
    if(pravilnih==stPravilnih){
        
        predvajajZvok("ZVOKI/BRAVO1.WAV")
        //window.alert('PRAVILNO!')
        setTimeout(naslednjo,2000)
    }
}
//console.log(naloge)
function naslednjo(){
    //if(nekaj-1==okolje.length){
    //    window.alert("BRAVO REŠIL SI VSE NALOGE!")
    //} else {
    //    trenutnaNal=naloge[nekaj];
    //    console.log(trenutnaNal)
    //    nekaj++;
        var prejsnaNal=trenutnaNal;
        while(prejsnaNal==trenutnaNal)
            trenutnaNal=rand(okolje.length)
        nastaviIgro()
        $('.spustljivo').removeClass("ozadjeBlur");
    //}
}

function zamegliOzadje() {         //  create a loop function
    $('.spustljivo').addClass("ozadjeBlur");
}
$(document).ready(function () {
    naslednjo();
    navodila()
});

function navodila(){
    window.alert('NAVODILA\nPovleci slike živali v njihova življenjska okolja!');
}