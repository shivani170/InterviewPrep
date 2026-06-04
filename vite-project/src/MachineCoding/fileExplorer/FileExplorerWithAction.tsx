import data from "./data.json";
import "./fileExplorer.scss";
import Folder from "./Folder";

const FileExplorerWithAction = () => {
  return (
    <div className="w-200 m-auto">
      <div className="py-4 border-b-1 m-4">VS Code Explorer</div>
      <div className="border border-gray-300 rounded-2xl py-4 overflow-hidden">
        {data.map((node) => {
          return <Folder node={node} />;
        })}
      </div>
    </div>
  );
};

export default FileExplorerWithAction;
