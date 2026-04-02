import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6" className="mb-4">
      <Fade bottom duration={1000} distance="40px">
        <Card
          className="shadow-lg--hover shadow border-0 rounded"
          style={{ height: "100%" }}
        >
          <CardBody className="p-4">
            <h5 className="text-info mb-3">{data.name}</h5>
            <p className="description" style={{ color: "#6c757d" }}>
              {data.desc}
            </p>
            {data.link ? (
              <Button
                className="btn-neutral btn-icon mt-3"
                color="default"
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-arrow-right mr-2" />
                </span>
                <span className="nav-link-inner--text ml-1">View Project</span>
              </Button>
            ) : null}
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
