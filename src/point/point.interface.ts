import {Documnet} from 'mongoose';

export interface Point extends Documnet {

    readonly pointNumber: string;
    readonly name: string;
    readonly power: number;
    readonly address: string;
    readonly contractNumber: string;
    readonly area: string;
    readonly date: string;
    readonly deviceNumber: string;
    readonly capacity: number;
    readonly lastIndication: string;

}
