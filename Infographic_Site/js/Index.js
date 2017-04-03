var json = (function () {
    var json = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'url': 'https://gis.ers.usda.gov/arcgis/rest/services/fa_prices_taxes/MapServer?f=pjson',
        'dataType': 'json',
        'success': function (data) {
          json = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          // debugger
          // return $("#Common_Phobias").text(jqXHR.statusText);
          return $("#Food Enviornment Atlas").text('Sorry!  There was an error requesting your data.')
        }
    });
    return json
})();
