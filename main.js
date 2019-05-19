// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi)
// e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa
// e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

$('.invio').click(function() {
  var data = $('.chat-box.active').attr('data-chat');
  var new_message = $('.message-row.template').clone();
  var type = $('.scritto').val();
  new_message.removeClass('template');
  new_message.children('.message-container').children('.message').html(type);
  new_message.children('.message-container').removeClass('cpu');
  $('.chat-box[data-chat="'+ data +'"]').append(new_message);
  $('.scritto').val('');
  timing();
  $('.invio i').removeClass('fa-arrow-circle-right');
  $('.invio i').addClass('fa-microphone');
});

//cambia icona di invio quanto scrivo un messaggio
$('.scritto').keyup(function() {
  var type = $(this).val();
  if(type.length != 0) {
    $('.invio i').removeClass('fa-microphone');
    $('.invio i').addClass('fa-arrow-circle-right');
  } else {
    $('.invio i').addClass('fa-microphone');
  }
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
  var data = $('.chat-box.active').attr('data-chat');
  cpu_message.removeClass('template');
  cpu_message.children('.message-container').children('.message').html('Ok!');
  cpu_message.children('.message-container').removeClass('utente');
  $('.chat-box[data-chat="'+ data +'"]').append(cpu_message);
}

$('.invio').click(function() {
setTimeout(risposta, 1000);
});

// // - Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
// vengono visualizzati solo i contatti il cui nome contiene le lettere inserite
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

$('.search-text').keyup(function() {
  var ricerca = $(this).val();
  if (ricerca.length > 0) {
    $('.chat-user').hide();
    $('.chat-user h3').each(function() {
      if($(this).text().toLowerCase() == ricerca.toLowerCase()) {
        $(this).parent('.chat-user').show();
      } else if ($(this).text().toLowerCase().startsWith(ricerca.toLowerCase())){
        $(this).parent('.chat-user').show();
      }
    });
  } else {
    $('.chat-user').show();
  }
});

// // Milestone 3
// // - Click sul contatto mostra la conversazione del contatto cliccato,
//  è possibile inserire nuovi messaggi per ogni conversazione

//seleziono la conversazione
$('.chat-user').click(function() {
  var data = $(this).attr('data-chat');
  $('.chat-user.active').removeClass('active');
  $('.chat-user[data-chat="'+ data +'"]').addClass('active');
  $('.chat-box.active').removeClass('active');
  $('.chat-box[data-chat="'+ data +'"]').addClass('active');
})



// // - Cancella messaggio: cliccando sul messaggio appare un menu a tendina
// che permette di cancellare il messaggio selezionato
$('.opener').click(function() {
 $('.message-dropdown').show();
});
