'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
	listings = require('./listings.json');
/* Connect to your database */
	mongoose.connect(config.db.uri);
	
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
 var entries = listings.entries;
 var newListing = {};
 for(var i = 0; i < entries.length; i++) {
	 if(entries[i].coordinates !== undefined && entries[i].address !== undefined) {
		 newListing = new Listing ({
			 code: entries[i].code,
			 name: entries[i].name,
			 coordinates: {
				 latitude: entries[i].coordinates.latitude,
				 longitude: entries[i].coordinates.longitude
			 },
			 address: entries[i].address
		 });
	 }
	 else if(entries[i].coordinates !== undefined) {
		 newListing = new Listing ({
			 code: entries[i].code,
			 name: entries[i].name,
			 coordinates: {
				 latitude: entries[i].coordinates.latitude,
				 longitude: entries[i].coordinates.longitude
			 }
		 });
	 }
	 else if(entries[i].address !== undefined) {
		 newListing = new Listing ({
			 code: entries[i].code,
			 name: entries[i].name,
			 address: entries[i].address
		 });
	 }
	 else {
		 newListing = new Listing ({
			 code: entries[i].code,
			 name: entries[i].name
		 });
	 }
	 newListing.save();
	 console.log("Saved listing number " + (i+1) + " of " + entries.length);
	 newListing = {};
 }
 console.log("All listings saved, CTRL+C to exit.");
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
 