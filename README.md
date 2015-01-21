Showdown's Github Extension
==========================

[![Build Status](https://travis-ci.org/showdownjs/github-extension.svg)](https://travis-ci.org/showdownjs/github-extension.svg) [![npm version](https://badge.fury.io/js/showdown-github.svg)](http://badge.fury.io/js/showdown-github) [![npm version](https://badge.fury.io/bo/showdown-github.svg)](http://badge.fury.io/bo/showdown-github)

------

**Github extension for [showdown](https://github.com/showdownjs/showdown)**

Adds support for github flavored markdown.

## Installation

### With [npm](http://npmjs.org)

    npm install showdown-github

### With [bower](http://bower.io/)

    bower install showdown-github

### Manual

You can also [download the latest release zip or tarball](https://github.com/showdownjs/github-extension/releases) and include it in your webpage, after showdown:

    <script src="showdown.min.js">
    <script src="showdown-github.min.js">

### Enabling the extension

After including the extension in your application, you just need to enable it in showdown.

    var converter = new Showdown.converter({extensions: ['github']});

## Example

```javascript
var converter = new Showdown.converter({extensions: ['github']}),
    input = 'This is a ~~deleted text~~',
    html = converter.makeHtml(input);
    console.log(html);
```

This should output:

```html
<p>This is a <del>deleted text</del></p>
```

## License
These files are distributed under BSD license. For more information, please check the [LICENSE file](https://github.com/showdownjs/github-extension/blob/master/LICENSE) in the source code.

