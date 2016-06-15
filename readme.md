# obj-to-property-string

> Convert a JavaScript object's key:value pairs into a [customizable] delimited property string

[![Build Status](https://travis-ci.org/radiovisual/obj-to-property-string.svg?branch=master)](https://travis-ci.org/radiovisual/obj-to-property-string)

Print out the `key:values` of any javascript object into a customizable property string. The default behavior is to print
the objects key:value pairs into a string that can be used on any HTML object, but you can customize any of the property
string's delimiters to get any custom string output you need. See the examples below to explore the numerous options and 
output formats.


## Install

```
$ npm install --save obj-to-property-string
```


## Usage

```js
const objToPropertyString = require('obj-to-property-string');

objToPropertyString({class: 'customClass', style: 'display:none;', id: '1'});
//=> 'class="customClass" style="display:none;" id="1"'
```


## API

### objToPropertyString(object, [options])

#### object

Type: `object`

The object with key:values you want to convert to a property string.

#### options

##### spacer

Type: `String`<br>
Default: `' '`  

The character you want to use in between printed values. Defaults to a single space.

```js
objToPropertyString({alpha: '1', beta: '2'}, {spacer: '::'});
//=> 'alpha="1"::beta="2"'
```

**Note:** The spacer value will not print after the final key:value pair

##### assignment

Type: `String`<br>
Default: `'='`  

The assignment operator or character you want to use to separate the key from the value. Defaults to the 
 assignment operator `=` (the equals sign).

```js
objToPropertyString({alpha: '1', beta: '2'}, {assignment: ':'});
//=> 'alpha:"1" beta:"2"'
```

##### quoteValues

Type: `Boolean`<br>
Default: `true`

Set this value to `false` if you don't want the quoteString value to wrap the value. For example, if you would prefer your string
to print like `foo=bar` instead of `foo="bar"`.

```js
objToPropertyString({alpha: '1', beta: '2'}, {quoteValues: false});
//=> 'alpha=1 beta=2'

objToPropertyString({alpha: '1', beta: '2'}, {quoteValues: false, assignment: ':'});
//=> 'alpha:1 beta:2'
```

##### quoteString

Type: `String`<br>
Default: `'"'` *(double quote)*

The character(s) you want to use to wrap the value in. Defaults to the double-quote character `"`. 

```js
objToPropertyString({alpha: '1', beta: '2'}, {quoteString: '|'});
//=> 'alpha=|1| beta=|2|'
```

##### endLineChar

Type: `String`<br>
Default: `''`  

Use this if you want to force a character to the end of your property string. For example, you could add a newline 
character to help add some formatting to your property string. Defaults to no value (empty string).

```js
objToPropertyString({alpha: '1', beta: '2', gamma: '3'}, {endLineChar: '\n'});
//=> 'alpha="1" \nbeta="2" \ngamma: "3"'
```

**Note:** The endLineChar value will not print after the final key:value pair

##### quoteKeys

Type: `Boolean`<br>
Default: `false`  

Set this value to `true` if you want to wrap the key (in **key**:value) with the `quoteString` character(s).

```js
objToPropertyString({alpha: '1', beta: '2'}, {quoteKeys: true});
//=> '"alpha"="1" "beta"="2"'
```


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
