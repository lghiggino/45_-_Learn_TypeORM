import { RenavamService } from '../src/modules/renavam/renavam.service';

describe('renavam', function () {
  let renavamService: RenavamService;

  beforeEach(() => {
    renavamService = new RenavamService();
  });

  it('should return false if length is not 11', () => {
    const renavamValidation = renavamService.execute('1234567890');
    expect(renavamValidation).toBe(false);
  });

  it('should return true for 639884962', () => {
    const renavamValidation = renavamService.execute('639884962');
    expect(renavamValidation).toBe(true);
  });

  it('should return false if last digit is not valid', () => {
    const renavamValidation = renavamService.execute('16573291870');
    expect(renavamValidation).toBe(false);

    const renavamValidation1 = renavamService.execute('27469749591');
    expect(renavamValidation1).toBe(false);
  });

  it('should return true for 16573291876, 27469749590, 66155839392, 14660774399', () => {
    const renavamValidation = renavamService.execute('16573291876');
    expect(renavamValidation).toBe(true);

    const renavamValidation1 = renavamService.execute('27469749590');
    expect(renavamValidation1).toBe(true);

    const renavamValidation2 = renavamService.execute('66155839392');
    expect(renavamValidation2).toBe(true);

    const renavamValidation3 = renavamService.execute('14660774399');
    expect(renavamValidation3).toBe(true);
  });
});
