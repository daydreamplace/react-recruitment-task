import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlloc } from "../../../../store/modules/alloc";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsPercent } from "react-icons/bs";
import SelectBox from "../../SelectBox";
import DropDown from "../../DropDown";
import Button from "../../../Button";
import { assetGroupsList } from "../../../../constant/assetgroups";

const AssetGroup = ({ handleAsset, removeAsset }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const dispatch = useDispatch();
  const { asset } = useSelector((state) => state.alloc);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const selectAsset = (e) => {
    let asset = e.target.value;
    dispatch(setAlloc({ type: "asset", value: asset }));
  };

  return (
    <AssetGroupContainer>
      <h3 className="asset">자산 01</h3>
      <SelectBox
        readOnly={true}
        icon={isDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        onClick={handleDropDown}
        setIsDropDown={setIsDropDown}
        value={asset}
      />
      {isDropDown && (
        <DropDown
          setIsDropDown={setIsDropDown}
          dropDownList={assetGroupsList}
          onClick={selectAsset}
        />
      )}
      <h3 className="percent">비중</h3>
      <SelectBox
        icon={<BsPercent />}
        setIsDropDown={() => {
          false;
        }}
      />
      <p>0 ~ 100 까지 입력할 수 있습니다.</p>
      <div className="button-wrapper">
        <Button title="삭제하기" color="black" onClick={removeAsset} />
        <Button title="추가하기" color="orange" onClick={handleAsset} />
      </div>
    </AssetGroupContainer>
  );
};

const AssetGroupContainer = styled.div`
  .asset {
    margin-top: 14px;
    margin-bottom: 18px;
    color: ${({ theme }) => theme.textColor};
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

export default AssetGroup;
