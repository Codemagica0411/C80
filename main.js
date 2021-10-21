nots = [];

function submit() {
    display_nots = [];
for(var j = 1; j<=4; j++){
    var name = document.getElementById("name_of_the_student_"+j).value;
    nots.push(name);
}
var notsl = nots.length;
for(var k =0; k<notsl; k++) {
    display_nots.push("<h4> NAME -"+nots[k]+"</h4>");

}
document.getElementById("display_name_with_commas").innerHTML = display_nots;
var rc = display_nots.join(" ");
document.getElementById("display_name_without_commas").innerHTML = rc;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display ="inline-block";
}

function sorting() {
    nots.sort();
    var ds_nots = [];
    var notsl = nots.length;
for(var k =0; k<notsl; k++) {
    ds_nots.push("<h4> NAME -"+nots[k]+"</h4>");
}
var rc = ds_nots.join(" ");
document.getElementById("display_name_without_commas").innerHTML = rc;
}