import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import SelectBox from "../../SelectBox";
import DropDown from "../DropDown";

const AssetAllocationAlgorithm = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  const onClick = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <AssetAllocationAlgorithmContainer>
      <div className="sub-title">자산배분 알고리즘</div>
      <SelectBox
        readOnly={true}
        icon={
          isDropDown ? (
            <IoIosArrowUp onClick={onClick} />
          ) : (
            <IoIosArrowDown onClick={onClick} />
          )
        }
        onClick={onClick}
      />
      {isDropDown && <DropDown />}
    </AssetAllocationAlgorithmContainer>
  );
};

const AssetAllocationAlgorithmContainer = styled.div``;

export default AssetAllocationAlgorithm;
