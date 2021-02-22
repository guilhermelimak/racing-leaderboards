import React, { FC } from "react";
import { Text, Image } from "theme-ui";
import { Collapse } from "./UI/Collapse";
import { Stage } from "../types";
import { api } from "../api";
import { Flex } from "theme-ui";

export const CountryFlag: FC<{ stage: Stage }> = ({ stage }) => (
  <Image
    alt="Country flag"
    src={api.getCountryFlagUrl(stage.location.split(", ")[1])}
    sx={{ width: "20px", marginLeft: "12px" }}
  />
);

interface Props {
  stage: Stage;
}

export const StageCollapse: FC<Props> = ({ stage, children }) => (
  <Collapse
    title={
      <Flex sx={{ justifyContent: "space-between" }}>
        <Text>{stage.name}</Text>
        <Flex>
          <Text>{stage.location}</Text>
          <CountryFlag stage={stage} />
        </Flex>
      </Flex>
    }
  >
    {children}
  </Collapse>
);
