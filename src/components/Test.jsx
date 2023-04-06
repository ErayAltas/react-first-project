const Test = () => {
  const mapData = [
    {
      id: 1,
      name: "eray",
      job: "eng",
    },
    {
      id: 2,
      name: "osman",
      job: "dentist",
    },
  ];
  return (
    <div>
      Test component
      {mapData.map((element, i) => (
        <div key={i}>{element.name}</div>
      ))}
    </div>
  );
};

export default Test;
