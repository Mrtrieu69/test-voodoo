import * as api from "../../api";

const state = {
    items: [],
    filterByAuthor: "",
    loading: true,
};

const getters = {
    filter(state) {
        return state.filterByAuthor;
    },
    items(state) {
        return state.items;
    },
    itemsFiltered(state) {
        return state.items.filter((item) =>
            item.author.name.toLowerCase().includes(state.filterByAuthor.toLowerCase())
        );
    },
    loading(state) {
        return state.loading;
    },
};

const actions = {
    async getAllPosts({ commit }) {
        commit("updateLoader", true);
        setTimeout(async () => {
            const posts = await api.get("https://jsonplaceholder.typicode.com/posts");
            const authors = await api.get("https://jsonplaceholder.typicode.com/users");

            // merge author to posts
            posts.forEach((post) => {
                const findAuth = authors.find((author) => author.id === post.userId);
                post.author = findAuth;
            });

            // Sort randomly
            posts.sort(() => (Math.random() > 0.5 ? 1 : -1));
            commit("updatePosts", posts);
            commit("updateLoader", false);
        }, 1500);
    },
    onFilterByAuthor({ commit }, value) {
        commit("updateFilter", value);
    },
};

const mutations = {
    updatePosts(state, posts) {
        state.items = posts;
    },
    updateFilter(state, value) {
        state.filterByAuthor = value;
    },
    updateLoader(state, value) {
        state.loading = value;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
