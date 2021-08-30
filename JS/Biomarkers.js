var svg2 = d3.select("#Biomarkers")
    .style("width", "100%")
    .style('text-align', 'justify')
    svg2.append('br')
d3.csv("data/diagnostic_drug_Biomarkers.csv", function (error, data) {
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

        svg2.append('div').append('text').text("Reference: Table of Pharmacogenomic Biomarkers in Drug Labeling; FDA website, latest update: 12/2020 ").attr("class", "h4")
        svg2.append('br')
        svg2.append('h4').attr("class", "h5")
            .text(function () { if (s_id != null) { return data[inx]["Drug_name"] } })
            .style('fill', 'black')

        svg2.append('div').append('text').text("Date: ").attr("class", "h5")
        svg2.append('div').append('text').attr("class", "container")
            .text(function () { if (s_id != null) { return data[inx]["Date"] } })
            .style('fill', 'black')
            .style('font-size', '12px')

        svg2.append('div').append('text').text("Application_number: ").attr("class", "h5")
        svg2.append('div').append('text').attr("class", "container")
            .text(function () { if (s_id != null) { return data[inx]["Drug_application_number"] } })
            .style('fill', 'black')
            .style('font-size', '12px')

        svg2.append('div').append('text').text("Biomarker: ").attr("class", "h5")
        svg2.append('div').append('text').attr("class", "container")
            .text(function () { if (s_id != null) { return data[inx]["Biomarker"] } })
            .style('fill', 'black')
            .style('font-size', '12px')

        svg2.append('div').append('text').text("INDICATIONS AND USAGE: ").attr("class", "h5")
        svg2.append('div').append('text').attr("class", "container")
            .text(function () { if (s_id != null) { return data[inx]["Indications and usage"] } })
            .style('fill', 'black')
            .style('font-size', '12px')

        svg2.append('div').append('text').text("ADVERSE REACTIONS: ").attr("class", "h5")
        svg2.append('div').append('text').attr("class", "container")
            .text(function () { if (s_id != null) { return data[inx]["Adverse reactions"] } })
            .style('fill', 'black')
            .style('font-size', '12px')

    }

})

