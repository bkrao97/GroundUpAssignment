import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

export default function Comment() {
  let param = useParams();
  let userId = param.id;

  const fetchData = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
      .then((res) => res.data);
   /*  console.log(response); */
    return response;
  };
  const { data, isLoading, error } = useQuery("data", fetchData);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:{error.message}</div>;

  return (
    <>
      <div className="m-0 bg-slate-950 w-auto box-border p-20 h-auto">
        <div className="box-border flex justify-center  ">
          <div className=" m-auto  box-border bg-neutral-200 flex flex-wrap  justify-start p-10">
            {data.map((item) => (
              <>
                <div className="p-5  border-2 w-11/12 shadow-2xl text-ellipsis  m-8 border-gray-400 rounded-md bg-blue-300 ">
                  <h1 className="text-sm font-bold">{item.name}</h1>
                  <p className=" mt-4">Email: {item.email}</p>
                  <p className=" mt-4">Desc : {item.body}</p>
                </div>
                {/* <button
            
            className=" m-2  rounded-sm bg-neutral-200 hover:bg-blue-300 p-2"
          >
            <Link to='/comment' className="text-blue-700 ">
            Go Back
          </Link>
          </button> */}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
