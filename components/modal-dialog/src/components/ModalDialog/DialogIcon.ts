export default class DialogIcon {
    public static Empty: DialogIcon = Object.freeze(new DialogIcon("", ""));

    public readonly name: string
    public readonly color: string

    public constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
}
