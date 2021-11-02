import "./EmaiList.css";
import EmailSettings from "../EmailSettings/EmailSettings";
import EmailType from "../EmailType/EmailType";
import EmailBody from "../EmailBody/EmailBody";
import { useState, useEffect } from "react";
import { db } from "../../Firebase/Firebase";

const EmaiList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    // ));
  }, []);

  console.log(emails);
  return (
    <div className="emaillist">
      <EmailSettings />
      <EmailType />

      {emails.map(({ id, data }) => {
        return (
          <EmailBody
            key={data.id}
            name={data.fromName}
            email={data.from}
            subject={data.subject}
            message={data.message}
            time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
          />
        );
      })}
    </div>
  );
};

export default EmaiList;
