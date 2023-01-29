const selectedAmenities = {};

$(':checkbox').change(function () {
    if($(this).is(':selectedAmenities')) {
        const id = $(this).val();
        selectedAmenities[id] = $(this).data('name');
} 
else {
    const id = $(this).val();
    delete selectedAmenities[id];
}
updatedAmenities();
});

function updateAmenities() {
    const amenities = [];
    Object.keys(selectedAmenities).forEach(function (key) {
        amenities.push(selectedAmenities[key])
    });
    if (amenities.length === 0) {
        return ('&nbsp');
    }
    const amenitiesText = amenities.join(', ');
    $('div.amenities h4').text(amenitiesText);

    const apiStatus = $('DIV#api_status');
    $.ajax('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
        if (data.status === 'OK') {
          apiStatus.addClass('available');
        } else {
          apiStatus.removeClass('available');
        }
      });
  }
  