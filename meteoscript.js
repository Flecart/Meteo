let key = 'bd4e1ed91af086989ae209f39a188946';


// QUI CODICE PER PRENDERE LE INFO METEO
function traduttore(tempo) {

  if (tempo === 'thunderstorm with light rain') {
    return 'Temporale con pioggia leggera';
  }
  else if (tempo === 'thunderstorm with rain') {
    return 'Temporale con pioggia';
  }
  else if (tempo === 'thunderstorm with heavy rain') {
    return 'Temporale con forte pioggia';
  }
  else if (tempo === 'light thunderstorm') {
    return 'Temporale debole';
  }
  else if (tempo === 'thunderstorm') {
    return 'Temporale';
  }
  else if (tempo === 'heavy thunderstorm') {
    return 'Temporale forte';
  }
  else if (tempo === 'ragged thunderstorm')	{
  return 'Temporale irregolare';
  }
  else if (tempo === 'thunderstorm with light drizzle')	{
    return 'Temporale con pioggerella leggera';
  }
  else if (tempo === 'thunderstorm with drizzle')	{
    return 'Temporale con pioggerella';
  }
  else if (tempo === 'thunderstorm with heavy drizzle')	{
    return 'Temporale con pioggerella pesante';
  }

// inizio col drizzle
  else if (tempo === 'light intensity drizzle') {
    return 'Pioggerella di intensità leggera';
  }

  else if (tempo === 'drizzle') {
    return 'Pioggerella' ;
  }

  	else if (tempo === 'heavy intensity drizzle') {
    return 'Pioggerella di grande intensità';
  }

  else if (tempo === 'light intensity drizzle rain') {
    return 'Pioggia leggera di intensità leggera';
    // ma perché esistono queste descrizioni...
    // se l'output fosse minore forse si cpirebbe anche meglio
    // e io che non ho voglia di usare l'API di google translate...
  }

  else if (tempo === 'drizzle rain') {
    return 'Pioggerella leggera';
  }

	else if (tempo === 'heavy intensity drizzle rain') {
    return 'Pioggia leggera di grande intensità';
  // ahah guarda le sfumature di Pioggia.
  }

	else if (tempo === 'shower rain and drizzle') {
    return 'pioggia a doccia alternata a pioggerella';
  // translate mi dice: pioggia con pioggia.
  }

	else if (tempo === 'heavy shower rain and drizzle') {
    return 'pioggia da diluvio alternata a pioggerella';
  }

	else if (tempo === 'shower drizzle') {
    return 'pioggerella a doccia';
  }

// inizio con rain
  else if (tempo ===	'light rain') {
    return 'Pioggia leggera';
  }
  else if (tempo ===	'moderate rain') {
    return 'Pioggia moderata';
  }
  else if (tempo ===	'heavy intensity rain') {
    return 'Pioggia di grande intensità';
  }
  else if (tempo ===	'very heavy rain') {
    return 'Pioggia da diluvio';
  }
  else if (tempo ===	'extreme rain') {
    return 'Pioggia estrema';
  }
  else if (tempo ===	'freezing rain') {
    return 'Pioggia fredda';
  }
  else if (tempo ===	'light intensity shower rain') {
    return 'Pioggia a doccia di breve intensità';
  }
  else if (tempo ===	'shower rain') {
    return 'Pioggia a doccia';
  }
  else if (tempo ===	'heavy intensity shower rain') {
    return 'Pioggia a doccia di grande intensità';
  }
  else if (tempo ===	'ragged shower rain') {
    return 'Pioggia a doccia irregolare';
  }

// mi piace la neve

  else if ( tempo === 'light snow') {
    return 'Neve leggera';
  }
  else if ( tempo === 'Snow') {
    return 'Neve';
  }
  else if ( tempo === 'Heavy snow') {
    return 'Neve pesante';
  }
  else if ( tempo === 'Sleet') {
    return 'Nevischio ';
  }
  else if ( tempo === 'Light shower sleet') {
    return 'Nevischio a doccia, leggera';
  }
  else if ( tempo === 'Shower sleet') {
    return 'Nevischio a doccia ';
  }
  else if ( tempo === 'Light rain and snow') {
    return 'Neve con pioggia leggera';
  }
  else if ( tempo === 'Rain and snow') {
    return 'Neve e pioggia';
  }
  else if ( tempo === 'Light shower snow') {
    return 'Neve a doccia, leggera';
  }
  else if ( tempo === 'Shower snow') {
    return 'Neve intensa';
  }
  else if ( tempo === 'Heavy shower snow') {
    return 'Neve diluviale';
  }

// COSE MISTE
  else if  ( tempo === 'mist') {
    return 'Nebbia';
  }
  else if  ( tempo === 'smoke') {
    return 'Fumo';
// ... ma fumo è uno stato meteorologico? che c.
  }
  else if  ( tempo === 'haze') {
    return 'Foschia';
  }

  else if  ( tempo === 'fog') {
    return 'Nebbia intensa';
  }
  else if  ( tempo === 'sand') {
    return 'Sabbia';
  } // ok questi stati meteorologici qua sono soprendenti.
  else if  ( tempo === 'dust') {
    return 'Polvere';
  }
  else if  ( tempo === 'volcanic ash') {
    return 'Cenere vulcanico';
  }
  else if  ( tempo === 'squalls') {
    return 'Burrasce';
  }
  else if  ( tempo === 'tornado') {
    return 'Tornado. Stare in Casa';
  }
  else if  ( tempo === 'clear sky') {
    return 'Giornata serena';
  }

  else if (tempo === 'few clouds') {
    return 'Poche nuvole';
  }
  else if (tempo === 'scattered clouds') {
    return 'Nuvole sparse';
  }
  else if (tempo === 'broken clouds') {
    return 'Prevalentemente nuvoloso';
  }

  else if (tempo === 'overcast clouds') {
    return 'Cielo coperto da nuvole';
  }

  else {
    return 'descrizione non disponibile';
  }
//   bene un ora spesa per il traduttore, ma credo vada bene...
//   modo idiota per passare il tempo
//
// non lo devo debuggare perche non ha bugg.. spero
}

// Lo metto qua il json per ora:
let stagioni = [
  {
    descrizione: "L’autunno è una seconda primavera, quando ogni foglia è un fiore.",
    autore: "Albert Camus",
  },
  {
    descrizione: "Sono così felice di vivere in un mondo in cui esiste il mese di ottobre.",
    autore: "Lucy Maud Montgomery",
  },
  {
    descrizione: "Nessuna bellezza primaverile o estiva ha la grazia che ho visto in un volto autunnale.",
    autore: "John Donne",
  },
  {
    descrizione: "Non posso sopportare di perdere qualcosa di così prezioso come il sole autunnale restandomene in casa.",
    autore: "Nathaniel Hawthorne",
  },
  {
    descrizione: "Delizioso autunno! La mia stessa anima gli si sposa, e se fossi un uccello \
    volerei sulla terra cercando i successivi autunni.",
    autore: "George Eliot",
  },
  {

    descrizione: "Il giardino dell'amore è di un verde senza limiti e produce molti frutti diversi dal dolore o dalla gioia. \n\ L'amore è al di là delle sue condizioni: senza privamera, senza autunno è sempre fresco.",
    autore: "Gialal al-Din Rumi",
  },
  {
    descrizione: "Finché ci sarà l’autunno, non avrò abbastanza mani, \
    tele e colori per dipingere la bellezza che vedo.",
    autore: "Vincent Van Gogh",
  },
  {
    descrizione: "I designer vogliono che mi vesta come la primavera, in vestiti svolazzanti. \
    Non mi sento come la primavera. Mi sento un caldo autunno rosso.",
    autore: "Marilyn Monroe",
  },
  {
    descrizione: "L’autunno è la stagione più dolce, e ciò che perdiamo nei fiori lo guadagniamo nei frutti.",
    autore: "Samuel Butler",
  },
  {
    descrizione: "E all’improvviso, l’estate sprofondò nell’autunno.",
    autore: "Oscar Wilde",
  },
// oi qui inverno
  {
    descrizione: "Lo senti quel pungente profumo di freddo nell’aria, il grigio negli occhi e quei lunghi tramonti? E’ l’inverno che arriva.",
    autore: "Stephen Littleword",
  },
  {
    descrizione: "Nel cuore dell’inverno restiamo a tu per tu con l’essenza intima del mondo. Poche le distrazioni, assenti i colori, elusivi gli odori, troviamo solo geometrie essenziali e il silenzio nella sua forma più raffinata.",
    autore: "Fabrizio Caramagna",
  },
  {
    descrizione: "Mi sono affezionata all’inverno perché sento che è vero, non come l’estate che vola via e sembra così divertente e allegra ma non lo è, perché il sole è sempre di corsa e lascia tutti con l’amaro in bocca. L’inverno non \
    pretende di confortare, ma in fin dei conti sento che è consolante, perché una si raggomitola su se stessa e si protegge e osserva e riflette, e credo che soltanto in questa stagione si possa pensare per davvero.",
    autore: "Marcela Serrano",
  },
  {
    descrizione: "Giorno d’inverno, senza macchia, trasparente come vetro. Addentare la polpa candida e sana d’un frutto. Amarti, mia rosa, somiglia all’aspirare l’aria in un bosco di pini.",

    autore: "Nazim Hikmet",
  },
  {
    descrizione: "In inverno ci si aggomitola intorno a un buon libro e si sogna tenendo lontano il freddo.",
    autore: "Ben Aaronovitch",
  },

  {
    descrizione: "Nel bel mezzo dell’inverno, ho infine imparato che vi era in me un’invincibile estate.",
    autore: "Albert Camus",
  },
  {
    descrizione: "Per la verità odio l’inverno perché l’inverno odia la carne. Ovunque la scopra, la punisce, la sferza come un predicatore puritano.",
    autore: "Michel Tournier",
  },
  {
    descrizione: "D’inverno, né calore, né luce, né pien meriggio; la sera e il mattino si confondono, tutto è nebbia e crepuscolo, la finestra è appannata \
    e non ci si vede bene. Il cielo è uno spiraglio, come l’intera giornata è una cantina: il sole ha l’aria d’un povero. Stagione spaventosa! L’inverno muta in pietra l’acqua del cielo ed il cuore dell’uomo.",
    autore: "Victor Hugo",
  },
  {
    descrizione: "Vorrei che tu venissi da me in una sera d’inverno e, stretti assieme dietro i vetri, guardando la solitudine delle strade buie e gelate, ricordassimo gli inverni delle favole, dove si visse insieme senza saperlo.",
    autore: "Dino Buzzati",
  },
  {
    descrizione: "Inverno. Come un seme il mio animo ha bisogno del lavoro nascosto di questa stagione.",
    autore: "Giuseppe Ungaretti",
  },
  // qui Primavera
  {
    descrizione: "I fiori della primavera sono i sogni dell’inverno raccontati, la mattina, al tavolo degli angeli.",
    autore: "Khalil Gibran",
  },
  {
    descrizione: "Se hai il coraggio di guardare la luce, imita la primavera e vai avanti verso di essa.",
    autore: "Markku Envall",
  },
  {
    descrizione: "E’ che dietro le cose ci sei tu, Primavera, che incominci a scrivere nell’umidità, con dita di bambina giocherellona, il delirante alfabeto del tempo che ritorna.",
    autore: "Pablo Neruda",
  },
  {
    descrizione: "Ascolta: riesci a sentirla? La dolce cantata della primavera. I ciuffi d’erba che spingono attraverso \
    la neve. Il canto delle gemme che erompono dal ramo. Il tenero timpano del cuore di un giovane pettirosso. Primavera.",
    autore: "Diane Frolow",
  },
  {
    descrizione: "La primavera. Le ossa si asciugano dal freddo, la terra lancia fiori nel cielo come se cercasse un bersaglio invisibile e il tempo torna di nuovo a fare il suo lavoro di incantatore.",
    autore: "Fabrizio Caramagna",
  },

  {
    descrizione: "Sentiva come se la primavera non sarebbe passata senza produrre una crisi, un evento, un qualcosa che avrebbe modificato il suo sereno e tranquillo stato d’animo attuale.",
    autore: "Jane Austen",
  },
  {
    descrizione: "Uscite, camminate e guardate come fosse la prima volta quella pazzia che chiamiamo primavera e che non deve nulla alle potenze oscure, \
    ma che è soltanto un enorme sollevamento di tutte le vite verso la luce sovrannaturale.",
    autore: "Christian Bobin",
  },
  {
    descrizione: "Il giorno in cui il Signore creò la speranza fu probabilmente lo stesso giorno in cui creò la primavera.",
    autore: "Bernard Williams",
  },
  {
    descrizione: "L’autunno arriva la mattina presto, la primavera alla fine di una giornata d’inverno.",
    autore: "Elizabeth Bowen",
  },
  {
    descrizione: "In primavera ho contato 136 differenti tipi di tempo all’interno di ventiquattro ore.",
    autore: "Mark Twain",
  },
  // ora Estate
  {
    descrizione: "Se una notte di giugno potesse parlare, probabilmente si vanterebbe di aver inventato il romanticismo.",
    autore: "Bern Williams",
  },
  {
    descrizione: "Pomeriggio d’estate; per me queste sono sempre state le due parole più belle nella mia lingua.",
    autore: "Henry James",
  },
  {
    descrizione: "Una vita senza amore è come un anno senza estate.",
    autore: "Proverbio svedese",
  },
  {
    descrizione: "Ancora e ancora, il grido instancabile delle cicale trafigge l’aria afosa dell’estate come un ago al lavoro su uno spesso panno di cotone.",
    autore: "Yukio Mishima",
  },
  {
    descrizione: "Alla luce del mattino, mi ricordai di quanto mi piacesse il suono del vento tra gli alberi. Mi \
    rilassai e chiusi gli occhi, e fui confortato dal suono di un milione di piccole foglie che ballavano in una mattina d’estate.",
    autore: "Patrick Carman",
  },

  {
    descrizione: "E’ una stagione crudele quella che che fa andare a letto mentre fuori c’è ancora luce.",
    autore: "Bill Watterson",
  },
  {
    descrizione: "Bastava l’avvento della notte, con tutte quelle stelle in festa, le luci delle barche sul mare, il crepitio e il puzzo delle zanzare e delle falene folgorate dalla \
    graticola azzurrastra sospesa al muro del terrazzo, a cancellare ogni malinconia, a restituirmi all’interminabile felicità dell’estate.",
    autore: "Michele Serra",
  },
  {
    descrizione: "D’estate le pietre e gli alberi sono più leggeri di una piuma, del fiato di una bella bocca. E uno può prendere le preoccupazioni e metterle al sole, come \
    si fa con i lenzuoli. E tutto quello che viene toccato dal sole diventa puro e luminoso.",
    autore: "Fabrizio Caramagna",
  },
  {
    descrizione: "D’inverno non vedete l’ora che arrivi l’estate. D’estate avete paura che torni l’inverno. Per questo non vi stancate mai di rincorrere il posto dove non siete: dove è sempre estate.",
    autore: "Tim Roth",
  },
  {
    descrizione: "In quelle estati che hanno ormai nel ricordo un colore unico, sonnecchiano istanti \
    che una sensazione o una parola riaccendono improvvisi, e subito comincia lo smarrimento della distanza, l’incredulità di ritrovare tanta gioia in un tempo scomparso e quasi abolito.",
    autore: "Cesare Pavese",
  },
];



// Funzioni per cose idel background
function textPrinter(dove, cosa) {
  dove.textContent = cosa;
}
function printerSetUpper(index) {
  let randomino = random(index, index - 9);
  let cosa = stagioni[randomino]['descrizione'];
  let autore = stagioni[randomino]['autore'];
  document.querySelector('.scritta').classList.remove('hidden');
  setTimeout(() => {
    textPrinter(document.querySelector('.citazione'), cosa);
    textPrinter(document.querySelector('.autore'), autore);
  }, 1001)
}
function printerEraser() {
  document.querySelector('.scritta').classList.add('hidden');
  textPrinter(document.querySelector('.citazione'), "");
  textPrinter(document.querySelector('.autore'), "");
}

function random(max, min) {
  return Math.floor(Math.random()*(max - min)) + min;
}

function toCelsius(temperatura) {
  return temperatura - 273.15;
};

// UNO SFONDO CHE CAMBIA A SECONDA IL TEMPO, NON UNA SEMPLICE ICONA
function bckSelector(tempo) {
  if (tempo === 'clear') {
    document.querySelector('.bckImg2').style.backgroundImage = 'url(Imm_lavorate/Sunny_meadow.png)';
  } else if (tempo === 'clouds') {
    document.querySelector('.bckImg2').style.backgroundImage = 'url(Imm_lavorate/rainy_weather.jpg)';
  } else if (tempo === 'rain' || tempo === 'drizzle' || tempo === 'thunderstorm') {
    document.querySelector('.bckImg2').style.backgroundImage = 'url(Imm_lavorate/Rain_1.png)';
  } else if (tempo === 'snow') {
    document.querySelector('.bckImg2').style.backgroundImage = 'url(Imm_lavorate/inverno.png)';
  } else {
    document.querySelector('.bckImg2').style.backgroundImage = 'url(Imm_lavorate/inverno.png)'
  }
  document.querySelector('.bckImg2').style.backgroundPosition = 'center center';
  document.querySelector('.bckImg2').style.backgroundSize = '100% 100%'
}

// funzione principale
function updateWeb(myForecast) {



  let ventoObj = Math.round(myForecast.wind.speed*3.6);
  let ventodirObj = myForecast.wind.deg;
  let umidityObj = myForecast.main.humidity;

  let weather_desc = myForecast.weather[0].description;
  let weather_type = myForecast.weather[0].main;
  bckSelector(weather_type.toLowerCase());

  let city = myForecast.name;

  let tempObj = Math.round(toCelsius(myForecast.main.temp));
  let temp_feltObj = Math.round(toCelsius(myForecast.main.feels_like));
  let temp_max = Math.round(toCelsius(myForecast.main.temp_max));
  let temp_min = Math.round(toCelsius(myForecast.main.temp_min));
  weather_desc = traduttore(weather_desc.toLowerCase());
  // weather_main = iconDecider(weather_main.toLowerCase(), weather_desc.toLowerCase());
  // document.getElementById('immagine').src = weather_main;
  weather.textContent = weather_desc;
  temp.textContent = tempObj + ' °C';
  max.textContent = temp_max + ' °C';
  min.textContent = temp_min + ' °C';
  temp_felt.textContent = temp_feltObj + ' °C';
  umidity.textContent = umidityObj + '%';
  vento.textContent = ventoObj + ' km/h';
  document.querySelector('.city').textContent = city;
}

function allargatore(stagione, stringa) {
  stagione.classList.remove(`${stringa}`);
  stagione.classList.add(`${stringa}_trsf2`)
  stagione.textContent = '';
  document.getElementById(`back_${stringa}`).classList.remove('hidden');
}

function rimpicciolitore(stagione, stringa, output) {
  stagione.classList.remove(`${stringa}_trsf`);
  document.getElementById(`back_${stringa}`).classList.add('hidden');
  // rendo pronto per il prossimo click
  setTimeout(() => {
    stagione.classList.add(`${stringa}`);
    stagione.classList.add(`${stringa}_trsf`);
    stagione.textContent = output;
  },1001)
}

function dspForecast() {
  //animazione che fa vedere le info meteo

  document.querySelector('.background_img').setAttribute('class', 'background_img hidden')
    setTimeout(() =>   {
    document.querySelector('.bckImg2').classList.remove('hidden');
    document.querySelector('.frcast_container').classList.remove('hidden');
    }, 1000);
    setTimeout(() =>   frc.classList.remove('scheda_tempo'), 0);


}
function cancForecast() {

  setTimeout(() =>  frc.classList.remove('scheda_tempo_tsf'), 0);
  document.querySelector('.frcast_container').classList.add('hidden');
  setTimeout(() => frc.setAttribute('class', 'scheda_tempo_tsf scheda_tempo sd_tp_tsf2'), 200);
  document.querySelector('.bckImg2').classList.add('hidden');
  document.querySelector('.background_img').setAttribute('class', 'background_img');

}



function miaPosizione(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  getGPSData(lat, lon);
}
function getGPSData(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    .then(response => {
      return response.json();
    })
    .then(datas => {
      setTimeout(() => {
        spinnersDad.classList.add('hidden')
        cancelAnimationFrame(rAF);
      },1000);

      startTime = null;
      updateWeb(datas);
      dspForecast();
    }).catch(e => {
      alert("c'è stato un problema nel caricamento dati.");
    })
}
function getData() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nm_city.value}&appid=${key}`)
  .then(response => {
    return response.json();
  })
  .then(datas => {
    setTimeout(() => {
      spinnersDad.classList.add('hidden')
      cancelAnimationFrame(rAF);
    },1000);

    startTime = null;
    updateWeb(datas);
    dspForecast();
  }).catch(e => {
    document.querySelector('.errorWindow').hidden = false;
    error.classList.remove('error_trf');
  })

};
//QUI VARIABILI DI GET
const input = document.querySelector('input');
const nm_city = document.querySelector('.nm_city');
const button = document.querySelector('.button');
//QUI VARIABILI DI OUTPUT
const temp = document.querySelector('.temp');
const temp_felt = document.querySelector('.temp_felt');
const max = document.querySelector('.temp_max');
const min = document.querySelector('.temp_min');
const vento = document.querySelector('.vento');
const umidity = document.querySelector('.umidity');
const weather = document.querySelector('.weather');

const frc_back = document.querySelector('.frc_back');
const frc = document.querySelector('.sd_tp_tsf2'); // per indicare forecast = frc

const error = document.querySelector('.error_trf2');

input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    button.click();
  };
});
button.addEventListener('click', () => {
  getData();
  spinnersDad.classList.remove('hidden');
  draw();
  input.value = '';
});
document.querySelector('.gps').addEventListener('click', () => {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(miaPosizione);
      miaPosizione();
      spinnersDad.classList.remove('hidden');
      draw();
    }else{
      alert('La geolocalizzazione non è possibile');
    }
})


frc_back.addEventListener('click', () => {
  cancForecast();
});

error.addEventListener('click', () => {
  setTimeout(() => document.querySelector('.errorWindow').hidden = true, 1000);
  error.classList.remove("error_trf");
  error.setAttribute('class', 'error_trf error_trf2 error');
});

//FINE CODICE PER INFO Meteo

//CODICE PER ANIMAZIONI:
const autumn = document.querySelector('.autumn')
const winter = document.querySelector('.winter');
const spring = document.querySelector('.spring');
const summer = document.querySelector('.summer');
const back_winter = document.getElementById('back_winter');


const spinner = document.querySelector('.spinner');
const spinnersDad = document.querySelector('.centratoreDiSpinner')
let rotateCount = 0;
let startTime = null;
let rAF;



autumn.addEventListener('click', () =>{
  console.log('ciao');
  allargatore(autumn, 'autumn');
  printerSetUpper(9);
});

winter.addEventListener('click', () =>{
  console.log('ciao');
  allargatore(winter, 'winter');
  printerSetUpper(19);
});
spring.addEventListener('click', () =>{
  console.log('ciao');
  allargatore(spring, 'spring');
  printerSetUpper(29);
});
summer.addEventListener('click', () =>{
  console.log('ciao');
  allargatore(summer, 'summer');
  printerSetUpper(39);
});

// animazione di ritorno
document.getElementById('back_autumn').addEventListener('click', () =>{
  rimpicciolitore(autumn, 'autumn', 'Autunno');
  printerEraser();
});
document.getElementById('back_winter').addEventListener('click', () =>{
  rimpicciolitore(winter, 'winter', 'Inverno');
  printerEraser();
});
document.getElementById('back_spring').addEventListener('click', () =>{
  rimpicciolitore(spring, 'spring', "Primavera");
  printerEraser();
  document.querySelector('.scritta').style.backgroundColor = 'background-color: none';
});
document.getElementById('back_summer').addEventListener('click', () =>{
  rimpicciolitore(summer, 'summer', 'Estate');
  printerEraser();
});

// animazione di loading


function draw(timestamp) {
  if (!startTime) {
     startTime = timestamp;
  }
  rotateCount = (timestamp - startTime)/1.5;
  rotateCount %= 360;
  spinner.style.transform = `rotate(${rotateCount}deg)`;

  rAF = requestAnimationFrame(draw);
}


//FINE CODICE ANIMAZIONI

//CODICE POSIZIONAMENTO CORRETTO DEL LOGO
const logo = document.getElementById('logo');
let altezza = logo.clientHeight;

logo.style.bottom = altezza/3 + 40 + "px";
console.log(window.innerWidth);
if (window.innerWidth > 2000)
  logo.style.bottom = altezza/3 + 90 + "px";
