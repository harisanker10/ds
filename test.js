const  LinkedList  = require('./LinkedList');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should insert element at specified index', () => {
    list.insert(1, 0);
    list.insert(2, 1);
    list.insert(3, 2);
    expect(list.toString()).toBe('1 -> 2 -> 3');
  });

  it('should append element to the end', () => {
    list.append(4);
    expect(list.toString()).toBe('1 -> 2 -> 3 -> 4');
  });

  it('should prepend element to the beginning', () => {
    list.prepend(5);
    expect(list.toString()).toBe('5 -> 1 -> 2 -> 3 -> 4');
  });

  it('should remove element at specified index', () => {
    list.removeFrom(1);
    expect(list.toString()).toBe('5 -> 2 -> 3 -> 4');
  });

  it('should remove element at the beginning', () => {
    list.removeFrom(0);
    expect(list.toString()).toBe('2 -> 3 -> 4');
  });

  it('should remove element at the end', () => {
    list.removeFrom(3);
    expect(list.toString()).toBe('2 -> 3');
  });

  it('should return true when element is found', () => {
    expect(list.includes(3)).toBe(true);
  });

  it('should return false when element is not found', () => {
    expect(list.includes(10)).toBe(false);
  });

  it('should return the index of the element', () => {
    expect(list.indexOf(3)).toBe(1);
  });

  it('should return -1 when element is not found', () => {
    expect(list.indexOf(10)).toBe(-1);
  });
});