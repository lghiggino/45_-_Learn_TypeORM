import fs from 'fs';
import path from 'path';
import CnabService from '../../services/cnabService';

const file = path.join(__dirname, '../fixtures', 'CNAB.txt');
const cnabTextBlock = fs.readFileSync(file, 'utf8');

const cnabParser = new CnabService();

const string =
    '3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       ';
const string2 =
    '5201903010000013200556418150633123****7687145607MARIA JOSEFINALOJA DO Ó - MATRIZ';

describe('Line By Line', () => {
    it('should make understable data out of a single line on the txt file', () => {
        const parsed = cnabParser.parse(string);
        expect(parsed.transactionType).toBe('3');
        expect(parsed.date).toBe('20190301');
        expect(parsed.value).toBe('0000014200');
        expect(parsed.cpf).toBe('09620676017');
        expect(parsed.cardNumber).toBe('4753****31531534');
        expect(parsed.hour).toBe('53');
        expect(parsed.storeOwnerName).toBe('JOÃO MACEDO');
        expect(parsed.storeName).toBe('BAR DO JOÃO');
    });

    it('should parse a fullfilled string', () => {
        const parsed2 = cnabParser.parse(string2);
        expect(parsed2.transactionType).toBe('5');
        expect(parsed2.date).toBe('20190301');
        expect(parsed2.value).toBe('0000013200');
        expect(parsed2.cpf).toBe('55641815063');
        expect(parsed2.cardNumber).toBe('3123****76871456');
        expect(parsed2.hour).toBe('07');
        expect(parsed2.storeOwnerName).toBe('MARIA JOSEFINA');
        expect(parsed2.storeName).toBe('LOJA DO Ó - MATRIZ');
    });
});

describe('split text rows into individual strings', () => {
    it('should split the txt file into 21 separated string', () => {
        const array = cnabParser.rowSplit(cnabTextBlock);
        expect(array.length).toBe(21);
    });
});
