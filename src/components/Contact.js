import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black m-2 p-2"
        ></input>
        <input
          type="text"
          placeholder="Message"
          className="border border-black m-2 p-2"
        ></input>
        <button className="border border-black m-2 p-2 bg-gray-200 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
