//There's definitely a simplier/cleaner solution than this, but this'll do for now

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
    
    //green button
    var td2 = $("<td>");
    var d1 = $("<div class='pretty p-default p-curve'>");
    var in1 = $("<input type='radio' name='color" + name + "' />");
    d1.append(in1);
    var d2 = $("<div class='state p-success-o'>");
    var la1 = $("<label></label>");
    d2.append(la1);
    d1.append(d2);
    td2.append(d1);
    tr.append(td2);
    
    //yellow button
    var td3 = $("<td>");
    d1 = $("<div class='pretty p-default p-curve'>");
    in1 = $("<input type='radio' name='color" + name + "' />");
    d1.append(in1);
    d2 = $("<div class='state p-warning-o'>");
    la1 = $("<label></label>");
    d2.append(la1);
    d1.append(d2);
    td3.append(d1);
    tr.append(td3);
    
    //red button
    var td4 = $("<td>");
    d1 = $("<div class='pretty p-default p-curve'>");
    in1 = $("<input type='radio' name='color" + name + "' />");
    d1.append(in1);
    d2 = $("<div class='state p-danger-o'>");
    la1 = $("<label></label>");
    d2.append(la1);
    d1.append(d2);
    td4.append(d1);
    tr.append(td4);
    $("#table").append(tr);
}