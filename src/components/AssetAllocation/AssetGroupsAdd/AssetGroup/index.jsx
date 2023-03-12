import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlloc } from "../../../../store/modules/alloc";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsPercent } from "react-icons/bs";
import SelectBox from "../../../SelectBox";
import DropDown from "../../../DropDown";
import { assetGroupsList } from "../../../../constant/assetgroups";

const AssetGroup = ({ id, assetIndex }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const clickRef = useRef();
  const dispatch = useDispatch();
  const { assetsGroup } = useSelector((state) => state.alloc);

  useEffect(() => {
    const clickOutside = (e) => {
      if (
        isDropDown &&
        clickRef.current &&
        !clickRef.current.contains(e.target)
      ) {
        setIsDropDown(false);
      }
    };
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, [isDropDown]);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const selectAsset = (e) => {
    let value = e.target.value;
    let newAssetGroup = assetsGroup.map((group, index) => {
      if (index === assetIndex) {
        return { ...group, asset: value };
      }
      return group;
    });
    dispatch(setAlloc({ type: "assetsGroup", value: newAssetGroup }));
    setIsDropDown(false);
    localStorage.setItem();
  };

  const onChange = (e) => {
    const regex = /^[0-9]*$/;
    let value = e.target.value;
    if (0 > value || value > 100) return;
    if (regex.test(value)) {
      let newAssetGroup = assetsGroup.map((group, index) => {
        if (index === assetIndex) {
          return { ...group, percent: value };
        }
        return group;
      });
      dispatch(setAlloc({ type: "assetsGroup", value: newAssetGroup }));
      localStorage.setItem();
    }
  };

  return (
    <AssetGroupContainer>
      <h3 className="asset">자산 {id}</h3>
      <SelectBox
        readOnly={true}
        icon={isDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        onClick={handleDropDown}
        setIsDropDown={setIsDropDown}
        value={assetsGroup[assetIndex].asset && assetsGroup[assetIndex].asset}
      />
      <div ref={clickRef}>
        {isDropDown && (
          <DropDown
            setIsDropDown={setIsDropDown}
            dropDownList={assetGroupsList}
            onClick={selectAsset}
          />
        )}
      </div>
      <h3 className="percent">비중</h3>
      <SelectBox
        icon={<BsPercent />}
        onChange={onChange}
        setIsDropDown={() => {
          false;
        }}
        value={
          assetsGroup[assetIndex].percent && assetsGroup[assetIndex].percent
        }
      />
      <p>0 ~ 100 까지 입력할 수 있습니다.</p>
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
`;

export default AssetGroup;
