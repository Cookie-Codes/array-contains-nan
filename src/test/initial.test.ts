import { arrayContainsNaN } from '../index';

test('Testing Array Contains Nan', () => {
    expect(arrayContainsNaN(['a', 'b', true, []])).toBeFalsy();
    expect(arrayContainsNaN(['a', 'b', undefined, []])).toBeFalsy();
    expect(arrayContainsNaN(['a', 'b', NaN, []])).toBeTruthy();
    expect(arrayContainsNaN([false, '', [], {}])).toBeFalsy();
});
