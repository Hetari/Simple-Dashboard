<template>
  <div class="grid grid-cols-10">
    <div class="col-span-3 uppercase font-semibold">{{ text }}</div>
    <div class="col-span-7 mb-5">
      <input
        class="w-full pl-4 h-10 border border-solid rounded-lg"
        :type="type"
        :name="name"
        :id="id"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "NormalInput",
  props: ["text", "name", "id", "placeholder", "type"],
  data() {
    return {};
  },
};
</script>

<style></style>