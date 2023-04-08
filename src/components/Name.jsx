import React from "react";

const Component = ({ data }) => {
  const { name, job, salary } = data;
  return (
    <div>
      <ul>
        <li>İsim : {name}</li>
        <li>JOB : {job}</li>
        <li>SALARY : {salary}</li>
      </ul>
    </div>
  );
};

export default Component;
