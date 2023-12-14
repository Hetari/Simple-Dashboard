<template>
  <div class="grid grid-cols-10">
    <div class="col-span-2 uppercase text-xl">{{ text }}</div>
    <div class="col-span-8 mb-5">
      <input
        class="w-full h-12 pl-4 border border-solid rounded-lg"
        :type="type"
        :name="name"
        :id="id"
        :placeholder="placeholder"
      />
      <!-- v-model="text"
        @input="$emit('input', text)" -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NormalInput",
  props: ["text", "name", "id", "placeholder", "type"],
  data() {
    return {
      // text: "",
    };
  },
};
</script>

<style></style>