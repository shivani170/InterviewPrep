import { useState } from "react";
import json from "./data.json";
import type { ConfigJson } from "./types";
import "./fileExplorer.scss";

export type ListTypes = {
  items: ConfigJson[];
  setData: React.Dispatch<React.SetStateAction<ConfigJson[]>>;
};

const List = ({ items, setData }: ListTypes) => {
  const [expandableMap, setExpandableMap] = useState(
    new Map<string, boolean>(null),
  );
  const [showInput, setShowInput] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const handleOnClick = (node: ConfigJson) => () => {
    setExpandableMap((prevState) => {
      let newMap = new Map(prevState);
      newMap.set(node.name, !prevState?.get(node.name));
      return newMap;
    });
  };

  const addNodeToList = (parentId) => () => {
    const updateList = (lists: ConfigJson[]) => {
      return lists.map((node) => {
        if (node.id === parentId)
          return {
            ...node,
            children: [
              {
                ...node.children,
                name: newFolderName,
                isFolder: true,
                children: [],
                id: 7,
              },
            ],
          };
        if(node.children){
          return {
            ...node,
            children: updateList(node.children)
          }
        }
      });
    };

    setData((prevState) => updateList(prevState))
  };

  const handleInput = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if ((e.key = "Key")) {
      handleAddFolder();
    }
  };

  return items.map((node) => {
    const isExpandable = !!expandableMap?.get(node.name);
    return (
      <div key={node.name} className="p-2">
        <div
          className={`flex items-center gap-2 ${isExpandable ? "cursor-pointer" : ""}`}
        >
          <div className="flex gap-2" onClick={handleOnClick(node)}>
            {node.isFolder ? <span>{!isExpandable ? "▶" : "▼"}</span> : "🗂️"}
            <p className="font-semibold cursor-pointer">{node.name}</p>
          </div>

          {node.isFolder && (
            <div className="icon" onClick={() =>  setShowInput(prevState => !prevState)}>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/add-folder-icon.png"
                alt="add-folder"
              />
            </div>
          )}
        </div>

        {isExpandable && node.isFolder && node.children.length > 0 && (
          <List items={node.children} setData={setData} />
        )}
        {showInput ? (
          <input
            value={newFolderName}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            className="border text-black border-black-500 rounded-2xl"
          />
        ) : null}
      </div>
    );
  });
};

const fileExplorer = () => {
  const [data, setData] = useState(json);

  return (
    <div className="bg-white">
      <h4 className="pl-2 pt-2">Explorer</h4>
      <div className="flex flex-col px-2">
        {<List items={data} setData={setData} />}
      </div>
    </div>
  );
};

export default fileExplorer;
