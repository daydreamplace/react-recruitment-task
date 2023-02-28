import { useState } from "react";
import styled from "styled-components";
import AssetGroup from "./AssetGroup";
import Button from "../../Button";
import SelectBox from "../SelectBox";
import DropDown from "../DropDown";

const AssetGroupsAdd = () => {
  const [add, setAdd] = useState(0);
  const [isAdd, setIsAdd] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);

  const handleAdd = () => {
    setAdd(add + 1);
    console.log(add);
  };

  const onClick = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <AssetGroupsAddContainer>
      {/* <Button onClick={handleAdd} title="추가하기" color="orange" /> */}
      <h3 className="asset">자산 01</h3>
      <AssetGroup
        onClick={onClick}
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
      />
      {isDropDown && <DropDown setIsDropDown={setIsDropDown} />}
    </AssetGroupsAddContainer>
  );
};

const AssetGroupsAddContainer = styled.div`
  .asset {
    margin-top: 14px;
    margin-bottom: 18px;
    font-size: 16px;
    font-weight: 500;
  }

  .percent {
    margin-top: 38px;
    margin-bottom: 18px;
    color: ${({ theme }) => theme.textColor};
    font-size: 16px;
  }

  p {
    margin: 18px 0;
    color: ${({ theme }) => theme.lightGray};
    font-size: 12px;
  }

  .button-wrapper {
    margin: 40px 0 20px;

    div + div {
      margin-left: 32px;
    }
  }
`;

export default AssetGroupsAdd;
