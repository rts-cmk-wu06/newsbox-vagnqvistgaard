"use strict";

/* first 'done' dev of retrieving news blobs from ny times...*/
document.querySelector('#butt').addEventListener('click', function () {
  // this sits on the category bar as an up/down arrow
  //axios, retrieving arts section:
  axios.get('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cxc5AcTQn9QTVHhXYeqH2GkKFns18JdV', {
    headers: {
      //uden denne header får man bare index.html i tekst-format :P...
      Accept: "application/json"
    }
  }).then(function (response) {
    //console.log(`resp=${response}`);
    //document.querySelector('#viewport').textContent = JSON.stringify(response.data.results[0]);
    var i = 0;

    while (i < 3) {
      var jsonBite = {
        "title": response.data.results[i].title,
        "abstract": response.data.results[i]["abstract"],
        "short_url": response.data.results[i].short_url
        /*img = response.data.results[i].multimedia[0][0]*/

      };
      buildCategory(jsonBite);
      i++;
    }
  });
});
/* plan:
Indlæs 3 artikler for 1 kategori og 'document.create' dem i et 'mobilt' view.. √ √ √
*/

var buildCategory = function buildCategory(jsonBite) {
  //console.log(jsonBite.short_url);
  var _card = document.createElement('article');

  _card.id = '_card';

  var _image = document.createElement('div');

  _image.id = '_image';

  var _headline = document.createElement('h5');

  _headline.id = '_headline';
  _headline.textContent = jsonBite.title;

  var _link = document.createElement('a');

  _link.href = jsonBite.short_url;

  _link.appendChild(_headline); //-----------------> remember this!!


  var _abstract = document.createElement('p');

  _abstract.id = '_abstract';
  _abstract.textContent = jsonBite["abstract"];
  document.querySelector('#_container').appendChild(_card);
  document.querySelector('#_card').appendChild(_image);
  document.querySelector('#_card').appendChild(_link);
  document.querySelector('#_card').appendChild(_abstract);
};