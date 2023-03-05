import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlloc } from "../../../store/modules/alloc";
import styled from "styled-components";
import AssetGroup from "./AssetGroup";
import Button from "../../Button";

const IS_ASSET = localStorage.getItem("isAsset");

const AssetGroupsAdd = () => {
  const [isAsset, setIsAsset] = useState(false);
  const dispatch = useDispatch();
  const { assetsGroup } = useSelector((state) => state.alloc);

  useEffect(() => {
    if (!IS_ASSET) localStorage.setItem("isAsset", false);
  }, [IS_ASSET]);

  const handleAsset = () => {
    setIsAsset(true);
    localStorage.setItem("isAsset", true);
    let arr = [...assetsGroup];
    let assetObj = { id: arr.length + 1, asset: "", percent: 0 };
    arr.push(assetObj);
    dispatch(setAlloc({ type: "assetsGroup", value: arr }));
  };

  const removeAsset = (index) => {
    if (assetsGroup.length === 1) {
      setIsAsset(false);
      localStorage.setItem("isAsset", false);
    }
    let arr = [...assetsGroup];
    arr.splice(index, 1);
    dispatch(setAlloc({ type: "assetsGroup", value: arr }));
  };

  return (
    <AssetGroupsAddContainer>
      {assetsGroup.length > 0 &&
        assetsGroup.map((el, i) => {
          return (
            <div className="asset-group">
              <AssetGroup key={el.id} id={i + 1} assetIndex={i} />
              <div className="button-wrapper">
                <Button
                  title="삭제하기"
                  color="black"
                  onClick={() => {
                    removeAsset(i);
                  }}
                />
                <Button title="추가하기" color="orange" onClick={handleAsset} />
              </div>
            </div>
          );
        })}
      {(!IS_ASSET || !isAsset) && (
        <Button onClick={handleAsset} title="추가하기" color="orange" />
      )}
    </AssetGroupsAddContainer>
  );
};

const AssetGroupsAddContainer = styled.div`
  .asset-group + .asset-group {
    width: 650px;
    margin-top: 50px;
    padding-top: 60px;
    border-top: 1px solid #fff;
  }

  .button-wrapper {
    margin: 40px 0 20px;

    div + div {
      margin-left: 32px;
    }
  }
`;

export default AssetGroupsAdd;
