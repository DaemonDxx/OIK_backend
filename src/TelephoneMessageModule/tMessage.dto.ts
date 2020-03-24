export class CreateTMessageDto {

  readonly dateCreated: Date;
  readonly fromName: string;
  readonly toName: string;
  readonly fromPhone: string;
  readonly toPhone: string;
  readonly number: number;
  readonly points: [any];
  readonly status: boolean;
  readonly comment: string;

}
