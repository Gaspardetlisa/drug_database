var svg4 = d3.select("#Disease")
    .style("width", "100%")
    .style('text-align', 'justify')
svg4.append('br')
d3.csv("data/diagnostic_drug_bank_disease_list.csv", function (error, data) {
    if (error) {
        console.log('沒抓到 csv ')
    } else {
        var lstStk = [];

        for (i = 0; i < data.length; i++) {
            lstStk.push({
                "Application_number": data[i]["Drug_application_number"],
            })
        }
        var s_id = localStorage.getItem("IDCsv")
        var inx = lstStk.map(x => x.Application_number).indexOf(`${s_id}`)


    }

    svg4.append('div').append('text').text("Disease information, Reference: Drug bank, latest update: 2021/07/05 ").attr("class", "h4")
    svg4.append('br')

    svg4.append('div').attr("id", "Disease_table")

    //first part
    function tabulate4(data, columns) {
        var table = d3.select("#Disease_table").append("table").attr("class", "table table-hover")
        thead = table.append("thead"),
            tbody = table.append("tbody");

        // append the header row
        thead.append("tr")
            .selectAll("th")
            .data(columns)
            .enter()
            .append("th")
            .text(function (column) { return column; });

        // create a row for each object in the data
        var rows = tbody.selectAll("tr")
            .data(data)
            .enter()
            .append("tr");

        // create a cell in each row for each column
        var cells = rows.selectAll("td")
            .data(function (row) {
                return columns.map(function (column) {
                    return { column: column, value: row[column] };
                });
            })
            .enter()
            .append("td")
            .html(function (d) { return d.value; });

        return table;
    }

    // render the table
    d3.csv('data/diagnostic_drug_bank_disease_list.csv', function (data) {
        var columns = ['Drug_name', 'Associated_condition', 'Disease','Indications'];
        // var columns = ['Drug_bank_ID', 'Drug_name', 'Generic_names', 'Indications',
        // 'Associated_condition', 'URL', 'Disease_Url', 'Disease_ID', 'Disease','Drug_application_number'];
        tabulate4(data.filter(function (data) { return data.Drug_application_number == s_id }), columns)
    })

})