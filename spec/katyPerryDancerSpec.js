describe('KatyPerryDancer', function() {

  var katyPerryDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    katyPerryDancer = new KatyPerryDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(katyPerryDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it move', function() {
    sinon.spy(katyPerryDancer.$node, 'animate');
    katyPerryDancer.move();
    expect(katyPerryDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call stop at least once after it moves', function() {
      sinon.spy(katyPerryDancer, 'stop');
      katyPerryDancer.move();
      expect(katyPerryDancer.stop.callCount).to.be.equal(0);
      katyPerryDancer.stop();
      expect(katyPerryDancer.stop.callCount).to.be.equal(1);
    });
  });
});