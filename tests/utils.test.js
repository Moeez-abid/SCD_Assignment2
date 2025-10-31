const { getTimestamp, md5 } = require('../src/utils');

describe('Utility functions', () => {

  test('getTimestamp correctly converts HH:MM:SS to seconds', () => {
    expect(getTimestamp('01:00:00')).toBe(3600);
    expect(getTimestamp('00:30:30')).toBe(1830);
    expect(getTimestamp('02:10:15')).toBe(7815);
  });

  test('md5 returns correct hash for a given string', () => {
    const result = md5('hello');
    expect(result).toBe('5d41402abc4b2a76b9719d911017c592'); // known MD5 of "hello"
  });

});
