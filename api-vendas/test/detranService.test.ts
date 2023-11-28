import { DetranService } from '../src/modules/detran/detran.service';

describe('renavam', function () {
  let detranService: DetranService;

  beforeEach(() => {
    detranService = new DetranService();
  });

  it('should return false if length is not 11', () => {
    const renavamValidation = detranService.analyzeRenavam('1234567890');
    expect(renavamValidation).toBe(false);
  });

  it('should return true for older ranavam (9 digits)', () => {
    const renavamValidation = detranService.analyzeRenavam('639884962');
    expect(renavamValidation).toBe(true);
  });

  it('should return false if last digit is not valid', () => {
    const renavamValidation = detranService.analyzeRenavam('16573291870');
    expect(renavamValidation).toBe(false);

    const renavamValidation1 = detranService.analyzeRenavam('27469749591');
    expect(renavamValidation1).toBe(false);
  });

  it('should return true for STRINGS 16573291876, 27469749590, 66155839392, 14660774399', () => {
    const renavamValidation = detranService.analyzeRenavam('16573291876');
    expect(renavamValidation).toBe(true);

    const renavamValidation1 = detranService.analyzeRenavam('27469749590');
    expect(renavamValidation1).toBe(true);

    const renavamValidation2 = detranService.analyzeRenavam('66155839392');
    expect(renavamValidation2).toBe(true);

    const renavamValidation3 = detranService.analyzeRenavam('14660774399');
    expect(renavamValidation3).toBe(true);
  });

  it('should return true for NUMBERS 16573291876, 27469749590, 66155839392, 14660774399', () => {
    const renavamValidation = detranService.analyzeRenavam(16573291876);
    expect(renavamValidation).toBe(true);

    const renavamValidation1 = detranService.analyzeRenavam(27469749590);
    expect(renavamValidation1).toBe(true);

    const renavamValidation2 = detranService.analyzeRenavam(66155839392);
    expect(renavamValidation2).toBe(true);

    const renavamValidation3 = detranService.analyzeRenavam(14660774399);
    expect(renavamValidation3).toBe(true);
  });
});

describe('licensePlate', function () {
  let detranService: DetranService;

  beforeEach(() => {
    detranService = new DetranService();
  });

  it('should return false if length is not 7', () => {
    const licensePlateValidation = detranService.analyzeLicensePlate('ABC123');
    expect(licensePlateValidation).toBe(false);
  });

  it('should return true for older licensePlate schema (3 letters, 4 digits)', () => {
    const licensePlateValidation = detranService.analyzeLicensePlate('ABC1234');
    expect(licensePlateValidation).toBe(true);

    const licensePlateValidation1 = detranService.analyzeLicensePlate('JFK0601');
    expect(licensePlateValidation1).toBe(true);
  });

  it('should return true for newer schema (LLL-NLNN)', () => {
    const licensePlateValidation = detranService.analyzeLicensePlate('BRA0A12');
    expect(licensePlateValidation).toBe(true);

    const licensePlateValidation1 = detranService.analyzeLicensePlate('ABC1D23');
    expect(licensePlateValidation1).toBe(true);
  });
});
