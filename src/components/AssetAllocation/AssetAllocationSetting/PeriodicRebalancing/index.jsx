import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import SelectBox from "../../SelectBox";

const PeriodicRebalancing = () => {
  return (
    <PeriodicRebalancingContainer>
      <div className="sub-title">주기 리밸런싱</div>
      <SelectBox readOnly={true} icon={<IoIosArrowDown />} />
    </PeriodicRebalancingContainer>
  );
};

const PeriodicRebalancingContainer = styled.div``;

export default PeriodicRebalancing;
