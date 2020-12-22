import React from "react";
import "../styles/projects.css";
import Navbari from "./Navbar";
import Iframe from "react-iframe";
import { Container, Col, Row, Button, Nav, Navbar } from "react-bootstrap";
import ProjectCard from "../components/projectCard";
import ParticlesBg from "particles-bg";

function Projects() {
  return (
    <div className="projects__main">
      <Navbari className="navbar__margin" />
      <ParticlesBg type="cobweb" num={70} bg={true} />
      <div className="infosection">
        <h1 className="toptext">My Projects</h1>
      </div>
      <div className="projects__info">
        <Container>
          <Row>
            <Col>
              <ProjectCard
                Header={"Made a Jewelry Inventory System on Django"}
                Title={"Django, Python, & HTML"}
                Text={
                  "Made a Jewelry inventory system using Django as project jewelry store in India."
                }
                link={
                  "https://github.com/suryanshsoni27/goldinventorymanagment"
                }
              />
            </Col>
            <Col>
              <ProjectCard
                Header={"Face Classifier Using SVM and Flask backend"}
                Title={"Python, Jupyter, Scikit-learn,& Flask"}
                Text={
                  "Made a face gender classifier using Support vector machine and Haar cascade on flask backend."
                }
                link={"https://github.com/suryanshsoni27/svmfacedetection"}
              />
            </Col>
            <Col>
              <ProjectCard
                Header={"Self Driving Car AI Brain program using Pytorch"}
                Title={"Python, Pytorch, & Python GUI"}
                Text={
                  "Designed Self Driving Car AI using Pytorch. implemented the Deep Q learning model in the self driving AI."
                }
                link={"https://github.com/suryanshsoni27/Self-Driving-AI"}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <ProjectCard
                Header={
                  "Made predictions on many datasets using Various machine learning Algorithms"
                }
                Title={"Python, Tensorflow, & scikit-learn"}
                Text={
                  "Made predictions on various data sets using various machine learning algorithms. classification models worked onare Linear regression  Naive bayes , Kernal SVM, Decision Trees, Random forest and Clustering models like Kmeans.I used Scikit Learn API to Accomplish my task"
                }
                link={"https://github.com/suryanshsoni27/machinelearningmodels"}
              />
            </Col>
            <Col>
              <ProjectCard
                Header={
                  "Made convolutional neural net to classify images of dogs and cats"
                }
                Title={"Python, Tensorflow, keras, pandas, & scikit-learn"}
                Text={
                  "Made a CNN to classify images of dogs and cat using tensorflow and keras."
                }
                link={"https://github.com/suryanshsoni27/neuralnets"}
              />
            </Col>
            <Col>
              <ProjectCard
                Header={"Samfit ( Fitness app)"}
                Title={"Xcode , Swift"}
                Text={
                  "Made a minimalistic Fitness App with complete functionality using swift. link to demo of theapp."
                }
                link={"https://github.com/suryanshsoni27/samfit-swiftcode"}
              />
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
      <footer className="footer__div" />
    </div>
  );
}

export default Projects;
