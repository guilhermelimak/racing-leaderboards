import React, { FC } from "react";
import { Collapse } from "./UI/Collapse";
import { Stage } from "../types";
import styled from "@emotion/styled";
import { api } from "../api";
import { Flex } from "theme-ui";

export const CountryFlag = styled.img`
  width: 20px;
  margin-left: 12px;
`;

export const LocationName = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

interface Props {
  stage: Stage;
}

export const StageCollapse: FC<Props> = ({ stage, children }) => (
  <Collapse
    title={
      <>
        <Flex sx={{ justifyContent: "space-between" }}>
          <span>{stage.stage}</span>
          <div>
            <LocationName>{stage.location}</LocationName>
            <CountryFlag
              src={api.getCountryFlagUrl(stage.location.split(", ")[1])}
              alt="Country flag"
            />
          </div>
        </Flex>
      </>
    }
  >
    {children}
  </Collapse>
);
