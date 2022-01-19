import ModalDialog from "./ModalDialog.vue";
import ModalDialogProps from "./ModalDialogProps";
import ModalDialogListeners from "./ModalDialogProps";
import ModalDialogHelper from "./ModalDialogHelper";

namespace ModalDialog {
    export type Props = ModalDialogProps;
    export type Listeners = ModalDialogListeners;
    export const Helper = ModalDialogHelper;
}

export default ModalDialog;
