import { MagnifyingGlass, Spinner } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const useDebounce = (value: unknown, delay: number) => {
  // Ensure delay is a number
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Day6 = () => {
  const [query, setQuery] = useState<string>(""); // Specify type for query
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null); // Specify type for data
  const [loading, setLoading] = useState<boolean>(false); // Specify type for loading

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    console.log("query", query);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      setLoading(true);
      fetch(`https://www.omdbapi.com/?s=${debouncedQuery}&apikey=a2d6a85c`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setData(null);
    }
  }, [debouncedQuery]);

  return (
    <div className="grid grid-rows-[auto,1fr] grid-cols-12 mx-10 gap-y-5 overflow-hidden">
      <div className="col-span-12 grid grid-cols-[auto,1fr] bg-white rounded-xl py-2.5 px-4">
        <img
          height={40}
          className="h-10"
          src="https://w7.pngwing.com/pngs/781/503/png-transparent-imdb-2016-hd-logo-thumbnail.png"
          alt="IMDB Logo" // Added alt attribute for accessibility
        />
        <div className="flex items-center justify-end relative">
          <input
            type="text"
            placeholder="Search Movie"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="text-sm w-80 font-regular text-gray-800 px-2 py-2 border border-solid border-gray-400 rounded-md"
          />

          <div className="absolute right-4 top-3">
            {loading ? (
              <Spinner className="animate-spin" />
            ) : (
              <MagnifyingGlass />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 col-span-12 overflow-y-auto rounded-xl scrollbar-hidden">
        {data &&
          data.Search &&
          data.Search.map(
            (movie: {
              imdbID: string;
              Poster: string;
              Title: string;
              Year: string;
            }) => (
              <div
                key={movie.imdbID}
                style={{
                  background: `url(${movie.Poster})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="rounded-xl w-52 bg-slate-100 shadow-sm aspect-[3/4] max-h-[278px] grid relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 ">
                  <p className="text-sm font-semibold px-2 py-1">
                    {movie.Title}
                  </p>
                  <p className="text-xs font-light px-2 py-1">{movie.Year}</p>
                </div>
              </div>
            )
          )}

        {!loading && !data?.Search?.length && (
          <p className="flex-1 text-center text-gray-500 text-lg font-semibold italic mt-6">
            No movies found!
            <br />
            Try searching for another movie.
          </p>
        )}
      </div>
    </div>
  );
};

export default Day6;
