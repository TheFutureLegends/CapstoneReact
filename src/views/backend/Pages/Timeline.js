import React from "react";

// core components
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Heading from "components/frontend/Heading/Heading.js";
import Timeline from "components/frontend/Timeline/Timeline.js";
import Card from "components/frontend/Card/Card.js";
import CardBody from "components/frontend/Card/CardBody.js";

import { stories } from "variables/general.js";

export default function TimelinePage() {
  return (
    <div>
      <Heading title="Timeline" textAlign="center" />
      <GridContainer>
        <GridItem xs={12}>
          <Card plain>
            <CardBody plain>
              <Timeline stories={stories} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
