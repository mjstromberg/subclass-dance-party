var PopDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="square-dancer"></span>');
    this.setPosition(top, left);    
  }
  step() {
    super.step();
    this.$node.toggle();
  }
};

// var PopDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);

//   this.$node = $('<span class="square-dancer"></span>');
//   this.setPosition(top, left);
// };

// PopDancer.prototype = Object.create(Dancer.prototype);
// PopDancer.prototype.constructor = PopDancer;

// PopDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   this.$node.toggle();
// };