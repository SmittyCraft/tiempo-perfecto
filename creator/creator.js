$('.option').click(function () {
  var selection = $(this).attr('id');
  if (selection === 'static') {
    $('#pre').hide();
    $('#staticBuilder').show();
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
}

function newEventEvent () {
  var target = $('#evenEvents');
  var input = '<hr/><input type="text" class="evenEventName" placeholder="Event Name"/><br/><br/>Start Time: <input type="time" class="evenStartTime"/><br/><br/>End Time: <input type="time" class="evenEndTime"/><br/><br/>';  
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
