$(function() {
  $('div[data-tab-target]').hide();

  if ($('div[data-tab-default]').length)
    $('div[data-tab-default]').show();

  $('a[data-tab-link]').click(function(e) {
    $('div[data-tab-target]').hide();
    $('a[data-tab-link]').removeClass('active');
    $(this).addClass('active');
    $('div[data-tab-target="' + $(this).attr('href') + '"]').show();
    e.preventDefault();
  });
});
