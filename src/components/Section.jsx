import React, { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-bootstrap";

 const Section = () => {
    const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setFadeIn(true);
      }, 500); 
  
      return () => clearTimeout(timer); 
    }, []);
  
    return (
      <Fade in={fadeIn} timeout={2000}>
        <Container
          fluid="md"
          className="py-5"
          id="home"
          style={{
            backgroundColor: '#f5f5f5',
            transition: 'background-color 2s ease-in-out',
          }}
        >
          <Row className="text-center">
            <Col>
              <p className="text-dark mb-3 fs-5" style={{ 
                  opacity: fadeIn ? 1 : 0, 
                  transition: 'opacity 2s ease-in-out 0.5s' 
                }}>
                Fast - Secure - Affordable
              </p>
              <h1 
                className="text-dark fw-light display-4" 
                style={{ 
                  opacity: fadeIn ? 1 : 0, 
                  transform: fadeIn ? "translateY(0)" : "translateY(20px)", 
                  transition: 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out' 
                }}
              >
                Discover Amazing Deals
                <br />
                At Our <span className="text-primary">Online Store</span>.
              </h1>
            </Col>
          </Row>
        </Container>
      </Fade>
    );
  };

export default Section;
