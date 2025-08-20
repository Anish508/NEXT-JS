"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Profile() {
  const router = useRouter();
  const pathName = usePathname()
  const searchParams = useSearchParams()
  console.log(pathName);
  
  console.log(router);
  console.log(searchParams.get("name"));
  

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Profile component</h1>
      <button onClick={handleNavigate}>Navigate to home page</button>
    </div>
  );
}

export default Profile;
