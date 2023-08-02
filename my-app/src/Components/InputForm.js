export default function InputForm({ formData, onInputChange }) {
  return (
    <>
      <form>
        <div>
          <input
            className="m-2 rounded-sm hover:bg-neutral-200 p-2"
            type="number"
            placeholder="UserId"
            name="userId"
            value={formData.userid}
            onChange={onInputChange}
          ></input>
          {
            <input
              className="m-2 rounded-sm hover:bg-neutral-200 p-2"
              type="text"
              placeholder="Desc"
              name="body"
              value={formData.body}
              onChange={onInputChange}
            ></input>
          }
          {/* <input
            className="m-2 rounded-sm hover:bg-neutral-200  p-2"
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={onInputChange}
          ></input> */}
          <input
            className="m-2 rounded-sm hover:bg-neutral-200 p-2"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
          ></input>
        </div>
      </form>
    </>
  );
}
