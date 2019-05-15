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
