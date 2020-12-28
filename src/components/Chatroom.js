import React, { useState, useRef } from "react";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "../styles/Chatroom.css";
import Navbari from "./Navbar";
import ParticlesBg from "particles-bg";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyB8-bqAGASGebEQIGCM-mtNXIXBzURM9E8",
  authDomain: "portfolio-a32f5.firebaseapp.com",
  projectId: "portfolio-a32f5",
  storageBucket: "portfolio-a32f5.appspot.com",
  messagingSenderId: "990257558905",
  appId: "1:990257558905:web:9105ad523ee11f0227eba8",
  measurementId: "G-02WY0Q97Q2",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Chatroom() {
  const [user] = useAuthState(auth);
  return (
    <div className="chat__room">
      <ParticlesBg type="cobweb" num={70} bg={true} />
      <header>
        <Navbari />

        <SignOut />
      </header>

      <section>{user ? <Chat /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <button className="sign-in" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function Chat() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");
  const [button, setButton] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <main className="chatroom_main">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <Formii dum={dummy} />
    </div>
  );
}

function Formii({ dum }) {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dum.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chatroom__form">
      <form className="chatroom__form" onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          send
        </button>
      </form>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div>
      <div className={`message ${messageClass}`}>
        <div className="card__blog">
          <img
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
          />
          <div class="card-header"></div>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatroom;
