import { useEffect, useState } from "react";
import useGetUser from "../api/index";
import UserCard from "./UserCard";

const SearchUsers = () => {
  const [input, setInput] = useState("");

  const { data, loading, error } = useGetUser(
    `https://api.github.com/search/users?q=${input}`
  );

  useEffect(() => {
    console.log(input);
  }, [input]);

  if (error) {
    return <p>Something goes wrong</p>;
  }

  return (
    <>
      <form>
        <input
          type="text"
          name="search"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
      {loading
        ? "Loading..."
        : data?.map((user: any, index: number) => (
            <UserCard
              key={index}
              userName={user.login}
              userAvatar={user.avatar_url}
            />
          ))}
    </>
  );
};

export default SearchUsers;
