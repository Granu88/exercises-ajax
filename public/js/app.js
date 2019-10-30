$(function() {
  // Enjoy :)
    $.ajax({
       url : 'ajax/content.html', // La ressource ciblée
       type : 'GET', // Le type de la requête HTTP.
       success: function(html) {
         var element = $('fleur')
         $('#fleur').html(html)

       },
       error: function() {

       }
    });

    setTimeout(function () {
      $.ajax({
         url : 'ajax/delay5.html', // La ressource ciblée
         type : 'GET', // Le type de la requête HTTP.
         success: function(html) {
           var element = $('delay')
           $('#delay').html(html)

         },
         error: function() {

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

        });
       },
       error: function() {

       }
    });

    $("#formulaire").submit(function(e){ // On sélectionne le formulaire par son identifiant
      var name = $(this).find('[name="name"]').val(); // on récupère la valeur de chaque champs dans la variable
      var sex = $(this).find('[name="sex"]:checked').val();
      var type = $(this).find('[name="type"]').val();

      var data = {
        name: name,
        sex: sex,
        type: type
      };

      $.ajax({
        url:"/user",
        method:"POST", //First change type to method here

        data: data
      });
    });
















    var heure = $('#h').text() // avec .text on récupère le contenu
    var minute = $('#m').text()
    var seconde = $('#s').text()


    var h = parseInt(heure);
    var m = parseInt(minute);
    var s = parseInt(seconde);

    s = s+1;
    if (s > 59) {
      s=0;
      m=m+1;
    }

    if (m > 59) {
      m=0;
      h=h+1;
    }

    if (h > 23) {
      h=0;
    }

    if (h==0) {
      h='0'+h;
    }

    if (m==0) {
      m='0'+m;
    }

    if (s==0) {
      s='0'+s;
    }

    $('#h1').html(h)
    $('#m1').html(m)
    $('#s1').html(s)

});
