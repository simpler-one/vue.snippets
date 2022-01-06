export default class DialogButton {
    public text: string;
    public icon: string;
    public class: string;
    public props: object;

    public constructor(text: string, icon: string = "", cls: string = "", props: object = undefined) {
        this.text = text;
        this.icon = icon;
        this.class = cls;
        this.props = props ?? {};
    }

    public static constant(text: string, icon: string = "", cls: string = "", props: object = undefined): DialogButton {
        return Object.freeze(new DialogButton(text, icon, cls, props));
    }

    public clone(mutable=true) {
        const result = new DialogButton(
            this.text,
            this.icon,
            this.class,
            this.props,
        );

        return mutable ? result : Object.freeze(result);
    }
}
