export default function Block({ title, extra, info }) {
  return (
    <div>
      <span>{title}</span>
      {info.map((field) => {
        return (
          <form className="block" key={field.id}>
            <label htmlFor={field.id}>{field.name}</label>
            {returnInput(field)}
          </form>
        );
      })}
    </div>
  );
}

function returnInput({ type, id }) {
  if (type === "textarea") return <textarea id={id}></textarea>;
  return <input type={type} id={id} />;
}
