import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsPercent } from "react-icons/bs";
import SelectBox from "../../SelectBox";
import Button from "../../../Button";

const AssetGroup = ({ isDropDown, setIsDropDown, onClick }) => {
  return (
    <AssetGroupContainer>
      <SelectBox
        readOnly={true}
        icon={isDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        onClick={onClick}
        setIsDropDown={setIsDropDown}
      />
      <h3 className="percent">비중</h3>
      <SelectBox icon={<BsPercent />} />
      <p>0 ~ 100 까지 입력할 수 있습니다.</p>
      <div className="button-wrapper">
        <Button title="삭제하기" color="black" />
        <Button title="추가하기" color="orange" />
      </div>
    </AssetGroupContainer>
  );
};

const AssetGroupContainer = styled.div``;

export default AssetGroup;
