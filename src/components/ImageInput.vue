<template>
  <div class="grid grid-cols-10">
    <div class="col-span-3 uppercase font-semibold">{{ file_type }}</div>
    <div class="col-span-7 pb-5">
      <div
        @click="pickFile"
        class="flex pl-4 w-full h-10 border border-solid rounded-lg"
      >
        <div class="w-[25%] text-gray-400 uppercase">CHOOSE FILE</div>
        <div
          class="w-[75%] bg-[#D9D9D9] pl-2 text-gray-400 rounded-tr-lg rounded-br-lg"
        >
          {{ name }}
        </div>
      </div>
      <input type="file" hidden ref="file" @change="getFileName" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["file_type"],
  data() {
    return {
      name: "NO FILE CHOSEN",
    };
  },
  methods: {
    pickFile() {
      this.$refs.file.click();
    },
    getFileName(e) {
      this.name = e.target.files[0].name;
    },
  },
};
</script>


<style></style>