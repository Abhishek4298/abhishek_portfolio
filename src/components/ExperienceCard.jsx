import React, { createRef } from "react";

import { Card, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
  const imgRef = createRef();

  return (
    <Col lg="6">
      <Fade left duration={1000} distance="40px">
        <Card
          style={{ flex: 1, height: "100%" }}
          className="shadow-lg--hover shadow border-0 rounded"
        >
          <CardBody className="py-5 px-4">
            <div className="text-center mb-4">
              <img
                ref={imgRef}
                className="bg-white rounded-circle mb-3 img-center img-fluid shadow"
                src={data.companylogo}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
                alt="Company Logo"
              />
              <CardTitle tag="h4" className="mb-2">
                {data.role}
              </CardTitle>
              <CardSubtitle className="text-muted mb-3">
                {data.date}
              </CardSubtitle>
            </div>
            <div className="text-left" style={{ color: "#6c757d" }}>
              <p>{data.desc}</p>
              <ul style={{ paddingLeft: "20px" }}>
                {data.descBullets
                  ? data.descBullets.map((desc, index) => {
                      return (
                        <li key={index} className="mb-2">
                          {desc}
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
