import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import SelectBox from "../../SelectBox";
import DropDown from "../../DropDown";
import { periodicRebalancingList } from "../../../../constant/periodicrebalancing";

const PeriodicRebalancing = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <PeriodicRebalancingContainer>
      <div className="sub-title">주기 리밸런싱</div>
      <SelectBox
        readOnly={true}
        icon={
          isDropDown ? (
            <IoIosArrowUp onClick={handleDropDown} />
          ) : (
            <IoIosArrowDown onClick={handleDropDown} />
          )
        }
        onClick={handleDropDown}
        setIsDropDown={setIsDropDown}
        value={periodicRebalancingList[0].name}
      />
      {isDropDown && (
        <DropDown
          setIsDropDown={setIsDropDown}
          dropDownList={periodicRebalancingList}
        />
      )}
    </PeriodicRebalancingContainer>
  );
};

const PeriodicRebalancingContainer = styled.div``;

export default PeriodicRebalancing;
