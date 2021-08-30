var svg5 = d3.select("#Full")
    .style("width", "100%")
    .style('text-align', 'justify')
    svg5.append('br')
d3.csv("data/drug_list_full.csv", function (error, data) {
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
    
    svg5.append('div').append('text').text("Marketing information, Reference: FDA website, latest update: 2021/07/05 ").attr("class", "h4")
    svg5.append('br')
    svg5.append('div').attr("id", "Full_table")

    //first part
    function tabulate5(data, columns) {
        var table = d3.select("#Full_table").append("table").attr("class","table table-hover")
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

    d3.csv('data/drug_list_full.csv', function (data) {
        // var columns = ['Drug_name','Drug_bank_ID','Drug_application_number','Product_number','Marketing_Status','Form','Route','Sponsor_name','Strength'];
        var columns = ['Drug_name','Drug_application_number','Product_number','Marketing_Status','Form','Route','Sponsor_name','Strength'];

        tabulate5(data.filter(function (data) { return data.Drug_application_number == s_id }), columns)

    })

})