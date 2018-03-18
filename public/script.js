var app = new Vue({
  el: '#app',
  data: {
    genre: 'Test',
    setting: '',
    main_character_name: '',
    main_character_description: '',
    main_conflict: '',
    theme: '',
    other_char: [],
    other_char_name: '',
    other_char_profile: '',
    beginning: '',
    middle: '',
    ending: '',
    new_genre: '',
    new_setting: '',
    new_main_character_name: '',
    new_main_character_description: '',
    new_main_conflict: '',
    new_theme: '',
    new_beginning: '',
    new_middle: '',
    new_ending: '',
  },

  /*created is like the constructor. Instide the constructor, you want to initialize all of your values
  Inside of here you will want to call the get method for everything.

  Once the vue object that
  */
  created: function() {
    this.get_genre();
    this.get_other_char();
  },

  methods: {

        get_genre: function() {
            axios.get("/api/genre").then(function(response) {
                this.genre = response.data;
                console.log(this.genre);
                return true;
            }).catch(err => {});
        },

        enter_genre: function() {
            var request_body = {
                genre: this.new_genre,
            };
            console.log(this.new_genre);
            axios.post("/api/genre", request_body).then(function(response){
                this.genre = response.data;
                console.log(this.genre);
                console.log(genre);
                return true;
            });
        },

        add_other_char: function() {
            var request_body = {
              	name: this.other_char_name,
              	profile: this.other_char_profile,
            };
            axios.post("/api/other-char", request_body).then(function(response) {
              	this.other_char_name="";
                this.other_char_profile="";
              	this.get_other_char();
              	return true;
            }).catch(err => {});
        },

        delete_other_char: function(character) {
          axios.delete("/api/other-char/" + character.id).then(response => {
        	this.get_other_char();
        	return true;
          }).catch(err => {});
        },


        get_other_char: function() {
          axios.get("/api/other-char").then(function(response) {
              this.other_char = response.data;
              return true;
          }).catch(err => {});
        },
    },

    computed: {

        currentGenre: function() {
            return this.genre;
        }

    },
});
