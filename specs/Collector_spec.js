var RecordStore = require('../RecordStore');
var Collector = require('../Collector');
var Record = require('../Record');

var assert = require('chai').assert;                                         

describe('Collector', function() {
  
  beforeEach(function(){
    collector1 = new Collector('Jimmy');
    collector2 = new Collector('Bev');

    record1 = new Record('Boards of Canada', 'Geogaddi', 999);
    record2 = new Record('Nirvana', 'In Utero', 699);
    record3 = new Record('Squarepusher', 'Ultravisitor', 1399);

    collector2.addRecord(record1);
    collector2.addRecord(record2);

    recordstore1 = new RecordStore('Missing', 'Glasgow');
  })

  it('should have a name', function() {

    assert.equal('Jimmy', collector1.name);
  })

  it('should start with no records', function() {

    assert.equal(0, collector1.records.length);
  })

  it('should be possible to add a record to its records array', function() {

    assert.equal(2, collector2.records.length);
  })

  it('should be possible to remove a record from its records array', function() {

    collector2.removeRecord(record2);
    assert.equal(1, collector2.records.length);
  })

  it('should start with a balance of zero', function() {

    assert.equal(0, collector1.balance);
  })

  it('should be able to sell a record to a record store for 90% of the record price', function() {

    collector2.sellToStore(record2);
    assert.equal(1, collector2.records.length);
    assert.equal(629, collector2.balance);
  })

  it('should be able to buy a record', function() {

    collector1.balance = 1000;
    collector1.buyRecord(record1);
    assert.equal(1, collector1.records.length);
    assert.equal(1, collector1.balance);
  })

  
})
















