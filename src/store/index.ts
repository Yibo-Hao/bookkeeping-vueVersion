import Vue from "vue";
import Vuex from "vuex";
import createId from "@/lib/idCreator.ts";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordlist: [] as RecordItem[],
    taglist: [] as Tag[]
  },
  mutations: {
    save(state) {
      window.localStorage.setItem(
        "recordList",
        JSON.stringify(state.recordlist)
      );
    },
    fetchRecords(state) {
      state.recordlist = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      ) as RecordItem[];
    },
    saveRecord(state, record: RecordItem) {
      const recordFake: RecordItem = JSON.parse(JSON.stringify(record));
      recordFake.createAt = new Date();
      state.recordlist.push(recordFake);
      store.commit("save");
    },
    fetchTags(state) {
      state.taglist = JSON.parse(
        window.localStorage.getItem("tagList") ||
          '[{"id":"1","name":"衣"},{"id":"2","name":"食"},{"id":"3","name":"住"},{"id":"4","name":"行"}]'
      );
    },
    save2(state) {
      window.localStorage.setItem("tagList", JSON.stringify(state.taglist));
    },
    create(state, name: string) {
      const names = state.taglist.map(item => {
        return item.name;
      });
      if (names.indexOf(name) !== -1) {
        window.alert("标签不能重复~");
        return "重复";
      } else if (name === "") {
        window.alert("不能为空");
        return "空";
      } else if (name === null) {
        return "用户取消了";
      } else {
        const id = createId().toString();
        state.taglist.push({ id: id, name: name });
        store.commit("save2");
        return "成功";
      }
    },
    update(state, { id, name }) {
      const idList = state.taglist.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.taglist.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          return "duplicated";
        } else {
          const tag = state.taglist.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit("save2");
          return "success";
        }
      } else {
        return "notfound";
      }
    },
    destory(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.taglist.length; i++) {
        if (state.taglist[i].id === id) {
          index = i;
          break;
        }
      }
      state.taglist.splice(index, 1);
      store.commit("save2");
    }
  }
});

export default store;
