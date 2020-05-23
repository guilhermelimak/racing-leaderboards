import firebase from 'firebase'
import "@firebase/firestore"
import { Track, Record } from './types';

const firebaseConfig = {
  apiKey: "AIzaSyAEmbQ2is5G7rx1qUtm-XEHuORlCqcpmo8",
  authDomain: "dirt-leaderboards.firebaseapp.com",
  databaseURL: "https://dirt-leaderboards.firebaseio.com",
  projectId: "dirt-leaderboards",
  storageBucket: "dirt-leaderboards.appspot.com",
  messagingSenderId: "554814253536",
  appId: "1:554814253536:web:1b278078f02cbf47216385"
};
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const getTracks = () => {
  return db.collection('tracks').get().then((items) => {
    const tracks: Track[] = []
    items.forEach((doc) => {
      tracks.push({id: doc.id, ...doc.data()} as any)
    })

    return tracks
  })
}
export const getEntries = () => {
  return db.collection('entries').get().then((items) => {
    const tracks: Record[] = []
    items.forEach((doc) => {
      tracks.push({id: doc.id, ...doc.data()} as any)
    })

    return tracks
  })
}