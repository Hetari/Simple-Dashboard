<template>
  <div class="flex items-center justify-center">
    <div class="p-1 h-screen w-full bg-[#F8F8F8]">
      <div class="bg-white py-4 mx-2 pr-5 mt-28 relative z-50 shadow-lg">
        <div class="flex justify-between">
          <h1 class="capitalize text-3xl ml-3 mb-5 font-bold">about us info</h1>
          <router-link to="/admin/about-us/add">
            <add-button />
          </router-link>
        </div>
        <div class="w-full ml-3">
          <table class="w-full border-0">
            <thead>
              <tr class="border-y-2">
                <th class="p-2 pl-0 text-start capitalize">subtitle</th>
                <th class="p-2 text-center capitalize">description</th>
                <th class="p-2 text-center capitalize">image</th>
                <th class="p-2 text-center capitalize">features title</th>
                <th class="p-2 text-center capitalize">features description</th>
                <th class="p-2 text-end capitalize">Edit/delete</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-2 pl-0 capitalize">text</td>
                <td class="p-2 flex justify-center">
                  <img src="@/assets/statistic.svg" alt="" />
                </td>
                <td class="p-2 capitalize">
                  <img class="mx-auto" src="@/assets/Mountain.svg" alt="" />
                </td>
                <td class="p-2 capitalize">
                  <p class="flex justify-center">text</p>
                </td>
                <td class="p-2 capitalize">
                  <p class="flex justify-center">text</p>
                </td>
                <td class="p-2">
                  <div class="flex justify-end">
                    <img
                      class="px-6 cursor-pointer"
                      src="@/assets/edit.svg"
                      alt="edit"
                    />
                    <img
                      src="@/assets/delete.svg"
                      alt="delete"
                      class="cursor-pointer"
                      @click="delete_flag = !delete_flag"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <transition name="delete" appear>
            <DeleteModal @closeModal="close_delete_modal" v-if="delete_flag" />
          </transition>
        </div>
      </div>
      <img
        class="absolute right-0 bottom-5 z-0"
        src="@/assets/dots2.svg"
        alt=""
      />
    </div>
  </div>
</template>
  
<script>
import SaveButton from "@/components/SaveButton.vue";
import AddButton from "@/components/AddButton.vue";
import DeleteModal from "@/components/DeleteModal.vue";
import { ref } from "vue";
import { Transition } from "vue";

export default {
  components: {
    SaveButton,
    AddButton,
    DeleteModal,
  },
  setup() {
    const delete_flag = ref(false);

    const close_delete_modal = () => {
      delete_flag.value = false;
    };
    return {
      delete_flag,
      close_delete_modal,
    };
  },
};
</script>

<style>
.delete-enter-from,
.delete-leave-to {
  opacity: 0;
}
.delete-enter-to,
.delete-leave-from {
  opacity: 1;
}
.delete-enter-active,
.delete-leave-active {
  transition: all 0.2s ease-in;
}
</style>