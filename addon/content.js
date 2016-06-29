var container = document.getElementById("cf_crash_signature_edit_container");
var nodes = container.childNodes;
var signatures = "";
for (var i=0; i<nodes.length; i++) {
    if (nodes[i].tagName == "A") {
        if (nodes[i].text.indexOf("[@") !=-1) {
            signatures = signatures + nodes[i].text.substring(3, nodes[i].text.length-2) + "\\";
        }
    }
}
if (signatures.length > 0) {
    signatures = signatures.substring(0,signatures.length-2);
    var iframe = document.createElement('iframe');
    iframe.src = 'https://ashughes1.github.io/bugzilla-socorro-lens/chart.htm?s=' + signatures;
    iframe.setAttribute('style', 'border:0;');
    container.appendChild(iframe);
}
