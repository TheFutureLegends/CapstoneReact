import React from "react";

// core components
import GridContainer from "components/backend/Grid/GridContainer.js";
import GridItem from "components/backend/Grid/GridItem.js";
import Heading from "components/backend/Heading/Heading.js";
import Timeline from "components/backend/Timeline/Timeline.js";
import Card from "components/backend/Card/Card.js";
import CardBody from "components/backend/Card/CardBody.js";

import { stories } from "data/general.js";

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
