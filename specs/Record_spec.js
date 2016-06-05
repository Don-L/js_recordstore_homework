var Record = require('../Record');

var assert = require('chai').assert;                                         

describe('Record', function() {
  
  beforeEach(function(){
    record1 = new Record('Boards of Canada', 'Geogaddi', 999);
    record2 = new Record('Nirvana', 'In Utero', 699);
    record3 = new Record('Squarepusher', 'Ultravisitor', 1399);
  })

  it('should have an artist', function() {

    assert.equal('Boards of Canada', record1.artist);
  })

  it('should have a title', function() {

    assert.equal('In Utero', record2.title);
  })

  it('should have a price', function() {

    assert.equal(1399, record3.price);
  })

  
})