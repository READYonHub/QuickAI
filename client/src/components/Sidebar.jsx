import { useClerk, useUser } from "@clerk/react";

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`
        w-60 bg-gray-200 border-r flex flex-col justify-between items-center
        max-sm:absolute top-14 bottom-0 z-50
        ${sidebar ? "translate-x-0" : "max-sm:translate-x-full"}
        transition-all duration-300 ease-in-out
      `}
    >
      <div className="my-7 w-full">
        <img
          src={user.imageUrl}
          alt="User Avatar"
          className="w-14 h-14 rounded-full mx-auto"
        />
        <h1 className="mt-1 text-center font-medium">{user.fullName}</h1>
      </div>

      <div className="flex flex-col gap-4 mb-6 w-full px-4">
        <button
          onClick={openUserProfile}
          className="bg-white py-2 rounded shadow text-sm"
        >
          Profile
        </button>

        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white py-2 rounded shadow text-sm"
        >
          Sign out
        </button>

        <button
          onClick={() => setSidebar(false)}
          className="bg-gray-300 py-2 rounded shadow text-sm sm:hidden"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
