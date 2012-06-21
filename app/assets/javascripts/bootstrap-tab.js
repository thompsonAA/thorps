$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})


$('#myTab a[href="#home"]').tab('show');
$('#myTab a[href="#tab2"]').tab('show');
$('#myTab a[href="#tab3"]').tab('show');
$('#myTab a[href="#tab4"]').tab('show');
$('#myTab a[href="#tab5"]').tab('show');

