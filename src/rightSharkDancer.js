var RightSharkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="right-shark shake reset"><img src="right-shark.png"></span>');
  this.setPosition(top, left);
};

RightSharkDancer.prototype = Object.create(Dancer.prototype);
RightSharkDancer.prototype.constructor = RightSharkDancer;