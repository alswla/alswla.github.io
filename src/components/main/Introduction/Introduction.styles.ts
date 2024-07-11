import styled from "styled-components"

export const ProfileImage = styled.div`
  overflow: hidden;
  width: 140px;
  height: 140px;
  margin-bottom: 30px;
  border-radius: 50%;
  text-align: center;
  object-position: bottom;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`
export const SubText = styled.div`
  font-size: 30px;
  font-weight: 100;

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const MainText = styled.div`
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`
