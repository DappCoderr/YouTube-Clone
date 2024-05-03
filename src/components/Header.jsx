const Header = () => {
  return (
    <div className="grid w-full place-items-center h-16 grid-flow-col p-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src="https://cdn3.iconfinder.com/data/icons/e-commerce-8/91/hamburger-512.png"
          alt="menu-icon"
        />
        <img
          className="h-8 ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="order-solid border border-black w-96 border-gray-400 rounded-l-full rounded py-1 pl-4"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-4 cursor-pointer rounded-r-full py-1 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="user-logo"
        />
      </div>
    </div>
  );
};

export default Header;
