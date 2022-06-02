$(document).ready(function() {

  $.ajax({

    url:"https://api.mcsrvstat.us/2/truevanilla.org",
    type: "Get",
    success: function(data) {
      if (data.online == true) {
        $("#player-count").html(data.players.online)
        $("#online-icon").html(" " + '<div class="blob"></div>') // eski ikon: <i class='fas fa-circle' style='color: #277964; font-size: 0.85em;'></i>
        $("#version").html(data.version)
      } else {
        $("#player-count").html("0")
        $("#online-icon").html(" " + "<i class='fas fa-circle' style='color: gray; font-size: 0.85em;'></i>") 
        $("#version").html("Ver 1.18.2")
      }

      
    }
  });
});