//  ticket result
var sezioneBiglietto = document.getElementById('result-ticket');

// missing values
var erroreDatiImmessi = document.getElementById('missing-values');

// form name element
var buttonGenera = document.getElementById('generaBiglietto');
var buttonAnnulla = document.getElementById('annulla');
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');

// others variables
var formKmValue;
var formEtaValue;
var formOffertaValue;


// tickets element
var biglNome = document.getElementById('bigli-nome');
var biglOfferta = document.getElementById('bigli-offerta');
var biglCarrozza = document.getElementById('bigli-carrozza');
var biglCodiceCp = document.getElementById('bigli-cp');
var biglCosto = document.getElementById('bigli-costo');

// ticket compiler button
buttonGenera.addEventListener('click',
  function() {
    erroreDatiImmessi.className = 'd-none';
    sezioneBiglietto.className = 'd-block';
    formKmValue = parseInt(formKm.value);
    formEtaValue = formEta.value;

    // price calculator
    var prezzo = formKmValue * 0.21;

    // in case of missing values
    if (((formNome.value === '') || ( formEtaValue === 'Empty' )) || (isNaN(formKmValue))) {
      erroreDatiImmessi.className = 'd-block';
      sezioneBiglietto.className = 'd-none';
    }

    // discount calculator
    if (formEtaValue == 'Min') {
      prezzo = prezzo - ( prezzo * 20 / 100 );
      formOffertaValue = ' Sconto Young';

    }

    else if (formEtaValue == 'Sen') {
      prezzo = prezzo - ( prezzo * 40 / 100 );
      formOffertaValue = ' Sconto Senior';
    }

    else if (formEtaValue == 'Mag') {
      formOffertaValue = 'Tariffa Standard';
    }



    // compiling ticket

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
    biglOfferta.innerHTML = '';
    biglCosto.innerHTML= '';
    sezioneBiglietto.className = 'd-none';
    erroreDatiImmessi.className = 'd-none';
  }
);
