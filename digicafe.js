fetch('https://run.mocky.io/v3/04e78e49-fe79-465f-9b8f-5776624fac3e')
.then(function(response) {
    return response.json();
})
.then(function(responseJSON) {
    //document.getElementById("digicafetiedot").innerHTML="<p>Toimii</p>";
    setdata(responseJSON);
})
.catch(function(error) {
    document.getElementById("digicafetiedot").innerHTML="<p>Tietoa ei pysty hakemaan</p>"
})

function setdata(data) {
    var teksti="";

    teksti="<h1>"+data.yritys+"</h1>";

    //for lausekkeella tietojen sijoittaminen listaan
    teksti=teksti+"<p><ul class='digicafe-ul'><li class='digicafe-ul-otsikko'>Kahvilan tuotteet</li>";
    for(var i=0; i<data.tuotteet.length; i++) {
        teksti=teksti+"<li>"+data.tuotteet[i]+"</li>";
    }
    teksti=teksti+"</ul></p>";

    //ilman for lauseketta 
    //tämä tapa sopii tähän tehtävään, mutta kasvavassa API:n taulussa tosi huono ratkaisu
    teksti=teksti+"<p><ul class='digicafe-ul'><li class='digicafe-ul-otsikko'>Yhteystiedot</li>";
    teksti=teksti+"<li>"+data.yhteystiedot.osoite+"</li>";
    teksti=teksti+"<li>puh. "+data.yhteystiedot.puhelin+"</li>";
    teksti=teksti+"<li class='digicafe-yhteystiedot-email'>"+data.yhteystiedot.email+"</li></ul></p>";

    //toinen for lauseke, jotta saadaan henkilökunta listana
    teksti=teksti+"<p><ul class='digicafe-ul henkilokunta'><li class='digicafe-ul-otsikko'>Henkilökunta</li>";
    for(var i=0; i<data.henkilokunta.length; i++) {
        teksti=teksti+"<li>"+data.henkilokunta[i].nimi+" "+data.henkilokunta[i].titteli+"</li>";
    } 
    teksti=teksti+"</ul></p>";

    document.getElementById("digicafetiedot").innerHTML=teksti;
}