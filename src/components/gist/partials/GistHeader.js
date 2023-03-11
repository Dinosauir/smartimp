import React, { useState } from "react";
import moment from "moment";
import { getColor } from "@/utils/languages";
import Link from "next/link";

const GistHeader = ({ created_at, language, description, forks }) => {
  const [hiddenForks, setHiddenForks] = useState(false);

  const toggleForks = () => {
    setHiddenForks(!hiddenForks);
  };

  return (
    <div className="flex flex-col text-xs gap-1">
      <div className="flex flex-row justify-between">
        <p>Description: {description ? description.substring(0, 50) + "..." : "-"}</p>
        <p className={`${language ? getColor(language) : ""} rounded-md px-2 py-1`}>{language}</p>
      </div>
      <p>
        Created at: <span className="text-indigo-600 font-light"> {moment(created_at).format("DD-MM-YYYY")}</span>
      </p>
      <div className="flex mt-2">
        <p
          className="rounded-md px-2 py-1 bg-green-200 hover:cursor-pointer hover:bg-green-300 transition-colors"
          onClick={() => {
            toggleForks();
          }}
        >
          Forks
        </p>
      </div>
      <div className={`gap-1 flex-wrap ${hiddenForks ? "hidden" : "flex"}`}>
        {forks.map((fork, key) => (
          <Link key={fork.id} href={fork.url}>
            {fork.user.login}
            {forks.length - 1 === key ? "" : ","}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GistHeader;
