export default function Block({ title, info }) {
  return (
    <div className="blocks">
      <span>{title}</span>
      {info.map((field) => {
        return (
          <div className="block" key={field.id}>
            <label htmlFor={field.id}>{field.name}</label>
            {returnInput(field)}
          </div>
        );
      })}
    </div>
  );
}

function returnInput({ type, id }) {
  if (type === "textarea") return <textarea id={id}></textarea>;
  return <input type={type} id={id} />;
}
