<template>
    <div class="search">
        <button @click="onFilter" class="search__button">
            <font-awesome-icon icon="fa-solid fa-search" />
        </button>
        <input
            type="text"
            v-model="search"
            placeholder="Filter by author..."
            class="search__input"
            @input="onInput"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const search = ref("");
const timeout = ref(null);
const store = useStore();

const onInput = () => {
    clearTimeout(timeout.value);

    // handle debounce input
    timeout.value = setTimeout(() => {
        store.dispatch("posts/onFilterByAuthor", search.value);
    }, 500);
};
</script>

<style scoped lang="scss">
.search {
    display: inline-flex;
    border: 1px solid #ced4da;
    border-radius: 2px;

    &__button {
        pointer-events: none;
        width: 28px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #ced4da;
    }

    &__input {
        padding: 4px 8px;
        height: 24px;
    }
}
</style>
