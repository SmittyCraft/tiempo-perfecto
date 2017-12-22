$('#load').click(function () {
  var input = $('#data').val();
  var schedule = JSON.parse(input);
  if (schedule.type === 'static') {
    loadTable(schedule.times);
  } else if (schedule.type === 'oddEven') {
    var day = new Date().getDay() % 2;
    var scheduleToday = schedule.times[day];
    loadTable(schedule.times[day]);
  }
});

function loadTable (data) {
  var display = '';
  var i;
  for (i = 0; i < data.length; i++) {
    display += '<tr><td>' + data[i].name + '</td><td>' + data[i].start + '</td><td>' + data[i].end + '</td></tr>';
  }
  $('#display').html(display);
  $('#pre').hide();
  $('#main').show();
}
