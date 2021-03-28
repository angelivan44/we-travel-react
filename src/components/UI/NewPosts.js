import styled from "@emotion/styled";

export default function NewPosts() {
  const data = [
    {
      id: 1,
      title: "Proven Health & Lifestyle Hacks that will boost your enerhy at home ",
      place: "tacna"
    }
  ]
  
  return (
    <StyledDiv>
      <h1>NewPosts</h1>
      <CardContainer>
        
      </CardContainer>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  padding: 24px 117px;
`

const CardContainer = styled.div`

`