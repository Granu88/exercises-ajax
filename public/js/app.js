$(function() {
  // Enjoy :)
    $.ajax({
       url : 'ajax/content.html', // La ressource ciblée
       type : 'GET', // Le type de la requête HTTP.
       success: function(html) {
         var element = $('fleur')
         $('#fleur').html(html)
         console.log('#fleur');
       },
       error: function() {
         console.log('error');
       }
    });

    $.ajax({
       url : 'ajax/delay5.html', // La ressource ciblée
       type : 'GET', // Le type de la requête HTTP.
       success: function(html) {
         var element = $('delay')
         $('#delay').html(html)
         console.log('#delay');
       },
       error: function() {
         console.log('error');
       }
    });

  




});
