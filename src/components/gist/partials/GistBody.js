const GistBody = ({ files, textField, setTextField, setLang }) => {
  return (
    <div className="flex flex-row gap-2 mt-4 text-sm font-semibold flex-wrap">
      {Object.entries(files).map((file) => {
        const [key, value] = file;
        return (
          <div
            key={key}
            className="border-2 rounded-md py-0 px-2 border-indigo-300 hover:cursor-pointer hover:bg-indigo-400 transition-colors"
            onClick={() => {
              if (textField) {
                setTextField(false);
                setLang(false);
              } else {
                setTextField(value.content);
                setLang(value.language.toLowerCase());
              }
            }}
          >
            <h1>{key}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default GistBody;
