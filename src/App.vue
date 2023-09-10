<template lang="">
    <GlobalStyles>
        <div class="container">
            <div class="search-wrap"><SearchComp /></div>
            <div
                class="posts"
                v-auto-animate="{
                    duration: 300,
                }"
            >
                <template v-if="loading">
                    <PostLoader :key="id" v-for="(load, id) in Array(9).fill()" />
                </template>
                <template v-else-if="posts.length">
                    <PostItem :key="post.id" v-for="post in posts" :post="post" />
                </template>
                <template v-else>
                    <p class="posts__notion">
                        К сожалению, по вашему поисковому запросу ничего не найдено.
                    </p>
                </template>
            </div>
        </div>
    </GlobalStyles>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { SearchComp, PostItem, GlobalStyles, PostLoader } from "./components";

const store = useStore();

const posts = computed(() => store.getters["posts/itemsFiltered"]);
const loading = computed(() => store.getters["posts/loading"]);

onMounted(() => {
    store.dispatch("posts/getAllPosts");
});
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    width: 1300px;
    max-width: calc(100% - 48px);
}
.search-wrap {
    margin-top: 200px;
    text-align: center;
}
.posts {
    display: flex;
    margin: 40px -8px 120px;
    row-gap: 16px;
    flex-wrap: wrap;

    &__notion {
        white-space: nowrap;
        color: red;
        margin: auto;
    }
}
</style>
