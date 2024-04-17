document.addEventListener("DOMContentLoaded", function () {
    // Data for the table
    var data = [
        { name: "John", age: 30, city: "New York" },
        { name: "Alice", age: 25, city: "Los Angeles" },
        { name: "Bob", age: 35, city: "Chicago" }
    ];

    // Create table element
    var table = document.createElement("table");

    // Create table header
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    for (var key in data[0]) {
        var th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    var tbody = document.createElement("tbody");
    data.forEach(function (item) {
        var row = document.createElement("tr");
        for (var key in item) {
            var cell = document.createElement("td");
            cell.textContent = item[key];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Append table to container
    document.getElementById("table-container").appendChild(table);
});
