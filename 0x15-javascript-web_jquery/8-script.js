$(document).ready(() => {
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json, function (data) {
    $.each(data.result, function (i, movie) {
      $('#list_movies').append('<li>' + movie.title + '</li>');
      });
    });
  });
