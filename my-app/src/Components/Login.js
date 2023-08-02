import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [formData, setformData] = useState({
    userId: "",
    id: "",
    title: " ",
    body: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformData({ ...formData, [name]: value });
  };

  const PostData = async (event) => {
    event.preventDefault();
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="m-0 bg-slate-950 w-auto box-border h-screen sm:p-20">
        <form>
        <h1 className="text-2xl text-white ml-32 mb-20 font-bold sm:text-6xl sm:ml-0 sm:flex sm:justify-center sm:mb-10">Welcome!</h1>
          <div className="p-5 box-border flex flex-col m-auto  border-2 border-gray-400 rounded-md w-72 justify-center h-4/6 bg-slate-950 sm:w-1/2">
            <input
              className="m-4 rounded-sm hover:bg-neutral-200 p-2"
              type="text"
              placeholder="UserId"
              name="userId"
              value={formData.userid}
              onChange={handleInputChange}
            ></input>
            {/* {
              <input
                className="m-4 rounded-sm hover:bg-neutral-200 p-2"
                type="text"
                placeholder="Desc"
                name="body"
                value={formData.body}
                onChange={handleInputChange}
              ></input>
            } */}
            {/* <input
            className="m-2 rounded-sm hover:bg-neutral-200  p-2"
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={onInputChange}
          ></input> */}
            <input
              className="m-4 rounded-sm hover:bg-neutral-200 p-2"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            ></input>
            <button
              onClick={PostData}
              className=" mt-6 hover:text-white  rounded-sm bg-white hover:bg-orange-600 p-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
