requirejs.config({
    paths:{ // only load if AMD defines the alias as a dependency        
        "jQuery":["../bower_components/jquery/dist/jquery.min"]
    },
    shim:{

    },
    deps:['main'] // where our program begins execution
});