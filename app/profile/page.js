import { FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Example React Icons
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-violet-500 to-dark-600 text-white">
      <div className="flex items-center space-x-4 mb-6">
        <FaUserCircle className="text-6xl" />
        <h1 className="text-3xl font-extrabold">Your Profile</h1>
      </div>

      <div className="mb-4 text-center px-6 py-3 rounded-lg shadow-md bg-white bg-opacity-30">
        <h2 className="text-7xl font-semibold">Welcome to your profile!</h2>
      </div>

      <div className="mt-8 space-x-6">
        <Link href="/edit-profile">
          <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
