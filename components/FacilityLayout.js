import * as React from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";

// import Facilities from "../data/facilities";
import Facilities from "../data/facilities.json";

export default function FacilityLayout({ children, facility = "frontier" }) {
  return (
    <Layout facility={facility}>
      {children}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9} className="w-full">
          <div>
            <img
              src={`/battlefrontier/images/map/${facility}.png`}
              alt={Facilities[facility].brain}
              width="640px"
              height="360px"
              className="mx-auto my-0"
            />
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}
