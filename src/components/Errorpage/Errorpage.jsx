import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const handleErrorGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-center text-xl font-bold mt-10">Opps! Something went wrong!</h2>

      {error.status === 404 && (
        <div>
          <p>{error.statusText || error.message}</p>
          <button onClick={handleErrorGoHome}>Go to homepage</button>
        </div>
      )}
    </div>
  );
};

export default Errorpage;
