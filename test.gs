function myFunction() {
  var d = new Date();
  console.log(d.getFullYear() + '-' + (d.getMonth()+1) + '-' + (d.getDate()));

  console.log(Utilities.formatDate( d, 'Asia/Tokyo', 'yyyy-MM-dd'));
}
