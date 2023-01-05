export default function Block({ title, extra, info }) {
  return (
    <div>
      <span>{title}</span>
      {info.map((field) => {
        return (
          <div className="block">
            <label htmlFor={field.id}>{field.name}</label>
            <input type={field.type} key={field.id} id={field.id} />
          </div>
        );
      })}
    </div>
  );
}
