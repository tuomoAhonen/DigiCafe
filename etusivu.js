//haetaan jostain API-rajapinnasta tai tietokannasta tai jostain vastaavasta tietoa
fetch('https://run.mocky.io/v3/be72c1e9-c130-427a-af22-156209ba4876')
//muunnetaan vastaus JSON muotoon
.then(function(response) {
    return response.json();
})
//käsitellään muunnettu eli JSON muotoinen vastaus
.then(function(responseJSON) {
    //testataan onnistuuko json-luku
    //jos onnistuu päivitetään tähän json-datan käsittelevän funktion kutsu
    //document.getElementById("vastaus").innerHTML = "<p>Jatketaan harjoitusta</p>";

    //kutsutaan funktiota ja välitetään sille json-vastaus
    kerro(responseJSON)
})
//jos tulee jokin virhe
.catch(function(error) {
    document.getElementById("vastaus").innerHTML="<p>Tietoa ei pystytä hakemaan</p>"
})

function kerro(data) {
    //määritellään muuttuja, johon tulostettava tieto kerätään
    var teksti="";

    //otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    teksti="<h1>"+data.otsikko+"</h1>";

    //tähän tulee muiden tietojen käsittely kohta
    teksti=teksti+"<p>"+data.kuvaus+"</p>";
    teksti=teksti+"<p><img src='"+data.kuva+"' alt='kuva'></p>";
    teksti=teksti+"<h3>Opintojakso: "+data.opintojakso.nimi+"</h3>";
    //haetaan sisältöä ja sijoitetaan se listaan
    teksti=teksti+"<p><ul class='sisalto'>";
    for(var i=0; i<data.sisalto.length; i++) {
        teksti=teksti+"<li>"+data.sisalto[i]+"</li>";
    }
    teksti=teksti+"</ul></p>";
    teksti=teksti+"<h3>Linkit</h3>"
    //heataan sisältöä ja sijoitetaan ne paragraphin sisälle
    teksti=teksti+"<p><ul class='aihelinkit'>";
    for(var i=0; i<data.tekniikat.length; i++) {
        teksti=teksti+"<li>"+data.tekniikat[i].aihe+"</li>";
    }
    teksti=teksti+"</ul></p>";


    //teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML=teksti;
}