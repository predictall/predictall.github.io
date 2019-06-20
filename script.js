function hackAccount() {
  var username = $("#username_input").val();
  $.ajax({
    url: "https://analysis--billzheng2.repl.co/predictall/" + username,
    async: false,
    success: function(result) {
      var res = JSON.parse(result);      
      
      $("#result_label").text(res);
      
      var result_list = res;
      console.log("In ajax call")
      // refresh the graph
      google.charts.load('current', {'packages':['gauge'], callback: drawChart});
      // google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        
        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Res1', result_list[0]],
        ]);

        var options = {
          width: 400, height: 120,
          greenFrom: -1.25, greenTo: 1.25,
          minorTicks: 12, min: -3, max: 3
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options); 

        data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Res2', result_list[1]]
        ]);

        options = {
          width: 400, height: 120,
          greenFrom: 0, greenTo: 1.25,
          redFrom: 2.5, redTo: 3,
          yellowFrom:1.25, yellowTo: 2.5,
          minorTicks: 6, min: 0, max: 3
        };

        chart = new google.visualization.Gauge(document.getElementById('chart_div2'));

        chart.draw(data, options);    
        data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Res3', result_list[2]]
        ]);

        options = {
          width: 400, height: 120,
          greenFrom: 0, greenTo: 1.25,
          redFrom: 2.5, redTo: 3,
          yellowFrom:1.25, yellowTo: 2.5,
          minorTicks: 6, min: 0, max: 3
        };

        chart = new google.visualization.Gauge(document.getElementById('chart_div3'));

        chart.draw(data, options);
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    console.log("failed") 
                }  
  });
}



    