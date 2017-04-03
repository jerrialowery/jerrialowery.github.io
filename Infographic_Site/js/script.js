var json = (function () {
    var json = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'url': 'https://gis.ers.usda.gov/arcgis/rest/services/foodaccess2015/MapServer',
        'dataType': 'json',
        'success': function (data) {
          json = data

        },

        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          // debugger
          // return $("#Common_Phobias").text(jqXHR.statusText);
          return $("#Taxes").text('Sorry!  There was an error requesting your data.')
        }
    });
    return json
})();

// $( document ).ready(function() {
  var map = new Datamap({
    scope: 'usa',
    responsive: true,
    element: document.getElementById('container'),
    fills: {
      LOW: '#eb6b5c',
      FAIR: '#fbc86e',
      GOOD: '#e7ea86',
      UNKNOWN: 'rgb(0,0,0)',
      defaultFill: '#c4cca3'
    },
    data: {

      ME: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      NH: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      MA: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      RI: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      CT: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      NY: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      NJ: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      DE: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      MD: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      VA: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      NC: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      SC: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      GA: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      FL: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      PA: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      AL: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      AZ: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      CA: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      DC: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      ID: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      IN: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      KS: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      LA: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      AK: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      AR: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      CO: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      HI: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      IL: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      IA: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      KY: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      MI: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      MN: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      MS: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      MO: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      MT: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      NE: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      NV: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      NM: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      ND: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      OH: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      OK: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      OR: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      SD: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      TN: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },
      TX: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      UT: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      VT: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      WA: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      WV: {
        fillKey: 'LOW',
        numberOfThings: 10381
      },
      WI: {
        fillKey: 'GOOD',
        numberOfThings: 10381
      },
      WY: {
        fillKey: 'FAIR',
        numberOfThings: 10381
      },

    }
  });
// })

debugger
var cost = []

for (i=0; i <json.length; i++){
  var newCost = {
    name: 'cost',
    radius: 25,
    latitude: 50.07,
    longitude: 78.43
  }
  cost.push(newCost[i])
}

map.bubbles(cost, {
    popupTemplate: function (geo, data) {
            return ['<div class="hoverinfo">' +  data.name,
            '<br/>Payload: ' +  data.yield + ' kilotons',
            '<br/>Country: ' +  data.country + '',
            '<br/>Date: ' +  data.date + '',
            '</div>'].join('');
    }
});

// Event Listeners

window.addEventListener('resize', function() {
  map.resize();
});

// Draw a legend for this map
// map.legend();


// function getlocations(){
//
// }
