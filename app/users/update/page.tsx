"use client";

import { userState } from "@/app/recoil/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function UserUpdatePage() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <h1>Update User</h1>
      <input
        type="email"
        placeholder="Enter your Email"
        value={user.email}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Enter your Name"
        value={user.name}
        onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
      />
      <Link href="/users/updated-user">Check updated result</Link>
    </div>
  );
}
