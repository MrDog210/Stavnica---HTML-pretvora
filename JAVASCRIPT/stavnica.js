
function menjaj(slika){
  var crka=slika.alt.charAt(0);

  crka=crka.toUpperCase();
  document.getElementById('velika-slika').src="CRKE/KEY3_"+crka+".BMP";
  //document.write(crka);
  slika.src='CRKE/KEY_'+crka+'.BMP';
  predvajajZvok(crka);
  document.getElementById('crka').innerHTML="";
  setTimeout(function(){ document.getElementById('crka').innerHTML=crka; }, 1800);
}
function zamenjajCrko(crka){
  document.getElementById('crka').innerHTML=crka;
}
function predvajajZvok(crka){
  zvok=document.getElementById('zvok');
  zvok.volume=0.5;
  zvok.pause();
  zvok.src='Govor Edit/'+crka+'.mp3';
  zvok.currentTime=0;
  zvok.play();
}
