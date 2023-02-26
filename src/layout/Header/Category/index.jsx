import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { categoryList } from "../../../constant/category";

const Category = () => {
  return (
    <Positioner>
      <CategoryContainer>
        <div className="category">
          <div className="nav-wrapper">
            {categoryList.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.path}
                end={nav.id === 2}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
          <div className="notice">
            <a
              href="https://opposite-theater-c57.notion.site/4affdd3dae7b4b3287345f0122931d29"
              target="_blank"
            >
              공지사항
            </a>
          </div>
        </div>
      </CategoryContainer>
    </Positioner>
  );
};

const Positioner = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const CategoryContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  .category {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 1020px;
    height: 52px;

    .nav-wrapper {
      display: flex;

      a {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 24px;
        margin-right: 64px;
        font-size: 16px;
        font-weight: 400;
        color: rgb(252, 252, 252);
        cursor: pointer;
      }

      a:hover {
        color: ${({ theme }) => theme.red};
      }

      .active {
        color: ${({ theme }) => theme.red};
        font-weight: 400;
      }
    }

    .notice {
      display: flex;
      font-size: 14px;
      cursor: pointer;

      p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
  }
`;

export default Category;
