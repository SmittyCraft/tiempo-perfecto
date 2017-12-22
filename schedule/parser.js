$('#load').click(function () {
  var input = $('#data').val();
  var schedule = JSON.parse(input);
  if (schedule.type === 'static') {
    (function () {
      var display = '';
      var i;
      for (i = 0; i < schedule.times.length; i++) {
        display += '<tr><td>' + schedule.times[i].name + '</td><td>' + schedule.times[i].start + '</td><td>' + schedule.times[i].end + '</td>';
      }
      $('#display').empty();
      $('#display').append(display);
    })();
    $('#pre').hide();
    $('#main').show();
  } else if (schedule.type === 'oddEven') {
    (function () {
      var display = '';
      var i;
      var day = new Date().getDay() % 2;
      var scheduleToday = schedule.times[day];
      for (i = 0; i < scheduleToday.length; i++) {
        display += '<tr><td>' + scheduleToday[i].name + '</td><td>' + scheduleToday[i].start + '</td><td>' + scheduleToday[i].end + '</td>';
      }
    })();
  }
});
