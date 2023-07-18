const calculator = function ( a, b, op ) {
    if( op == '+' ){
        return a + b;
    }else if( op == '-' ){
        return a - b;
    }else if( op == '*' ){
        return a * b;
    }else if( op == '%' || op == '/' ){
        return a / b;
    }else{
        console.log( 'Invalid operator');
        return null;
    }
}

console.log( calculator(101,9,'+') )