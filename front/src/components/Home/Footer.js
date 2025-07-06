import * as React from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import "../../App.css";
import { Grid, ImageListItem, Paper } from "@mui/material";

export default function Footer() {
  return (
    <div className="container footerbg mt3rem" id="#contact">
      <div className="row p1rem">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Paper elevation={0} class="p1rem border-radius-10">
              <div className="row" style={{ alignItems: "center" }}>
                <div className="font-weight-500 pl-0-5em colorwhite font14">
                  &#169; 2025 Restro Buddy. All rights reserved.
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
