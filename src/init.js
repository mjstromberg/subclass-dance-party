$(document).ready(function() {
  window.dancers = [];

  var katyPerryDancer = new window['KatyPerryDancer'](
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
  window.dancers.push(katyPerryDancer);
  $('body').append(katyPerryDancer.$node);
  katyPerryDancer.move();

  $('.addDancerButton').on('click', function(event) {
    $('.lineUpDancersButton').css({display: 'inline'});
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpDancersButton').on('click', function(event) {
    var count = 0;
    $('.right-shark').toggleClass('right-shark right-shark-static');
    $('.right-shark-static').toggleClass('shake wiggle');
    $('.katy-perry').toggleClass('katy-perry katy-perry-static');
    $('.katy-perry-static').toggleClass('shake wiggle');
    $('.lineUpAllLeftSharkDancersButton').css({display: 'inline'});

    window.dancers.forEach(function(dancer, index) {
      var height = $('body').height();
      var width = $('body').width();
      var dancersLength = window.dancers.length;
      
      if (dancer instanceof RightSharkDancer || dancer instanceof KatyPerryDancer) {
        if (dancer instanceof KatyPerryDancer) {
          dancer.stop(); 
          $('.katy-perry-static').children().on('mouseover', function(event) {
            $('.katy-perry-static').children().css({ width: '170px', height: '338px' });
          });
          $('.katy-perry-static').children().on('mouseout', function(event) {
            $('.katy-perry-static').children().css({ width: '85px', height: '169px' });
          });
        }
        height = height / 2;
        width = (count / dancersLength) * width + width / 2 - 100;
        dancer.lineUp(height, width);
        count++;
      } else {
        $(dancer.$node).remove();
        dancer.inConfusedMode();
        $('body').append(dancer.$node);
      }
    });
  });

  $('.lineUpAllLeftSharkDancersButton').on('click', function() {
    var katyPerryPosition = { top: window.dancers[0].top, left: window.dancers[0].left };
    var width = $('body').width();


    window.dancers.filter(function(dancer) {
      return dancer instanceof LeftSharkDancer;
    }).forEach(function(dancer, index, array) {
      $(dancer.$node).remove();
      
      dancer.top = katyPerryPosition.top;
      dancer.left = width / 2 - (index / array.length) * width / 2 - 300;
      dancer.lineUp();
      $('body').append(dancer.$node);
    });

    $('.reset').removeClass('wiggle');
    $('.reset').addClass('wiggle');
  });
});













