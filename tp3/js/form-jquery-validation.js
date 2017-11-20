
$(document).ready(function () { //pour chargement de la page
   
       $('#button').on("click", function (event) { //ajouter un "listener" à un élément
           event.preventDefault();
           console.log( "click" );
   
           if ($('#Nom').val() == "" || $('#Prenom').val() == "" || $('#Datedenaissance').val() == "" || $('#Adresse').val() == "" || $('#Mail').val() == "") {
   
               $('#myModal').modal("show");
           }
           else {
               $(".modal-body").html('<p>"Vous etes nés le ' +$('#Datedenaissance').val()+'</p> <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#Adresse').val()+'&markers='+$('#Adresse').val()+'&size=800x400&zoom=132&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>');
               $(".modal-title").text("Bienvenue "+$("#Nom").val());
               $('#myModal').modal("show");
   
           }
   
       });
})
   
