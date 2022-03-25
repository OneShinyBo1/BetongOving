
const areaEl = document.getElementById("area");


function DoMath(){

    var diameter = document.getElementById("dia").value;

    var ytre = document.getElementById("out").value;

    var lengde = document.getElementById("length").value;



    var pi = 3.14;

    var radiusIndre = diameter / 2;

    var radiusYtre = ytre / 2;

    var indreVolum = pi * radiusIndre * radiusIndre * lengde;

    var ytreVolum = pi * radiusYtre * radiusYtre * lengde;

    var volum = ytreVolum - indreVolum;



    var liter = 1000;

    var literTrengt = volum / liter;

    var prist = Math.ceil(literTrengt / 12.5);



    areaEl.innerHTML = "Volumet av betongen er " +  volum.toFixed(2) + " cm^3." + '\n' + '\n';
    areaEl.innerHTML += "Du trenger "+  literTrengt.toFixed(2) + " liter med betong." + '\n' + '\n';
    areaEl.innerHTML += "Som betyr at du må kjøpe " + prist + " sekker med B25 betong" + '\n' + '\n';
    areaEl.innerHTML += "Det vil koste " + prist * 89 + " kr";
}




