function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function namedFunction(something){
        return something;
    }
}

function returnsAnAnonymousFunction(){
    return function(something){
        return something;
    }

}