var events = [];

$('#load').click(function () {
  var input = $('#data').val();
  var schedule = JSON.parse(input);
  if (schedule.type === 'static') {
    events = schedule.times;
  } else if (schedule.type === 'oddEven') {
    var day = new Date().getDay() % 2;
    events = schedule.times[day];
  } else {
    return;
  }
  loadTable(events);
});

function parseHour (hora) {
  var hour = parseInt(hora.substr(0, 2), 10);
  if (hour > 12) {
    return hour - 12 + ' PM';
  } else if (hour === 0) {
    return '12 AM';
  } else {
    return hour + ' AM';
  }
}

function loadTable (data) {
  var display = '';
  var i;
  for (i = 0; i < data.length; i++) {
    var name = data[i].name;
    var start = parseHour(data[i].start);
    var end = parseHour(data[i].end);
    display += '<tr><td>' + data[i].name + '</td><td>' + start + '</td><td>' + end + '</td></tr>';
  }
  $('#display').html(display);
  $('#pre').hide();
  $('#main').show();
}
