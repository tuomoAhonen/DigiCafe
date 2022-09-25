fetch('https://run.mocky.io/v3/47e5c640-fefa-470e-a0ed-8af36e841834')
.then(function(response) {
    return response.json();
})
.then(function(responseJSON) {
    //document.getElementById("palaveritiedot").innerHTML="<p>Toimii</p>";
    setdata(responseJSON);
})
.catch(function(error) {
    document.getElementById("palaveritiedot").innerHTML="<p>Tietoa ei pysty hakemaan</p>";
})

function setdata(data) {
    var teksti="";

    teksti="<h1>"+data.aihe+"</h1>";
    teksti=teksti+"<p><b>Paikka</b><br>"+data.paikka+"<br>"+data.osoitetiedot+"</p>"
    teksti=teksti+"<p><b>Aika & kesto</b><br>"+data.aloitusaika+"<br>"+data.kesto+"</p>"
    teksti=teksti+"<p><b>Osallistujien lukumäärä</b><br>"+data.osallistujienmaara+" henkilöä</p>"
    teksti=teksti+"<p><ul><li><b>Osallistujalista</b></li>"
    for(var i=0; i<data.osallistujat.length; i++) {
        teksti=teksti+"<li>"+data.osallistujat[i].nimi+"</li>";
    }
    //teksti=teksti+"<li>"+data.osallistujat[0].nimi+"</li>"
    teksti=teksti+"</ul></p>"

    document.getElementById("palaveritiedot").innerHTML=teksti;
}