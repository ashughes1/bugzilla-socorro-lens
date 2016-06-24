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
signatures = signatures.substring(0,signatures.length-2);
var url = "https://ashughes1.github.io/bugzilla-socorro-lens/chart.htm?s=" + signatures;
var iframe = "<iframe src='" + url + "' style='border:0'></iframe>";
container.innerHTML = container.innerHTML + iframe;
