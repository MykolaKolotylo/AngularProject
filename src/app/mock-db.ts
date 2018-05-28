import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const payment = [
            {
                id: 1, year: 2018, month: 1,
                fixedUt: [{ id: 1, name: 'rent', sum: 43, persAcc: 543436 },
                { id: 2, name: 'heating', sum: 1100, persAcc: 657612 }],
                varUt: [{ id: 1, name: 'light', previous: 12343, current: 2, tariff: 2.05, sum: 10, persAcc: 12345 },
                { id: 2, name: 'water', previous: 435345, current: 26, tariff: 1.56, sum: 20, persAcc: 324354 },
                { id: 3, name: 'gas', previous: 112123, current: 21, tariff: 3.8, sum: 30, persAcc: 134253 }]
            }
        ];

        const fixUtilities = [
            {id: 1, name: 'rent', tariff: 0}
        ];

        const varUtilities = [
            {id: 1, name: 'light', tariff: 0}
        ];
        const db = { payment, fixUtilities, varUtilities };
        return db;
    }
}
