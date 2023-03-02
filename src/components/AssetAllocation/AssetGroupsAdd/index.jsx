import { useState, useEffect } from "react";
import styled from "styled-components";
import AssetGroup from "./AssetGroup";
import Button from "../../Button";
import SelectBox from "../SelectBox";
import DropDown from "../DropDown";

const ASSET_GROUP = localStorage.getItem("assetGroup");

const AssetGroupsAdd = () => {
  const [add, setAdd] = useState(Number(ASSET_GROUP));
  const [isAdd, setIsAdd] = useState(false);

  // useEffect(() => {
  // ASSET_GROUP ? setIsAdd(false) : setIsAdd(true);
  // }, [add]);

  // console.log("자산군개수추가", add);
  // console.log("로컬 자산 수", ASSET_GROUP);
  console.log("자산 수가 0개면 false", isAdd);

  const handleAdd = () => {
    setIsAdd(true);
  };

  const removeAsset = () => {
    setIsAdd(false);
  };

  return (
    <AssetGroupsAddContainer>
      {isAdd ? (
        <AssetGroup handleAdd={handleAdd} removeAsset={removeAsset} />
      ) : (
        <Button onClick={handleAdd} title="추가하기" color="orange" />
      )}
    </AssetGroupsAddContainer>
  );
};

const AssetGroupsAddContainer = styled.div``;

export default AssetGroupsAdd;
