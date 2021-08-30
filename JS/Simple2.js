var svg6 = d3.select("#Simple2")
    .style("width", "100%")
    .style('text-align', 'justify')
    svg6.append('br')
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

    svg6.append('div').append('text').text("General information, Reference: FDA website, latest update: 2021/07/05 ").attr("class", "h4")
    svg6.append('br')
    svg6.append('div').append('text').text("Indications_and_usage: ").attr("class", "h5")
    svg6.append('div').append('text').attr("class", "container")
        .text(function () { if (s_id != null) { return data[inx]["Indications_and_usage"] } })
        .style('fill', 'black')
        .style('font-size', '12px')

    svg6.append('div').append('text').text("Warnings: ").attr("class", "h5")
    svg6.append('div').append('text').attr("class", "container")
        .text(function () { if (s_id != null) { return data[inx]["Warnings"] } })
        .style('fill', 'black')
        .style('font-size', '12px')


    svg6.append('div').append('text').text("Adverse_reactions: ").attr("class", "h5")
    svg6.append('div').append('text').attr("class", "container")
        .text(function () { if (s_id != null) { return data[inx]["Adverse_reactions"] } })
        .style('fill', 'black')
        .style('font-size', '12px')

    svg6.append('div').append('text').text("Indications_and_usage_from_labeling_pdf: ").attr("class", "h5")
    svg6.append('div').append('text').attr("class", "container")
        .text(function () { if (s_id != null) { return data[inx]["Indications_and_usage_from_labeling"] } })
        .style('fill', 'black')
        .style('font-size', '12px')


    svg6.append('div').append('text').text("Adverse_reactions_from_labeling_pdf: ").attr("class", "h5")
    svg6.append('div').append('text').attr("class", "container")
        .text(function () { if (s_id != null) { return data[inx]["Adverse_reactions_from_labeling"] } })
        .style('fill', 'black')
        .style('font-size', '12px')


})