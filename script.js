$(document).ready(function() {
    //console.log('jquery OK')
    $('#search').keyup(function(){
        //console.log('event.detected')
        //récupérer le contenu du champs
        let searchValue = $('#search').val()
        //en js classique ça serait document.querySelector('#search).value
        //console.log(search)
        /*$.ajax({
            url: 'traitement.php', //ici on définie la destination
            method: 'post', //là la méthode 
            data: { //et enfin un objet qui accompagnera la requête
                search: searchValue
            }
        }).done(function(data){
            //le mettre dans la page 
            let suggestions = $('#suggestions')
            //en js classique ça donnerait document.querySelector('#suggestions')
            suggestions.html(data)
            //en js classique ça donnerait suggestions.innerHTML = data
        })*/
        $.post('traitement.php', {
            search: searchValue
        }).done(function(data){
            //le mettre dans la page 
            let suggestions = $('#suggestions')
            //en js classique ça donnerait document.querySelector('#suggestions')
            suggestions.html(data)
            //en js classique ça donnerait suggestions.innerHTML = data
        })
    })
})
