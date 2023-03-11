import React, { useState } from "react";
import Gist from "../gist/Gist";
import LanguageBar from "./partials/LanguageBar";

const GistList = ({ gists }) => {
  const [renderList, setRenderList] = useState(gists);

  return (
    <div className="container mx-auto px-5">
      <h4 className="mb-4 text-xl font-bold text-center mt-6 tracking-tight text-gray-600">Gists</h4>
      <LanguageBar gists={gists} setRenderList={setRenderList} />
      <div className=" max-w-2xl mx-auto">
        {renderList.map((gist) => (
          <Gist key={gist.id} id={gist.id} />
        ))}
      </div>
    </div>
  );
};

export default GistList;
