import { Suspense } from "react";
import { use } from "react";

//cache->reload, no-store, force-cache
interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
}

interface userResponse {
  users: User[];
  total: number;
}

function getUser(): Promise<userResponse> {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
}

export default function UseHookExample() {
  const userPromise = getUser();

  return (
    <div>
      <h1>Use Hook Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserList usersPromise={userPromise} />
      </Suspense>
    </div>
  );
}

function UserList({ usersPromise }: { usersPromise: Promise<userResponse> }) {
  const getUsersList = use(usersPromise);

  return (
    <div>
      {getUsersList.users.map((user) => (
        <div key={user.id}>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.gender}</p>
        </div>
      ))}
    </div>
  );
}
