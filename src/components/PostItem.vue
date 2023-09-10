<template>
    <div class="post-wrap">
        <div class="post">
            <h3 class="post__title">
                {{ props.post.title }}
            </h3>
            <p class="post__body">{{ props.post.body }}</p>
            <h4 class="post__author" v-html="authorName"></h4>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useStore } from "vuex";

const props = defineProps({
    post: Object,
});

const store = useStore();

const authorName = computed(() => {
    const filter = store.getters["posts/filter"];
    let name = props.post.author.name;

    if (filter) {
        // bold substrings of search results depending on searchquery
        const firstLetter = name.toLowerCase().indexOf(filter.toLowerCase());
        const lastLetter = firstLetter + filter.length;
        name =
            name.slice(0, firstLetter) +
            "<b class='bold'>" +
            name.slice(firstLetter, lastLetter) +
            "</b>" +
            name.slice(lastLetter);
    }

    return name;
});
</script>

<style lang="scss">
.post-wrap {
    width: 33.33333%;
    padding: 0 8px;

    @media (max-width: 1080px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
}
.post {
    padding: 20px 24px;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    height: 100%;
    display: flex;
    flex-direction: column;

    &__title {
        color: #007bff;
        margin-bottom: 12px;
    }

    &__body {
        margin-bottom: 8px;
    }

    &__author {
        color: rgba(0, 0, 0, 0.5);
        margin-top: auto;

        & .bold {
            background-color: yellow;
        }
    }
}
</style>
