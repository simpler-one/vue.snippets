import DialogButton from "./DialogButton";


export default interface ModalDialogListeners {
    confirm: (button: DialogButton) => void
}
