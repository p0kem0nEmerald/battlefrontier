import * as React from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";

import facilities from "../data/name";

export default function FacilityLayout({ children, facility = "frontier" }) {
  return (
    <Layout facility={facility}>
      {children}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9} className="w-full">
          <div>
            <Image
              src={`/battlefrontier/images/map/${facility}.png`}
              alt={facilities[facility].brain}
              width={640}
              height={360}
            />
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}
