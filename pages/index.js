import * as React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Layout from "../components/Layout";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Page() {
  return (
    <Layout facility="frontier">
      <Grid container spacing={3}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={8} className="w-full">
          <figure>
            <img
              src="https://www.pokemon.co.jp/img/game/emerald/03-pic01.jpg"
              alt="丸の部分をクリックすると、各施設の詳細に飛ぶぞ。"
              usemap="#map"
            />
            <map name="map" id="map">
              <area
                shape="circle"
                coords="143,135,34"
                href="dome"
                alt="バトルドーム"
              />
              <area
                shape="circle"
                coords="259,165,35"
                href="pike"
                alt="バトルチューブ"
              />
              <area
                shape="circle"
                coords="410,156,34"
                href="arena"
                alt="バトルアリーナ"
              />
              <area
                shape="circle"
                coords="169,212,34"
                href="factory"
                alt="バトルファクトリー"
              />
              <area
                shape="circle"
                coords="501,190,35"
                href="palace"
                alt="バトルパレス"
              />
              <area
                shape="circle"
                coords="402,88,34"
                href="pyramid"
                alt="バトルピラミッド"
              />
              <area
                shape="circle"
                coords="271,64,35"
                href="tower"
                alt="バトルタワー"
              />
            </map>
          </figure>
          <Box pt={4}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"上記の画像は、"}
              <Link
                color="secondary"
                href="https://www.pokemon.co.jp/game/gba/emerald/stage.html"
              >
                「ポケットモンスター エメラルド 【 舞台 】
                ｜ポケットモンスターオフィシャルサイト」
              </Link>
              {"から拝借しています。"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
