<template>
  <foo-modal
    :class="class"
    :visible="visible"
    :persistent="mandatory"
    :color="bgColor"
    @input="onInput"
  >
    <div class="dialog-head">
      <foo-icon v-if="icon" :color="icon.color">{{icon.name}}</foo-icon>
      {{title}}
    </div>

    <div class="dialog-body">
      <p v-if="msg of messages">{{msg}}</p>
    </div>

    <div class="dialog-foot">
      <span v-for="btn of buttons">
        <foo-btn :class="btn.styleClass" @click="onButtonClicked(btn)">{{btn.text}}</foo-btn>
      <span>
    </div>
  </foo-modal>
</template>


<script>
const DEFAULT_ICON = { type: "", color: "" };


export default {
  props: {
    class: { type: String, required: false, default: "" },
    bgColor: { type: String, required: false, default: "" },
    visible: { type: Boolean, required: true },
    mandatory: { type: Boolean, required: false, default: false },

    icon: { type: [String, Object], required: false, default: () => DEFAULT_ICON },
    title: { type: String, required: false, default: "" },

    message: { type: [String, Array], required: false, default: () => [] },

    button: { type: [DialogButton, Array], required: false, default: () => [] },
  },
  emits: [
    "confirm",
  ],

  data() {
  },
  computed: {
    messages(): { return toArray(this.message); },
    buttons() { return toArray(this.button); },
  },

  methods: {
    confirm(button) {
      this.$emit("confirm", button);
    },

    //
    // event
    onButtonClicked(button) {
      this.confirm(button);
    },
    onInput(visible) {
      if (!visible) {
        this.confirm(undefined);
      }
    },
  },
};
</script>


<style>
</style>
