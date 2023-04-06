import Test from "./Test";

const Component = ({ data }) => {
  return (
    <div>
      Benim adim {data}
      <Test />
    </div>
  );
};

export default Component;
