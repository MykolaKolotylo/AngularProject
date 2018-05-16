import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const payment = [
            {
                id: 1, year: 2018, month: 'January',
                fixedUt: [{ id: 1, name: 'rent', sum: 43, persAcc: 543436 },
                { id: 2, name: 'heating', sum: 1100, persAcc: 657612 }],
                varUt: [{ id: 1, name: 'light', previous: 12343, current: 21, tariff: 2.05, sum: 764, persAcc: 12345 },
                { id: 2, name: 'water', previous: 435345, current: 26, tariff: 1.56, sum: 121, persAcc: 324354 },
                { id: 3, name: 'gas', previous: 112123, current: 21, tariff: 3.8, sum: 153, persAcc: 134253 }]
            },

            {
                id: 2, year: 2017, month: 'March',
                fixedUt: [{ id: 1, name: 'rent', sum: 453 },
                { id: 2, name: 'heating', sum: 100 }],
                varUt: [{ id: 1, name: 'light', previous: 12343, current: 21, tariff: 2.05, sum: 76214, persAcc: 12345 },
                { id: 2, name: 'water', previous: 435345, current: 26, tariff: 1.56, sum: 12431, persAcc: 324354 },
                { id: 3, name: 'gas', previous: 112123, current: 21, tariff: 3.8, sum: 15543, persAcc: 134253 }]
            },

            {
                id: 2, year: 2016, month: 'May',
                fixedUt: [{ id: 1, name: 'rent', sum: 45543 },
                { id: 2, name: 'heating', sum: 10540 }],
                varUt: [{ id: 1, name: 'light', previous: 12343, current: 21, tariff: 2.05, sum: 7214, persAcc: 12345 },
                { id: 2, name: 'water', previous: 435345, current: 26, tariff: 1.56, sum: 1243, persAcc: 324354 },
                { id: 3, name: 'gas', previous: 112123, current: 21, tariff: 3.8, sum: 5543, persAcc: 134253 }]
            }
        ];
        return { payment };
    }
}
