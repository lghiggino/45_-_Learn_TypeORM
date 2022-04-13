import Cnab from '../models/Cnab.entity';
import CnabRepository from '../repositories/CnabRepository';

const cnabRepository = new CnabRepository();

type cnapParserType = {
    transactionType: string;
    date: string;
    value: string;
    cpf: string;
    cardNumber: string;
    hour: string;
    storeOwnerName: string;
    storeName: string;
};

export default class CnabService {
    public rowSplit(cnabTextBlock: string): string[] {
        const array = cnabTextBlock.split('\n');
        const filteredEmpties = array.filter(item => item.length !== 0);
        return filteredEmpties;
    }

    public parse(string: string): cnapParserType {
        const transactionType = string.slice(0, 1);
        const date = string.slice(1, 9);
        const value = string.slice(9, 19);
        const cpf = string.slice(19, 30);
        const cardNumber = string.slice(30, 46);
        const hour = string.slice(46, 48);
        const storeOwnerName = string.slice(48, 62).trim();
        const storeName = string.slice(62, 80).trim();

        return {
            transactionType,
            date,
            value,
            cpf,
            cardNumber,
            hour,
            storeOwnerName,
            storeName,
        };
    }

    public async createOne(cnabParsedType: cnapParserType): Promise<Cnab> {
        const cnabModel = {
            transactionTypeCode: cnabParsedType.transactionType,
            date: cnabParsedType.date,
            value: +cnabParsedType.value / 100,
            cpf: cnabParsedType.cpf,
            cardNumber: cnabParsedType.cardNumber,
            hour: cnabParsedType.hour,
            storeOwnerName: cnabParsedType.storeOwnerName,
            storeName: cnabParsedType.storeName,
        };

        const savedCnab = await cnabRepository.createOne(cnabModel);
        return savedCnab;
    }
}
