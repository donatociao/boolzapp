// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi)
// e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa
// e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

$('.invio').click(function() {
  var new_message = $('.message-container.template').clone();
  var type = $('.scritto').val();
  new_message.removeClass('template');
  new_message.children('.message').html(type);
  $('.chat-box').append(new_message);
});

// // Milestone 2
// // - Risposta dall’interlocutore: ad ogni inserimento di un messaggio,
// l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// // - Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
// vengono visualizzati solo i contatti il cui nome contiene le lettere inserite
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

function risposta() {
  var cpu_message = $('.message-container.template').clone();
  cpu_message.removeClass('template');
  cpu_message.children('.message').removeClass('utente').html('Ok!');
  $('.chat-box').append(cpu_message);
}

$('.invio').click(function() {
setTimeout(risposta, 1000);
});
