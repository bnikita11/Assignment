import {
  ChevronSingleIcon,
  ExpandIcon,
  MoreIcon,
  NotificationCount,
  NotificationIcon,
  SearchIcon,
} from "../assets/Icon";
import ProfilePicture from "../assets/Svg/profile.png";

function Header() {
  const handleWorkspace = () => {
    alert("Closing Workspace...!!");
  };
  const handleMenus = () => {
    alert("showing more...");
  };
  return (
    <header className="flex justify-between mt-1">
      <div className="flex justify-start items-center gap-3 ml-3 ">
        <div className="">
          <ExpandIcon onClick={handleWorkspace} />
        </div>
        <div className="flex justify-between items-center gap-2">
          <p>Workspace</p>
          <span className="inset-y-0">
            <ChevronSingleIcon />
          </span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p>Folder 2</p>
          <span className="inset-y-0">
            <ChevronSingleIcon />
          </span>
        </div>
        <div className="flex justify-between items-center gap-2 font-semibold">
          <p>Spreadsheet 3</p>
          <span className="">
            <MoreIcon onClick={handleMenus} />
          </span>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3 mr-3">
        <div className="relative">
          <div className="flex items-center bg-gray-200 rounded-xl">
            <span className="inset-y-0 left-5 flex  items-center text-gray-500 ml-4">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search within sheet"
              className=" pr-5 py-3 border-none outline-0 ml-5 "
            />
          </div>
        </div>
        <div className="relative inline-block">
          <NotificationIcon />
          <span className="absolute -top-1 -right-3">
            <NotificationCount />
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img src={ProfilePicture} alt="John Picture" />
          </div>
          <div className="flex flex-col">
            <p className="mb-0">John Doe</p>
            <p className="mt-0 text-sm text-gray-400">john@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
