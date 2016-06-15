'use strict';
module.exports = function (obj, opts) {
	if (typeof obj !== 'object' && !Array.isArray(obj)) {
		throw new TypeError('obj-to-property-string expects an object');
	}

	opts = opts || {};

	if (opts.hasOwnProperty('spacer')) {
		opts.spacer = opts.spacer.length === 0 ? '' : opts.spacer;
	} else {
		opts.spacer = ' ';
	}

	opts.assignment = opts.assignment || '=';
	opts.quoteString = opts.quoteString || '"';
	opts.quoteValues = opts.quoteValues !== false;
	opts.endLineChar = opts.endLineChar || '';
	opts.quoteKeys = opts.quoteKeys === true;

	var str = '';

	Object.keys(obj).forEach(function (key, index, array) {
		str += opts.quoteKeys ? opts.quoteString + key + opts.quoteString : key;
		str += opts.assignment;
		str += opts.quoteValues ? opts.quoteString : '';
		str += obj[key];
		str += opts.quoteValues ? opts.quoteString : '';

		if (++index !== array.length) {
			str += opts.spacer;
			str += opts.endLineChar;
		}
	});

	return str;
};
