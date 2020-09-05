import React from "react";

// core components
import Wizard from "components/frontend/Wizard/Wizard.js";
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";

import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";

export default function WizardView() {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
          validate
          steps={[
            { stepName: "About", stepComponent: Step1, stepId: "about" },
            { stepName: "Account", stepComponent: Step2, stepId: "account" },
            { stepName: "Address", stepComponent: Step3, stepId: "address" },
          ]}
          title="Build Your Profile"
          subtitle="This information will let us know more about you."
          finishButtonClick={(e) => alert(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
