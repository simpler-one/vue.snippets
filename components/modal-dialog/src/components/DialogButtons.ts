import DialogButton from "./DialogButton";


const Ok = new DialogButton("OK");
const Yes = new DialogButton("Yes");
const No = new DialogButton("No");
const Cancel = new DialogButton("Cancel");


const DialogButtons = Object.freeze({
    Ok,
    Yes,
    No,
    Cancel,
    //
    // array
    YesNo = Object.freeze([Yes, No]),
    YesNoCancel = Object.freeze([Yes, No, Cancel]),
});

export default DialogButtons;
