
    const CITIES = [
        { name: "John", age: 30, city: "New York" },
        { name: "Alice", age: 25, city: "Los Angeles" },
        { name: "Bob", age: 35, city: "Chicago" }
    ];

    function createTable(data) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        table.appendChild(thead);
        table.appendChild(tbody);
    }

    // Adding a header row
    const headerRow = document.createElement("tbody");
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        row.appendChild(th);
        thead.appendChild(headerRow);
    });
    table.appendChild(tbody);

    // Append table to container
    document.getElementById("table-container").appendChild(table);

    const citiesElement = document.getElementById('cities');
    citiesElement.appendChild(generateTable(CITIES));

