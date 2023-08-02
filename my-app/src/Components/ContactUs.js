export default function ContactUs() {
  return (
    <>
      <div className="m-0 bg-slate-950 w-auto box-border flex flex-col p-4  h-screen sm:h-screen sm:p-20">
        <form>
        <h1 className=" font-bold text-white text-2xl sm:text-6xl sm:text-white sm:ml-16">How may we help You ?</h1>
          <div className="flex flex-col w-1/2 m-4 mt-12 sm:p-16 sm:mt-2 ">
            
            <input
              className="m-2 w-72 rounded-sm hover:bg-neutral-200 p-3 sm:w-11/12"
              type="text"
              placeholder="Name"
              name="name"
            ></input>

            {/* <input
            className="m-2 rounded-sm hover:bg-neutral-200  p-2"
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={onInputChange}
          ></input> */}
            <input
              className="m-2 w-72 rounded-sm hover:bg-neutral-200 p-3 sm:w-11/12"
              type="email"
              placeholder="Email"
              name="email"
            ></input>
            <textarea
              className="m-2 w-72 rounded-sm hover:bg-neutral-200 p-2
              sm:w-11/12"
              type="textarea"
              placeholder="Desc"
              name="Desc"
            ></textarea>
            <button className=" m-2 hover:text-white w-20 rounded-sm bg-white hover:bg-orange-600 p-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
