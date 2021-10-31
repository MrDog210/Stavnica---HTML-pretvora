var trenutnaSlika=0;
var listCrk=false;

function predvajajZvok(medija){
  var zvok=document.getElementById('zvok');
  zvok.volume=0.5;
  zvok.pause();
  zvok.src=medija;
  zvok.currentTime=0;
  zvok.play();
}

function reciSliko(){
  predvajajZvok("GOVOR/"+pov[trenutnaSlika].zvok.toUpperCase())
}

function nastaviIgro(){
  document.getElementById('mainSlika').src="SLIKE/"+pov[trenutnaSlika].slika.toUpperCase();
  $('.rešitve').empty();
  var div= document.createElement('div');
  div.classList.add('spustljivo')
  var divNeSpustljivo= document.createElement('div');
  divNeSpustljivo.classList.add('neSpustljivo')
  for(var i=0;i<pov[trenutnaSlika].beseda.length;i++){
    if(i==(pov[trenutnaSlika].pozicija-1)){
      var slika = document.createElement('img');
      slika.src="CRKE/KEY_"+(pov[trenutnaSlika].beseda.charAt(i).toUpperCase()) +".BMP";
      slika.alt=pov[trenutnaSlika].beseda.charAt(i).toUpperCase();
      $('.rešitve').append(divNeSpustljivo);
      divNeSpustljivo.appendChild(slika)
    } else
      $('.rešitve').append(div.cloneNode(true));
  }
  console.log(pov[trenutnaSlika])
  a();
}

nastaviIgro()

function preveriResitve(){
  div = document.getElementById('rešitve').getElementsByTagName('div');
  var pravilno=true;
  var prazno=false;
  var narobe = document.getElementById('narobe');
  var st=0;
  for(var i=0;i<div.length && pravilno;i++){
    var slika = div[i].getElementsByTagName('img');
    if(slika.length!=0){
      if(slika[0].alt!=pov[trenutnaSlika].beseda.charAt(i).toUpperCase()){
        predvajajZvok("ZVOKI/NAROBE"+(Math.floor(Math.random() * 7) + 1)+".WAV")
        st=parseInt(narobe.innerHTML)
        st++;
        narobe.innerHTML=st;
        $(div[i]).empty();
        $(div[i]).droppable("enable") 
        pravilno=false;
      }
    } else 
      prazno=true;
  }
  if(pravilno && prazno){
    var st = parseInt(document.getElementById('pravilno').innerHTML)
    st++;
    document.getElementById('pravilno').innerHTML=st;
  }
  if(pravilno && prazno==false){
    //window.alert('pravilno');
    var st = parseInt(document.getElementById('pravilno').innerHTML)
    st++;
    document.getElementById('pravilno').innerHTML=st;
    predvajajZvok("GOVOR/"+pov[trenutnaSlika].zvok.toUpperCase())
    setTimeout(function(){
      naslednjo();
      predvajajZvok("ZVOKI/BRAVO1.WAV")
     }, 1500);
  }
}

function nekaj(){
  setTimeout(preveriCrke,20)
  setTimeout(preveriResitve,20)
}

function naslednjo(){
  trenutnaSlika=Math.floor(Math.random() * 217);
  nastaviIgro()
}

function preveriCrke(){ //preveri če so prisotne vse slike v tabeli, in če manjkajo, jih doda
var crka = document.querySelectorAll("[class^=crka]");
for(var i=0;i<crka.length;i++) {
  var img =crka[i].getElementsByTagName('img')
  if(img.length==0){
    var slika=document.createElement('img');
    slika.src="CRKE/KEY_"+crka[i].className.charAt(5).toUpperCase()+".BMP";
    slika.className="premik";
    slika.alt=crka[i].className.charAt(5).toUpperCase();
    crka[i].appendChild(slika);
  }
  a();
}

}
function a(){
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
//$('.smeti').empty();
nekaj();
}
});//droppable
}
a()

function odpriMeniSlik(){
  izberiSlikoBrezEle()
  $('#main').css('display',"none");
  $('#meniSlik').css('display','block');
  listCrk=false;
}

function zapriMeniSlik(){
  $('#meniSlik').css('display','none');
  $('#main').css('display',"block");
  nastaviIgro();
}

function odpriListSlik(){
  oznaciList()
  $('#main').css('display',"none");
  $('#listSlik').css('display','block');
  listCrk=false;
}

function zapriListSlik(){
  $('#listSlik').css('display','none');
  $('#main').css('display',"block");
  nastaviIgro();
}

//Meni sliik
var indeksNalSlik=0;

function ustvariSlike(){
  var div = document.querySelectorAll("[class^=slika-]");
  for(indeksNalSlik=0;indeksNalSlik<28;indeksNalSlik++){
    var slika = document.createElement('img');
    slika.src="SLIKE/"+pov[indeksNalSlik].slika.toUpperCase();
    slika.alt=indeksNalSlik;
    div[indeksNalSlik].appendChild(slika);
    if(indeksNalSlik==trenutnaSlika)
        izberiSliko(div[indeksNalSlik]);
  }
}
ustvariSlike()


function izberiSliko(ele){
  var slika =ele.getElementsByTagName('img')
  if(slika[0].style.display=="none")
    return;
  var div = document.querySelectorAll("[class^=slika-]");
  for(var i=0;i<28;i++){
    div[i].style.border="";
  }
  ele.style.border="2px solid red";
  trenutnaSlika=slika[0].alt;
}

function izberiSlikoBrezEle(){
  var div = document.querySelectorAll("[class^=slika-]");
  var slika =div[0].getElementsByTagName('img')
  for(var i=0;i<28;i++){
    slika =div[i].getElementsByTagName('img')
    if(parseInt(slika[0].alt)==trenutnaSlika){
      div[i].style.border="2px solid red";
    } else
      div[i].style.border="";
  }
}

function meniNaprej(){
  if(indeksNalSlik>217)
    return;
  var div = document.querySelectorAll("[class^=slika-]");
  var stPon=indeksNalSlik+28;
  for(var i=0;indeksNalSlik<stPon;indeksNalSlik++){
    var slika =div[i].getElementsByTagName('img')
    if(indeksNalSlik<217){
      slika[0].src="SLIKE/"+pov[indeksNalSlik].slika.toUpperCase();
      slika[0].alt=indeksNalSlik;   
      if(indeksNalSlik==trenutnaSlika)
        izberiSliko(div[i]);
      else
        div[i].style.border="";
    } else {
      slika[0].style.display="none";
    }
    i++;
  }
}

function meniNazaj(){
  if(indeksNalSlik==28)
    return;
  var div = document.querySelectorAll("[class^=slika-]");
  var stPon=indeksNalSlik-28;
  indeksNalSlik-=56;
  for(var i=0;indeksNalSlik<stPon;indeksNalSlik++){
    var slika =div[i].getElementsByTagName('img')
    if(indeksNalSlik<217){
      slika[0].src="SLIKE/"+pov[indeksNalSlik].slika.toUpperCase();
      slika[0].alt=indeksNalSlik;   
      slika[0].style.display="block";
      if(indeksNalSlik==trenutnaSlika)
        izberiSliko(div[i]);
      else
        div[i].style.border="";
    } else {
      
    }
    i++;
  }
}

//List slik

function ustvariList(){
  var list = document.getElementById('list');
  var li = document.createElement('li')
  for(var i=0;i<pov.length;i++){
    li.innerHTML=pov[i].beseda.toUpperCase();
    li.classList.remove("list-"+(i-1));
    li.classList.add("list-"+i);
    list.appendChild(li.cloneNode(true))
  }
}

ustvariList()

function oznaciList(){
  document.getElementById('listMainSlika').src="SLIKE/"+pov[trenutnaSlika].slika.toUpperCase();
  var li = document.getElementsByTagName('li');
  for(var i=0;i<li.length;i++){
    if(trenutnaSlika==(parseInt($(li[i]).attr('class').substr(5,$(li[i]).attr('class').length)))){
      li[i].style.border="4px solid red";
    } else {
      li[i].style.border="1px solid black";
    }
  }
}

$("li").click(function (e) { 
  trenutnaSlika=parseInt($(this).attr('class').substr(5,$(this).attr('class').length))
  document.getElementById('listMainSlika').src="SLIKE/"+pov[trenutnaSlika].slika.toUpperCase();
  oznaciList();
});

//list črk

function vklopiListCrk(){
  predvajajZvok("ZVOKI/IZBIRA.WAV");
  listCrk=true;
  aniCrkeIndeks=0;
  animirajCrke()
  aniCrkeIndeks2=0
  setTimeout(animirajCrke2,250)
}

var aniCrkeIndeks=0
function animirajCrke() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    var crke=$('*[class^="crka-"]')
    crke[aniCrkeIndeks].style.backgroundColor="yellow";
    aniCrkeIndeks++;                    //  increment the counter
    if (aniCrkeIndeks < crke.length) {           //  if the counter < 10, call the loop function
      animirajCrke();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 75)
}
var aniCrkeIndeks2=0
function animirajCrke2() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    var crke=$('*[class^="crka-"]')
    crke[aniCrkeIndeks2].style.backgroundColor="white";
    aniCrkeIndeks2++;                    //  increment the counter
    if (aniCrkeIndeks2 < crke.length) {           //  if the counter < 10, call the loop function
      animirajCrke2();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 75)
}
$('*[class^="crka-"]').click(function (e) { 
  var ele=$(this);
  var sli = ele[0].getElementsByTagName('img')
  predvajajZvok(("GOVOR/"+sli[0].alt+".WAV"))
  if(listCrk){
    listCrk=false;
    $('#listCrkContainer').empty()
    var br=document.createElement('br');
    for(var i=0;i<pov.length;i++){
      if(pov[i].znak==$(this).attr('class').charAt(5).toUpperCase()){
        var div=document.createElement('div')
        div.classList.add("listCrk-"+i);
        var slika=document.createElement('img')
        var span=document.createElement('div')
        slika.src="SLIKE/"+pov[i].slika.toUpperCase();
        slika.alt=i;
        if(i==trenutnaSlika)
          div.style.border="2px solid red";
        else
         div.style.border="2px solid black";
        $('#listCrkContainer').append(div);
        div.appendChild(slika);
        for(var j=0;j<pov[i].beseda.length;j++){
          if((pov[i].pozicija-1)==j){
            span.innerHTML+=pov[i].znak.toUpperCase()+" ";
          } else {
            span.innerHTML+="_ "
          }
        }
        div.appendChild(span)
      }
    }
    $('#main').css('display',"none");
    $('#listCrk').css('display','block');
    preglejListCrk()
  }
});
function preglejListCrk(){
$('*[class^="listCrk-"]').click(function (e) { 
  trenutnaSlika=parseInt($(this).attr('class').substr(8,$(this).attr('class').length));
  $('*[class^="listCrk-"]').css("border", "2px solid black")
  $(this).css("border", "2px solid red")
});
}

function zapriListCrk(){
  nastaviIgro();
  $('#listCrk').css('display','none');
  $('#main').css('display',"block");
}

naslednjo();
$(document).ready(function () {
  window.alert("KAJ JE NA SLIKI?\nSESTAVI BESEDO IN JO PREBERI.")
});
function navodila(){
  predvajajZvok("GOVOR/STAVNICI.WAV")
}