import React, { PureComponent } from "react";

import { Box, Button, Paragraph } from "grommet";
import get from "lodash/get";

export class IncidentsList extends PureComponent {
  render() {
    const { incidents } = this.props;
    return (
      <Box pad="medium">
        <Box>
          {incidents.map(incident => (
            <Box
              key={incident.id}
              width="100%"
              gap="large"
              pad="small"
              direction="row"
              align="center"
              justify="center"
            >
              <Box
                elevation="medium"
                width="75%"
                pad="medium"
                gap="medium"
                direction="row"
                justify="start"
              >
                <Box width="25%">
                  <Paragraph>
                    <b>Nume:</b> {incident.name.split(" ")[0]}
                  </Paragraph>
                  <Paragraph>
                    <b>Prenume:</b> {incident.name.split(" ")[1]}
                  </Paragraph>
                  <Paragraph>
                    <b>Regiune:</b>
                  </Paragraph>
                  <Paragraph>
                    <b>Judet:</b> {get(incident, "county.name")}
                  </Paragraph>
                </Box>
                <Box width="25%">
                  <Paragraph>
                    <b>Oras:</b> {incident.city.name}
                  </Paragraph>
                  <Paragraph>
                    <b>Sectie:</b> {get(incident, "precinct.address")}
                  </Paragraph>
                  <Paragraph>
                    <b>Tipul sesizarii:</b> {get(incident, "incidentType.name")}
                  </Paragraph>
                </Box>
                <Box width="50%">
                  <Paragraph style={{ maxWidth: 800 }}>
                    <b>Sesizare:</b> {incident.description}
                  </Paragraph>
                </Box>
              </Box>
              <Box width="10%" fill="vertical" pad={{ vertical: "medium" }}>
                <Box height="25%">
                  <Button color="green" fill primary label="Approve" />
                </Box>
                <Box height="50%" />
                <Box height="25%">
                  <Button color="red" fill primary label="Reject" />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}

export default IncidentsList;
