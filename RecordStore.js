var Collector = require('./Collector.js');

var RecordStore = function(name, city){

  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = 0;
  this.stockValue = 0;
}


RecordStore.prototype = {

  addRecord: function(record){
    this.records.push(record);
    this.stockValue += record.price;
  },

  printInventory: function(){
    if (this.records.length === 0) {
      console.log('Inventory is empty');
    }
    else {
      for (var record in this.records) {
        console.log(parseInt(record) + 1 + ' - ' + this.records[record].artist + ' - ' + this.records[record].title + ' - ' + this.records[record].price);
      }
    }
  },

  sellRecord: function(record) {

    var recordIndex = this.records.lastIndexOf(record);
    var record = this.records.splice(recordIndex, 1)[0];
    this.balance += record.price;
    this.stockValue -= record.price;
  },

  printFinances: function() {

    console.log('Cash in bank: ' + this.balance / 100 + '; ' + 'Value of stock: ' + this.stockValue / 100);
  },

  buyFromCollector: function(collector, record) {

    collector.sellToStore(record);
    this.addRecord(record);
    var purchasePrice = Math.floor(record.price * 0.9);
    this.balance -= purchasePrice;
  }
    
  
}










module.exports = RecordStore;