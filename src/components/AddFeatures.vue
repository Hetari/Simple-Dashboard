<template>
  <div class="grid grid-cols-10">
    <div class="col-span-2 uppercase text-xl">Features</div>
    <div class="col-span-8 mb-5">
      <div
        class="w-full pl-4 h-12 border border-solid rounded-lg"
        @click="toggleModal"
      >
        <p
          class="flex items-center justify-center text-3xl text-[#B9B5B5] cursor-pointer"
        >
          +
        </p>
      </div>
    </div>
  </div>
  <Modal @closeModal="closeModal" v-if="showModal" />
</template>

<script>
import Modal from "@/components/FeatureModal.vue";

export default {
  components: { Modal },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style>
</style>