import * as React from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

import "../../App.css";
import { Grid, ImageListItem, Paper } from "@mui/material";

export default function About() {
  const data = [
    {
      id: 1,
      title: "Two-Factor Authorization (2FA) Now Available",
      desc: "<b>February 24, 2023 –</b> We're excited to announce the addition of a new security feature, Two-Factor Authorization (2FA). This feature is now available to all SalesBinder users and aims to provide an extra layer of security to the software, making it even more secure for businesses to manage their inventory and customer data.",
    },
    {
      id: 2,
      title: "New Features for Incoming (backordered) Units",
      desc: "<b>February 21, 2023 –</b> This past month we released a handful of software updates that includes a lot of new features and improvements relating to incoming stock (backordered units).",
    },
    {
      id: 3,
      title: "New: Low Stock Report with Purchase Order Replenishment",
      desc: `<b>January 12, 2023 –</b> We're excited to announce our newly released tool for managing and replenishing your low stock inventory. Our new "Low Stock Report" is faster than ever, supports multiple locations and item variations, and even includes the ability to multi-select low stock items for automatically generating purchase orders to replenish them.`,
    },
    {
      id: 4,
      title: "Upgraded: Inventory Quantity Ledger",
      desc: "<b>January 09, 2023 –</b> We're excited to share some technical details on a successfully completed upgrade to our Inventory Quantity Ledger. These latest upgrades include a complete rewrite of code and a migration of all ledger data into a new software stack that provides enormous improvements across the board.",
    },
    {
      id: 5,
      title: "New Integration: WooCommerce Syncing for Inventory & Orders",
      desc: "<b>November 09, 2022 –</b> We're excited to officially announce our brand new full-featured WooCommerce Integration! This new integration is built directly into SalesBinder and does not require any WordPress plugins to be installed nor maintained on your website - it just works.",
    },
    {
      id: 6,
      title: "New: Sales Commission Report",
      desc: "<b>August 26, 2022 –</b> Today we're rolling out another new report for automatically calculating sales commissions for your sales people. Until now, if you wanted to figure out what commissions should be paid out to your sales people for a given period of time, there would have to be some manual math involved based on how your payouts are calculated – which is slow and prone to miscalculations. We can automate this process now.",
    },
  ];
  const newsdata = [
    {
      id: 1,
      title: "Two-Factor Authorization (2FA) Now Available",
      desc: "February 24, 2023 – We're excited to announce the addition of a new security feature, Two-Factor Authorization (2FA). This feature is now available to all SalesBinder users and aims to provide an extra layer of security to the software, making it even more secure for businesses to manage their inventory and customer data.",
    },
    {
      id: 2,
      title: "New Features for Incoming (backordered) Units",
      desc: "February 21, 2023 – This past month we released a handful of software updates that includes a lot of new features and improvements relating to incoming stock (backordered units).",
    },
    {
      id: 3,
      title: "New: Low Stock Report with Purchase Order Replenishment",
      desc: `January 12, 2023 – We're excited to announce our newly released tool for managing and replenishing your low stock inventory. Our new "Low Stock Report" is faster than ever, supports multiple locations and item variations, and even includes the ability to multi-select low stock items for automatically generating purchase orders to replenish them.`,
    },
    {
      id: 4,
      title: "Upgraded: Inventory Quantity Ledger",
      desc: "January 09, 2023 – We're excited to share some technical details on a successfully completed upgrade to our Inventory Quantity Ledger. These latest upgrades include a complete rewrite of code and a migration of all ledger data into a new software stack that provides enormous improvements across the board.",
    },
    {
      id: 5,
      title: "New Integration: WooCommerce Syncing for Inventory & Orders",
      desc: "November 09, 2022 – We're excited to officially announce our brand new full-featured WooCommerce Integration! This new integration is built directly into SalesBinder and does not require any WordPress plugins to be installed nor maintained on your website - it just works.",
    },
    {
      id: 6,
      title: "New: Sales Commission Report",
      desc: "August 26, 2022 – Today we're rolling out another new report for automatically calculating sales commissions for your sales people. Until now, if you wanted to figure out what commissions should be paid out to your sales people for a given period of time, there would have to be some manual math involved based on how your payouts are calculated – which is slow and prone to miscalculations. We can automate this process now.",
    },
  ];

  return (
    <div className="container" id="about">
      <div className="font40 pt-1em pb-0-5em font-weight-600 text-grediant">
        About
      </div>
      <div className="row">
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            style={{
              display: "grid",
            }}
          >
            <Paper elevation={0} class="p1rem border-radius-10">
              {/* <div className="row" style={{ alignItems: "center" }}>
                <CampaignIcon style={{ fontSize: 36, color: "#e47957" }} />
                <div className="font-weight-700 pl-0-5em colorgreydark font28">
                  Our Story
                </div>
              </div> */}

              <div className="pt-1em">
                <div className="font24 font-weight-600 colorblue">
                  SOFTWARE DEVELOPMENT COMPANY INDIA
                </div>
                <div className="pt-1em font18 font-weight-600 colorblue text-justify">
                  We're Building Modern And High Software
                </div>
                <div className="pt-1em font-weight-600 text-justify">
                  We offer a wide range of information technology services and
                  solutions that address the technology needs of organizations
                  in a variety of vertical business segments as diversified as
                  advertising, education, finance, healthcare, life sciences,
                  hotel/hospitality, media and entertainment, mobile and
                  wireless, retail, real estate, sports and fitness, technology,
                  non-profit and more industries
                </div>
                <div className="pt-1em font-weight-600 text-justify">
                  Through our customer centric approach we have gained a
                  position of trust and respect from our valued customers. We
                  follow proven practices and always keep ourselves re-inventing
                  for improvement in accordance to the new technologies for
                  serving our clients efficiently
                </div>
                <div className="pt-1em font-weight-600 text-justify">
                  We follow an efficient product development methodology to
                  determine the feasibility and practicability of each approach
                  towards software products and services that offers our
                  customers the highest quality with competitive cost and in the
                  shortest time possible
                </div>
                <div className="pt-1em font-weight-600 text-justify">
                  We also build customized web application, mobile application
                  and software that deliver results, improving your business
                  processes and making you more efficient with a significant
                  return on investment using our blended development model
                </div>
                <div className="pt-1em font-weight-600 text-justify">
                  Numeric has vast expertise in shaping your ideas into tangible
                  information technology solutions. We are adept with a
                  workforce which follows the latest trends that is best suited
                  for your business requirement
                </div>
                <div className="pt-1em font-weight-600 text-justify">
                  We assure to deliver the perfect information technology
                  solutions for your business objectives with our deep and
                  enriched knowledge base faster and more cost-effectively to
                  whatever industry to cater to.
                </div>
                <div className="pt-1em font-weight-600 text-justify">
                  Our endeavor is to create a benchmark for higher client
                  satisfaction through our end-to-end information technology,
                  consulting and outsourcing solutions. We have long-standing
                  relations with our clients built on successful completion of
                  prior engagements through our comprehensive, cost-effective
                  and high-quality information technology, consulting and
                  outsourcing solutions.
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
