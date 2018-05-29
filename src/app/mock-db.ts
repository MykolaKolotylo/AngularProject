import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const payment = [
            {
                id: 1, year: undefined, month: undefined,
                fixedUt: [{ id: 1, name: 'rent', tariff: null }],
                varUt: [{ id: 1, name: 'light', previous: null, current: null, tariff: null, sum: null }]
            }
        ];

        const fixUtilities = [
            { id: 1, name: 'rent', tariff: null, fixMark: true }
        ];

        const varUtilities = [
            { id: 1, name: 'light', previous: null, current: null, tariff: null, sum: null, fixMark: false }
        ];
        const db = { payment, fixUtilities, varUtilities };
        return db;
    }
}
