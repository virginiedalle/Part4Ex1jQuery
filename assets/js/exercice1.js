$(function(){

  var scoreComp = 0;
  var scoreHum = 0;
  var totalTry = 0;
  $('#button').click(function(){
    var choiceArray = ['Pierre','Feuille','Ciseaux'];
    var random = Math.floor(Math.random() * 3);
    var valueComp = choiceArray[random];
    var valueHum = $('option:selected').val();
    var test = choiceArray[valueHum];
    console.log(test);

    if(test == valueComp){
      alert('Match nul' + '\nOrdinateur a choisi : ' + valueComp);
      totalTry++;
    }
    else if(test== 'Pierre' && valueComp == 'Ciseaux'|| (test == 'Feuille' && valueComp == 'Pierre') || (test == 'Ciseaux' && valueComp == 'Feuille')){
      alert('Vous avez gagné ! =)' + '\nOrdinateur a choisi : '  + valueComp);
      totalTry++;
      scoreHum++;
    }
    else{
      alert('Vous avez perdu ! =(' + '\nOrdinateur a choisi : ' + valueComp);
      totalTry++;
      scoreComp++;
    }
  });
  $('#stats').click(function(){
    var stats = Math.round((scoreHum / totalTry) * 100);
    alert('Victoires : ' + scoreHum + '\nDéfaites : ' + scoreComp + '\nPourcentage de réussite : ' + stats + '%');
  });
});
