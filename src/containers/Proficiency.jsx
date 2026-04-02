import React from "react";
import build from "../assets/lottie/build";

import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade } from "react-reveal";

import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
  return (
    <Container className="section section-lg">
      <Fade bottom duration={1000} distance="40px">
        <Row>
          <Col lg="6">
            <h1 className="h1">Proficiency</h1>
            {SkillBars.map((skill) => {
              return (
                <div className="progress-info mb-4" key={skill.Stack}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <h5
                        className="mb-0"
                        style={{ fontWeight: "600", fontSize: "1rem" }}
                      >
                        {skill.Stack}
                      </h5>
                      {skill.description && (
                        <small
                          style={{ color: "#8898aa", fontSize: "0.875rem" }}
                        >
                          {skill.description}
                        </small>
                      )}
                    </div>
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "1rem",
                        color: "#525f7f",
                      }}
                    >
                      {skill.progressPercentage}%
                    </span>
                  </div>
                  <Progress
                    max="100"
                    value={skill.progressPercentage}
                    color="info"
                    style={{ height: "8px" }}
                  />
                </div>
              );
            })}
          </Col>
          <Col lg="6">
            <GreetingLottie animationData={build} />
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Proficiency;
