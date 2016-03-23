module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "assets/scss/*.scss",
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
        dev: {
            files: {
                "assets/css/style.css" : "assets/scss/style.scss",
            }
        }
    },
    //wiredep
    wiredep:{
      task:{
        src:['index.html']
      }
    },

   browserSync: {
               dev: {
                   bsFiles: {
                       src : [
                           'assets/css/*.css',
                           '*.html'
                       ]
                   },
                   options: {
                       watchTask: true,
                       server: './'
                   }
               }
           }


  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['browserSync', 'watch']);
};

