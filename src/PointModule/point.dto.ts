// TODO: - Добавить проверку типов
//       - Добавить проверку на пустые поля
//       - Добавить поле описание объекта
import { IsDate, IsDefined, IsNumber } from 'class-validator';

export class CreatePointDTO {

    @IsDefined()
    readonly pointNumber: string;

    @IsDefined()
    readonly name: string;

    @IsNumber()
    @IsDefined()
    readonly power: number;

    @IsDefined()
    readonly address: string;

    @IsDefined()
    readonly contractNumber: string;

    @IsDefined()
    readonly area: string;

    @IsDate()
    @IsDefined()
    readonly date: Date;

    @IsDefined()
    readonly deviceNumber: string;

    @IsNumber()
    @IsDefined()
    readonly capacity: number;

    @IsDefined()
    readonly lastIndication: string;

    @IsDefined()
    readonly typePoint: string;
}
