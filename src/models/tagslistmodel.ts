import createId from "@/lib/idCreator.ts";

const localStorageKeyName = "tagList";
const tagListModel: TagsListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) ||
        '[{"id":"1","name":"衣"},{"id":"2","name":"食"},{"id":"3","name":"住"},{"id":"4","name":"行"}]'
    );
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  create(name: string) {
    const names = this.data.map(item => {
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
      this.data.push({ id:id, name: name });
      this.save();

      return "成功";
    }
  },
  update(id, name) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return "duplicated";
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        tag.id = name;
        this.save();
        return "success";
      }
    } else {
      return "notfound";
    }
  },
  destory(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    this.save();
    return true;
  }
};
export default tagListModel;

//完全封装data，自己维护,代码开始在父组件调用fetch更新data，新建按钮触发create之后
//触发save
//入口只有一个就是 tagListModel 里的data
