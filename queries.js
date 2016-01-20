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
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
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