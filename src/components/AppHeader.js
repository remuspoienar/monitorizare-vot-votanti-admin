import React from "react";
import { Box } from "grommet";

const AppHeader = props => (
  <Box
    tag="header"
    background="appYellow"
    pad="medium"
    elevation="medium"
    justify="between"
    direction="row"
    align="center"
    flex={false}
    {...props}
  />
);

export default AppHeader;
