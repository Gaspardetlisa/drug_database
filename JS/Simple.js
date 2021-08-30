var svg1 = d3.select("#Simple")
    .style("width", "100%")
    .style('text-align', 'justify')
    svg1.append('br')
d3.csv("data/drug_list_simple.csv", function (error, data) {
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

    svg1.append('div').append('text').text("General information, Reference: FDA website, latest update: 2021/07/05 ").attr("class", "h4")
    svg1.append('br')
    svg1.append('div').attr("id", "Simple_table")
    
    //first part
    function tabulate(data, columns) {
        var table = d3.select("#Simple_table").append("table").attr("class","table table-hover")
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
    d3.csv('data/drug_list_simple.csv', function (data) {
        // var columns = ['Drug_Name', 'Drug_bank_ID', 'Drug_application_number', 'Drug_title',
        // 'Drug_sub_title', 'Applicaion_number', 'Drug_name',
        // 'Substance_name', 'Sponsor_name', 'URL', 'Full_name', 'Date',
        // 'File_type', 'Effective_time', 'Version', 'Indications_and_usage',
        // 'Warnings', 'Adverse_reactions', 'Indications_and_usage_from_labeling',
        // 'Adverse_reactions_from_labeling'];
        var columns = ['Drug_Name', 'Drug_bank_ID', 'Drug_application_number', 'URL'];
        tabulate(data.filter(function (data) { return data.Drug_application_number == s_id }), columns)
    })

})