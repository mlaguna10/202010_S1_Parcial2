export class Serie {

  constructor(private idA: number, private nameA: string,
    private channelA: string, private seasonA:number, private descriptionA: string,
    private webpageA: string, private posterA: string,) { }

    get id():number{return this.idA;}
    get name(): string { return this.nameA; }
    get channel(): string { return this.channelA; }
    get season(): number { return this.seasonA; }
    get webpage(): string { return this.webpageA; }
    get poster(): string { return this.posterA; }
    get description(): string { return this.descriptionA; }
}
