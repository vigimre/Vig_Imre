function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamok) {
    return szamok.filter(function (szam) { return szam % 2 === 0; }).length;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var szoveg = fuggveny().replace(/\s/g, '');
    return szoveg === szoveg.split('').reverse().join('');
}
