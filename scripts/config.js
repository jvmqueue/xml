requirejs.config({
    paths:{ // only load if AMD defines the alias as a dependency        
        "getData":["http/getData"],
        "util":["util/util"],
        "jQuery":["../bower_components/jquery/dist/jquery.min"]
    },
    shim:{
        'jQuery':{
            exports:'$'
        }
    },
    deps:['main'] // where our program begins execution
});