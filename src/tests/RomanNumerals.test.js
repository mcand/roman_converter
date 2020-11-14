import RomanNumerals from '../Services/RomanNumerals.js'

const errorMessage = 'You can only convert integers from 0 to 4000';

describe('RomanNumbers', () => {
  describe('.toRoman', () => {
    it('should not be possible to convert a floating number', () => {
      expect(() => RomanNumerals.toRoman(2.5)).toThrow(errorMessage);
    });

    it('should not be possible to convert a negative integer', () => {
      expect(() => RomanNumerals.toRoman(-3)).toThrow(errorMessage);
    });

    it('should not be possible to convert a string', () => {
      expect(() => RomanNumerals.toRoman('4')).toThrow(errorMessage);
    });

    it('should not be possible to convert zero', () => {
      expect(() => RomanNumerals.toRoman(0)).toThrow(errorMessage);
    });

    it('should be possible to convert 1 to roman', () => {
      expect(RomanNumerals.toRoman(1)).toEqual('I');
    });

    it('shold be possible to convert 2009 to roman', () => {
      expect(RomanNumerals.toRoman(2009)).toEqual('MMIX');
    });

    it('should be possible to convert 1986 to roman', () => {
      expect(RomanNumerals.toRoman(1986)).toEqual('MCMLXXXVI');
    });
  });

  describe('.fromRoman', () => {
    it('should be possible to convert I to decimal', () => {
      expect(RomanNumerals.fromRoman('I')).toEqual(1);
    });
90
    it('should be possible to convert MCMLXXXVI to decimal', () => {
      expect(RomanNumerals.fromRoman('MCMLXXXVI')).toEqual(1986);
    });

    it('should be possible to convert MMIX to decimal', () => {
      expect(RomanNumerals.fromRoman('MMIX')).toEqual(2009);
    });

    it('shold not be possible to convert an invalid roman number', () => {
      expect(RomanNumerals.fromRoman('JJJJJJ')).toBe(0);
    });
  });
});