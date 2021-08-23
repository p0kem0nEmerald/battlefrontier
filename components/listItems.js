import * as React from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import Image from "next/image";

import facilities from "../data/name";

function ListItems({ facility }) {
  // const { asPath } = useRouter();

  return (
    <>
      <List>
        <div>
          {Object.keys(facilities).map((fa) => (
            <Link href={"/" + fa}>
              <ListItem
                button
                className={facility === fa ? "bg-black text-white" : ""}
              >
                <ListItemIcon>
                  <Image
                    src={`/static/images/trainer/overworld/${facilities[fa].brain}.png`}
                    alt={facilities[fa].brain}
                    width="40px"
                    height="40px"
                  />
                </ListItemIcon>
                <ListItemText primary={"バトル" + facilities[fa].name} />
              </ListItem>
            </Link>
          ))}
        </div>
      </List>
      <Divider />
      <List>
        <div>
          <ListSubheader inset>Other Contents</ListSubheader>
          <Link href="https://p0kem0nemerald.github.io/">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
        </div>
      </List>
    </>
  );
}

export default ListItems;
