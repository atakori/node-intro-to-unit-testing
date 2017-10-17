const should = require('chai');
const fizzbuzzer = require('../fizzBuzzer');

describe('fizzbuzzer', function() {
//testing the normal case
	it('Should return the words fizz,buzz, or fizzbuzz', function() {
		//array with normal cases
		const normalCases = [
			{num: 15, expected: 'fizz-buzz'},
			{num: 5, expected: 'buzz'},
			{num: 3, expected: 'fizz'}
		];
		//for each case, fizzBuzzer should produce the expected string
		normalCases.forEach(function(input) {
			const response = fizzbuzzer(input.num);
			response.should.equal(input.expected);
		});
	});

//testing the edge case
	it('Should throw an error', function() {
		//array with normal cases
		const edgeCases = [
			{num: 'fizzy-buzzy', expected: 'fizz-buzz'},
			{num: true, expected: 'buzz'},
			{num: undefined, expected: 'buzz'}
		];
		//for each case, fizzBuzzer should produce the expected string
		edgeCases.forEach(function(input) {
			(function() {
				fizzbuzzer(input.num)
			}).should.throw(Error);
		});
	});
});