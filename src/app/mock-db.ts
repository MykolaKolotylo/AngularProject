import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const payment = [
            {
                id: 0, year: 2018, month: 1,
                fixedUt: [{ id: 1, name: 'rent', sum: 43, persAcc: 543436 },
                { id: 2, name: 'heating', sum: 1100, persAcc: 657612 }],
                varUt: [{ id: 1, name: 'light', previous: 12343, current: 2, tariff: 2.05, sum: 111, persAcc: 12345 },
                { id: 2, name: 'water', previous: 435345, current: 26, tariff: 1.56, sum: 121, persAcc: 324354 },
                { id: 3, name: 'gas', previous: 112123, current: 21, tariff: 3.8, sum: 153, persAcc: 134253 }]
            }
        ];
        const db = { payment };
        return db;
    }
}
