import React from "react";
import { contact, socialLinks } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <section
      className="section section-lg"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        paddingBottom: "100px",
      }}
    >
      <Container>
        <Fade bottom duration={1000} distance="40px">
          <Row className="justify-content-center text-center mb-5">
            <Col lg="8">
              <h1 className="display-3 text-white mb-4">{contact.title}</h1>
              <p
                className="lead text-white"
                style={{
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                  opacity: "0.95",
                }}
              >
                {contact.description}
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <Row>
                {/* Email Card */}
                <Col md="6" className="mb-4">
                  <div
                    className="card shadow-lg border-0"
                    style={{
                      borderRadius: "20px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      minHeight: "280px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div className="card-body p-5 text-center">
                      <div
                        className="icon icon-shape bg-gradient-info rounded-circle text-white mb-4 mx-auto"
                        style={{
                          width: "70px",
                          height: "70px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className="ni ni-email-83"
                          style={{ fontSize: "1.75rem" }}
                        />
                      </div>
                      <h5 className="h3 mb-2" style={{ fontWeight: "600" }}>
                        Email
                      </h5>
                      <p
                        className="text-muted mb-3"
                        style={{ fontSize: "0.95rem" }}
                      >
                        Drop me a line
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-info font-weight-bold"
                        style={{
                          fontSize: "1rem",
                          wordBreak: "break-all",
                          textDecoration: "none",
                        }}
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </Col>

                {/* Phone Card */}
                <Col md="6" className="mb-4">
                  <div
                    className="card shadow-lg border-0"
                    style={{
                      borderRadius: "20px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      minHeight: "280px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div className="card-body p-5 text-center">
                      <div
                        className="icon icon-shape bg-gradient-success rounded-circle text-white mb-4 mx-auto"
                        style={{
                          width: "70px",
                          height: "70px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className="ni ni-mobile-button"
                          style={{ fontSize: "1.75rem" }}
                        />
                      </div>
                      <h5 className="h3 mb-2" style={{ fontWeight: "600" }}>
                        Phone
                      </h5>
                      <p
                        className="text-muted mb-3"
                        style={{ fontSize: "0.95rem" }}
                      >
                        Give me a call
                      </p>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-success font-weight-bold"
                        style={{ fontSize: "1rem", textDecoration: "none" }}
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </Col>

                {/* Location Card */}
                <Col md="6" className="mb-4">
                  <div
                    className="card shadow-lg border-0"
                    style={{
                      borderRadius: "20px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      minHeight: "280px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div className="card-body p-5 text-center">
                      <div
                        className="icon icon-shape bg-gradient-warning rounded-circle text-white mb-4 mx-auto"
                        style={{
                          width: "70px",
                          height: "70px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className="ni ni-pin-3"
                          style={{ fontSize: "1.75rem" }}
                        />
                      </div>
                      <h5 className="h3 mb-2" style={{ fontWeight: "600" }}>
                        Location
                      </h5>
                      <p
                        className="text-muted mb-3"
                        style={{ fontSize: "0.95rem" }}
                      >
                        Based in
                      </p>
                      <p
                        className="text-warning mb-0 font-weight-bold"
                        style={{ fontSize: "1rem" }}
                      >
                        {contact.location}
                      </p>
                    </div>
                  </div>
                </Col>

                {/* LinkedIn Card */}
                <Col md="6" className="mb-4">
                  <div
                    className="card shadow-lg border-0"
                    style={{
                      borderRadius: "20px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      minHeight: "280px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div className="card-body p-5 text-center">
                      <div
                        className="icon icon-shape bg-gradient-primary rounded-circle text-white mb-4 mx-auto"
                        style={{
                          width: "70px",
                          height: "70px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className="fa fa-linkedin"
                          style={{ fontSize: "1.75rem" }}
                        />
                      </div>
                      <h5 className="h3 mb-2" style={{ fontWeight: "600" }}>
                        LinkedIn
                      </h5>
                      <p
                        className="text-muted mb-3"
                        style={{ fontSize: "0.95rem" }}
                      >
                        Let's connect
                      </p>
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-weight-bold"
                        style={{ fontSize: "1rem", textDecoration: "none" }}
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Social Links */}
          <Row className="justify-content-center mt-5">
            <Col lg="8" className="text-center">
              <h3 className="text-white mb-4" style={{ fontWeight: "600" }}>
                Connect With Me
              </h3>
              <div className="d-flex justify-content-center">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-icon-only btn-white rounded-circle mx-3 shadow-lg"
                    style={{
                      width: "35px",
                      height: "35px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.15)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <span className="btn-inner--icon">
                      <i
                        className="fa fa-github"
                        style={{ fontSize: "1.75rem" }}
                      />
                    </span>
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-icon-only btn-white rounded-circle mx-3 shadow-lg"
                    style={{
                      width: "35px",
                      height: "35px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.15)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <span className="btn-inner--icon">
                      <i
                        className="fa fa-linkedin"
                        style={{ fontSize: "1.75rem" }}
                      />
                    </span>
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-icon-only btn-white rounded-circle mx-3 shadow-lg"
                    style={{
                      width: "60px",
                      height: "60px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.15)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <span className="btn-inner--icon">
                      <i
                        className="fa fa-twitter"
                        style={{ fontSize: "1.75rem" }}
                      />
                    </span>
                  </a>
                )}
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>

      {/* Wave separator */}
      <div className="separator separator-bottom separator-skew">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  );
};

export default Contact;
