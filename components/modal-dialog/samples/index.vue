<template>
  <ModalDialog v-bind="dialog.props" v-on="dialog.listeners" />

  <div>
    <div>
      <button @click="onNormalClicked">Normal</button>: {{normalDialogResult}}
    </div>
    <div>
      <button @click="onNormalClicked">Info</button>: {{infoDialogResult}}
    </div>
    <div>
      <button @click="onNormalClicked">Warn</button>: {{warnDialogResult}}
    </div>
    <div>
      <button @click="onPluginClicked">Plugin</button>: {{pluginDialogResult}}
    </div>
    <div>
      <button @click="onPluginClicked">PluginAlert</button>: {{pluginAlertDialogResult}}
    </div>
  <div>
</tempalte>


<script>
import ModalDialog, { ModalDialogHelper, DialogButtons } from ".../components/ModalDialog";


export default {
  data() {
    return {
      dialog = new ModalDialogHelper(),
      normalDialogResult: "---",
      infoDialogResult: "---",
      warnDialogResult: "---",
      pluginDialogResult: "---",
      pluginAlertDialogResult: "---",
    };
  },
  
  methods: {
    async onNormalClicked() {
      const button = await this.dialog.show(
        "dialog title",
        ["message", "message", "message"],
        DialogButtons.Ok,
      );
      
      this.normalDialogResult = button?.text ?? "x";
    },
    async onInfoClicked() {
      const dialogResult = await this.dialog.info(
        "information title",
        ["message", "message", "message"],
        DialogButtons.Ok,
      );

      this.infoDialogResult = dialogResult?.text ?? "x";
      if (dialogResult === DialogButtons.Ok) {
        // Do something
      }
    },
    async onWarnClicked() {
      const dialogResult = await this.dialog.warn(
        "warning title",
        ["message", "message", "message"],
        DialogButtons.Ok,
      );

      this.warnDialogResult = dialogResult?.text ?? "x";
    },
    async onPluginClicked() {
      const button = await this.$dialog.show(
        "complete dialog",
        "message",
        [],
      );

      this.pluginDialogResult = button?.text ?? "x";
    },
    async onPluginAlertClicked() {
      const button = await this.$dialog.alert(
        "complete dialog",
        "message",
        DialogButtons.YesNo,
      );

      this.pluginAlertDialogResult = button?.text ?? "x";
    },
  },

  components: {
    ModalDialog,
  }
};
</script>


<style>
</style>
