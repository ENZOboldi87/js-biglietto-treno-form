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
var formOffertaValue = ' Tariffa standard';

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

    // gestione elaborazione biglietto
    // var formNome = document.getElementById('generaBiglietto').value;

    // calcolo prezzo
    var prezzo = formKmValue * 0.21;

    // calcolo sconti
    if (formEtaValue == 'Min') {
      prezzo = prezzo - ( prezzo * 20 / 100 );
      formOffertaValue = ' hai ottenuto uno sconto del 20%';

    }

    else if (formEtaValue == 'Sen') {
      prezzo = prezzo - ( prezzo * 40 / 100 );
      formOffertaValue = ' hai ottenuto uno sconto del 40%';
    }

    // compilazione biglietto

    biglNome.innerHTML = formNome.value;
    biglCosto.innerHTML = prezzo.toFixed(2) + ' Euro';
    biglOfferta.innerHTML = formOffertaValue;
    biglCarrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
    biglCodiceCp.innerHTML = Math.floor(Math.random() * (100000 - 9000)) + 1;

  }
);

// evento annulla
buttonAnnulla.addEventListener('click',
  function() {
    // erase values
    formNome.value = '';
    biglNome.innerHTML = '';
    formKm.value = '';
    formEta.value = 'Mag';
    biglOfferta.innerHTML = '';
    biglCosto.innerHTML= '';

    // sezioneBiglietto.className = 'd-none';
  }
);
