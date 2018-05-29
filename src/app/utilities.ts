export class Payment {
    year: number;
    month: number;
    fixedUt: FixUtility[];
    varUt: VarUtility[];

}

export class FixUtility {
    id: number;
    name: string;
    tariff: number;
    fixMark: boolean;
}

export class VarUtility {
    id: number;
    name: string;
    previous: number;
    current: number;
    tariff: number;
    sum: number;
    fixMark: boolean;
}


