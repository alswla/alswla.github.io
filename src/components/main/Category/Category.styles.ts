import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 20px;
  margin-top: 80px;

  @media (max-width: 1024px) {
    gap: 5px 15px;
  }

  @media (max-width: 768px) {
    gap: 5px 10px;
  }
`

export const Item = styled.div<{ $selected: boolean }>`
  font-size: 16px;
  font-weight: ${({ $selected }) => ($selected ? 600 : 400)};
  cursor: ${({ $selected }) => ($selected ? "default" : "pointer")};

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
