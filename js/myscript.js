//  ticket result
var sezioneBiglietto = document.getElementById('result-ticket');

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
var formOffertaValue = 'Tariffa Standard';

// tickets element
var biglNome = document.getElementById('bigli-nome');
var biglOfferta = document.getElementById('bigli-offerta');
var biglCarrozza = document.getElementById('bigli-carrozza');
var biglCodiceCp = document.getElementById('bigli-cp');
var biglCosto = document.getElementById('bigli-costo');

// ticket compiler button
buttonGenera.addEventListener('click',
  function() {
    sezioneBiglietto.className = 'd-block';
    formKmValue = parseInt(formKm.value);
    formEtaValue = formEta.value;

    // calcolo prezzo
    var prezzo = formKmValue * 0.21;

    // calcolo sconti
    if (formEtaValue == 'Min') {
      prezzo = prezzo - ( prezzo * 20 / 100 );
      formOffertaValue = ' Sconto Young';

    }

    else if (formEtaValue == 'Sen') {
      prezzo = prezzo - ( prezzo * 40 / 100 );
      formOffertaValue = ' Sconto Senior';
    }

    // compilazione biglietto

    biglNome.innerHTML = formNome.value;
    biglCosto.innerHTML = prezzo.toFixed(2) + ' Euro';
    biglOfferta.innerHTML = formOffertaValue;
    biglCarrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
    biglCodiceCp.innerHTML = Math.floor(Math.random() * (100000 - 9000)) + 1;

  }
);

// button annulla
buttonAnnulla.addEventListener('click',
  function() {
    // erase values
    formNome.value = '';
    formKm.value = '';
    formEta.value = 'Empty';
    console.log(formEta);
    biglOfferta.innerHTML = '';
    biglCosto.innerHTML= '';
    sezioneBiglietto.className = 'd-none';


  }
);
