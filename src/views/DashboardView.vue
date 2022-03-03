<template>
  <Sidebar></Sidebar>
  <div class="md:ml-56 h-screen flex flex-col">
    <NavbarDashboard></NavbarDashboard>
    <router-view class="flex-grow outline-black"></router-view>
    <Footer class="mt-48"></Footer>
  </div>
</template>
<script>
import Sidebar from '@/components/SidebarItem.vue';
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import Footer from '@/components/FooterItem.vue';
export default {
  components: {
    NavbarDashboard,
    Sidebar,
    Footer
  }
};
</script>
