//= require jquery
//= require jquery_ujs
//= require_tree .

$.getJSON("http://api.bigcartel.com/seemaxwork/products.json", function( array ) {
  $.each( array, function( key, item ) {
    img = item['images'][0]['url'];
    name = item['name'];
    $('.store-item').append('<img src="' + img + '">');
    $('.store-item').append(name);
  });
});
