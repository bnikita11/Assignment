import {
  ArrowSplit,
  CellViewIcon,
  ChevronDoubleIcon,
  DownArrowIcon,
  FilterIcon,
  HideIcon,
  ShareIcon,
  SortIcon,
  UpArrowIcon,
} from "../assets/Icon";
function Toolbar() {
  const handleImport = () => {
    alert("Importingg.....!!!");
  };
  const handleExport = () => {
    alert("Exporting....!!!");
  };
  const handleShare = () => {
    alert("Sharringg...!");
  };
  const handleNewAction = () => {
    alert("Going to handle new action..!");
  };
  const handleToolbar = () => {
    alert("hiding toolbar!!!!");
  };
  const handleFields = () => {
    alert("Hiding fields...!!");
  };
  const handleSorting = () => {
    alert("Sorthing fields....!!");
  };
  const handleFiltering = () => {
    alert("Filtering....!");
  };
  const handleCellView = () => {
    alert("Cell view...!");
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start gap-3 ml-3">
        <div className="flex items-center gap-2 ">
          <p className="">Toolbar</p>
          <span className="mr-4">
            <ChevronDoubleIcon onClick={handleToolbar} />
          </span>
        </div>
        <div className="border-r-2 border-gray-200"></div>
        <div className="tools flex justify-start gap-4">
          <div className="flex items-center gap-2">
            <span>
              <HideIcon onClick={handleFields} />
            </span>
            <p>Hide Fields</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <SortIcon onClick={handleSorting} />
            </span>
            <p>Sort</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FilterIcon onClick={handleFiltering} />
            </span>
            <p>Filter</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CellViewIcon onClick={handleCellView} />
            </span>
            <p>Cell View</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-4">
        <div></div>
        <button
          className="flex items-center gap-2 shadow rounded-sm hover:bg-gray-300"
          onClick={() => handleImport()}
        >
          <span>
            <DownArrowIcon />
          </span>
          <p>Import</p>
        </button>
        <button
          className="flex items-center gap-2 shadow rounded-sm hover:bg-gray-300"
          onClick={() => handleExport()}
        >
          <span>
            <UpArrowIcon />
          </span>
          <p>Export</p>
        </button>
        <button
          className="flex items-center gap-2 shadow rounded-sm hover:bg-gray-300"
          onClick={() => handleShare()}
        >
          <span>
            <ShareIcon />
          </span>
          <p>Share</p>
        </button>
        <button
          className="flex items-center gap-2 shadow rounded-sm bg-green-700 mr-3 hover:bg-gray-300"
          onClick={() => handleNewAction()}
        >
          <span>
            <ArrowSplit />
          </span>
          <p>New Action</p>
        </button>
      </div>
    </div>
  );
}
export default Toolbar;
