<template>
    <aside class=" min-h-screen  bg-[#0F113C] text-white  rounded-lg rounded-br-none pl-4 pt-5 shadow-sm  ">
        <img class="absolute left-0 top-[65%]" src="../assets/dots.svg" alt="">

        <img class="mt-3" src="../assets/logo.svg" alt="">
        <div class="flex items-end">
            <img src="../assets/star.svg" alt="">
        </div>
        <div class="flex items-end justify-end mb-2 w-[90%]">
            <img src="../assets/star.svg" alt="">
        </div>

        <h1 class=" text-3xl inline-block font-bold capitalize">Dashboard</h1>

        <ul class="ml-3 mt-[43px] capitalize">

            <li class="mb-7">

                <a class="flex items-center relative" @click.prevent="" @click="toggleShow('home')" href="">
                    <img src="../assets/Home_duotone.svg" alt="Home" class="pb-2.5 -translate-x-1" />
                    <p class="text-2xl inline-block ml-[13px]  ">home page</p>
                </a>

                <ul v-if="showItems['home']" class="ml-2 pt-2 mb-12">
                    <li
                        class="flex relative pb-[15px] not-last:pb-0  active:border-solid active:border-r-8 active:border-[#F3AF1C]">
                        <img class="absolute top-0 " src="../assets/arrow1.svg" alt="" />
                        <a @click.prevent="" class="ml-9 mt-0.5 text-lg active:text-[#F3AF1C]  " href="">
                            hero info</a>
                    </li>

                    <li class="flex relative not-last:pb-0 active:border-solid active:border-r-8 active:border-[#F3AF1C]">
                        <img class="absolute -top-7 " src="../assets/arrow2.svg" alt="" />
                        <a @click.prevent="" class="absolute text-lg  -top-2.5 ml-9 active:text-[#F3AF1C]  " href="">
                            Statistics</a>
                    </li>
                </ul>

            </li>

            <li class="pb-4">

                <a class="flex items-center relative" @click.prevent="" @click="toggleShow('special-service')" href="">
                    <img src="../assets/special-services.svg" alt="Home" class="pb-2.5 -translate-x-1" />
                    <p class="text-2xl inline-block ml-[13px]  ">special service</p>
                </a>

                <ul v-if="showItems['special-service']" class="ml-2 pt-2">
                    <li
                        class="flex relative pb-[15px] not-last:pb-0  active:border-solid active:border-r-8 active:border-[#F3AF1C]">
                        <img class="absolute top-0 " src="../assets/arrow1.svg" alt="" />
                        <a @click.prevent="" class="ml-9 mt-0.5 text-lg active:text-[#F3AF1C]  " href="">
                            special service</a>
                    </li>
                </ul>
            </li>

            <li class="pb-4">

                <a class="flex items-center relative" @click.prevent="" @click="toggleShow('about-us')" href="">
                    <img src="../assets/about-us.svg" alt="Home" class="pb-2.5 -translate-x-1" />
                    <p class="text-2xl inline-block ml-[13px]  ">about us</p>
                </a>

                <ul v-if="showItems['about-us']" class="ml-2 pt-2">
                    <li
                        class="flex relative pb-[15px] not-last:pb-0  active:border-solid active:border-r-8 active:border-[#F3AF1C]">
                        <img class="absolute top-0 " src="../assets/arrow1.svg" alt="" />
                        <a @click.prevent="" class="ml-9 mt-0.5 text-lg active:text-[#F3AF1C]  " href="">
                            about us info</a>
                    </li>

                </ul>
            </li>

            <li class="mb-7">

                <a class="flex items-center relative" @click.prevent="" @click="toggleShow('latest-services')" href="">
                    <img src="../assets/latest-services.svg" alt="Home" class="pb-2.5 -translate-x-1" />
                    <p class="text-2xl inline-block ml-[13px]  ">latest services</p>
                </a>

                <ul v-if="showItems['latest-services']" class="ml-2 pt-2 mb-12">
                    <li
                        class="flex relative pb-[15px] not-last:pb-0  active:border-solid active:border-r-8 active:border-[#F3AF1C]">
                        <img class="absolute top-0 " src="../assets/arrow1.svg" alt="" />
                        <a @click.prevent="" class="ml-9 mt-0.5 text-lg active:text-[#F3AF1C]  " href="">
                            services</a>
                    </li>
                    <li class="flex relative not-last:pb-0">
                        <img class="absolute -top-7 " src="../assets/arrow2.svg" alt="" />
                        <a @click.prevent="" class="absolute text-lg  -top-2.5 ml-9 active:text-[#F3AF1C]  " href="">
                            details</a>
                    </li>
                </ul>
            </li>


            <li class="pb-4">

                <a class="flex items-center relative" @click.prevent="" @click="toggleShow('recent-work')" href="">
                    <img src="../assets/recent-work.svg" alt="Home" class="pb-2.5 -translate-x-1" />
                    <p class="text-2xl inline-block ml-[13px]  ">recent work</p>
                </a>

                <ul v-if="showItems['recent-work']" class="ml-2 pt-2">
                    <li
                        class="flex relative pb-[15px] not-last:pb-0  active:border-solid active:border-r-8 active:border-[#F3AF1C]">
                        <img class="absolute top-0 " src="../assets/arrow1.svg" alt="" />
                        <a @click.prevent="" class="ml-9 mt-0.5 text-lg active:text-[#F3AF1C]  " href="">
                            project</a>
                    </li>

                </ul>
            </li>


            <li class="pb-4">

                <a class="flex items-center relative" @click.prevent="" @click="toggleShow('comment')" href="">
                    <img src="../assets/comment.svg" alt="Home" class="pb-2.5 -translate-x-1" />
                    <p class="text-2xl inline-block ml-[13px]  ">comment</p>
                </a>

                <ul v-if="showItems['comment']" class="ml-2 pt-2">
                    <li
                        class="flex relative pb-[15px] not-last:pb-0  active:border-solid active:border-r-8 active:border-[#F3AF1C]">
                        <img class="absolute top-0 " src="../assets/arrow1.svg" alt="" />
                        <a @click.prevent="" class="ml-9 mt-0.5 text-lg active:text-[#F3AF1C]  " href="">
                            comment</a>
                    </li>
                </ul>

            </li>


            <li class="pb-4">

                <a class="flex items-center relative" @click.prevent="" @click="toggleShow('clients')" href="">
                    <img src="../assets/clients.svg" alt="Home" class="pb-2.5 -translate-x-1" />
                    <p class="text-2xl inline-block ml-[13px]  ">clients</p>
                </a>

                <ul v-if="showItems['clients']" class="ml-2 pt-2">
                    <li
                        class="flex relative pb-[15px] not-last:pb-0  active:border-solid active:border-r-8 active:border-[#F3AF1C]">
                        <img class="absolute top-0 " src="../assets/arrow1.svg" alt="" />
                        <a @click.prevent="" class="ml-9 mt-0.5 text-lg active:text-[#F3AF1C]  " href="">
                            brand</a>
                    </li>
                </ul>

            </li>

        </ul>
    </aside>
</template>
  
<script >
export default {
    name: "sidebar",
    data() {
        return {
            showItems: {
                home: false,
                'special-service': false,
                'about-us': false,
                'latest-services': false,
                'recent-work': false,
                comment: false,
                clients: false,
            },
        };
    },
    methods: {
        toggleShow(itemKey) {

            if (this.showItems[itemKey]) {
                this.showItems[itemKey] = !this.showItems[itemKey];
                return;
            }
            Object.keys(this.showItems).forEach(index => {
                this.showItems[index] = false;
            });
            this.showItems[itemKey] = !this.showItems[itemKey];

        }

    },
};
</script>