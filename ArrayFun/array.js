function arrayFun( array , index ) {
    for( let i = index ; i < array.length ; i++ ){
        array[i] = array[i+1];
    }
    array.length--;
}

const cars = ["Saab", "Volvo", "BMW"];


arrayFun( cars, 0 )

console.log( cars );