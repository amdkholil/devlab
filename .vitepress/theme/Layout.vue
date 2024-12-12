<script setup>
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
import Navbar from './components/Navbar.vue'
import P404 from '../pages/P404.vue'
import Home from '../pages/Home.vue';
</script>

<template>
  
  <P404 v-if="page.isNotFound"/>
  <Navbar v-else />

  <Home v-if="frontmatter.layout === 'home'"/>
  <div class="max-w-xl mx-auto" v-else>
    <Content class="px-4 markdown-body"/>
  </div>
</template>