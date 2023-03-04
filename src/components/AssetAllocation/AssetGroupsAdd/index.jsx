import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlloc } from "../../../store/modules/alloc";
import styled from "styled-components";
import AssetGroup from "./AssetGroup";
import Button from "../../Button";

const ASSET_GROUP = localStorage.getItem("assetGroup");
const IS_ASSET = localStorage.getItem("isAsset");

const AssetGroupsAdd = () => {
  const [isAsset, setIsAsset] = useState(false);
  const [group, setGroup] = useState([]);
  const dispatch = useDispatch();
  const { assetsGroup } = useSelector((state) => state.alloc);

  useEffect(() => {
    if (!IS_ASSET) localStorage.setItem("isAsset", false);
  }, [IS_ASSET]);

  const handleAsset = () => {
    setIsAsset(true);
    localStorage.setItem("isAsset", true);

    let arr = [...group];
    let assetObj = { id: arr.length + 1, asset: "", percent: 0 };
    arr.push(assetObj);
    setGroup(arr);
  };

  console.log(group);

  const removeAsset = () => {
    console.log(1);
    setIsAsset(false);
    localStorage.removeItem("isAsset");

    let arr = [...group];
    let assetObj = {};
    arr.slice(assetObj);
    setGroup(arr);
  };

  return (
    <AssetGroupsAddContainer>
      {group.length > 0 &&
        group.map((el, i) => {
          return (
            <>
              <AssetGroup
                key={el.id}
                id={el.id}
                // handleAdd={handleAsset}
                removeAsset={removeAsset}
              />
              <Button title="삭제하기" color="black" onClick={removeAsset} />
              <Button title="추가하기" color="orange" onClick={handleAsset} />
            </>
          );
        })}
      {(!localStorage.getItem("isAsset") || !isAsset) && (
        <Button onClick={handleAsset} title="추가하기" color="orange" />
      )}
    </AssetGroupsAddContainer>
  );
};

const AssetGroupsAddContainer = styled.div``;

export default AssetGroupsAdd;
