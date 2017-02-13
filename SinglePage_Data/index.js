var json = (function () {
    var json = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://mysafeinfo.com/api/data?list=phobias&format=json',
        'dataType': 'json',
        'success': function (data) {
          json = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          debugger
          // return $("#Common_Phobias").text(jqXHR.statusText);
          return $("#Common_Phobias").text('Sorry!  There was an error requesting your data.')
        }
    });
    return json
})();

var info = {
  "full_name": "Common_Phobias "

}



// Option 1: Javascript for loop
for(var i = 0; i < json.length; i++) {
  // $('#Common_Phobias').append('<li>' + json[i].nm + '</li>');
  $('#Common_Phobias').append("<li class='Common_Phobias' id='" + json[i].nm + "'>" + json[i].nm + "</li>");
}

$.each(json, function(index,value){
  console.log(value.nm);
})
