import React, { FC } from "react";

interface Props {
  fill?: string;
}

export const VideoIcon: FC<Props> = ({ fill = "white" }) => (
  <svg
    fill={fill}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 32 28"
  >
    <title>film</title>
    <path d="M0 4v24h32v-24h-32zM6 26h-4v-4h4v4zM6 18h-4v-4h4v4zM6 10h-4v-4h4v4zM24 26h-16v-20h16v20zM30 26h-4v-4h4v4zM30 18h-4v-4h4v4zM30 10h-4v-4h4v4zM12 10v12l8-6z"></path>
  </svg>
);
