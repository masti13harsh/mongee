require.paths.unshift('vendor/mongoose');
var mongoose = require('mongoose').Mongoose;

mongoose.model("Post", {
	
	properties: ["type", "content", "walls"],
	
	cast: {}, 
	
	indexes: ["walls"],
	
	setters: {},
	
	getters: {
		
	}, 
	
	methods: {
		save: function(fn) {
			this.updated_at = new Date();
			this.__super__(fn);
		}
	}, 
	
	static: {
		
	}
});