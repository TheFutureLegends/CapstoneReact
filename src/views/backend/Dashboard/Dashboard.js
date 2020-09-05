import React from "react";

// Dashboard Section
import SectionCardStats from "./Sections/SectionCardStats.js";
import SectionVectorMap from "./Sections/SectionVectorMap.js";
import SectionCardCharts from "./Sections/SectionCardCharts.js";
import SectionCardListings from "./Sections/SectionCardListings.js";

export default function Dashboard() {
  return (
    <div>
      {/* Card Stats BEGIN */}
      <SectionCardStats></SectionCardStats>
      {/* Card Stats BEGIN */}

      {/* Card Vector Map BEGIN */}
      <SectionVectorMap></SectionVectorMap>
      {/* Card Vector Map BEGIN */}

      {/* Card Chart BEGIN */}
      <SectionCardCharts></SectionCardCharts>
      {/* Card Chart END */}
      <h3>Manage Listings</h3>
      <br />
      {/* Card Listing START */}
      <SectionCardListings></SectionCardListings>
      {/* Card Listing END */}
    </div>
  );
}
