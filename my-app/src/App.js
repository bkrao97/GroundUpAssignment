import { useMutation, useQuery } from "react-query";
import { React, useState } from "react";
import Card from "./Card";
import axios from "axios";
import InputForm from "./InputForm";

const fetchData = async () => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
  /* console.log(response); */
  return response;
};

  





function App() {



  const [formData , setformData] = useState({ userId: '',
  id: '',
  title: " ",
  body: "" });


  const handleInputChange=(event) =>{
    const{name, value} = event.target;
    setformData({...formData , [name]:value})
  }


  const PostData = async () => {
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };


  const mutation = useMutation(PostData);

  const handleMutation = () => {
    mutation.mutate();
  };

  const { data, isLoading, error } = useQuery("data", fetchData);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:{error.message}</div>;

  
  

  return (
    <>
      <div className="m-0 bg-slate-950 w-auto box-border p-20 h-auto">
        <div className="box-border flex justify-center ">
          <InputForm formData={formData} onInputChange={handleInputChange}></InputForm>
          <button
            onClick={handleMutation}
            className=" m-2  rounded-sm bg-neutral-200 hover:bg-blue-300 p-2"
          >
            Post User
          </button>
        </div>
        <div className=" m-auto  box-border bg-neutral-200 flex flex-wrap justify-evenly p-10">
          {data.map((item) => (
            <>
              <Card title={item.title} id={item.id} body={item.body}></Card>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
