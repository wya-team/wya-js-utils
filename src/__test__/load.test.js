import { Load } from '..';

describe('device.js', () => {
	test('验证api', () => {
		expect(typeof Load).toBe('object');
		expect(typeof Load.css('2')).toBe('object');
		expect(typeof Load.js('2')).toBe('object');
		expect(typeof Load.cssCode('2')).toBe('undefined');

		let code = 'a { color: red }';
		Load.cssCode(code, { id: 'TEST' });
		expect(document.getElementById('TEST').innerHTML).toBe(code);

		Load.removeCssCode('TEST');

		expect(document.getElementById('TEST')).toBe(null);
	});
});
