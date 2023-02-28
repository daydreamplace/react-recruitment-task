import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import SelectBox from "../../SelectBox";
import DropDown from "../../DropDown";
import { assetAllocationAlgorithmList } from "../../../../constant/assetallocationalgorithm";

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
        setIsDropDown={setIsDropDown}
        value={assetAllocationAlgorithmList[0].name}
      />
      {isDropDown && (
        <DropDown
          setIsDropDown={setIsDropDown}
          dropDownList={assetAllocationAlgorithmList}
        />
      )}
    </AssetAllocationAlgorithmContainer>
  );
};

const AssetAllocationAlgorithmContainer = styled.div``;

export default AssetAllocationAlgorithm;
