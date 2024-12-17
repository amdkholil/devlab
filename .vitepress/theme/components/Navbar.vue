<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="left-0 w-60 h-full bg-gray-950">
        <div class="p-6 text-2xl font-bold">
            <Icon icon="mingcute:code-fill" height="32" class="inline mr-2" />
            <span>DevLab</span>
        </div>
        <div class="mt-0.5 h-0.5 bg-gray-800"></div>
        <div class="px-2 mt-4 text-blue-500">
            <a href="#" class="flex gap-1.5 px-2 py-1">
                <Icon icon="uim:rocket" height="20" class="inline my-auto mr-1" />
                <span>Home.dev</span>
            </a>
            <a href="#" class="flex gap-1.5 px-2 py-1">
                <Icon icon="uim:rocket" height="20" class="inline my-auto mr-1" />
                <span>Portfolio.dev</span>
            </a>
            <a href="#" class="flex gap-1.5 px-2 py-1">
                <Icon icon="uim:rocket" height="20" class="inline my-auto mr-1" />
                <span>Blog.dev</span>
            </a>
            <a href="#" class="flex gap-1.5 px-2 py-1">
                <Icon icon="uim:rocket" height="20" class="inline my-auto mr-1" />
                <span>Contact.dev</span>
            </a>
        </div>
    </div>
</template>
