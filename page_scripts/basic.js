//a class that creates the html for a stylized radio button
class Button {
  constructor(name, state) {
    var td2 = $("<td>");
    var d1 = $("<div class='pretty p-default p-curve'>");
    var in1 = $("<input type='radio' name='color" + name + "' />");
    d1.append(in1);
    var d2 = $("<div class='state p-" + state + "-o'>");
    var la1 = $("<label></label>");
    d2.append(la1);
    d1.append(d2);
    td2.append(d1);
    this.button = td2
  }
}

let rowNames = ["Devotion to God", "Personal Health", "Family", "Stewardship", "Work", "Volunteering", "Personal Leisure"];

var i;
for(i = 0; i < rowNames.length; i++) {
    var name = "color" + i;
    
    var tr = $("<tr>");
    tr.addClass("mdc-data-table__row");
    
    //row name
    var td1 = $("<td>");
    td1.addClass("mdc-data-table__cell");
    td1.text(rowNames[i]);
    tr.append(td1);
    
    //the buttons in the row
    var greenButton = new Button(name, 'success');
    tr.append(greenButton.button);
    
    var yellowButton = new Button(name, 'warning');
    tr.append(yellowButton.button);
    
    var redButton = new Button(name, 'danger');
    tr.append(redButton.button);
    
    $("#table").append(tr);
}