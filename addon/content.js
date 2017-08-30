var selector = (document.getElementById("cf_crash_signature_edit_container")) ? "cf_crash_signature_edit_container" : "field-value-cf_crash_signature";
var querystring = "";
document.querySelectorAll("#" + selector + " a").forEach(function(element) {
  var signature = element.innerText.substring(3,element.innerText.length-2);
  if (element.innerText.indexOf("[@") != -1) querystring = querystring + signature + "\\";        
});

if (querystring.length > 0) {
  querystring = querystring.substring(0,querystring.length-1);
  // CHART CONTAINER
  var iframe = document.createElement('iframe');
  iframe.src = 'https://ashughes1.github.io/bugzilla-socorro-lens/chart.htm?s=' + querystring;
  iframe.setAttribute('style', 'border:0; width:300px; height:170px; float:left;');
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('id', 'iframe_chart');
    
  // ZOOM BUTTON
  var zoom_button = document.createElement('img');
  zoom_button.setAttribute('id', 'zoom_button');
  zoom_button.setAttribute('src', 'https://ashughes1.github.io/bugzilla-socorro-lens/enlarge.jpg');
  zoom_button.setAttribute('style', 'width:20px; height:20px; float:left;');
  zoom_button.addEventListener("click", function() {
    var chart = document.getElementById('iframe_chart');
    var button = document.getElementById('zoom_button');
    if (button.src.indexOf("enlarge") != -1) {
      chart.style.transform = 'scale(2,2)';
      chart.style.margin = '90px 0px 0px 150px';
      chart.style.boxShadow = '10px 10px';
      chart.style.border = '1px solid';
      button.setAttribute('src', 'https://ashughes1.github.io/bugzilla-socorro-lens/shrink.jpg');
      button.style.margin = '-5px 0px 0px 155px';
    } else {
      iframe.setAttribute('style', 'border:0; width:300px; height:170px; float:left;');
      button.setAttribute('src', 'https://ashughes1.github.io/bugzilla-socorro-lens/enlarge.jpg');
      zoom_button.setAttribute('style', 'width:20px; height:20px; float:left;');
    }
  }, false);
       
  var container = document.getElementById(selector);
  if (container) {
    container.appendChild(iframe);
    container.appendChild(zoom_button);
  }
}
