export const badges = {
  go: "bg-red-300",
  python: "bg-green-200",
  markdown: "bg-yellow-200",
  shell: "bg-gray-300",
  swift: "bg-blue-300",
  php: "bg-violet-300",
};

export const getColor = (language) => {
  const key = language.toLowerCase();

  if (badges.hasOwnProperty(key)) {
    return badges[key];
  }

  return "bg-gray-400";
};

export const getLanguages = (gists) => {
  let languages = [];
  let mappedLanguages = [];

  gists.forEach((gist) => {
    Object.entries(gist.files).map((file) => {
      const [key, value] = file;

      if (!value.language || mappedLanguages.indexOf(value.language) !== -1) {
        return;
      }

      languages.push({ language: value.language, key: key });
      mappedLanguages.push(value.language);
    });
  });

  return languages;
};
