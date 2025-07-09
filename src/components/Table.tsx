import { useRef, useState } from "react";
import {
  AddIcon,
  ArrowSplitOutline,
  ArrowSplitOutline1,
  ArrowSyncIcon,
  MoreSecondIcon,
  OverviewIcon,
  BriefcaseIcon,
  CalendarIcon,
  StatusIcon,
  PersonIcon,
  GlobeIcon,
  EmojiIcon,
  ChevronDownwardIcon,
} from "../assets/Icon";
import { Details } from "../mockdata/MockData";

function Table() {
  const rows = 110;

  const columnKeys = [
    "jobRequest",
    "submitted",
    "status",
    "submitter",
    "url",
    "assigned",
    "priority",
    "dueDate",
    "estValue",
  ] as const;

  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const inputRefs = useRef<HTMLInputElement[][]>(
    Array.from({ length: rows }, () =>
      Array.from({ length: columnKeys.length }, () => null!)
    )
  );

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    row: number,
    col: number
  ) => {
    if (e.key === "ArrowDown" && row < rows - 1) {
      e.preventDefault();
      inputRefs.current[row + 1][col]?.focus();
      setSelectedCell({ row: row + 1, col });
    }

    if (e.key === "ArrowUp" && row > 0) {
      e.preventDefault();
      inputRefs.current[row - 1][col]?.focus();
      setSelectedCell({ row: row - 1, col });
    }

    if (e.key === "ArrowLeft" && col > 0) {
      e.preventDefault();
      inputRefs.current[row][col - 1]?.focus();
      setSelectedCell({ row, col: col - 1 });
    }

    if (e.key === "ArrowRight" && col < columnKeys.length - 1) {
      e.preventDefault();
      inputRefs.current[row][col + 1]?.focus();
      setSelectedCell({ row, col: col + 1 });
    }
  };
  const handleAddColumn = () => {
    alert("Adding new column...!");
  };
  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "in-process":
        return " text-yellow-800 bg-yellow-200 ";
      case "need to start":
        return " text-blue-800 bg-blue-200";
      case "complete":
        return " text-green-800 bg-green-200";
      case "blocked":
        return " text-red-800 bg-red-200";
      default:
        return "";
    }
  };
  const getPriorityStyle = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return " text-red-600";
      case "medium":
        return " text-yellow-700";
      case "low":
        return " text-blue-600";
      default:
        return "";
    }
  };

  return (
    <div className="overflow-x-auto ">
      <table className="border-collapse text-sm">
        <thead className=" sticky top-0 z-10 bg-white">
          <div></div>
          <tr className=" ">
            <th className="">
              <div></div>
            </th>
            <th colSpan={4} className=" text-center font-semibold">
              <div className="flex gap-3 bg-gray-200">
                <div className="flex justify-start items-center gap-2 ">
                  {/* <div></div> */}
                  <button className="flex items-center bg-white rounded-2xl gap-1">
                    <span className="inset-y-0">
                      <OverviewIcon />
                    </span>
                    <p>Q3 Financial Overview</p>
                  </button>
                </div>
                <div className="flex items-center justify-start">
                  <span className="inset-y-0">
                    <ArrowSyncIcon />
                  </span>
                </div>
              </div>
            </th>
            <th className=""></th>
            <th className="">
              <div className="flex items-center justify-center bg-green-300 gap-1">
                <span className="inset-y-0">
                  <ArrowSplitOutline />
                </span>
                <p>Abc</p>
                <span className="inset-y-0">
                  <MoreSecondIcon />
                </span>
              </div>
            </th>
            <th colSpan={2} className=" text-center font-semibold">
              <div className="flex items-center justify-center bg-purple-300 gap-1">
                <span className="inset-y-0">
                  <ArrowSplitOutline1 />
                </span>
                <p> Answer a question</p>
                <span className="inset-y-0">
                  <MoreSecondIcon />
                </span>
              </div>
            </th>
            <th className="">
              <div className="flex items-center justify-center bg-orange-300 gap-1">
                <span className="inset-y-0">
                  <ArrowSplitOutline1 />
                </span>
                <p> Extract</p>
                <span className="inset-y-0">
                  <MoreSecondIcon />
                </span>
              </div>
            </th>
            <th className="w-[120px] bg-gray-200">
              <span className="flex justify-center items-center">
                <AddIcon onClick={handleAddColumn} />
              </span>
            </th>
          </tr>
          <tr className=" bg-gray-100">
            <th className=" px-2 py-1">#</th>
            {columnKeys.map((key, colIndex) => (
              <th
                key={key}
                className={` px-2 py-1 capitalize ${
                  colIndex === 5 ? "bg-green-100" : ""
                } ${colIndex === 6 ? "bg-purple-200" : ""} ${
                  colIndex === 7 ? "bg-purple-200" : ""
                } ${colIndex === 8 ? "bg-orange-200" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-2">
                    {key === "jobRequest" && <BriefcaseIcon />}
                    {key === "submitted" && <CalendarIcon />}
                    {key === "status" && <StatusIcon />}
                    {key === "submitter" && <PersonIcon />}
                    {key === "url" && <GlobeIcon />}
                    {key === "assigned" && <EmojiIcon />}
                    {key.replace(/([A-Z])/g, " $1")}
                  </div>
                  <div className="flex justify-around">
                    <span>
                      {key === "jobRequest" && <ChevronDownwardIcon />}
                      {key === "submitted" && <ChevronDownwardIcon />}
                      {key === "status" && <ChevronDownwardIcon />}
                      {key === "submitter" && <ChevronDownwardIcon />}
                      {key === "url" && <ChevronDownwardIcon />}
                    </span>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="overflow-auto">
          {Array.from({ length: rows }).map((_, rowIndex) => {
            const detail = Details[rowIndex];

            return (
              <tr key={`row-${rowIndex}`}>
                <td className="border border-gray-200 px-2 py-1">
                  {rowIndex + 1}
                </td>
                {columnKeys.map((key, colIndex) => {
                  const isSelected =
                    selectedCell?.row === rowIndex &&
                    selectedCell?.col === colIndex;

                  return (
                    <td
                      key={`${key}-${rowIndex}`}
                      className={`border border-gray-200 py-1 ${
                        isSelected ? "border-3 border-green-500" : ""
                      }`}
                      onClick={() => {
                        inputRefs.current[rowIndex][colIndex]?.focus();
                        setSelectedCell({ row: rowIndex, col: colIndex });
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={detail ? String(detail[key]) : ""}
                        className={`w-full outline-none bg-transparent pl-4 bg-clip-text ${
                          key === "status"
                            ? `${getStatusStyle(detail?.status || "")}`
                            : ""
                        } ${
                          key === "priority"
                            ? getPriorityStyle(detail?.priority || "")
                            : ""
                        }`}
                        ref={(el) =>
                          (inputRefs.current[rowIndex][colIndex] = el!)
                        }
                        onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                        onFocus={() =>
                          setSelectedCell({ row: rowIndex, col: colIndex })
                        }
                      />
                    </td>
                  );
                })}
                <td className="border border-gray-200 px-2 py-1 text-center"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
