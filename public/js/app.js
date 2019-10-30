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

    setTimeout(function () {
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
    }, 5000)



    $.ajax({
       url : 'ajax/info.html', // La ressource ciblée
       type : 'GET', // Le type de la requête HTTP.
       success: function(html) {
         var element = $('info')
         $('#btn').click(function() {
           $('#info').html(html)
          console.log('#info');
        });
       },
       error: function() {
         console.log('error');
       }
    });




});
