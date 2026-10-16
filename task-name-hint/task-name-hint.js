(function() {
  // The hint is set per board in Developer tools > Javascript, e.g.
  //   window.TASK_NAME_HINT = 'Client - Item - Description';
  // It is read each time a card opens, so the order the two load in doesn't matter.
  var setHint = function() {
    if (!window.TASK_NAME_HINT) return;
    $('kt-taskview textarea[name="task[name]"]').attr('placeholder', window.TASK_NAME_HINT);
  };

  $(document).on('kt-taskview:render kt-taskview:open', setHint);

  KT.onInit(setHint);
}).call(this);
