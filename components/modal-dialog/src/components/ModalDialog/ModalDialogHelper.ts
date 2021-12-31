import ModalDialogProps from "./ModalDialogProps";
import ModalDialogListeners from "./ModalDialogListeners";
import DialogIcon from "./DialogIcon";
import DialogButton from "./DialogButton";


export default class ModalDialogHelper {
    public props: ModalDialogProps;
    public readonly listeners: ModalDialogListeners;

    private defaultProps: DefaultPropsTable;
    private callbacks: ModalDialogListeners;

    public constructor(defaultProps: DefaultPropsTable) {
        this.defaultProps = defaultProps ?? {};
        this.props = {...DEFAULT_PROPS};
        this.listeners = {
            confirm: this.onConfirmed.bind(this),
        };
        this.callbacks = {};
    }

    public show(title: string, message: string | string[], button: DialogButton | DialogButton[], options?: ModalDialogProps): Promise<DialogButton> {
        return this.showAs("default", title, message, button, options);
    }

    public showAs(mode: string, title: string, message: string | string[], button?: DialogButton | DialogButton[], options?: ModalDialogProps): Promise<DialogButton> {
        this.callbacks.confirm?.(undefined);

        const opt = {
            ...this.defaultProps[mode],
            ...options,
        };
        this.props = {
            ...opt,
            visible: true,
            title,
            message,
            button: button ?? opt.button,
        };
        
        return new Promise<DialogButton>((resolve) => {
            this.callbacks.confirm = resolve;
        });
    }

    public hide(button: DialogButton = udnefined): void {
        this.callbacks.confirm?.(button);

        this.props.visible = false;
        this.callbacks.confirm = undefined;
    }

    public ask(title: string, message: string | string[], button?: DialogButton | DialogButton[], options?: ModalDialogProps): Promise<DialogButton> {
        return this.showAs("ask", title, message, button, options);
    }

    public info(title: string, message: string | string[], button?: DialogButton | DialogButton[], options?: ModalDialogProps): Promise<DialogButton> {
        return this.showAs("info", title, message, button, options);
    }

    public warn(title: string, message: string | string[], button?: DialogButton | DialogButton[], options?: ModalDialogProps): Promise<DialogButton> {
        return this.showAs("warn", title, message, button, options);
    }

    public error(title: string, message: string | string[], button?: DialogButton | DialogButton[], options?: ModalDialogProps): Promise<DialogButton> {
        return this.showAs("error", title, message, button, options);
    }
}

type DefaultPropsTable = {
    [mode: string]: ModalDialogProps,
    default?: ModalDialogProps,
    ask?: ModalDialogProps,
    info?: ModalDialogProps,
    warn?: ModalDialogProps,
    error?: ModalDialogProps,
};

const DEFAULT_PROPS: ModalDialogProps = {
    visible: false,
    icon: undefined,
    title: "",
    message: [],
    button: [],
};
