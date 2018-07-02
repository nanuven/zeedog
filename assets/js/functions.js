
// MENU AFFIX
$(document).ready(function() {
  var toggleAffix = function(affixElement, scrollElement, wrapper) {
    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;

    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
    }

    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }
  }

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');

    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });

    // init
    toggleAffix(ele, $(window), wrapper);
  });
});

$("#mainMenu .dropdown-menu").on('click', function (e) {
  e.stopPropagation();
});

// SLIDE SUBMENU
$(document).ready(function() {
  var sliderDogs = $('#dogsLightSlider').lightSlider();
  var sliderCats = $('#catsLightSlider').lightSlider();
  var sliderSw = $('#swLightSlider').lightSlider();
  var sliderPeople = $('#peopleLightSlider').lightSlider();

  $(".dropdown-toggle").on('click', function(evt) {
    sliderDogs.destroy();
    if (!sliderDogs.lightSlider) {
      var ls = $(evt.currentTarget).next().find('>ul');
      ls.lightSlider({
        item:6
      });
    }
  });

  $(".dropdown-toggle").on('click', function(evt) {
    sliderCats.destroy();
    if (!sliderCats.lightSlider) {
      var ls = $(evt.currentTarget).next().find('>ul');
      ls.lightSlider({
        item:6
      });
    }
  });

  $(".dropdown-toggle").on('click', function(evt) {
    sliderSw.destroy();
    if (!sliderSw.lightSlider) {
      var ls = $(evt.currentTarget).next().find('>ul');
      ls.lightSlider({
        item:6
      });
    }
  });

  $(".dropdown-toggle").on('click', function(evt) {
    sliderPeople.destroy();
    if (!sliderPeople.lightSlider) {
      var ls = $(evt.currentTarget).next().find('>ul');
      ls.lightSlider({
        item:6
      });
    }
  });
});

// SCROLL TO TOP + AFFIX CART
$(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {        // If page is scrolled more than 50px
        $("#return-to-top , #affixCart").fadeIn();    // Fade in the arrow
    } else {
        $("#return-to-top , #affixCart").fadeOut();   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $("body,html").animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});

// MENU MOBILE
$("#menuMobile a.bars").click(function(){
  $(".overlay").fadeIn();
  $("#menuMobileContent").fadeIn().animate({
    left: '+=300'
  },100);
});
$("#menuMobileContent a>i").click(function(){
  $(".overlay").fadeOut();
  $("#menuMobileContent").animate({
    left: '-=300'
  },100);
});

// fancybox gallerys
$("#marcela-jimmy").on('click', function() {
  $.fancybox.open([{
      src  : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_1_Crosby.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/crosby" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_1_Crosby.webp'
      }},
      {
      src  : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_2_Crosby.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/crosby" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_2_Crosby.webp'
      }},
      {
      src  : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_3_Crosby.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/crosby" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_3_Crosby.webp'
      }},
      {
      src  : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_4_Crosby.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/crosby" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_4_Crosby.webp'
      }},
      {
      src  : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_5_Crosby.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/crosby" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_5_Crosby.webp'
      }},
      {
      src  : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_6_Crosby.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/crosby" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_6_Crosby.webp'
      }},
      {
      src  : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_7_Crosby.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/crosby" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_7_Crosby.webp'
      }},
      {
      src  : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_8_Crosby.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/crosby" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/marcela_jimmy/Zeedog_Lookbook_Marcela_e_Jimmy_8_Crosby.webp'
      }}
    ], {
      loop : true,
      thumbs : {
        autoStart : true
    }
  });
});

$("#lucas-raiana-marie").on('click', function() {
  $.fancybox.open([{
      src  : 'assets/img/lookbooks/lucas_raiana_marie/Zeedog_Lookbook_Lucas_Raiana_e_Marie_1.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/gatos?O=OrderByReleaseDateDESC" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_raiana_marie/Zeedog_Lookbook_Lucas_Raiana_e_Marie_1.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_raiana_marie/Zeedog_Lookbook_Lucas_Raiana_e_Marie_2.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/gatos?O=OrderByReleaseDateDESC" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_raiana_marie/Zeedog_Lookbook_Lucas_Raiana_e_Marie_2.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_raiana_marie/Zeedog_Lookbook_Lucas_Raiana_e_Marie_3.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/gatos?O=OrderByReleaseDateDESC" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_raiana_marie/Zeedog_Lookbook_Lucas_Raiana_e_Marie_3.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_raiana_marie/Zeedog_Lookbook_Lucas_Raiana_e_Marie_4.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/gatos?O=OrderByReleaseDateDESC" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_raiana_marie/Zeedog_Lookbook_Lucas_Raiana_e_Marie_4.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_raiana_marie/Zeedog_Lookbook_Lucas_Raiana_e_Marie_5.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/gatos?O=OrderByReleaseDateDESC" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_raiana_marie/Zeedog_Lookbook_Lucas_Raiana_e_Marie_5.webp'
      }}
    ], {
      loop : true,
      thumbs : {
        autoStart : true
    }
  });
});

$("#lucas-lua").on('click', function() {
  $.fancybox.open([{
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_1_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_1_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_2_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_2_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_3_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_3_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_4_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_4_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_5_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_5_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_6_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_6_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_7_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_7_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_8_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_8_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_9_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_9_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_10_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_10_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_11_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_11_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_12_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_12_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_13_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_13_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_14_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_14_Woods.webp'
      }},
      {
      src  : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_15_Woods.webp',
      opts : {
        caption : '<a href="https://www.zeedog.com.br/estampas/woods" class="btn btn-sm btn-dark" target="_blank">Ver produto</a>',
        thumb   : 'assets/img/lookbooks/lucas_lua/Zeedog_Lookbook_Lucas_e_Lua_15_Woods.webp'
      }}
    ], {
      loop : true,
      thumbs : {
        autoStart : true
    }
  });
});
