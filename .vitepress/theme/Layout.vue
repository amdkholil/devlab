<script setup>
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
import Navbar from './components/Navbar.vue'
import P404 from '../pages/P404.vue'
import Home from '../pages/Home.vue';
import NavbarTab from './components/NavbarTab.vue'
</script>

<template>

  <P404 v-if="page.isNotFound" />
  <div v-else class="flex h-full bg-slate-800">
    <Navbar class="h-full flex-0" />
    <Home v-if="frontmatter.layout === 'home'" />
    <div class="w-full"  v-else>
      <NavbarTab />
      <div class="mx-auto max-w-xl">
        <Content class="px-4 markdown-body" />
      </div>
    </div>
  </div>
</template>