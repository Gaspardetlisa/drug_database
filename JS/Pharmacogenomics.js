var svg3 = d3.select("#Pharmacogenomics")
    .style("width", "100%")
    .style('text-align', 'justify')
    svg3.append('br')
d3.csv("data/diagnostic_drug_bank_Pharmaco_genomics.csv", function (error, data) {
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
    
    svg3.append('div').append('text').text("Pharmacogenomics information, Reference: Drug bank, latest update: 2021/07/05 ").attr("class", "h4")
    svg3.append('br')
    svg3.append('div').attr("id", "Pharmacogenomics_table")

    //first part
    function tabulate3(data, columns) {
        var table = d3.select("#Pharmacogenomics_table").append("table").attr("class","table table-hover")
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
    d3.csv('data/diagnostic_drug_bank_Pharmaco_genomics.csv', function (data) {
        // var columns = ['Drug_bank_ID', 'Generic_names', 'Drug', 'Interacting Gene/Enzyme',
        // 'Allele name', 'Genotypes', 'Defining change(s)', 'Type(s)',
        // 'Description','Drug_application_number'];
        var columns = ['Generic_names','Interacting Gene/Enzyme',
        'Allele name', 'Genotypes', 'Defining change(s)', 'Type(s)',
        'Description'];
        tabulate3(data.filter(function (data) { return data.Drug_application_number == s_id }), columns)

    })

})