var LeftSharkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="left-shark shake reset"><img src="left-shark.png"></img></span>');
  this.setPosition(top, left);
};

LeftSharkDancer.prototype = Object.create(Dancer.prototype);
LeftSharkDancer.prototype.constructor = LeftSharkDancer;

LeftSharkDancer.prototype.inConfusedMode = function() {
  this.$node = $('<span class="left-shark shake reset"><img src="left-shark-confused.png"></span>');
  this.setPosition(this.top, this.left);
};

LeftSharkDancer.prototype.lineUp = function() {
  this.$node = $('<span class="left-shark reset"><img src="left-shark.png"></span>');
  this.setPosition(this.top, this.left);
};