import styled from "styled-components"

export const CardWrapper = styled.div<{ color: string }>`
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: 300px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: url(${({ color }) => color});
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 1);
  text-align: center;
`;

export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextTitle = styled.h2<{ color: string }>`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background-clip: text;
  -webkit-background-clip: text;
  color: ${({ color }) => color};
`;

export const CardTextBody = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 20px;
  font-weight: 500;
`;

export const CardStatWrapper = styled.div<{ bgcolor: string }>`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background:${({ bgcolor }) => bgcolor};
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

export const LinkText = styled.a<{ color: string }>`
  color: ${({ color }) => color};
  text-decoration: none;
`;

