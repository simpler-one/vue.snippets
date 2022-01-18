import Vue from "vue";
import { ModalDialogHelper, ModalDialogProps } from "@/components/ModalDialog";


const DEFAULT_PROPS: { [mode: string]: ModalDialogProps } = {
    // Some props
};


export default function install({}, inject) {
    inject("dialog", Vue.observable(new ModalDialogHelper()));
}
