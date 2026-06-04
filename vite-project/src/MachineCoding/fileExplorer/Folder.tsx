import { useState } from "react";
import type { ConfigJson } from "./types";

const Folder = ({ node }: { node: ConfigJson }) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState({
    value: "",
    isVisible: false,
  });

  const addFolder = (node: ConfigJson) => () => {
    const newList = [...node];
    if (node.isFolder) {
      return "something";
    }

    return null;
  };

  const handleExpand = () => {
    setExpand((prevState) => !prevState);
  };

  if (!node.isFolder) {
    return (
      <div className="flex gap-4 p-2 align-center text-center items-center pl-2">
        <span>📁</span>
        <span>{node.name}</span>
      </div>
    );
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  const handleBlurInput = () => {
    setInputVal((prevState) => ({
      ...prevState,
      isVisible: false,
    }));
  };

  const handleKeyDown = () => {};

  return (
    <div className="flex flex-col gap-4 pl-2 bg-white">
      <div className="flex flex-col gap-4" key={node.id}>
        <div className="flex flex-col bg-gray-200">
          <div
            className="flex gap-4 p-2 align-center text-center items-center"
            onClick={handleExpand}
          >
            <span>🗂️</span>
            <span>{node.name}</span>
            <div>
              <div className="flex gap-4">
                <div
                  className="icon flex cursor-pointer"
                  onClick={addFolder(node)}
                >
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/add-folder-icon.png"
                    alt="add-folder"
                  />
                </div>
                <div
                  className="icon flex cursor-pointer"
                  onClick={addFolder(node)}
                >
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/add-folder-icon.png"
                    alt="add-folder"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {expand && (
          <div className="pl-4">
            <input
              className="border border-black-300"
              value={inputVal.value}
              onChange={handleInput}
              onBlur={handleBlurInput}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        )}
        <div style={{ display: expand ? "block" : "none" }}>
          {node.children?.map((n: ConfigJson) => {
            return <Folder node={n} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Folder;
