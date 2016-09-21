var KatyPerryDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="katy-perry shake reset"><img src="katy-perry.png"></img></span>');
  this.setPosition(top, left);
};

KatyPerryDancer.prototype = Object.create(Dancer.prototype);
KatyPerryDancer.prototype.constructor = KatyPerryDancer;

KatyPerryDancer.prototype._makeNewPosition = function() {
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
};

KatyPerryDancer.prototype.move = function() {
  var newq = this._makeNewPosition();
  var oldq = this.$node.offset();

  this.$node.animate({top: newq[0], left: newq[1]}, 5000, (function() {
    this.move();
  }).bind(this));
};

KatyPerryDancer.prototype.stop = function() {
  this.$node.stop();
};