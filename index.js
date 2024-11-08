import React from "react";

const index = () => {
  return (
    <div>
      <h1>Welcome to the React App!</h1>
      <p>This is the default route.</p>
      <p>Feel free to navigate to other routes.</p>
      <p>To see a dynamic route, visit "/about"</p>
      <p>To see an error route, visit "/error"</p>
      <p>To see a 404 page, visit "/404"</p>
      <p>To see a 500 page, visit "/500"</p>
      <p>To see a custom 404 page, visit "/custom-404"</p>
      <p>To see a custom 500 page, visit "/custom-500"</p>
      <p>To see a custom error page, visit "/custom-error"</p>
    </div>
  );
};

export default index;
