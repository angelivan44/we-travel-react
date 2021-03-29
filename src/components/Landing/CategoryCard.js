import styled from "@emotion/styled";

export default function CategoryCard ({img, name, count}){
  console.log(name, count)
  return (
    <StyledDiv count={count}>
      <img src={img} />
      <div>
        <h1>{name}</h1>
        <p>{count} posts</p>
      </div>     

    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-flow:wrap;
  gap:8px;
  cursor:pointer;
  & > img {
    width: 65px;
    height: 65px;
    border-radius: 8px;
  };
  & > div {
    display: flex;
    flex-flow: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    & > h1 {
      margin : 0;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }
    & > p {
      display: ${(props) => props.count === 0 ? "none" : "inline-block"};
      margin : 0;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
    }
  }
`