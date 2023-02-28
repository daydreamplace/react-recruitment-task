import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import SelectBox from "../../SelectBox";

const AssetAllocationAlgorithm = () => {
  return (
    <AssetAllocationAlgorithmContainer>
      <div className="sub-title">자산배분 알고리즘</div>
      <SelectBox readOnly={true} icon={<IoIosArrowDown />} />
    </AssetAllocationAlgorithmContainer>
  );
};

const AssetAllocationAlgorithmContainer = styled.div``;

export default AssetAllocationAlgorithm;
