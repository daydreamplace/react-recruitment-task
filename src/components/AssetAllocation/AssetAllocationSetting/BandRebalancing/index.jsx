import { useState } from "react";
import styled from "styled-components";
import { BsPercent } from "react-icons/bs";
import SelectBox from "../../SelectBox";

const BandRebalancing = () => {
  return (
    <BandRebalancingContainer>
      <div className="sub-title">밴드 리밸런싱</div>
      <SelectBox
        readOnly={false}
        icon={<BsPercent />}
        value="밴드 리밸런싱 기준을 입력해주세요"
      />
    </BandRebalancingContainer>
  );
};

const BandRebalancingContainer = styled.div``;

export default BandRebalancing;
