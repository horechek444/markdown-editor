import React from "react";
import ReactMarkdown from "react-markdown";

const PreviewField = ({markdown}) => {
  return (
    <ReactMarkdown className="preview" source={markdown} />
  );
};

export default PreviewField;