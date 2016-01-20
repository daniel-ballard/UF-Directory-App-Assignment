/* Fill out these functions using Mongoose queries*/
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var config = require('./config');
var mongoose = require('mongoose');
var Listing = require('./ListingSchema.js');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
	Listing.findOne({"code": "LBW"}, function(err, libwest) {
		if(err) return console.error(err);
		console.log(libwest);
	});
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.remove({'code':'CABL'}, function(err, result) {
    if (err) { console.log(err); }
    console.log(result);
  });
};

var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  var new_record = {
    'code': 'PHL',
    'name': 'Phelps Laboratory',
    'coordinates': {
      'latitude': 41.1091195,
      'longitude': -73.8639555,
    },
    'address': 'Gainesville, FL 32611'
  }

  Listing.update({'code':'PHL'}, new_record, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
};

var retrieveAllListings = function() {
  Listing.find(function(err,listings) {
	  if(err) return console.error(err);
	  console.log(listings);
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
