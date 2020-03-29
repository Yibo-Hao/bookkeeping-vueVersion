window.localStorage.setItem("idMax", '4');
let id: number = parseInt(window.localStorage.getItem("idMax") || "0") || 0;

function createId() {
  id++;
  return id;
}

export default createId;
