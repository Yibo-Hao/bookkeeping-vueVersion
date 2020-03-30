import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordlist: [] as RecordItem[]
  },
  mutations: {
    save(state) {
      window.localStorage.setItem(
        "recordList",
        JSON.stringify(state.recordlist)
      );
    },
    fetch(state) {
      state.recordlist = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      ) as RecordItem[];
    },
    saveRecord(state, record: RecordItem) {
      const recordFake: RecordItem = JSON.parse(JSON.stringify(record));
      recordFake.createAt = new Date();
      state.recordlist.push(recordFake);
      store.commit("save");
    }
  }
});
export default store;
