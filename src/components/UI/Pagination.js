import styled from "@emotion/styled";
/* import "./Pagination.css"; */
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

function Pagination({ className, total, limit, page, onSelectPage }) {
  const pages = Math.ceil(total / limit);
  const listItems = [];

  if (pages > 1 && page > 1) {
    listItems.push(
      <li key="left" onClick={() => onSelectPage(page - 1)}>
        <RiArrowLeftSLine size="40px" color="#D5603F"></RiArrowLeftSLine>
      </li>
    );
  } else {
    listItems.push(<li key="left" />);
  }
  for (let i = 1; i <= pages; i++) {
    const className = i === page ? "selected" : "";
    listItems.push(
      <li key={i} onClick={() => onSelectPage(i)} className={className}>
        {i}
      </li>
    );
  }
  if (pages > 1 && page < pages) {
    listItems.push(
      <li key="right" onClick={() => onSelectPage(page + 1)}>
        <RiArrowRightSLine size="40px" color="#D5603F"></RiArrowRightSLine>
      </li>
    );
  } else {
    listItems.push(<li key="right" />);
  }
  return <StyledUl> {listItems} </StyledUl>;
}

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  list-style-type: none;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  li {
    width: 35px;
    height: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  li.selected {
    border-radius: 50%;
    background-color: #d5603f;
    color: white;
  }
`;

export { Pagination };
