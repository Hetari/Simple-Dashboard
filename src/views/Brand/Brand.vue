<template>
  <div class="flex items-center justify-center">
    <div class="p-1 h-[calc(100vh - 4rem)] w-full bg-[#F8F8F8]">
      <div class="bg-white p-5 mx-2 mt-10 relative z-50 shadow-lg">
        <div class="flex justify-between">
          <h1 class="capitalize text-3xl ml-3 mb-5 font-bold">brand</h1>
          <router-link :to="{ name: 'AddBrand' }">
            <AddButton />
          </router-link>
        </div>
        <div class="w-full">
          <table class="w-full border-0">
            <thead>
              <tr class="border-y-2">
                <th class="p-2 pl-0 text-start capitalize">brand</th>
                <th class="p-2 text-center capitalize">link</th>
                <th class="p-2 text-end capitalize">Edit/delete</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-2">
                  <img src="@/assets/Mountain.svg" alt="" />
                </td>
                <td class="p-2 capitalize">
                  <a href="#" class="flex justify-center">text</a>
                </td>
                <td class="p-2">
                  <div class="flex justify-end">
                    <router-link
                      :to="{ name: 'EditBrand', params: { id: 123456789 } }"
                    >
                      <img
                        class="px-6 cursor-pointer"
                        src="@/assets/edit.svg"
                        alt="edit"
                      />
                    </router-link>
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
        class="absolute right-0 bottom-5 z-0 overflow-hidden"
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

export default {
  components: {
    SaveButton,
    AddButton,
    DeleteModal,
  },
  data() {
    return {
      delete_flag: false,
    };
  },
  methods: {
    close_delete_modal() {
      this.delete_flag = false;
    },
  },
};
</script>
