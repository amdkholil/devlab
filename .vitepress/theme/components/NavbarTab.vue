<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="flex gap-0.5 w-full h-10 bg-gray-900 border-b-2 border-b-gray-800">
        <a href="#" class="flex gap-2 px-2 py-1 mt-auto ml-5 text-blue-500 bg-gray-800 rounded-t border-t border-x border-blue-950">
            <div class="flex-grow mx-3">
                <Icon icon="uim:rocket" height="20" class="inline my-auto mr-1" />
                <span>
                    Home.dev
                </span>
            </div>
            <div class="flex-0">
                <Icon icon="stash:times" height="20" class="inline" />
            </div>
        </a>
        <a href="#" class="flex gap-2 px-2 py-1 mt-auto text-blue-500 bg-gray-900 rounded-t border-t border-x border-blue-950">
            <div class="flex-grow mx-3">
                <Icon icon="solar:document-text-bold-duotone" height="20" class="inline my-auto mr-1" />
                <span>
                    Portfolio.dev
                </span>
            </div>
            <div class="flex-0">
                <Icon icon="stash:times" height="20" class="inline" />
            </div>
        </a>
        <a href="#" class="flex gap-2 px-2 py-1 mt-auto text-blue-500 bg-gray-900 rounded-t border-t border-x border-blue-950">
            <div class="flex-grow mx-3">
                <Icon icon="fluent:mail-copy-20-filled" height="20" class="inline my-auto mr-1" />
                <span>
                    Blog.dev
                </span>
            </div>
            <div class="flex-0">
                <Icon icon="stash:times" height="20" class="inline" />
            </div>
        </a>
        <a href="#" class="flex gap-2 px-2 py-1 mt-auto text-blue-500 bg-gray-900 rounded-t border-t border-x border-blue-950">
            <div class="flex-grow mx-3">
                <Icon icon="fluent:mail-copy-20-filled" height="20" class="inline my-auto mr-1" />
                <span>
                    Contact.dev
                </span>
            </div>
            <div class="flex-0">
                <Icon icon="stash:times" height="20" class="inline" />
            </div>
        </a>
    </div>
</template>