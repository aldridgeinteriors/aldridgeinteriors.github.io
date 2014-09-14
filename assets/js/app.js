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

  var path = window.location.pathname;
  if (path == '/index.html' || path == '/' || path == '/index') {
  } else if (path == '/contact.html' || path == '/contact') {
    $('ul#nav a#contact').addClass('active');
  } else if (path == '/about.html' || path == '/about') {
    $('ul#nav a#about').addClass('active');
  } else if (path == '/services.html' || path == '/services') {
    $('ul#nav a#services').addClass('active');
  } else if (path == '/projects.html' || path == '/projects') {
    $('ul#nav a#projects').addClass('active');
  } else {
    $('ul#nav a#blog').addClass('active');
  }
});
