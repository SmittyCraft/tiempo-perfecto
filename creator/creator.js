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

function newOddEvent () {
  var target = $('#oddEvents');
  var input = '<hr/><input type="text" class="oddEventName" placeholder="Event Name"/><br/><br/>Start Time: <input type="time" class="oddStartTime"/><br/><br/>End Time: <input type="time" class="oddEndTime"/><br/><br/>';
  target.append(input);
}

function newEvenEvent () {
  var target = $('#evenEvents');
  var input = '<hr/><input type="text" class="evenEventName" placeholder="Event Name"/><br/><br/>Start Time: <input type="time" class="evenStartTime"/><br/><br/>End Time: <input type="time" class="evenEndTime"/><br/><br/>';  
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
$('#createOddEven').click(function () {
  var oddEventNames = collectValues('oddEventName');
  var oddStartTimes = collectValues('oddStartTime');
  var oddEndTimes = collectValues('oddEndTime');
  var evenEventNames = collectValues('evenEventName');
  var evenStartTimes = collectValues('evenStartTime');
  var evenEndTimes = collectValues('evenEndTime');
  var i;
  var schedule = {};
  var build = [];
  var event = {};
  var result = '';
  schedule.type = 'oddEven';
  schedule.times = [];
  for (i = 0; i < evenEventNames.length; i++) {
    event = {};
    event.name = evenEventNames[i];
    event.start = evenStartTimes[i];
    event.startHour = parseInt(evenStartTimes[i].substr(0, 2), 10);
    event.startMinute = parseInt(evenStartTimes[i].substr(3, 5), 10);
    event.end = evenEndTimes[i];
    event.endHour = parseInt(evenEndTimes[i].substr(0, 2), 10);
    event.endMinute = parseInt(evenEndTimes[i].substr(3, 5), 10);
    build.push(event);
  }
  schedule.times.push(build);
  build = [];
  for (i = 0; i < oddEventNames.length; i++) {
    event = {};
    event.name = oddEventNames[i];
    event.start = oddStartTimes[i];
    event.startHour = parseInt(oddStartTimes[i].substr(0, 2), 10);
    event.startMinute = parseInt(oddStartTimes[i].substr(3, 5), 10);
    event.end = oddEndTimes[i];
    event.endHour = parseInt(oddEndTimes[i].substr(0, 2), 10);
    event.endMinute = parseInt(oddEndTimes[i].substr(3, 5), 10);
    build.push(event);
  }
  schedule.times.push(build);
  result = JSON.stringify(schedule);
  $('#result').text(result);
  $('#fin').show();
});

$('.create').click(function () {
  // Spoiler Alert: this is actually only to create a static schedule
  var i;
  var eventNames = collectValues('eventName');
  var startTimes = collectValues('startTime');
  var endTimes = collectValues('endTime');
  var schedule = {};
  var build = {};
  var result = '';
  schedule.type = 'static';
  schedule.times = [];
  for (i = 0; i < eventNames.length; i++) {
    // Empty build object
    build = {};
    // Assign values to various attributes
    build.name = eventNames[i];
    build.start = startTimes[i];
    build.startHour = parseInt(startTimes[i].substr(0, 2), 10);
    build.startMinute = parseInt(startTimes[i].substring(3, 5), 10);
    build.end = endTimes[i];
    build.endHour = parseInt(endTimes[i].substr(0, 2), 10);
    build.endMinute = parseInt(endTimes[i].substring(3, 5), 10);
    // Push build object to schedule times
    schedule.times.push(build);
  }
  result = JSON.stringify(schedule);
  $('#result').text(result);
  $('#fin').show();
});
