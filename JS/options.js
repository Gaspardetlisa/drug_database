d3.csv("data/diagnostic_drug_Biomarkers.csv", function(data) {
    
    var lstData = [{ID:"", Drug:""}];
    
        for (i = 0; i < data.length; i++) {
            lstData.push({
                "ID": data[i]["Biomarker"],
                "Drug": data[i]["Drug"],
                "Application_number": data[i]["Drug_application_number"]
            
            })
            lstData.sort(function (a,b) {return d3.ascending(a.ID, b.Drug);});
        }

    // add the options to the button
    d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(lstData)
      .enter()
    	.append('option')
      .text(function (d){ return "Target: "+d.ID+", Name: "+d.Drug ; }) // text showed in the menu
      .attr("value", function (d) { return d.Application_number; }) // corresponding value returned by the button

    // When the button is changed, run the Value function
    function Value(s_id) {
        location.reload();
        return localStorage.setItem("IDCsv", s_id);
    }
        d3.select("#selectButton").on("change", function(d) {
        const s_id = d3.select(this).property("value")
        Value(s_id);
        })

})