$(function() {
	var Item = Backbone.Model.extend({ //Here's the atom!
		defaults: {
			part1: 'hello',
			part2: 'world'
		}
	});

	var List = Backbone.Collection.extend({
		model: Item
	});

	var ItemView = Backbone.View.extend({ //Renders each Item
		tagName: 'li', //name of (orphan) root tag in this.el
		initialize: function() {
			_.bindAll(this, 'render')
		},
		render: function() {
			$(this.el).html('<span>'+ this.model.get('part1')+ ' '+ this.model.get('part2')+ '</span>');
			return this; //makes it chainable like .render().el
		}
	});







	var ListView = Backbone.View.extend({
		el: $('body'),

		events: { //where DOM events get bound to VIEW
			'click button#add' : 'addItem'
		},


		initialize: function() {
			_.bindAll(this, 'render', 'addItem', 'appendItem');

			this.collection = new List();
			this.collection.bind('add', this.appendItem); //collection event binder

			this.counter = 0; //total number of items added so far
			this.render();
		},

		render: function(){
			var self = this;
			$(this.el).append("<button id='add'>Add list item </button>");
			$(this.el).append("<ul></ul>");

			//_(this.collection.models).each(function(item) {
			//	self.appendItem(item);
			//}, this );
		},
		addItem: function() {
			this.counter++;
			var item = new Item();
			item.set({
				part2: item.get('part2') + this.counter //modify item defaults
			});
			this.collection.add(item); //add item to collection view updates with use of add

			//$('ul', this.el).append("<li>hello world" + this.counter + "</li>"); //this.el is the context
		},
		appendItem: function(item) {
			var itemView = new ItemView ({
				model: item
			});

			$('ul', this.el).append(itemView.render().el);
		}
	});

	var listView = new ListView();




})