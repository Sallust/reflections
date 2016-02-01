$(function() {

	Backbone.sync = function(method, model, success, error) {
		success();
	}

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

		events: {
			'click span.swap': 'swap',
			'click span.delete': 'remove'
		},

		initialize: function() {
			_.bindAll(this, 'render', 'unrender', 'swap', 'remove');

			this.model.bind('change', this.render); //when the model changes, run its render function
			this.model.bind('remove', this.unrender); //when the model is removed, run its unrender function
		},

		render: function() {
			$(this.el).html('<span style="color:black;">'+ this.model.get('part1')+ ' '+ this.model.get('part2')+ '</span> &nbsp; &nbsp; <span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span> <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span> ');
			return this; //makes it chainable like .render().el
		},

		unrender: function() {
			$(this.el).remove();
		},

		swap: function() {
			var swapped =  {
				part1: this.model.get('part2'),
				part2: this.model.get('part1')
			};
			this.model.set(swapped);
		},

		remove: function() {
			this.model.destroy();
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