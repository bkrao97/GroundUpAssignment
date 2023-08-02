import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <div className="p-5 box-border  text-ellipsis  border-2 m-8 border-gray-400 rounded-md w-80 h-80 bg-slate-950 ">
        <h1 className="text-xl text-orange-600 font-bold">{props.title}</h1>
        <p className="text-white mt-2">{props.body}</p>
        {/* <p className=" mt-4">{props.id}</p> */}

        <div className=" mt-auto">
          <Link to={`/comment/${props.id}`} className="text-blue-700 ">
            View Comments...
          </Link>
        </div>

      
      </div>
    </div>
  );
}
