import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const DropDown = ({ dropDownList, onClick }) => {
  const [visibleList, setVisibleList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPageNum((prevPageNum) => prevPageNum + 1);
        }
      },
      {
        threshold: 1,
      }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const newVisibleList = dropDownList.slice(0, pageNum * 10);
    setVisibleList(newVisibleList);
  }, [pageNum, dropDownList]);

  return (
    <DropDownContainer>
      {visibleList.length > 0 &&
        visibleList.map((option) => (
          <div key={option.id} className="select-option" onClick={onClick}>
            <input readOnly value={option.name} />
          </div>
        ))}
      <div ref={observerRef} />
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 2;
  margin-top: 9px;
  max-height: 300px;
  overflow: auto;
  background: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.darkGray};
  border-radius: 6px;

  .select-option {
    position: relative;
    width: 640px;

    input {
      width: 100%;
      height: 36px;
      margin: 0px auto;
      background: ${({ theme }) => theme.selectBoxColor};
      border: 0.5px solid ${({ theme }) => theme.borderColor};
      border-radius: 6px;
      color: ${({ theme }) => theme.selectTextColor};
      text-align: center;
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
    }

    input:hover {
      border: none;
      background: rgba(255, 255, 255, 0.08);
    }

    input:focus {
      outline: none;
      background: rgba(236, 97, 38, 0.3);
    }
  }
`;

export default DropDown;
