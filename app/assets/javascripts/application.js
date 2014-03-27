//= require jquery
//= require jquery_ujs
//= require_tree .

$.getJSON("http://api.bigcartel.com/seemaxwork/products.json", function( array ) {
  $.each( array, function( key, item ) {
    img1 = item['images'][0]['url'];
    name = item['name'];
    description = item['description']
    $('.lungs_1').append('<img src="' + img1 + '">');
    $('.lungs_title').append(name);
    $('.store_description').append(description);
  });
});