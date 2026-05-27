import { ref, set, get, onValue } from "firebase/database";
import { db } from "../firebase/firebaseConfig.js";

function normalizeData(data) {
  if (!data) return [];
  return Array.isArray(data) ? data : Object.values(data);
}

export async function getData(collectionName) {
  const dataRef = ref(db, collectionName);
  const snapshot = await get(dataRef);

  if (snapshot.exists()) {
    return normalizeData(snapshot.val());
  }

  return [];
}

export async function saveData(collectionName, data) {
  const dataRef = ref(db, collectionName);
  await set(dataRef, data);
}

export function subscribeData(collectionName, callback) {
  const dataRef = ref(db, collectionName);

  const unsubscribe = onValue(dataRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(normalizeData(snapshot.val()));
    } else {
      callback([]);
    }
  });

  return unsubscribe;
}