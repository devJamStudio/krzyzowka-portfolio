import React, { useState, useEffect, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [randomPosts, setRandomPosts] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef();

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        nodes {
          title
          slug
          tags
        }
      }
    }
  `);

  const projects = data.allContentfulPortolio.nodes;

  const search = (event) => {
    const query = event.target.value.toLowerCase();

    const filteredResults = projects.filter((project) => {
      const title = project.title.toLowerCase();

      return title.includes(query);
    });

    setQuery(query);
    setResults(filteredResults);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setResults([]);
    }
  };

  const handleSearchClick = () => {
    if (!isFocused) {
      const randomPosts = getRandomPosts(projects, 3);
      setRandomPosts(randomPosts);
    }
  };

  const getRandomPosts = (posts, count) => {
    const shuffledPosts = [...posts].sort(() => 0.5 - Math.random());
    return shuffledPosts.slice(0, count);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-4 mx-4 flex-3"
    style={{'flex':'4'}} ref={searchRef}>
      <input
        type="text"
        placeholder="Szukaj..."
        value={query}
        onChange={search}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleSearchClick}
        className="px-4 py-2 text-black bg-transparent border border-black rounded-3xl focus:outline-none w-full focus:border-black"
      />
      {results.length > 0 && isFocused && (
        <div className="absolute z-10 mt-2 bg-white rounded-md shadow-md">
          {results.map((result, index) => (
            <Link
              key={index}
              to={`/portfolio-test/${result.slug}/`}
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              {result.title}
            </Link>
          ))}
        </div>
      )}
      {!isFocused && randomPosts.length > 0 && (
        <div className="absolute z-10 mt-2 bg-white rounded-md shadow-md">
          {randomPosts.map((post, index) => (
            <Link
              key={index}
              to={`/portfolio-test/${post.slug}/`}
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              {post.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

