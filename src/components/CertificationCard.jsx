import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const CertificationCard = ({ certification }) => {
  return (
    <Fade left duration={1000} distance="40px">
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div>
              <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                <i className="ni ni-trophy" />
              </div>
            </div>
            <div className="pl-4">
              <CardTitle tag="h5">{certification.name}</CardTitle>
              <CardSubtitle>{certification.body}</CardSubtitle>
              <CardText className="description mt-3">
                <Badge color="success" className="mr-1">
                  {certification.date}
                </Badge>
                <p className="description mt-3">{certification.desc}</p>
              </CardText>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default CertificationCard;
