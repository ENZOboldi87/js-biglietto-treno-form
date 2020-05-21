// section ticket
// var sezioneBiglietto = document.getElementsById('prova');

// form name element
var buttonGenera = document.getElementById('generaBiglietto');
var buttonAnnulla = document.getElementById('annulla')
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');

// others variables
var formNomeValue;
var formKmValue;
var formEtaValue;

// tickets element
var biglNome = document.getElementById('bigli-nome');
var biglOfferta = document.getElementById('bigli-offerta');
var biglCarrozza = document.getElementById('bigli-carrozza');
var biglCodiceCp = document.getElementById('bigli-cp');
var biglCosto = document.getElementById('bigli-costo');

// evento quando si clicca su genera biglietto
buttonGenera.addEventListener('click',
  function() {
    formKmValue = formKm.value;
    formEtaValue = formEta.value;
    console.log(formEtaValue);
    console.log(formKmValue);

    // gestione elaborazione biglietto
    // var formNome = document.getElementById('generaBiglietto').value;

    // calcolo prezzo
    var prezzo = formKmValue * 0.21;

    // calcolo sconti
    if (formEtaValue == 'Minorenne') {
      prezzo = prezzo - (prezzo * 20 / 100);
      offerta = 'Hai il 20% di sconto';
    }
    else if (formEtaValue == 'Senior') {
      prezzo = prezzo - (prezzo * 40 / 100);
      offerta = 'hai il 40% di sconto';
    }

    // compilazione biglietto

    biglNome.innerHTML = formNome.value;
    biglCosto.innerHTML = prezzo.toFixed(2) + 'Euro'
    biglOfferta.innerHTML = offerta;

  }
);

// evento annulla
buttonAnnulla.addEventListener('click',
  function() {
    // gestione annullamento nome
    formNome.value = '';
    biglNome.innerHTML = '';
    // gestione annullamento km
    biglKm.value = '';
    formEta.value = 'Mag';
    // gestione annullamento biglOfferta
    biglOfferta.innerHTML = '';

    // sezioneBiglietto.className = 'd-none';
  }
);
