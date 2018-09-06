# TVCN
TVCN

Bộ chuyển đổi tiếng việt theo sách tiếng việt công nghệ cải cách

### Installation
```bash 
npm install --save tiengviet-to-tvcn
```

## Usage
### Nodejs
```bash
var tool = require('tiengviet-to-tvcn');
console.log(tool.convert('Tiếng Việt Công nghệ Giáo dục'));
Output should be '△ □ △ ◯ □ □'
```

### TypeScript
```bash
import * as tool from 'tiengviet-to-tvcn';
console.log(tool.convert('Tiếng Việt Công nghệ Giáo dục'));
Output should be '△ □ △ ◯ □ □'
```

## Test
```bash 
npm run test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
    Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.2 Initial release
* 0.1.3 Edit a few surplus things && edit README.md