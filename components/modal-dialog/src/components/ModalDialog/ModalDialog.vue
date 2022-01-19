<template>
  <foo-modal
    :class="class"
    :visible="visible"
    :persistent="mandatory"
    :color="bgColor"
    @input="onInput"
  >
    <div class="dialog-head">
      <foo-icon v-if="icon_" :color="icon_.color">{{icon_.name}}</foo-icon>
      {{title}}
      
      <span class="dialog-close-button" @click="confirm(undefined)">x</span>
    </div>

    <div class="dialog-body">
      <p v-for="msg of messages" :key="msg">{{msg}}</p>
    </div>

    <slot />

    <div class="dialog-foot">
      <span v-for="btn of buttons" :key="btn.text">
        <foo-btn :class="btn.class" v-bind="btn.props" @click="onButtonClicked(btn)">
          <foo-icon>{{btn.icon}}</foo-icon>
          {{btn.text}}
        </foo-btn>
      <span>
    </div>
  </foo-modal>
</template>


<script lang="ts">
import Standardizer from "../../../../Standardizer";
import DialogIcon from "../DialogIcon";
import DialogButton from "../DialogButton";


export default {
  props: {
    class: { type: String, required: false, default: "" },
    bgColor: { type: String, required: false, default: "" },
    visible: { type: Boolean, required: true },
    mandatory: { type: Boolean, required: false, default: false },

    icon: { type: [String, DialogIcon], required: false, default: () => DialogIcon.Empty },
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
    icon_() { return DialogIcon.Standardizer.apply(this.icon); },
    messages() { return Standardizer.Array.apply(this.message); },
    buttons() { return Standardizer.Array.apply(this.button); },
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
