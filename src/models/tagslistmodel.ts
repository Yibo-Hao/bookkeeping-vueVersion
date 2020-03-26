const localStorageKeyName = "tagList";

type TagsListModel ={
    data: string[];
    fetch: () => string[];
    create: (name: string) => string;
    save: () => void;
}
const tagListModel: TagsListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '["衣","食","住","行"]');
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(name: string){
        this.data.push(name);
        this.save();
        return name
    }
};
export default tagListModel;


//完全封装data，自己维护,代码开始在父组件调用fetch更新data，新建按钮触发create之后
//触发save
//入口只有一个就是 tagListModel 里的data