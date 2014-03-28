//= require jquery
//= require jquery_ujs
//= require_tree .

$.getJSON("http://api.bigcartel.com/seemaxwork/products.json", function( array ) {
  $.each( array, function( key, item ) {
    name = item['name'];
    description = item['description']
    $('.lungs_title').append(name);
    $('.store_description').append(description);
  });
});