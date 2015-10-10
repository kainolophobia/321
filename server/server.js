

Meteor.startup(function () {
  // code to run on server at startup
});

RecursiveIterator = Meteor.npmRequire('recursive-iterator');

Meteor.methods({
 
  updateMetaCollections: function() {
    var mongoCollections = Mongo.Collection.getAll();

    if(!mongoCollections) {
      console.log("no collections?");
      return null;
    }

    var collectionNames = [];

    _.each(mongoCollections, function(collection) {

      console.log(collection.name);
      Meta.upsert({name: collection.name}, {
        $set: {name: collection.name}
      });
      collectionNames.push(collection.name);
    });

    return collectionNames;
  },

  analyzeCollection(name) {

    if(!name) {
      console.log("no collection name!");
      return null;
    }

    var collection = Mongo.Collection.get(name)

    if(!collection) {
      console.log("no collection found!");
      return null;
    }

    //start analyzing collection (async)


    collection.find({}).forEach(function(doc) {
//      console.log(doc);
      //traverse(doc, process);
      var iterator = new RecursiveIterator(doc);
      for(var item = iterator.next(); !item.done; item = iterator.next()) {
          var state = item.value;
          console.log(state.path.join('.'), state.node);
      }
    });
    //unblock()
    //update metadata document with progress
    //
    //finish analyzing collection, update metadata document
  }
});

