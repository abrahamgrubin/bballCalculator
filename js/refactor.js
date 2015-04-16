$( document ).ready(function(){
  
  $("input").keypress(function(event) {
    if ( event.which == 45 ) {
        event.preventDefault();
      } 
    else if ($("input").value == 0 && event.which == 40){
      event.preventDefault();
    }
  });
  //2pt Field Goal Attempts
  //Get the number from the form so you can calculate the number
  var allStats = [$("#games"), $("#twoAttempts"), $('#twoMade'), $("#threeAttempts"), ($"#oRebounds"), ($"#dRebounds"),($"#assists"),($"#steals"), ($"#blocks"), ($"#turnovers")]
  function getNum(stat){
    var cast = []
    for (i = 0; i < stat.length; i++){
      //parseInt(stat.val());
      cast[i].push(parseInt(stat.val())); 
    }
  };
  
  //var games = getNum($("#games")),
    //  twoAttempts = getNum($("#twoAttempts")),
    // twoMade = getNum($('#twoMade')),
    //  threeMade = getNum($('#threeMade')),
    //  threeAttempts = getNum($("#threeAttempts"),
    //  oRebuonds = getNum($"#oRebounds"),

  function perGame(stat){

  }



  var twoAttempts = getnumber($("#twoAttempts"))
 
  $("#twoAttempts").change(function(){ 
    var attempts = parseInt($('#twoAttempts').val());
    var games =  parseInt($('#games').val());
   $("#twoA").text(attempts/games);
  });
 
  $("#games").change(function(){
    var attempts = parseInt($('#twoAttempts').val());
    var games =  parseInt($('#games').val());
   $("#twoA").text(attempts/games);
  });