import { useEffect, useState } from "react";
import type { UsersTypes } from "./types";

const Users = () => {
  const [users, setUsers] = useState<UsersTypes[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const result = await fetch("https://dummyjson.com/users");
      const json = await result.json();
      return json;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProduct();
      console.log("inside use", data);
      setUsers(data?.users || []);
    };

    getData();
  }, []);

  if (loading) {
    return "...Loading";
  }

  console.log(users, "users");

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          {user.firstName}
          <img src={user.image} alt="" />
          </div>
      ))}
    </div>
  );
};

export default Users;
