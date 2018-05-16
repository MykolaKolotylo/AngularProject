export class VarUtilities {
    id: number;
    name: string;
    previous: number;
    current: number;
    tariff: number;
    sum: number;
    persAcc: number;
}

export class FixedUtilities {
    id: number;
    name: string;
    sum: number;
    persAcc: number;
}

export class Address {
    id: number;
    city: string;
    street: string;
    numHouse: number;
    numApartment: number;
}

export class Payment {
    id: number;
    year: number;
    month: string;
    fixedUt: FixedUtilities[];
    varUt: VarUtilities[];
}
