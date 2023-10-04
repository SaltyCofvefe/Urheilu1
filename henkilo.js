// Yliluokka
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi)
   {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}

// Aliluokka
class Urheilija extends Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi, linkki, omapaino, laji, saavutukset)
   {
    super(etunimet,  sukunimi, kutsumanimi, syntymavuosi);
    this.linkki = linkki;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  // Saantifunktiot (get- ja set-)

  getLaji() {
    return this.laji;
  }

  setLaji(laji) {
    this.laji = laji;
  }

  getSaavutukset() {
    return this.saavutukset;
  }


  setSaavutukset(saavutukset) {
    this.saavutukset = saavutukset;
  }
  getOmaPaino() {
    return this.omapaino;
  }


  setOmaPaino(paino) {
    this.omapaino = paino;
  }
  getlinkki() {
    return this.linkki;
  }

  setlinkki(linkki) {
    this.linkki = linkki;
  }
  
  
}

// Esimerkkejä Urheilija-olioista
const urheilija1 = new Urheilija("Nipa", "Puustinen", "Nipa", 1968, "http://example.com/urheilijakuva", 80, "Kalastus", ["Lapin monni-cupin voittaja", "Hauki narrauksen ykkonen"]);

const urheilija2 = new Urheilija("Roope", "Tavaton", "Roope", 1995, "http://example.com/urheilijakuva", 65, "Uinti", ["Maailman ykkössija"]);

const urheilija3 = new Urheilija("Juice", "Leskinen", "Juice", 1920, "http://example.com/urheilijakuva", 66, "Frisbeegolf", ["3-Divari"]);

console.log(urheilija1);

console.log(urheilija2);

console.log(urheilija3);
