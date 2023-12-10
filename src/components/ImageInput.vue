<template>
  <div class="grid grid-cols-10">
    <div class="col-span-3 uppercase font-semibold">image</div>
    <div class="col-span-7 pb-5">
      <div
        @click="pickFile"
        class="flex items-center pl-4 w-full h-[100%] 0border border-solid rounded-lg cursor-pointer"
      >
        <div class="w-[25%] text-gray-400 uppercase">choose file</div>
        <div
          class="w-[75%] pl-2 bg-[#D9D9D9] text-gray-400 rounded-tr-lg rounded-br-lg"
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