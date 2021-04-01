import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const departments = useSelector((state) => state.department.departments);

  return (
    <StyledDiv>
      {departments.map((el) => (
        <Link to={`/category/${el.id}`}>
          <CategoryCard
            key={el.id}
            img={el.service_url}
            name={el.name}
            count={el.posts.length}
          />
        </Link>
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 50px;
  padding: 40px 60px;
`;
