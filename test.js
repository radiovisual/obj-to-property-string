import test from 'ava';
import fn from './';

test('defaults to HTML property syntax', t => {
	t.is(fn({class: 'customClass', style: 'display:none;', id: '1'}), 'class="customClass" style="display:none;" id="1"');
});

test('custom spacer', t => {
	t.is(fn({foo: 'bar', baz: 'bet'}, {spacer: '::'}), 'foo="bar"::baz="bet"');
});

test('custom assignment', t => {
	t.is(fn({one: 'won', two: 'too'}, {assignment: ':'}), 'one:"won" two:"too"');
});

test('quoteValues: false', t => {
	t.is(fn({foo: 'bar', baz: 'bet'}, {quoteValues: false}), 'foo=bar baz=bet');
});

test('quoteString: false', t => {
	t.is(fn({foo: 'bar', baz: 'bet'}, {quoteString: '\''}), 'foo=\'bar\' baz=\'bet\''); // eslint-disable: no-useless-escape
});

test('ignores quoteString when quoteValues: false', t => {
	t.is(fn({foo: 'bar', baz: 'bet'}, {quoteString: 'X', quoteValues: false}), 'foo=bar baz=bet');
});

test('Complex usage: custom assignment + custom spacer', t => {
	t.is(fn({foo: 'bar', baz: 'bet'}, {assignment: ':', spacer: '::'}), 'foo:"bar"::baz:"bet"');
});

test('Complex usage: custom assignment + custom spacer + quoteString', t => {
	t.is(fn({foo: 'bar', baz: 'bet'}, {assignment: ':', spacer: '>>', quoteString: 'X'}), 'foo:XbarX>>baz:XbetX');
});

test('endLineChar option', t => {
	t.is(fn({foo: 'bar', baz: 'bet'}, {endLineChar: ',NEWLINE', spacer: '', quoteValues: false}), 'foo=bar,NEWLINEbaz=bet');
});

test('quoteKeys option', t => {
	t.is(fn({foo: 'bar', baz: 'bet'}, {quoteKeys: true}), '"foo"="bar" "baz"="bet"');
	t.is(fn({foo: 'bar', baz: 'bet'}, {quoteKeys: true, quoteString: '|'}), '|foo|=|bar| |baz|=|bet|');
	t.is(fn({foo: 'bar', baz: 'bet'}, {quoteKeys: false, quoteString: '|', spacer: ', ', assignment: ':'}), 'foo:|bar|, baz:|bet|');
	t.is(fn({foo: 'bar', baz: 'bet'}, {quoteKeys: false, quoteValues: false, quoteString: '|', spacer: ', ', assignment: ':'}), 'foo:bar, baz:bet');
});

