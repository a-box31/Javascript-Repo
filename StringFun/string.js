function remove( str , index ){
    return str.substring( 0, index ) + str.substring( index + 1, str.length );
}

console.log( remove("Hello World", 0) );


