var selector = (document.getElementById("cf_crash_signature_edit_container")) ? "cf_crash_signature_edit_container" : "field-value-cf_crash_signature";
var querystring = "";
document.querySelectorAll("#" + selector + " a").forEach(function(element) {
    var signature = element.innerText.substring(3,element.innerText.length-2);
    if (element.innerText.indexOf("[@") != -1)
        querystring = querystring + signature + "\\";        
});

if (querystring.length > 0) {
    querystring = querystring.substring(0,querystring.length-1);
    var iframe = document.createElement('iframe');
    iframe.src = 'https://ashughes1.github.io/bugzilla-socorro-lens/chart.htm?s=' + querystring;
    iframe.setAttribute('style', 'border:0; width:610px; height:320px');
    iframe.setAttribute('id', 'iframe_chart');
    var container = document.getElementById(selector);
    if (container) container.appendChild(iframe);
}
