import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlloc } from "../../../../store/modules/alloc";
import styled from "styled-components";
import { BsPercent } from "react-icons/bs";
import SelectBox from "../../SelectBox";

const BandRebalancing = () => {
  const dispatch = useDispatch();
  const { band } = useSelector((state) => state.alloc);

  const onChange = (e) => {
    let value = e.target.value;
    dispatch(setAlloc({ type: "band", value: value }));
    localStorage.setItem("band", value);
  };

  return (
    <BandRebalancingContainer>
      <div className="sub-title">밴드 리밸런싱</div>
      <SelectBox
        readOnly={false}
        icon={<BsPercent />}
        onChange={onChange}
        placeholder="밴드 리밸런싱 기준을 입력해주세요"
        setIsDropDown={() => false}
        value={band}
      />
    </BandRebalancingContainer>
  );
};

const BandRebalancingContainer = styled.div``;

export default BandRebalancing;
