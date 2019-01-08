import { numberColumnParser } from './../src/roman.js';



describe('numberColumnParser', function() {

  it("should convert the number '1' into the roman numeral 'I'.", function() {
    expect(numberColumnParser(1)).toEqual('I')
  });
  it("should convert the number '3' into the roman numeral 'III'.", function() {
    expect(numberColumnParser(3)).toEqual('III')
  });
  it("should convert the number '5' into the roman numeral 'V'.", function() {
    expect(numberColumnParser(5)).toEqual('V')
  });
  it("should convert the number '6' into the roman numeral 'VI'.", function() {
    expect(numberColumnParser(6)).toEqual('VI')
  });
  it("should convert the number '4' into the roman numeral 'IV'.", function() {
    expect(numberColumnParser(4)).toEqual('IV')
  });
  it("should convert the number '10' into the roman numeral 'X'.", function() {
    expect(numberColumnParser(10)).toEqual('X')
  });
  it("should convert the number '50' into the roman numeral 'L'.", function() {
    expect(numberColumnParser(50)).toEqual('L')
  });
  it("should convert the number '37' into the roman numeral 'XXXVII'.", function() {
    expect(numberColumnParser(37)).toEqual('XXXVII')
  });
  it("should convert the number '99' into the roman numeral 'XCIX'.", function() {
    expect(numberColumnParser(99)).toEqual('XCIX')
  });
  it("does not output a result for any number higher than 3,999.", function() {
    expect(numberColumnParser(4000)).toEqual('Number is too big')
  });
  it("does not work with negative integer inputs", function() {
    expect(numberColumnParser(-6)).toEqual('Number cannot be negative or zero')
  });
});
