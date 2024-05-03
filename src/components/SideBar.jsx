const SideBar = () => {
  return (
    <div className="shadow-lg col-span-1 pl-6 h-screen border">
      <ul className="my-2">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold mb-2">You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className="font-bold mb-2">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default SideBar;
