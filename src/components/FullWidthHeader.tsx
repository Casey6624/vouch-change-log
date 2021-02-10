import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  subtitle: string;
}

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  display: grid;
  background: #082842;
  color: white;
  margin-top: 140px;
  padding: 10px;

  div {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    display: grid;
  }

  h1 {
    font-size: 4rem;
    font-family: Montserrat, sans-serif;
  }

  h1 > span {
    color: #34bebd;
  }

  h3 {
    justify-self: flex-end;
    align-self: flex-end;
    font-family: "Lato", Helvetica, sans-serif;
  }
`;

export default function FullWidthHeader({ title, subtitle }: Props) {
  return (
    <Container>
      <div>
        <h1>
          <span>Vouch </span>
          {title}
        </h1>
        <h3>{subtitle}</h3>
      </div>
    </Container>
  );
}
