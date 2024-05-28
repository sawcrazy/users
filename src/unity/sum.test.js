const sum = require('./sum');

test('adds \'class\', \'name\' to equal class name', () => {
    expect(sum('class', 'name' )).toBe('class name');
});
test('adds undefined, \'name\' to equal name', () => {
    expect(sum(undefined, 'name' )).toBe('name');
});
test('adds \'class\', \'name\', 2 to class name 2', () => {
    expect(sum('class', 'name', 2 )).toBe('class name 2');
});
test('adds Length  to class name 12', () => {
    expect(sum('class', 'name', 2 )).toHaveLength(12);
});
test('there is a new flavor idea', () => {
    expect(sum() ).toBeDefined();
});
test('adds users to users', () => {
    expect(sum('users') ).toEqual('users');
});
test('adds user to user', () => {
    expect(sum('user') ).toStrictEqual('user');
});
describe('not.stringContaining', () => {
    const expected = sum('user');

    it('matches if the received value does not contain the expected substring', () => {
        expect('How are you?').toEqual(expect.not.stringContaining(expected));
    });
});
