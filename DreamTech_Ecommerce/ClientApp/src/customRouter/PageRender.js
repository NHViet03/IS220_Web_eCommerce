import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";
const generatePage = (pageName) => {
  const component = () => require(`../pages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    return <NotFound />;
  }
};

const PageRender = () => {
  const { page, sub_page } = useParams();
  let pageName = "";

  if (sub_page) {
    if (page === "collections" || page === "products") {
      pageName = `${page}/[id]`;
    } else {
      pageName = `${page}/${sub_page}`;
    }
  } else {
    pageName = `${page}`;
  }
  return generatePage(pageName);
};

export default PageRender;
