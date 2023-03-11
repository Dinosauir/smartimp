import { useSearch } from "@/contexts/search";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();

  const { searchInput, setSearchInput } = useSearch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    router.push({
      pathname: "/users/[user]",
      query: { user: searchInput },
    });

    setSearchInput("");
  };

  return (
    <nav className="container mx-auto my-12 px-12">
      <form className="flex flex-col md:flex-row gap-6 items-center w-full" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex rounded-md shadow-sm w-full">
          <span
            className="inline-flex items-center rounded-l-md border border-r-0
           border-gray-300 px-3 text-gray-500 sm:text-sm font-bold"
          >
            @username
          </span>
          <input
            type="text"
            required
            value={searchInput}
            className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5
            text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-6"
            placeholder="www.example.com"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold
           w-full md:max-w-[100px]
           text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
           focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save
        </button>
      </form>
    </nav>
  );
};

export default Search;
