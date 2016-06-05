var Collector = function(name){

  this.name = name;
  this.records = [];
  this.balance = 0;
  
}

Collector.prototype = {

  addRecord: function(record){
    this.records.push(record);
  },

  removeRecord: function(record) {

    var recordIndex = this.records.lastIndexOf(record);
    var record = this.records.splice(recordIndex, 1)[0];
  },

  sellToStore: function(record) {

    this.removeRecord(record);
    var sellingPrice = Math.floor(record.price * 0.9)
    this.balance += sellingPrice;
  },

  buyRecord: function(recordStore, record) {

    recordStore.sellRecord(record);
    this.addRecord(record);
    this.balance -= record.price;
  }

}



  











module.exports = Collector;