import Standardizer from "../../../Standardizer";

export default class DialogIcon {
    public static readonly Empty: DialogIcon = Object.freeze(new DialogIcon("", ""));
    public static readonly Standardizer: Standardizer<DialogIcon> = new Standardizer(DialogIcon, (item) => new DialogIcon(item, undefined))

    public readonly name: string
    public readonly color: string

    public constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
}
