import test from 'ava';
import {
	increment,
	decrement,
	toggle
} from '.';

test('increment', t => {
	t.deepEqual(increment('number')({number: 0}), {number: 1});
	t.deepEqual(increment('number')({number: -1}), {number: 0});
	t.deepEqual(increment('number')({number: 1}), {number: 2});
});

test('decrement', t => {
	t.deepEqual(decrement('number')({number: 0}), {number: -1});
	t.deepEqual(decrement('number')({number: -1}), {number: -2});
	t.deepEqual(decrement('number')({number: 1}), {number: 0});
});

test('toggle', t => {
	t.deepEqual(toggle('bool')({bool: false}), {bool: true});
	t.deepEqual(toggle('bool')({bool: true}), {bool: false});
});

test('reduce', t => {
	t.deepEqual(toggle('bool')({bool: false}), {bool: true});
	t.deepEqual(toggle('bool')({bool: true}), {bool: false});
});
