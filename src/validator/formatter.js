

let trim  = function(){
    word = "   functionUp   "
    result = word.trim();
    return result;
}

let changetoLowerCase  = function(){
    word = "FUNCTIONUP LOWER"
    result = word.toLowerCase();
    return result;
}

let changeToUpperCase  = function(){
    word = "functionUp upper"
    result = word.toUpperCase();
    return result;
}
module.exports.gettrim = trim
module.exports.getlower = changetoLowerCase
module.exports.getupper = changeToUpperCase