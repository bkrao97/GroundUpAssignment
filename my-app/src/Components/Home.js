import {  useQuery } from "react-query";
import { React } from "react";
import Card from "./Card";
import axios from "axios";

const fetchData = async () => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
  /* console.log(response); */
  return response;
};

export default function Home() {
  const { data, isLoading, error } = useQuery("data", fetchData);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:{error.message}</div>;
  return (
    <>
      <div className="m-0 bg-slate-950 w-auto box-border sm:p-20 h-auto">
        <div className=" m-auto  box-border bg-slate-950 flex flex-col items-center sm:m-auto sm:box-border sm:flex sm:flex-row sm:flex-wrap sm:justify-between sm:p-10">
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
