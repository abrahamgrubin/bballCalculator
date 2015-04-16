$( document ).ready(function(){
  
  $("input").keypress(function(event) {
    if ( event.which == 45 ) {
        event.preventDefault();
      } 
  });
$("input").keypress(function(event) {
  if ($("input").value <= 0 && event.which == 40){
      event.preventDefault();
    }
  });

$("#twoMade").keypress(function(event){
  var test = 1;
  if (event.which === 38){
      var test = $("#twoAttempts").text(parseInt("#twoAttempts").val());

    //$("#twoAttempts").text(parseInt($("#twoAttempts").val())+1);
  }
    alert(test);
});
//do not allow more makes than attempts 
 //$("#attempts").change(function(){
 //var attempts = $('#attempts').val();
 //var made = $('#made').val();
  //if (attempts < made){
    //$('#fga').text("N/A");
    //$('#fgm').text("N/A");
  //}
  //});
//do not allow a certain amount of points
  //
//2pt Field Goal Attempts
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
//2pt Field Goals Made
    $("#twoMade").change(function(){ 
    var twoMade = parseInt($('#twoMade').val());
    var games =  parseInt($('#games').val());
    var threeMade = parseInt($('#threeMade').val());
    var attempts = parseInt($('#twoAttempts').val());
    $("#twoM").text(twoMade/games);
    
    if (threeMade <= 0){
      $("#points").text((twoMade * 2));
    } 
    else {
      $("#points").text((threeMade * 3) + (twoMade * 2))
    }
  });
 
  $("#games").change(function(){
    var made = parseInt($('#twoMade').val());
    var games =  parseInt($('#games').val());
   $("#twoM").text(made/games);
   
  });
//2pt Field Goal %
  $("#twoAttempts").change(function(){ 
    var attempts = parseInt($('#twoAttempts').val());
    var twoMade =  parseInt($('#twoMade').val());
    var threeMade = parseInt($('#threeMade').val());
   $("#twoP").text((Math.round((twoMade/attempts)*100))+ '%');
   $("#points").text((threeMade * 3) + (twoMade * 2))
  });

   $("#twoMade").change(function(){ 
    var attempts = parseInt($('#twoAttempts').val());
    var made =  parseInt($('#twoMade').val());
   $("#twoP").text((Math.round((made/attempts)*100)) + '%');
  
  });
//3 Pointers
 $("#threeAttempts").change(function(){ 
    var threeAttempts = parseInt($('#threeAttempts').val());
    var games =  parseInt($('#games').val());
   $("#threeA").text(threeAttempts/games);
  });
 
  $("#games").change(function(){
    var threeAttempts = parseInt($('#threeAttempts').val());
    var games =  parseInt($('#games').val());
   $("#threeA").text(threeAttempts/games);
  });
//3s Made
    $("#threeMade").change(function(){ 
    var threeMade = parseInt($('#threeMade').val());
    var twoMade = parseInt($('#twoMade').val());
    var games =  parseInt($('#games').val());
   $("#threeM").text(threeMade/games);
   if (twoMade <= 0){
    $("#points").text((threeMade * 3));
  } else {
   $("#points").text((threeMade * 3) + (twoMade * 2))
 }
  });
 
  $("#games").change(function(){
    var threeMade = parseInt($('#threeMade').val());
    var games =  parseInt($('#games').val());
   $("#threeM").text(threeMade/games);
  });
//3%
  $("#threeAttempts").change(function(){ 
    var threeAttempts = parseInt($('#threeAttempts').val());
    var threeMade =  parseInt($('#threeMade').val());
   $("#threeP").text((Math.round((threeMade/threeAttempts)*100))+ '%');
  });

   $("#threeMade").change(function(){ 
    var threeAttempts = parseInt($('#threeAttempts').val());
    var threeMade =  parseInt($('#threeMade').val());
    $("#threeP").text((Math.round((threeMade/threeAttempts)*100))+ '%');
  });
 //Total Field Goals Made

  $("#threeMade").change(function(){ 
    var threeMade = parseInt($('#threeMade').val());
    var twoMade = parseInt($('#twoMade').val());
    $("#fgm").text(parseInt(threeMade + twoMade));
  });

  $("#twoMade").change(function(){ 
    var threeMade = parseInt($('#threeMade').val());
    var twoMade = parseInt($('#twoMade').val());
    $("#fgm").text(threeMade + twoMade);
  });

//Total Field Goals Attempted

  $("#threeAttempts").change(function(){ 
    var threeAttempt = parseInt($('#threeAttempts').val());
    var twoAttempt = parseInt($('#twoAttempts').val());
    $("#fga").text(threeAttempt + twoAttempt);
  });

  $("#twoAttempts").change(function(){ 
    var threeAttempt = parseInt($('#threeAttempts').val());
    var twoAttempt = parseInt($('#twoAttempts').val());
    $("#fga").text(threeAttempt + twoAttempt);
  });
//Points per game

  $("#points").change(function(){ 
    var points = parseInt($('#points').val());
    var games = parseInt($('#games').val());
   $("#ppg").text(points/games);
  });
 
  $("#games").change(function(){
    var points = parseInt($('#points').val());
    var games =  parseInt($('#games').val());
   $("#ppg").text(points/games);
  });

//Effective Field Goal % = (FG + 0.5 * 3P) / FGA
//$("#twoMade").change((function(){
    //var threeMade = parseInt($('#threeMade').val());
    //var twoMade = parseInt($('#twoMade').val());
    //var threeAttempt = parseInt($('#threeAttempts').val());
    //var twoAttempt = parseInt($('#twoAttempts').val());
    //($'#efg').text(((threeMade + twoMade)+ 0.5 * threeMade)/(threeAttempt + twoAttempt));
//});
// ($'#efg').text($('#fgm') + 0.5 * ('#threeMade')<<<<<<<<<----
//Offensive Rebounds per Game

  $("#oRebounds").change(function(){ 
    var oRebounds = parseInt($('#oRebounds').val());
    var dRebounds = parseInt($('#dRebounds').val());
    var rpg = dRebounds + oRebounds;
    var games =  $('#games').val();
   $("#orpg").text(oRebounds/games);
   $("#rpg").text(rpg);
  });
 
  $("#games").change(function(){
    var oRebounds = parseInt($('#oRebounds').val());
    var dRebounds = parseInt($('#dRebounds').val());
    var rpg = dRebounds + oRebounds;
    var games =  $('#games').val();
   $("#orpg").text(oRebounds/games);
   $("#rpg").text(rpg);
  
  });

//Defensive Rebounds per Game

  $("#dRebounds").change(function(){ 
    var dRebounds = parseInt($('#dRebounds').val());
     var oRebounds = parseInt($('#oRebounds').val());
    var games =  parseInt($('#games').val());
    var rpg = dRebounds + oRebounds;
 
   $("#drpg").text(dRebounds/games);
   $("#rpg").text(rpg);
  });
 
  $("#games").change(function(){
    var dRebounds = parseInt($('#dRebounds').val());
    var games =  parseInt($('#games').val());
    console.log(dRebounds);
   $("#drpg").text(dRebounds/games);
   $("#rpg").text(dRebounds + $('#oRebounds').val());
  });
//Total Rebounds per Game
  
  $("#rebounds").change(function(){ 
    var rebounds = parseInt($('#rebounds').val());
    var games =  parseInt($('#games').val());
   $("#rpg").text(rebounds/games);
  });
 
  $("#games").change(function(){
    var rebounds = parseInt($('#rebounds').val());
    var games =  parseInt($('#games').val());
   $("#rpg").text(rebounds/games);
  });
//Assists per game

  $("#assists").change(function(){ 
    var assists = parseInt($('#assists').val());
    var games =  parseInt($('#games').val());
   $("#apg").text(assists/games);
  });
 
  $("#games").change(function(){
    var assists = parseInt($('#assists').val());
    var games =  parseInt($('#games').val());
   $("#apg").text(assists/games);
  });
 

//Blocks per game
  $("#blocks").change(function(){ 
    var blocks = parseInt($('#blocks').val());
    var games =  parseInt($('#games').val());
   $("#bpg").text(blocks/games);
  });
  $("#games").change(function(){
    var blocks = parseInt($('#blocks').val());
    var games =  parseInt($('#games').val());
   $("#bpg").text(blocks/games);
  });

//Steals per game

  $("#steals").change(function(){ 
    var steals = parseInt($('#steals').val());
    var games =  parseInt($('#games').val());
   $("#spg").text(steals/games);
  });
  $("#games").change(function(){
    var steals = parseInt($('#steals').val());
    var games =  parseInt($('#games').val());
   $("#spg").text(steals/games);
  });

  //Assist To Turnover Ratio

  $("#turnovers").change(function(){ 
    var assists = parseInt($('#assists').val());
    var turnovers = parseInt($("#turnovers").val());
   $("#atr").text(assists/turnovers);
  });
  $("#assists").change(function(){
    var assists = parseInt($('#assists').val());
    var turnovers = parseInt($("#turnovers").val());
   $("#atr").text(assists/turnovers);
  });
  //Clicking in the paint
$(".court").click(function(){
   var twoAttempt = parseInt($('#twoAttempts').val());
      parseInt(twoAttempts.value++);
      $(".miss").droppable;
 });

$(".court").dblclick(function(){
      parseInt(twoMade.value++);
      parseInt(twoAttempts.value--);
      $(".make").droppable;
      
    });

$("#special").click(function(e){ 
    $('#special').attr('height', $('#special').css('height'));
    $('#special').attr('width', $('#special').css('width'));
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop; 

         /*var c=document.getElementById("special"); */
        var ctx= this.getContext("2d"); /*c.getContext("2d");*/
        ctx.beginPath();
        ctx.arc(x, y, 10,0, 2*Math.PI);
        ctx.strokeStyle="#00A878";
        ctx.lineWidth = 8;
        ctx.stroke();
   });  

//$("#twoMade").keypress(function(event){
  //if ( event.which == 38 ) {
    //    twoAttempts.value++;
      //}
//});
//$("li .ui-state-default").click(function(){
  //self.addClass($(":first-child"));
  //});
//});
  $(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });
 $
});
