var RightSharkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="right-shark"><img src="right-shark.png"></img></span>');
  this.setPosition(top, left);
};

RightSharkDancer.prototype = Object.create(Dancer.prototype);
RightSharkDancer.prototype.constructor = RightSharkDancer;

RightSharkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};