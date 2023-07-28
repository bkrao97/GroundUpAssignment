import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function Comment() {
  let param = useParams();
  let userId = param.id;

  const fetchData = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/comments?id=${userId}`)
      .then((res) => res.data);
    /* console.log(response); */
    return response;
  };
  const { data, isLoading, error } = useQuery("data", fetchData);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:{error.message}</div>;

  return (
    <>
      <div>
        <div className="p-5  border-2 m-8 border-gray-400 rounded-md bg-blue-300 ">
          <h1 className="text-sm font-bold">{data[0].name}</h1>
          <p className=" truncate mt-4">Email: {data[0].email}</p>
          <p className=" mt-4">Desc : {data[0].body}</p>
        </div>
        <button
            
            className=" m-2  rounded-sm bg-neutral-200 hover:bg-blue-300 p-2"
          >
            <Link to='/comment' className="text-blue-700 ">
            Go Back
          </Link>
          </button>
      </div>
    </>
  );
}
