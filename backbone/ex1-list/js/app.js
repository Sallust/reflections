$(function(){
	//This is the model
	var Service = Backbone.Model.extend({
		//has 3 attributes
		//here are the default values

		defaults: {
			title: 'My service',
			price: 100,
			checked: false
		},

		//Helper function for checking/unchecking a service
		toggle: function() {
			this.set('checked', !this.get('checked'));
		}
	});

	//Create a collection of services
	var ServiceList = Backbone.Collection.extend({

		//Will hold objects of the Service Model
		model: Service,


		//Return an array only with the checked services
		getChecked: function() {
			return this.where({checked:true});
		}
	});


	//Prefill the collection with a number of services
	var services = new ServiceList([
		new Service({ title: 'web development', price: 400}),
		new Service({ title: 'web design', price: 200}),
		new Service({ title: 'pretty pictures', price: 800}),
		new Service({ title: 'hand holding', price: 150}),
		new Service({ title: 'emotional support', price: 300})
	]);

	//This View turns a Service Model into HTML. Will create LI elements
	var ServiceView = Backbone.View.extend({
		tagName: 'li',

		events: {
			'click': 'toggleService'
		},

		initialize: function() {
			//Set up event listeners .
			//Change event raised when a property changes
			this.listenTo(this.model, 'change', this.render);
		},
		render: function() {

			//Create the HTML
			this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '"/>' + this.model.get('title') + '<span>$' + this.model.get('price') + '</span>');
			this.$('input').prop('checked', this.model.get('checked'));


			//Returning the obj is good practice
			//allows for chaining
			return this;
		},
		toggleService: function() {
			this.model.toggle();
		}
	});


	//The main view of the application
	var App = Backbone.View.extend({


		//Base the view on an existing element
		el: $('#main'),

		initialize: function () {

			//Cache these selectors
			this.total = $('#total span');
			this.list = $('#services');


			//Listen for change event on collection
			//Equivalent to listening to every single service
			//object in the collection
			this.listenTo(services, 'change', this.render);

			//Create views for each of the services in the collection
			//Add them to the page

			services.each(function(service){

				var view = new ServiceView({ model: service });
				this.list.append(view.render().el);
			}, this); //Set this context in the callback
		},

		render: function() {

			//Calculate the total order amount
			//Add prices of only checked items

			var total = 0;
			console.log('sup');

			console.log(services.getChecked());
			_.each(services.getChecked(), function(elem) {
				total += elem.get('price');
				console.log("sup")
			});

			//Update the total price
			this.total.text('$'+ total);

			return this;

		}
	});

	new App();

});

