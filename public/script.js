var app = new Vue({
  el: '#app',
  data: {
    genre: '',
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


    this.get_setting();


    this.get_main_character_name();


    this.get_main_character_description();


    this.get_main_conflict();


    this.get_theme();


    this.get_beginning();


    this.get_middle();


    this.get_ending();

    this.get_other_char();

  },

  methods: {
      //Genre
        get_genre: function() {
            axios.get("/api/genre").then(response => {
                this.genre = response.data;
                return true;
            }).catch(err => {});
        },

        enter_genre: function() {
            var request_body = {
                genre: this.new_genre,
            };
            axios.post("/api/genre", request_body).then(response => {
                this.genre = response.data;
                return true;
            });
        },
        //Setting
        get_setting: function() {
            axios.get("/api/setting").then(response => {
                this.setting = response.data;
                return true;
            }).catch(err => {});
        },

        enter_setting: function() {
            var request_body = {
                setting: this.new_setting,
            };
            axios.post("/api/setting", request_body).then(response => {
                this.setting = response.data;
                return true;
            });
        },
        //Main Character Name
        get_main_character_name: function() {
            axios.get("/api/main_character_name").then(response => {
                this.main_character_name = response.data;
                return true;
            }).catch(err => {});
        },

        enter_main_character_name: function() {
            var request_body = {
                main_character_name: this.new_main_character_name,
            };
            axios.post("/api/main_character_name", request_body).then(response => {
                this.main_character_name = response.data;
                return true;
            });
        },

        //Main Character Description
        get_main_character_description: function() {
            axios.get("/api/main_character_description").then(response => {
                this.main_character_description = response.data;
                return true;
            }).catch(err => {});
        },

        enter_main_character_description: function() {
            var request_body = {
                main_character_description: this.new_main_character_description,
            };
            axios.post("/api/main_character_description", request_body).then(response => {
                this.main_character_description = response.data;
                return true;
            });
        },

        //Main Conflict
        get_main_conflict: function() {
            axios.get("/api/main_conflict").then(response => {
                this.main_conflict = response.data;
                return true;
            }).catch(err => {});
        },

        enter_main_conflict: function() {
            var request_body = {
                main_conflict: this.new_main_conflict,
            };
            axios.post("/api/main_conflict", request_body).then(response => {
                this.main_conflict = response.data;
                return true;
            });
        },

        //Theme
        get_theme: function() {
            axios.get("/api/theme").then(response => {
                this.theme = response.data;
                return true;
            }).catch(err => {});
        },

        enter_theme: function() {
            var request_body = {
                theme: this.new_theme,
            };
            axios.post("/api/theme", request_body).then(response => {
                this.theme = response.data;
                return true;
            });
        },

        //Beginning
        get_beginning: function() {
            axios.get("/api/beginning").then(response => {
                this.beginning = response.data;
                return true;
            }).catch(err => {});
        },

        enter_beginning: function() {
            var request_body = {
                beginning: this.new_beginning,
            };
            axios.post("/api/beginning", request_body).then(response => {
                this.beginning = response.data;
                return true;
            });
        },

        //Middle
        get_middle: function() {
            axios.get("/api/middle").then(response => {
                this.middle = response.data;
                return true;
            }).catch(err => {});
        },

        enter_middle: function() {
            var request_body = {
                middle: this.new_middle,
            };
            axios.post("/api/middle", request_body).then(response => {
                this.middle = response.data;
                return true;
            });
        },

        //Ending
        get_ending: function() {
            axios.get("/api/ending").then(response => {
                this.ending = response.data;
                return true;
            }).catch(err => {});
        },

        enter_ending: function() {
            var request_body = {
                ending: this.new_ending,
            };
            axios.post("/api/ending", request_body).then(response => {
                this.ending = response.data;
                return true;
            });
        },



        //Other Characters
        add_other_char: function() {
            var request_body = {
              	name: this.other_char_name,
              	profile: this.other_char_profile,
            };
            axios.post("/api/other-char", request_body).then(response => {
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
          axios.get("/api/other-char").then(response => {
              this.other_char = response.data;
              return true;
          }).catch(err => {});
        },
    },

    computed: {


    },
});
