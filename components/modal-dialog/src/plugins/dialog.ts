import { ModalDialogHelper, ModalDialogProps } from "@/components/ModalDialog";


const DEFAULT_PROPS: { [mode: string]: ModalDialogProps } = {
    // Some props
};


export default function install({}, inject) {
    inject("dialog", new ModalDialogHelper());
}
