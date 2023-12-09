<template>
  <div class="overflow-y-auto">
    <div class="grid grid-cols-5">
      <div class="col-span-1">
        <sidebar />
      </div>

      <div class="col-span-4">
        <dashHeader />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/Sidebar";
import dashHeader from "@/components/DashHeader";

export default {
  components: {
    sidebar,
    dashHeader,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
<!-- 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->