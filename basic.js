// Trying to find a way to sinplify the code in basic.html
let rowNames = ["test1", "test2", "test3"];
let template = $("tr#template");

var i;
for (i = 0; i < rowNames.length ; i++){
    let clone = template.clone();
    clone.find("td#rowName").text(rowNames[i]);
    
    let name = color + i;
    clone.find("input#greenRadio").setAttribute("name",name);
    clone.find("input#yellowRadio").setAttribute("name",name);
    clone.find("input#redRadio").setAttribute("name",name);
    $("#table").append(clone);
}
