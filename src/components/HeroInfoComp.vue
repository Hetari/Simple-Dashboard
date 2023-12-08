<template>
    <div class="p-1  w-full bg-[#F8F8F8]">
        <div class="bg-white rounded-lg ml-2 pr-5 pt-4 mt-28 relative z-50">
            <div class="flex justify-between ">

                <h1 class=" capitalize text-3xl ml-3 mb-5 font-bold">hero info</h1>
               
                <button class="bg-[#F3AF1C] w-16 h-11 rounded-md flex items-center justify-center">
                    <img src="../assets/right-arrow.svg" alt="">
                </button>

            </div>

            <form class="text-lg ml-3" action="">

                <div class="grid grid-cols-10">
                    <div class="col-span-3 uppercase font-semibold">
                        title
                    </div>
                    <div class="col-span-7 mb-5">
                        <input class="w-full pl-4 h-10 border border-solid rounded-lg" type="text" name="title"
                            placeholder="TITLE...">
                    </div>
                </div>

                <div class="grid grid-cols-10">
                    <div class="col-span-3 uppercase font-semibold">
                        subtitle
                    </div>
                    <div class="col-span-7 mb-5">
                        <input class="w-full pl-4 h-10 border border-solid rounded-lg" type="text" name="subtitle"
                            placeholder="SUBTITLE...">
                    </div>
                </div>

                <div class="grid grid-cols-10">
                    <div class="col-span-3 uppercase font-semibold">
                        image
                    </div>
                    <div class="col-span-7 pb-5">
                        <input class="custom-file-input bg-[#D9D9D9] w-full h-10 border border-solid rounded-lg "
                            type="file" name="subtitle">
                    </div>
                </div>

                <div class="grid grid-cols-10">
                    <div class="col-span-3 uppercase font-semibold">
                        description
                    </div>
                    <div class="col-span-7 mb-5">
                        <textarea class="w-full pl-4 h-20 border border-solid rounded-lg" name="description" id=""
                            cols="100" rows="3" placeholder="DESCRIPTION..."></textarea>

                    </div>
                </div>

                <div class="flex justify-end">
                    <button class="bg-[#1c23c0fc] capitalize text-white rounded-md px-8 py-2 mb-5">save</button>
                </div>

            </form>
        </div>
        <img class="absolute right-0 bottom-5 z-0" src="../assets/dots2.svg" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style>
.custom-file-input::-webkit-file-upload-button {
    display: none;

}

.custom-file-input::before {
    content: 'CHOOSE FILE';
    display: inline-block;
    /* background: linear-gradient(top, #f9f9f9, #e3e3e3); */
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    cursor: pointer;
    background: #fff;
    width: 20%;
}
</style> 