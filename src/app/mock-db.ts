import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const payment = [
            {
                id: 1,
                year: undefined,
                month: undefined,
                fixedUt: [{ id: 1, name: 'rent', tariff: 54, isCheck: true },
                          {id: 2, name: 'heating', tariff: 545, isCheck: true }],
                varUt: [{ id: 1, name: 'light', previous: 32145, current: undefined, tariff: 0.90, sum: undefined, isCheck: false },
                        { id: 2, name: 'gas', previous: 32145, current: undefined, tariff: 6, sum: undefined, isCheck: false }]
            }
        ];

        const fixUtilities = [
            { id: 1, name: 'rent', tariff: 54, isCheck: true },
            { id: 2, name: 'heating', tariff: 545, isCheck: true }
        ];
        const varUtilities = [
            { id: 1, name: 'light', previous: 32145, current: undefined, tariff: 0.90, sum: undefined, isCheck: false },
            { id: 2, name: 'gas', previous: 32145, current: undefined, tariff: 6, sum: undefined, isCheck: false }
        ];
        const db = { payment, fixUtilities, varUtilities };
        return db;
    }
}
