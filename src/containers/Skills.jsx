import React, { Fragment } from "react";

import { Fade } from "react-reveal";
import DisplayLottie from "../components/DisplayLottie";
import webdev from "../assets/lottie/webdev.json";

import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    <Fade left duration={1000} distance="40px">
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        <Row>
          <Col lg="6">
            <DisplayLottie animationData={webdev} />
          </Col>
          <Col lg="6">
            <div className="d-flex justify-content-center flex-wrap mb-5">
              {skillsSection.softwareSkills.map((skill) => {
                return (
                  <Fragment key={skill.skillName}>
                    <div
                      className="icon icon-lg icon-shape shadow rounded-circle mb-5"
                      id={skill.skillName}
                    >
                      <iconify-icon
                        icon={skill.fontAwesomeClassname}
                        width="40"
                        height="40"
                      ></iconify-icon>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
            </div>
            <div className="text-left" style={{ paddingLeft: "20px" }}>
              {skillsSection.skills.map((skill, index) => {
                return (
                  <div key={index} className="mb-3 d-flex align-items-start">
                    <span style={{ marginRight: "10px", fontSize: "1.2rem" }}>
                      ⚡
                    </span>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "1.05rem",
                        lineHeight: "1.7",
                        color: "#525f7f",
                      }}
                    >
                      {typeof skill === "string"
                        ? skill
                        : skill.props?.children || ""}
                    </p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Skills;
