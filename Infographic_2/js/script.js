// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

var json = (function () {
    var json = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'url': 'https://raw.githubusercontent.com/jerrialowery/jerrialowery.github.io/master/Infographic_2/funding.json',
        'dataType': 'json',
        'success': function (data) {
          json = data

        },

        'error': function(jqXHR, textStatus, errorThrown) {
          return $("map").text('Sorry!  There was an error requesting your data.')
        }
    });
    return json
})();

mapboxgl.accessToken = 'pk.eyJ1Ijoiamxvd2VyeSIsImEiOiJjajF2ZXV2b2EwMDAyMzNueWF3aTVxdXV2In0.5N3v5tCa5___XS4mG2r4Ew';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/jlowery/cj24wcz8r000r2rou0jqsmc8o',
    center: [-74.50, 40],
    zoom: 9
});


map.addControl(new mapboxgl.NavigationControl());
map.fitBounds([[-133.2421875, 16.972741], [-47.63671875, 52.696361]]);

map.on('load', function () {
    map.addSource('icons', {
        type: 'vector',
        url: 'mapbox://mapbox.2opop9hr'
    });

    map.addLayer({
       'id': 'Circles1',
       'type': 'circle',
        'source': {
            type: 'vector'
        },
       'layout': {
           'visibility': 'visible'
       },
       'paint': {
           'circle-radius': 8,
           'circle-color': 'rgba(55,148,179,1)'
       },
       'source-layer': 'Circles'
   });

   map.addLayer({
       'id': 'Circles2',
       'type': 'circle',
       'source': {
           type: 'vector'
       },
       'source-layer': 'Circles',
       'layout': {
           'visibility': 'visible',
           'line-join': 'round',
           'line-cap': 'round'
       },
       'paint': {
         'circle-radius': 8,
         'circle-color': 'rgba(55,148,179,1)'
       }
   });

  //  map.on('load', function () {
  //    map.addSource('icons', {
  //        type: 'vector',
  //        url: 'mapbox://jlowery.cj1wtzcxk00az33quo3z4533t-6q6qb'
  //    });


  map.addLayer({
    'id': 'jlowery.cj1wtzcxk00az33quo3z4533t-6q6qb',
    'type': 'circle',
    'source': {
        type: 'vector'
        // url: 'mapbox://jlowery.cj1wtzcxk00az33quo3z4533t-6q6qb'
    },
    'source-layer': 'Export_-_Export',
    'paint': {
      // make circles larger as the user zooms from z12 to z22
      'circle-radius': {
        'base': 1.75,
        'stops': [[12, 2], [22, 180]]
      },
      // color circles by ethnicity, using data-driven styles
      'circle-color': {
        property: 'Location',
        type: 'categorical',
        stops: [
          ['Poultry', '#e55e5e'],
          ['Beans', '#240000'],
          ['Herbs', '#3F401D'],
          ['Nuts', '#8C5625'],
          ['Plants', '#568C61'],
          ['Wine', '#EB2900'],
          ['Tofu', '#EB8C4C'],
          ['Bakedgoods', '#FFCC69'],
          ['Organic', '#CEFF96'],
          ['Soap', '#FF8AB5'],
          ['Meat', '#FF4216'],
          ['Coffee', '#0C0000'],
          ['Seafood', '#70EDFF'],
          ['Eggs', '#FFDF16'],
          ['Vegetables', '#319E0E'],
          ['Crafts', '#A750FF'],
          ['Juices', '#AF0063'],
          ['Trees', '#909E0E'],
          ['Maple', '#A4720E'],
          ['Cheese', '#FFBE00'],
          ['Flowers', '#7097FF'],
          ['Grains', '#8F5C00'],
          ['Mushrooms', '#A6A17F'],
          ['Honey', '#CF8D6C'],
          ['Prepared', '#5D886C'],
          ['Jams', '#46003E'],
          ['Fruits', '#BFCF33'],
          ['WildHarvested', '#254038']
        ]
      }
    }
  });
});
