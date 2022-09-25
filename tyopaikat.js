fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/Hallinto-%20ja%20asiantuntijaty%C3%B6')
.then(function (response) {
    return response.json();
})
.then(function(responseJSON) {
    //document.getElementById("tyopaikat-tiedot").innerHTML="<p>Toimii</p>";
    //console.log(responseJSON);  
    setdata(responseJSON);
})
.catch(function(error) {
    document.getElementById("tyopaikat-tiedot").innerHTML="<p>Haettua tietoa ei pystytä näyttämään</p>";
    console.log(error);
})

function setdata(data) {
    var teksti="";

    //hae kaikki tiedot listaelementtiin niin että yhteen li-elementtiin
    //tulee JSON-tiedostosta työtehtävä, osoite ja linkki
    teksti=teksti+"<h1>Vantaan kaupungin työpaikat</h1>";
    teksti=teksti+"<h3>Hallinto- ja asiantuntijatyö</h3>";
    teksti=teksti+"<p><ul>";
    for(var i=0;i<data.length; i++) {
        teksti=teksti+"<li><b>"+data[i].tyotehtava;
        if(data[i].osoite) {
            teksti=teksti+" - "+data[i].osoite+" -</b> <a class='restapilink' href='"+data[i].linkki+"'>"+data[i].linkki+"</a></li>";
        } else {
            teksti=teksti+" -</b> <a class='restapilink' href='"+data[i].linkki+"'>"+data[i].linkki+"</a></li>";
        }
    }
    teksti=teksti+"</ul></p>";
    teksti=teksti+"<p>Tiedot haettu Vantaan kaupungin RESTApi-rajapinnasta osoitteesta: <a class='restapilink' href='http://gis.vantaa.fi/rest/tyopaikat/v1/Hallinto-%20ja%20asiantuntijaty%C3%B6'>http://gis.vantaa.fi/rest/tyopaikat/v1/Hallinto-%20ja%20asiantuntijaty%C3%B6</a></p>"

    document.getElementById("tyopaikat-tiedot").innerHTML=teksti;
}