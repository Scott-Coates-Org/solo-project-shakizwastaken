import {
  getDoc,
  doc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  where,
  query,
} from "firebase/firestore/lite";

import { db } from "../client";

export class Controller {
  constructor(collectionName) {
    this._collectionName = collectionName;
    this._db = db;
    this._ref = collection(db, collectionName);
  }

  //return all entities created
  findAll = async (options) => {
    let querySnap;

    if (options.where) {
      //create query
      const q = query(this._ref, where(...options.where));

      //set query snap
      querySnap = await getDocs(q);
    } else {
      //set query snap
      querySnap = await getDocs(this._ref);
    }

    //raw false
    if (!options.raw) return querySnap;

    //raw true -> store data in array
    let data = [];
    querySnap.forEach(
      (docSnap, i) => (data[i] = { id: docSnap.id, ...docSnap.data() })
    );

    //return raw data
    return data;
  };

  findOne = async (options) => {
    const arr = await this.findAll({ ...options, raw: true });
    return arr[0];
  };

  //find entity from id
  findFromId = async (id, options) => {
    const ref = doc(this._db, this._collectionName, id);
    const result = await getDoc(ref);

    //return document
    if (!options.raw) return result;

    //return raw data
    return result.data();
  };

  //create new entity
  createOne = async (data, options) => {
    const docRef = await addDoc(this._ref, data);
    const doc = await getDoc(docRef);
    if (!options.raw) return doc;

    return doc.data();
  };

  //update entity
  updateOne = async (id, newData) => {
    const ref = doc(this._db, this._collectionName, id);
    return await updateDoc(ref, newData);
  };
}
