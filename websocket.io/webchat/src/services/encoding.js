function convertStringToHex(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {//string to hex code
       arr[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "3ndc0d3c17" + arr.join("3ndc0d3c17");
}

var string = ['server'];

for(var i = 0; i < string.length; i++) {
    module.exports = {
        convertStringToHex : convertStringToHex(string[i]),
    }
}













































