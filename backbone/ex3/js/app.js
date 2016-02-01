
var Todo = Backbone.Model.extend({
	defaults: {
		title:'',
		completed:false
	},
	initialize: function() {
		console.log("Hey! I've been initialized!");
		this.on('change:title', function() {
			console.log('The title Value has changed!');
		})
	},
	setTitle: function(newTitle) {
		this.set({title: newTitle});
	}
});

var todo1 = new Todo();

console.log(JSON.stringify(todo1));

var todo2 = new Todo({
	title: 'Check the attributes of both model instances in the console.'
});

console.log(JSON.stringify(todo2));
console.log(todo2.get('title'));

var todoAttributes = todo2.toJSON();

console.log(todoAttributes);
todo2.set('title','I was set by the model.set method!')

console.log(todo2.get('title'));

var Person = new Backbone.Model({name: 'Jeremey'});

//Person.on("change:name", function() {
//	console.log('Name Changed!')
//})

//Person.set({name:'Andrew'});

//Person.set({name: 'Jeremey'}, {silent:true});

Person.validate = function(attrs) {
	if(!attrs.name) {
		return 'I need your name';
	}
}

var TodoView = Backbone.View.extend({
	initialize: function() {
		this.model.bind('change', _.bind(this.render, this));
	},
	tagName: 'li',

	todoTpl: _.template("An example template"),

	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit' : 'close'
	},

	initialize: function (options) {
		//to retain access to passed options
		//saved as follows
		this.options = options || {};
	},

	render: function() {
		this.$el.html( this.todoTpl (this.model.attributes));
		this.input = this.$('.edit');
		return this;
	},

	edit: function() {
		//executed when todo label is double clicked
	},

	close: function() {
		//executed when todo loses focus
	},
	updateOnEnter: function() {

	}
})

var todoView = new TodoView();

console.log(todoView.el); // logs <li></li>

var NewTodo = Backbone.View.extend({
	tagName: 'ul',
	className: 'container',
	id: 'my-ul'

});

var newTodo = new NewTodo();

//using setElement

var button1 = $('<button></button>');
var button2 = $('<button></button>');

var View = Backbone.View.extend({
	events: {
		click: function(e) {
			console.log(view.el === e.target);
			console.log(view.el);
			console.log(e);
		}
	}
})

var view = new View({el: button1});

view.setElement(button2);

//using render

var ListView = Backbone.View.extend({
	//template:_.template(),
	render: function() {
		var items = this.model.get('items');

		_.each(items, function(item) {
			var itemView = new ItemView({ model: item });
			this.$el.append( itemView.render().el );
		}, this);


		this.$el.html(this.template(this.model.attributes));
		return this;
	}
})

var ItemView = Backbone.View.extend({
	events: {},
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
})

var TodosCollection = new Backbone.Collection();

TodosCollection.on('add', function(todo) {
	console.log('I should'  + todo.get('title') + 'Have I done it before?' + (todo.get('completed') ? 'yeah!' : 'No'));
})


TodosCollection.add([
  { title: 'go to Jamaica', completed: false },
  { title: 'go to China', completed: false },
  { title: 'go to Disneyland', completed: true }
]);

// The above logs:
// I should go to Jamaica. Have I done it before? No.
// I should go to China. Have I done it before? No.
// I should go to Disneyland. Have I done it before? Yeah!

var todos = new Backbone.Collection();

todos.add ([
	{ title: 'go to Belgium.', completed: false},
	{ title: 'go to China.', completed: false},
	{ title: 'go to Austria.', completed: true}
])

todos.forEach(function(model) {
	console.log(model.get('title'));
});

var sortedByAlphabet = todos.sortBy(function(todo) {
	return todo.get('title').toLowerCase();
});

sortedByAlphabet.forEach(function(model) {
	console.log(model.get('title'))
})

var count = 1;
console.log(todos.map(function(model){
	return count++ + ". " + model.get('title');
}))

var collection = new Backbone.Collection([
	{name: 'Tim', age: 5},
	{name: 'Ida', age: 25},
	{name: 'Rob', age: 45}
])

var filteredNames = collection.chain()
	.filter(function(item) {return item.get('age') > 10; })
	.map (function(item){ return item.get('name'); })
	.value();

	// logs: ['Ida', 'Rob']
var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	}
})

var NewTodosCollection = Backbone.Collection.extend({
	model:Todo
})
//Working with Events

var ourObject = {};

_.extend(ourObject, Backbone.Events);

function dancing (msg) {
	console.log ("We are dancing" + msg);
}
function jumping (msg) {
	console.log("We are jumping" + msg);
}

ourObject.on('move', dancing);
ourObject.on('move', jumping);

ourObject.trigger("move", "Yeah!"); //We are dancingYeah
 							// We are jumpingYeah


