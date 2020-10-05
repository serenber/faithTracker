function showPrayer(prayer) {
    var tr = $("<tr>");
    tr.addClass("mdc-data-table__row");
    var td2 = $("<td>");
    td2.addClass("mdc-data-table__cell mdc-data-table__cell--numeric");
    td2.text(prayer.date);
    tr.append(td2);
    var td1 = $("<td>");
    td1.addClass("mdc-data-table__cell");
    td1.text(prayer.prayer);
    tr.append(td1);
    $("#prayerList").append(tr);
}