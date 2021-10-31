
var jami=document.getElementById('jami');
jami.src="GLASBA/"+(Math.floor(Math.random() * 38) + 1)+".MID";
jami.start();


function spremeniOzadje(slika){
  var potSlike="POMOC/"+slika+".png"
  //document.write(potSlike)
  document.getElementById('crv-ozadje').style.backgroundImage ='url("'+potSlike+'")';
  predvajajZvok(slika);
}
function predvajajZvok(slika){
  zvok=document.getElementById('zvok');
  zvok.volume=0.5;
  zvok.pause();
  zvok.src="GOVOR/"+slika+".WAV";
  zvok.currentTime=0;
  zvok.play();
}
