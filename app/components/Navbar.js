import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="border-b h-[8vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-extrabold text-3xl">Logo</h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-8">
        <Link href="/profile">
          <h1 className="text-xl text-gray-100 hover:text-gray-300">Profile</h1>
        </Link>

        <Link href="/about">
          <h1 className="text-xl text-gray-100 hover:text-gray-300">About</h1>
        </Link>
        <Link href="/posts">
          <h1 className="text-xl text-gray-100 hover:text-gray-300">Blogs</h1>
        </Link>

        {user ? (
          <LogoutLink>
            <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center text-blue-600 font-bold">
              Sign Out
            </button>
          </LogoutLink>
        ) : (
          <div className="flex items-center gap-x-5">
            <LoginLink>
              <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center text-blue-600 font-bold">
                Sign In
              </button>
            </LoginLink>
            <RegisterLink>
              <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center text-blue-600 font-bold">
                Register
              </button>
            </RegisterLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
