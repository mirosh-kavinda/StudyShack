import React, { useRef } from "react";
import { firestore } from "./firebase";
import { addDoc, collection } from "@firebase/firestore";

const CreateNote = () => {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");
  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
    let data = {
      message: messageRef.current.value,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSave}>
        <label>Enter message</label>
        <input type="text" ref={messageRef} placeholder="create a note" />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default CreateNote;
