// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi)
// e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa
// e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

$('.invio').click(function() {
  var new_message = $('.message-row.template').clone();
  var type = $('.scritto').val();
  new_message.removeClass('template');
  new_message.children('.message-container').children('.message').html(type);
  $('.chat-box').append(new_message);
  $('.scritto').val('');
  timing();
  $('.invio i').removeClass('fa-arrow-circle-right');
  $('.invio i').addClass('fa-microphone');
});

//vedi bene
$('.scritto').keyup(function() {
  $('.invio i').removeClass('fa-microphone');
  $('.invio i').addClass('fa-arrow-circle-right');
});

// Funzione time
function timing() {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();

  if (hours < 10) {
  hours = '0' + hours;
  }

  if (minutes < 10) {
  minutes = '0' + minutes;
  }
  $('.time').html(hours + ':' + minutes);
}

// // Milestone 2
// // - Risposta dall’interlocutore: ad ogni inserimento di un messaggio,
// l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


function risposta() {
  var cpu_message = $('.message-row.template').clone();
  cpu_message.removeClass('template');
  cpu_message.children('.message-container').children('.message').html('Ok!');
  cpu_message.children('.message-container').removeClass('utente');
  $('.chat-box').append(cpu_message);
}

$('.invio').click(function() {
setTimeout(risposta, 3000);
});

// // - Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
// vengono visualizzati solo i contatti il cui nome contiene le lettere inserite
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

$('.search-text').keyup(function() {
  var ricerca = $('.search-text').val();
  if (ricerca.length > 0) {
    $('.chat-user').hide();
    $('.chat-user h3').each(function() {
      if($(this).text().toLowerCase() == ricerca.toLowerCase()) {
        $(this).parent('.chat-user').show();
      }
    });
  } else {
    $('.chat-user').show();
  }


});
