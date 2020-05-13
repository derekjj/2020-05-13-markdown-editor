import Vuex from "vuex";
import Vue from "vue";
import { Remarkable } from "remarkable";
import { linkify } from 'remarkable/linkify';

Vue.use(Vuex);

var md = new Remarkable("full", {
  html: true,
  typographer: true,
  linkify: true,
}).use(linkify);

const store = new Vuex.Store({
  strict: true,
  state: () => ({
    text: "`markdown` is easy to use",
    md: "<p><code>markdown</code> is easy to use</p>",
  }),
  getters: {
    text: (state) => state.text,
    md: (state) => state.md,
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
    setText(state, payload) {
      state.md = md.render(payload);
      state.text = payload;
    },
  },
  actions: {
    setText(context, payload) {
      context.commit("setText", payload);
    },
    edit(context, payload) {
      context.commit("edit", payload);
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
