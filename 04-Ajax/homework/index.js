$(document).ready(function () {
    // Evento click para obtener todos los amigos
    $('#boton').click(function () {
      // Limpiar la lista antes de hacer la solicitud
      $('#lista').empty();
  
      // Realizar solicitud AJAX para obtener todos los amigos
      $.ajax({
        url: 'http://localhost:5000/amigos',
        method: 'GET',
        beforeSend: function () {
          // Muestra el loader mientras se realiza la solicitud
          $('h2').after('<img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" />');
        },
        success: function (data) {
          // Elimina el loader cuando la solicitud es exitosa
          $('img').remove();
  
          // Agrega cada amigo a la lista
          data.forEach(function (amigo) {
            $('#lista').append('<li>' + amigo.name + '</li>');
          });
        },
        error: function () {
          // Maneja el error de la solicitud
          console.log('Error al obtener amigos');
        }
      });
    });
  
    // Evento click para buscar un amigo por ID
    $('#search').click(function () {
      // Obtiene el ID del amigo a buscar
      var friendId = $('#input').val();
  
      // Realiza una solicitud AJAX para obtener un amigo por ID
      $.ajax({
        url: 'http://localhost:5000/amigos/' + friendId,
        method: 'GET',
        success: function (friend) {
          // Muestra la información del amigo en el elemento con id 'amigo'
          $('#amigo').text('Amigo encontrado: ' + friend.name);
        },
        error: function () {
          // Maneja el error de la solicitud
          $('#amigo').text('Amigo no encontrado');
        }
      });
    });
  
    // Evento click para borrar un amigo por ID
    $('#delete').click(function () {
      // Obtiene el ID del amigo a borrar
      var friendIdToDelete = $('#inputDelete').val();
  
      // Realiza una solicitud AJAX para borrar un amigo por ID
      $.ajax({
        url: 'http://localhost:5000/amigos/' + friendIdToDelete,
        method: 'DELETE',
        success: function () {
          // Muestra un mensaje de éxito en el elemento con id 'success'
          $('#success').text('Amigo borrado exitosamente');
        },
        error: function () {
          // Maneja el error de la solicitud
          $('#success').text('Error al borrar amigo');
        }
      });
    });
  });
  