import * as React from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";

import facilities from "../data/name";

export default function FacilityLayout({ children, facility = "frontier" }) {
  return (
    <Layout facility={facility}>
      {children}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9} className="w-full">
          <div className="w-full">
            <img
              src={`/images/map/${facility}.png`}
              alt={facilities[facility].brain}
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
