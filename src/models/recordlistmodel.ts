const localStorageKeyName = "recordList";

const recordlistmodel = {
  clone(data: RecordItem){
    return JSON.parse(JSON.stringify(data))
  },
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
export default recordlistmodel;
