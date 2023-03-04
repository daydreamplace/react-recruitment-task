import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlloc } from "../../../store/modules/alloc";
import styled from "styled-components";
import AssetGroup from "./AssetGroup";
import Button from "../../Button";

const ASSET_GROUP = localStorage.getItem("assetGroup");
const IS_ASSET = localStorage.getItem("isAsset");

const AssetGroupsAdd = () => {
  const [add, setAdd] = useState(Number(ASSET_GROUP));
  const [isAsset, setIsAsset] = useState(false);
  const [group, setGroup] = useState([]);
  const dispatch = useDispatch();
  const { assetsGroup } = useSelector((state) => state.alloc);

  const handleAsset = () => {
    setIsAsset(true);
    localStorage.setItem("isAsset", true);
  };

  const removeAsset = () => {
    setIsAsset(false);
    localStorage.removeItem("isAsset");
  };

  return (
    <AssetGroupsAddContainer>
      {localStorage.getItem("isAsset") || isAsset ? (
        <AssetGroup handleAdd={handleAsset} removeAsset={removeAsset} />
      ) : (
        <Button onClick={handleAsset} title="추가하기" color="orange" />
      )}
    </AssetGroupsAddContainer>
  );
};

const AssetGroupsAddContainer = styled.div``;

export default AssetGroupsAdd;
