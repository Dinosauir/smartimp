import axios from "axios";
import { useEffect, useState } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import GistBody from "./partials/GistBody";
import GistHeader from "./partials/GistHeader";

const Gist = ({ id }) => {
  const [textField, setTextField] = useState(false);
  const [lang, setLang] = useState(false);
  const [gist, setGist] = useState(false);

  useEffect(() => {
    axios
      .get("/api/gists/" + id)
      .then((response) => setGist(response.data.data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="mb-2 border-slate-100 border-2 rounded-md">
      <div className="flex flex-col p-4">
        {gist && (
          <GistHeader
            created_at={gist.created_at}
            language={Object.values(gist.files)[0].language}
            description={gist.description}
            forks={gist.forks}
          />
        )}
        <hr className="mt-4" />
        {gist && <GistBody files={gist.files} setTextField={setTextField} textField={textField} setLang={setLang} />}
      </div>
      {textField && (
        <div className="flex w-full overflow-hidden">
          <ReactSyntaxHighlighter language={lang}>{textField}</ReactSyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default Gist;
