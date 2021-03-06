
//meta321-{{uid}}
Meta = new Mongo.Collection("meta321");
Cities = new Mongo.Collection("cities");
Bogus = new Mongo.Collection("bogus");

Meteor.startup(function() {
  if (Meteor.isServer) {
    if(Cities.find().count() == 0) {

      Cities.insert({
        name: 'Detroit',
        state: 'Michigan',
        url: 'https://en.wikipedia.org/wiki/Detroit'
      });
      Cities.insert({
        name: 'San Francisco',
        state: 'California',
        region: 'Bay Area',
        url: 'https://en.wikipedia.org/wiki/San_Francisco'
      });
      Cities.insert({
        name: 'New York'
      });
    }
    if(Bogus.find().count() <= 3) {
      Bogus.insert({
        name: 'bogus3',
        b: 
          { 
            1: true,
            2: 
              {
                c: true,
                d: 
                  {
                    1: true,
                    2: false
                  },
              },
          }
      });
      Bogus.insert({
        name: 'bogus4',
        b: 
          { 
            1: true,
            2: 
              {
                d: 
                  {
                    1: true,
                    2: false
                  },
              },
          }
      });

      Bogus.insert({
        name: 'bogus6',
        a: 
          {  
            1: true,
            2: false,
          },
      });
      Bogus.insert({
        name: 'bogus7',
        a: 
          {  
            1: true,
          },
      });

      Bogus.insert({
        name: 'bogus1',
        a: 
          {  
            1: true,
            2: false,
          },
        b: 
          { 
            1: true,
            2: 
              {
                c: true,
                d: 
                  {
                    1: true,
                    2: false
                  },
              },
          }
      });

      Bogus.insert({
        name: 'bogus2',
        a: 
          {  
            1: true,
          },
        b: 
          { 
            1: true,
            2: 
              {
                c: true,
                d: 
                  {
                    1: true,
                    2: false
                  },
              },
          }
      });
      Bogus.insert({
        name: 'bogus3',
        a: 
          {  
            1: true,
            2: true,
          },
        b: 
          { 
            1: true,
            2: 
              {
                c: true,
                d: 
                  {
                    1: true,
                  },
              },
          }
      });

    }

  }
});
