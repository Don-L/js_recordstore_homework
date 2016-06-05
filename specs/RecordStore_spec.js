var RecordStore = require('../RecordStore');
var Collector = require('../Collector');
var Record = require('../Record');

var assert = require('chai').assert;                                         

describe('RecordStore', function() {
  
  beforeEach(function(){
    recordstore1 = new RecordStore('Missing', 'Glasgow');
    recordstore2 = new RecordStore('Rough Trade', 'London');

    record1 = new Record('Boards of Canada', 'Geogaddi', 999);
    record2 = new Record('Nirvana', 'In Utero', 699);
    record3 = new Record('Squarepusher', 'Ultravisitor', 1399);

    recordstore2.addRecord(record1);
    recordstore2.addRecord(record2);
    recordstore2.addRecord(record3);
    recordstore2.addRecord(record3);

    collector = new Collector('Jimmy');
    collector.addRecord(record2);
  })

  it('should have a name', function() {

    assert.equal('Missing', recordstore1.name);
  })

  it('should have a city', function() {

    assert.equal('London', recordstore2.city);
  })

  it('should be created with an empty records array', function() {

    assert.equal(0, recordstore1.records.length);
  })

  it('should start with a balance of zero', function() {

    assert.equal(0, recordstore1.balance);
  })

  it('should be possible to add a record to the records array', function() {

    assert.deepEqual('object', typeof recordstore2.records[0]);
  })

  it('should be possible to print its inventory', function() {

    recordstore1.printInventory();
    recordstore2.printInventory();
    assert.deepEqual('object', typeof recordstore2.records[0]);
  })

  it("balance should go up accordingly when a record is sold", function() {

    recordstore2.sellRecord(record3);
    assert.equal(1399, recordstore2.balance);
  })

  it('should have a record removed from its inventory whtn that record is sold', function() {

    recordstore2.sellRecord(record3);
    assert.equal(3, recordstore2.records.length);
  })

  it('should begin with a stock value of zero', function() {

    assert.equal(0, recordstore1.stockValue);
  })

  it("stock value should increase accordingly when a record is added to the records array", function() {

    assert.equal(4496, recordstore2.stockValue)
  })

  it("stock value should decrease accordingly when a record is removed from the records array", function() {

    recordstore2.sellRecord(record3);
    assert.equal(3097, recordstore2.stockValue);
  })

  it('should be possible to print a financial report for the record store', function() {

    recordstore2.sellRecord(record3);
    recordstore1.printFinances();
    recordstore2.printFinances();
    assert.equal(0, recordstore1.stockValue);
  })

  it('should be able to buy a record from a collector at 90% of the record price', function() {

    recordstore2.sellRecord(record3);
    recordstore2.buyFromCollector(collector, record2);
    assert.equal(4, recordstore2.records.length);
    assert.equal(770, recordstore2.balance);
    assert.equal(3796, recordstore2.stockValue);
    assert.equal(0, collector.records.length);
  })

  
})


















