import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg col-span-1 h-screen border">
      <ul className="my-2 pl-4">
        <li className="cursor-pointer py-2">Home</li>
        <li className="cursor-pointer py-2">Shorts</li>
        <li className="cursor-pointer py-2">Subscription</li>
      </ul>
      <div className="border my-2"></div>
      <h1 className="font-bold mb-2 pl-4">You</h1>
      <ul className="pl-4">
        <li className="cursor-pointer py-2">History</li>
        <li className="cursor-pointer py-2">Playlists</li>
        <li className="cursor-pointer py-2">Watch Later</li>
        <li className="cursor-pointer py-2">Liked Videos</li>
      </ul>
      <div className="border my-2"></div>
      <h1 className="font-bold mb-2 pl-4 py-2">Explore</h1>
      <ul className="pl-4">
        <li className="cursor-pointer py-2">Trending</li>
        <li className="cursor-pointer py-2">Shopping</li>
        <li className="cursor-pointer py-2">Music</li>
        <li className="cursor-pointer py-2">Live</li>
        <li className="cursor-pointer py-2">Gaming</li>
        <li className="cursor-pointer py-2">News</li>
      </ul>
    </div>
  );
};

export default SideBar;
