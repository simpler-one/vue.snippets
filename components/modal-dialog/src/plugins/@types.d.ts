import Vue from "vue"; // It's necessary for reference
import { ModalDialogHelper } from "@/components/ModalDialog";


declare module "vue/types/vue" {
    interface Vue {
        $dialog: ModalDialogHelper
    }
}
