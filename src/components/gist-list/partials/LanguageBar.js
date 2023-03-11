import React from "react";

import { getColor, getLanguages } from "@/utils/languages";

const LanguageBar = ({ gists, setRenderList }) => {
  const languages = getLanguages(gists);
  const filterGists = (language) => {
    setRenderList(gists.filter((item) => Object.values(item.files)[0].language === language));
  };

  return (
    <div className="flex flex-row gap-2 my-12 justify-center items-center flex-wrap">
      <p className="text-md tracking-tight text-gray-600"> Languages: </p>
      {languages.map((language) => (
        <p
          key={language.key}
          className={`text-sm ${getColor(
            language.language
          )} rounded-md px-2 py-1 hover:cursor-pointer hover:bg-indigo-500 transition-colors hover:text-white`}
          onClick={() => {
            filterGists(language.language);
          }}
        >
          {language.language}
        </p>
      ))}
      <p
        className="text-sm rounded-md px-2 py-1 hover:cursor-pointer hover:bg-indigo-500 transition-colors hover:text-white bg-gray-200"
        onClick={() => {
          setRenderList(gists);
        }}
      >
        All
      </p>
    </div>
  );
};

export default LanguageBar;
