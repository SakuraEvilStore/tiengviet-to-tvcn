import words = require("lodash.words") 

const codes = [
    'iê',
    'yê',
    'uô',
    'ươ',
    'ch',
    'kh',
    'nh',
    'th',
    'ph',
    'gh',
    'ng',
    'ngh',
    'tr',
    'gi'
]    

export function convert(text: string): string {
    if (typeof text !== 'string') {
        return `Convert ${typeof text} to String!!!`;
    }
    var lines = text.split("\r\n").map(lval => {
        console.log(lval);
        var tokens = words(lval).map(val => {
            var index = codes.findIndex(code => val.indexOf(code) == 0);
            var index2 = codes.findIndex(code => val.indexOf(code) > 0);
			if(index > -1 && index2 > -1)
				return '◯';
			else if (index == -1 && index2 == -1)
				return '□';
			else
				return '△';
        });
        return tokens.join(' ');
    });
    return lines.join('\r\n');
}
