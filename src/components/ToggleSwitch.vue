<template>
  <label for="toggleSwitch" class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      id="toggleSwitch"
      :checked="checked"
      @change="handleChange"
      class="hidden"
    />
    <div
      :style="{ backgroundColor: checked ? '#0F113C' : '#718096' }"
      class="relative w-12 h-5 rounded-full"
    >
      <div
        class="absolute w-6 h-5 bg-white rounded-full shadow-md transition-all ease-in-out"
        :class="{
          'transform translate-x-full': checked,
        }"
      ></div>
    </div>
  </label>
</template>
  
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkedInternal: this.value,
    };
  },
  computed: {
    checked: {
      get() {
        return this.checkedInternal;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    handleChange() {
      this.checkedInternal = !this.checkedInternal;
      this.$emit("input", this.checkedInternal);
    },
  },
};
</script>
