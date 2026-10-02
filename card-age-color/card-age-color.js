(function() {
  // Hours after which a card moves to each color. Edit these to suit your board.
  // The whole card is recolored, replacing its card type color.
  var STAGES = [
    { name: 'red',    afterHours: 54, color: '#e53935', text: '#fff' },
    { name: 'orange', afterHours: 36, color: '#fb8c00', text: '#fff' },
    { name: 'yellow', afterHours: 18, color: '#fdd835', text: '#212121' },
    { name: 'green',  afterHours: 0,  color: '#43a047', text: '#fff' }
  ];

  // Red cards blink when true.
  var BLINK_RED = true;

  // Task attribute the age is measured from. 'moved_at' is when the card last
  // changed column, so the clock resets on every move. Use 'created_at' to
  // measure total age instead.
  var AGE_FIELD = 'moved_at';

  var css = ".card_age { font-size: 0.85em; font-weight: bold; padding: 0 4px; border-radius: 3px; background: rgba(0, 0, 0, 0.2); }\n";
  STAGES.forEach(function(stage) {
    css += "kt-task.card-age-" + stage.name + " { background: " + stage.color + " !important; }\n";
    css += "kt-task.card-age-" + stage.name + ", kt-task.card-age-" + stage.name + " * { color: " + stage.text + " !important; }\n";
  });
  if (BLINK_RED) {
    // An !important background can't be animated, so darken with an inset shadow.
    css += "@keyframes card-age-blink { 50% { box-shadow: inset 0 0 0 1000px #8e0000, 0 0 0 3px #e53935; } }\n";
    css += "kt-task.card-age-red { animation: card-age-blink 1s step-start infinite; }\n";
    css += "@media (prefers-reduced-motion: reduce) { kt-task.card-age-red { animation: none; } }\n";
  }
  $('<style>').html(css).appendTo('head');

  var since = function(task) {
    return moment(task.get(AGE_FIELD) || task.get('created_at'));
  };

  // Exact hours so the badge matches the color thresholds, e.g. "17h" or "2d 6h".
  var ageLabel = function(task) {
    var hours = Math.max(0, Math.floor(moment().diff(since(task), 'hours', true)));
    return hours < 24 ? hours + 'h' : Math.floor(hours / 24) + 'd ' + (hours % 24) + 'h';
  };

  var stageFor = function(task) {
    var hours = moment().diff(since(task), 'hours', true);
    for (var i = 0; i < STAGES.length; i++) {
      if (hours >= STAGES[i].afterHours) return STAGES[i];
    }
    return STAGES[STAGES.length - 1];
  };

  var colorTask = function(taskElement) {
    var task = taskElement.kt && taskElement.kt.props && taskElement.kt.props.task;
    if (!task) return;
    var $el = $(taskElement);
    STAGES.forEach(function(stage) { $el.removeClass('card-age-' + stage.name); });
    $el.addClass('card-age-' + stageFor(task).name);
    $el.find('.card_age').text(ageLabel(task));
  };

  KT.Elements.Task.header.unshift({
    __: 'CardAge',
    html: function(el, task) {
      return "<span class=\"card_age\">" + ageLabel(task) + "</span>";
    }
  });

  $(window).on('kt-task:render', function(e) {
    return colorTask(e.target);
  });

  KT.onInit(function() {
    var colorAll = function() {
      $('kt-task').each(function() { colorTask(this); });
    };
    setTimeout(colorAll, 750);
    // Cards age while the board stays open, so recolor periodically.
    setInterval(colorAll, 5 * 60 * 1000);
  });
}).call(this);
