$(function(){

    var model = {
        init: function() {
            //console.log(localStorage.notes);
            //if localStorage.notes is empty, set localStorage notes to empty array
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        //adds obj onto localStorage.notes (does this by converting notes to JSON and adding obj)
        add: function(obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data); //sets notes as the string version of data
        },

        //returns JSON version of all notes
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };


    var octopus = {
        //gets passed a input str on submit; calls model.add to add str to localStorage
        //tagged with property "content"
        //calls view.render
        addNewNote: function(noteStr) {
            model.add({
                content: noteStr,
                date: Date.now()
            });
            view.render();
        },

        //returns JSON version of all notes
        getNotes: function() {
            console.log(model.getAllNotes());
            return model.getAllNotes().reverse();
        },

        //does everything necessary to get app started i.e. init of model & view
        init: function() {
            model.init();
            view.init();
        }
    };


    var view = {
        init: function() {
            //sets view.noteList to ul node
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form'); //id of form 
            var newNoteContent = $('#new-note-content'); //id of input content
            newNoteForm.submit(function(e){  //on submit of form
                octopus.addNewNote(newNoteContent.val()); //sends input value to octopus
                newNoteContent.val('');//clears form
                e.preventDefault();
            });
            view.render(); //call to render on init
        },
        render: function(){

            var htmlStr = '';
            //JSON of local notes from octopus, from method, 
            octopus.getNotes().forEach(function(note){
                //for Each element of the array, add HTML of content
                htmlStr += '<li class="note">'+
                        note.content + '<span class="note-date">' + new Date(note.date).toString() + '</span>'
                    '</li>';
            });
            //sets html of ul lode to HTML of listed content
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();
});