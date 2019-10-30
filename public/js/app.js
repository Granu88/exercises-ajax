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
      console.log(data);

      $.ajax({
        url:"/user",
        method:"POST", //First change type to method here

        data: data
      });
    });
});
