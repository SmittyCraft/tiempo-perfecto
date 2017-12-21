$('.option').click(function () {
  var selection = $(this).attr('id');
  if (selection === 'static') {
    $('#pre').hide();
    $('#staticBuilder').show();
  } else if (selection === 'oddEven') {
    $('#pre').hide();
    $('#oddEvenBuilder').show();
  }
});

$('.backToPre').click(function () {
  var userCheck = confirm('Are you sure you want to go back to schedule type selection?\nYour progress on your current schedule will be lost.');
  if (userCheck) {
    $('.scheduleBuilder').hide();
    $('#staticEvents').empty();
    $('#pre').show();
  }
});

function newEvent (element) {
  var target = $(element);
  var input = '<hr/><input type="text" class="eventName" placeholder="Event Name"/><br/><br/>Start Time: <input type="time" class="startTime"/><br/><br/>End Time: <input type="time" class="endTime"/><br/><br/>';
  target.append(input);
}

function collectValues (nameOfClass) {
  var bucket = [];
  var i;
  for (i = 0; i < document.getElementsByClassName(nameOfClass).length; i++) {
    bucket.push(document.getElementsByClassName(nameOfClass)[i].value);
  }
  return bucket;
}

$('.create').click(function () {
  // Development glitch; this is actually only to create a static schedule
  var i;
  var result = [];
  var startHour = 0, endHour = 0, startMinute = 0, endMinute = 0;
  var build = [];
  var phaseOne = [];
  var eventNames = collectValues('eventName');
  var startTimes = collectValues('startTime');
  var endTimes = collectValues('endTime');
  for (i = 0; i < eventNames.length; i++) {
    build = [];
    build.push({});
    build[i].start = startTimes[i];
    build[i].end = endTimes[i];
    build[i].startHour = parseInt(startTimes[i].substring(0, 2), 10);
    build[i].startMinute = parseInt(startTimes[i].substring(3, 5), 10);
    build[i].endHour = parseInt(endTimes[i].substring(0, 2), 10);
    build[i].endMinute = parseInt(endTimes[i].substring(3, 5), 10);
    build[i].name = eventNames[i];
  }
  for (i = 0; i < 7; i++) {
    phaseOne.push(build);
  }
  result = JSON.stringify(build);
  $('#result').text(result);
  $('#fin').show();
});

$('#createOddEven').click(function () {
  
});
