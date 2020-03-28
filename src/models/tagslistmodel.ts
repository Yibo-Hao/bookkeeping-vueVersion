const localStorageKeyName = "tagList";

const tagListModel: TagsListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) ||
        '[{"id":"衣","name":"衣"},{"id":"食","name":"食"},{"id":"住","name":"住"},{"id":"行","name":"行"}]'
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
      this.data.push({ id: name, name: name });
      this.save();
      return "成功";
    }
  }
};
export default tagListModel;

//完全封装data，自己维护,代码开始在父组件调用fetch更新data，新建按钮触发create之后
//触发save
//入口只有一个就是 tagListModel 里的data
