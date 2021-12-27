import DialogIcon from "./DialogIcon";
import DialogButton from "./DialogButton";


export default interface ModalDialogProps {
    visible: boolean
    mandatory: boolean
    icon: string | ModalIcon
    title: string
    message: string | string[]
    button: DialogButton | DialogButton[]
}
