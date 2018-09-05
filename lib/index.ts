import * as _ from "lodash";

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

const sp_code = ['', '.', ',']
    

export function convert(text: string): string {
    if (typeof text !== 'string') {
        return `Convert ${typeof text} to String!!!`;
    }
    var lines = text.split("\r\n").map(lval => {
        console.log(lval);
        var tokens = _.words(lval).map(val => {
            var index = codes.findIndex(code => val.indexOf(code) > -1);
            return index > -1 ? '□' : '△';        
        });
        return tokens.join(' ');
    });
    return lines.join('\r\n');
}
