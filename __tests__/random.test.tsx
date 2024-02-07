const sum = ({first, second}: {first?: number; second?: number}) => {
  if (first !== undefined && second !== undefined) {
    return first + second;
  }
  return undefined;
};

describe('These are random tests', () => {
  it('should give the right result', () => {
    expect(sum({first: 1, second: 2})).toEqual(3);
  });

  it('should return undefined if one of the number is undefined', () => {
    expect(sum({first: 1, second: undefined})).toEqual(undefined);
  });

  it('should return 0 if both numbers are 0', () => {
    expect(sum({first: 0, second: 0})).toEqual(0);
  });
});
