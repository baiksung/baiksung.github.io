---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  var prev_clicked_button = "None"
  $('a.panel-button').click(function (e) {
      // if (document.getElementById('about-me-button').clicked == true){
        //$('a.panel-button.about-button').click(function(e) {
    clicked_button = e.currentTarget.attributes.id.value
    if (clicked_button == 'about-me-button') {
      var elem = document.getElementById("projects")
      elem.style.display="none"
      var elem = document.getElementById("about-me")
      elem.style.display="block"
    }
    else if (clicked_button == 'projects-button') {
      var elem = document.getElementById("about-me")
      elem.style.display="none"
      var elem = document.getElementById("projects")
      elem.style.display="block"
    }
    //if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    //    if ($('.content-wrapper').hasClass('showing') && clicked_button == prev_clicked_button){
    if ($('.content-wrapper').hasClass('showing')){
      $('.content-wrapper').removeClass('animated slideInRight')
      $('.panel-cover').removeClass('panel-cover--collapsed')
      $('.panel-cover').css('max-width', '100%')
      Animation_state = $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
      Animation_state.finish()
      $('.content-wrapper').removeClass('showing')
      window.location.hash = '';
      parent.location.hash = ''
        //return;
      if (clicked_button == prev_clicked_button) {
        return;
      }
    }

    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
    $('.content-wrapper').addClass('showing');
    prev_clicked_button = clicked_button
  })

  if (window.location.hash && (window.location.hash == '#projects' || window.location.hash == '#about-me')) {
    //if ((window.location.hash && window.location.hash == '#projects') || window.location.pathname !== '{{ site.baseurl }}/about-me.html'){
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    //  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html' && window.location.pathname !== '{{ site.baseurl }}/about-me.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .projects-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .about-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })


    //  $('a.about-button').click(function (e) {
    //    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    //    currentWidth = $('.panel-cover').width()
    //    if (currentWidth < 960) {
    //      $('.panel-cover').addClass('panel-cover--collapsed')
    //      $('.content-wrapper').addClass('animated slideInRight')
    //    } else {
    //      $('.panel-cover').css('max-width', currentWidth)
    //      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    //    }
    //  })
    //$('a.about-button').click(function (e) {
    //$('if ($('.panel-cover').hasClass('panel-cover--collapsed')){
    //$(' //if ($('.content-wrapper').hasClass('showing')){
    //$('  $('.content-wrapper').removeClass('animated slideInRight')
    //$('  $('.panel-cover').removeClass('panel-cover--collapsed')
    //$('  $('.panel-cover').css('max-width', '100%')
    //$('  $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
    //$('  $('.content-wrapper').removeClass('showing')
    //$('  window.location.hash = '';
    //$('  window.location.pathname = '{{ site.baseurl }}/';
    //$('  parent.location.hash = ''
    //$('  return;
    //$('}
    //$('currentWidth = $('.panel-cover').width()
    //$('if (currentWidth < 960) {
    //$('  $('.panel-cover').addClass('panel-cover--collapsed')
    //$('  $('.content-wrapper').addClass('animated slideInRight')
    //$('} else {
    //$('  $('.panel-cover').css('max-width', currentWidth)
    //$('  $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    //$('}
    //$('$('.content-wrapper').addClass('showing'); 
    //$(' //  if (window.location.pathname == '{{ site.baseurl }}/about-me.html') {
    //$(' //    $('.panel-cover').addClass('panel-cover--collapsed')
    //$(' //  }
    //})
})
