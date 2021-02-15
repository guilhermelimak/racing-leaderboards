import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";
import { Entry } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyAEmbQ2is5G7rx1qUtm-XEHuORlCqcpmo8",
  authDomain: "dirt-leaderboards.firebaseapp.com",
  databaseURL: "https://dirt-leaderboards.firebaseio.com",
  projectId: "dirt-leaderboards",
  storageBucket: "dirt-leaderboards.appspot.com",
  messagingSenderId: "554814253536",
  appId: "1:554814253536:web:1b278078f02cbf47216385",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const throwErr = (err: any) => {
  throw new Error(err);
};

export const api = {
  getEntries: (entriesChanged: (entries: Entry[]) => void) =>
    db
      .collection("entries")
      .onSnapshot((snapshot) =>
        entriesChanged(
          snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Entry))
        )
      ),

  createEntry: (entry: Entry) => db.collection("entries").add(entry),

  updateEntry: (entry: Entry) =>
    db.collection("entries").doc(entry.id).update(entry),

  deleteEntry: (entry: Entry) =>
    db.collection("entries").doc(entry.id).delete(),

  login: ({ email, password }: { email: string; password: string }) =>
    firebase.auth().signInWithEmailAndPassword(email, password),

  register: ({ email, password }: { email: string; password: string }) =>
    firebase.auth().createUserWithEmailAndPassword(email, password),

  uploadImage: (file: File): Promise<string> =>
    firebase
      .storage()
      .ref()
      .child("screenshots/" + file.name)
      .put(file, { contentType: file.type })
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .catch(throwErr),

  getCountryFlagUrl: (country: string) =>
    `https://cdn.countryflags.com/thumbs/${country.toLowerCase()}/flag-800.png`,
};
