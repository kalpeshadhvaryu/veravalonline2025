"use client";

import Layout from "@/components/layout/Layout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Service() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Accounts & Payments">
      <section className="Project-details-section fix section-padding wow fadeInUp" style={{ paddingTop: "210px" }}>
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="project-details-items">
                  <div className="row g-4 justify-content-between">
                    <div className="col-lg-12">
                      <div className="project-catagory">
                        <h3>Accounts & Payment Details:</h3>
                        <ul>
                          <li>Company Name: <span>VeravalOnline Pvt Ltd.</span></li>
                          <li>Bank Name: <span>HDFC Bank</span></li>
                          <li>Account Number: <span>50200026991242</span></li>
                          <li>IFSC Code: <span>HDFC0000416</span></li>
                          <li>MICR Code: <span>390240032</span></li>
                          <li>Swift Code: <span>HDFCINBB</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MUI Tabs Section */}
                <div className="preview-area">
                  <Box sx={{ width: "100%" }}>
                    <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="Payment Tabs">
                      <Tab value={0} label="UPI Payments" />
                      <Tab value={1} label="Indian Debit/Credit Cards" />
                      <Tab value={2} label="USD Bank Account" />
                      <Tab value={3} label="International Payments" />
                    </Tabs>

                    {/* Tab Content */}
                    {value === 0 && <Typography>Bank details will be displayed here.</Typography>}
                    {value === 1 && <Typography>Payment methods and options will be displayed here.</Typography>}
                    {value === 2 && <Typography>Invoice details will be displayed here.</Typography>}
                    {value === 3 && <Typography>Invoice details will be displayed  .</Typography>}
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
