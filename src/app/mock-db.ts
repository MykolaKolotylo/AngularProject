import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const payment = [
            {
                id: 0, year: 2018, month: 1,
                fixedUt: [{ id: 1, name: 'rent', sum: 43, persAcc: 543436 },
                { id: 2, name: 'heating', sum: 1100, persAcc: 657612 }],
                varUt: [{ id: 1, name: 'light', previous: 12343, current: 2, tariff: 2.05, sum: 0, persAcc: 12345 },
                { id: 2, name: 'water', previous: 435345, current: 26, tariff: 1.56, sum: 0, persAcc: 324354 },
                { id: 3, name: 'gas', previous: 112123, current: 21, tariff: 3.8, sum: 0, persAcc: 134253 }]
            },
            {
                id: 1, year: 2016, month: 2,
                fixedUt: [{ id: 1, name: 'rent', sum: 43, persAcc: 543436 },
                { id: 2, name: 'heating', sum: 1100, persAcc: 657612 }],
                varUt: [{ id: 1, name: 'light', previous: 12343, current: 2, tariff: 2.05, sum: 10, persAcc: 12345 },
                { id: 2, name: 'water', previous: 435345, current: 26, tariff: 1.56, sum: 20, persAcc: 324354 },
                { id: 3, name: 'gas', previous: 112123, current: 21, tariff: 3.8, sum: 30, persAcc: 134253 }]
            },
            {
                id: 2, year: 2016, month: 3,
                fixedUt: [{ id: 1, name: 'rent', sum: 43, persAcc: 543436 },
                { id: 2, name: 'heating', sum: 1100, persAcc: 657612 }],
                varUt: [{ id: 1, name: 'light', previous: 343, current: 12, tariff: 2.05, sum: 110, persAcc: 12345 },
                { id: 2, name: 'water', previous: 445, current: 216, tariff: 1.56, sum: 210, persAcc: 324354 },
                { id: 3, name: 'gas', previous: 123, current: 211, tariff: 3.8, sum: 310, persAcc: 134253 }]
            }
        ];
        const db = { payment };
        return db;
    }
}
