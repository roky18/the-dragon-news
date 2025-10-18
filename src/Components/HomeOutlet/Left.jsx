import React, { Suspense } from "react";
import Category from "../Category";

const Left = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Category></Category>
      </Suspense>
    </div>
  );
};

export default Left;
