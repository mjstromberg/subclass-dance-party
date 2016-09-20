var LeftSharkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="left-shark"><img src="left-shark.png"></img></span>');
  this.setPosition(top, left);
};

LeftSharkDancer.prototype = Object.create(Dancer.prototype);
LeftSharkDancer.prototype.constructor = LeftSharkDancer;

LeftSharkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};