function solution(string) {
    var camelCase = '';
    for (let i = 0; i < string.length; i++) {
        var string_char = string.slice(i, i + 1);
        if (string_char == string_char.toLowerCase()) {
            camelCase += string_char;
        } else {
            camelCase += ' ' + string_char;
        }
    }
    return camelCase;
} 