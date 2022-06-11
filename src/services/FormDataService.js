import firebase from "@/firebase";
const db = firebase.collection("/thaynara-form");
class FormDataService {
  getAll() {
    return db;
  }
  create(form) {
    return db.add(form);
  }
  update(id, value) {
    return db.doc(id).update(value);
  }
  delete(id) {
    return db.doc(id).delete();
  }
}
export default new FormDataService();