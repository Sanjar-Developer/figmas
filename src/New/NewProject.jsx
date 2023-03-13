import React from 'react';
import "./NewProject.css"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ButtonGroup, Col, Container, Row } from 'react-bootstrap';
function NewProject() {
    const person = require("../img/person.png")
    const bir = require("../img/bir.png")
    const ikki = require("../img/ikki.png")
    const uch = require("../img/uch.png")
    return (
        <div>
      <Container>
        <Row justify-content-center>
<Col xs={12}>
<div className="dropdown">
<ButtonGroup>
      <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1"><span>Works</span></Dropdown.Item>
        <Dropdown.Item eventKey="2"><span>Blog</span></Dropdown.Item>
        <Dropdown.Item eventKey="3"><span>Contact</span></Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
</div>

</Col>

<div className="DEF">
<Col xs={6}>

<div className="TextAll">
<h1 className='textvan'>Hi, I am John,<br />Creative Technologist</h1>
<p className='smallText'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
<button className='batn'>Download Resume</button>
</div>

</Col>

<Col xs={6}>
<div className="pictureAll">
    <img src={person} alt="png" />
</div>

</Col>

</div>
        </Row>

        <Row justify-content-center>

<section className='section'>
<div className="plus">
<h1 className='huk'>Recent posts</h1>
<h1 className='view'>View all</h1>
</div>
<Col xs={12}>
<div className="plass">
<div className="Card">
<h1 className='Making'>Making a design system from <br />scratch</h1>
<div className="three">
    <div className="Feb">12 Feb 2020</div>
    <div className="sl">|</div>
    <div className="Design">Design, Pattern</div>
</div>

<div className="parm">
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
</div>
</div><div className="Card">
<h1 className='Making'>Making a design system from <br />scratch</h1>
<div className="three">
    <div className="Feb">12 Feb 2020</div>
    <div className="sl">|</div>
    <div className="Design">Design, Pattern</div>
</div>

<div className="parm">
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
</div>
</div>
</div>

</Col>
</section>

<section className="ikki">
<div className="Colls">
<Col xs={3}>
    <h1 className='ftr'>Featured works</h1>
  <div className="birr">
  <h1 className='Dash'>Designing </h1>
  <h1 className='bash'>Dashboards</h1>
  <button className='batton'>2020</button>
  <p className='loram'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
  <img src={bir} alt="png" />
  <div className="line"></div>
  </div>
    </Col>

  
    
</div>
</section>

<section className="adad">
<Col xs={3}>
  <div className="birr">
  <h1 className='Dash'>Vibrant Portraits</h1>
  <button className='batton'>2018</button>
  <p className='loram'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
  <img src={ikki} alt="png" />
  <div className="line"></div>
  </div>
    </Col>
</section>
<section className="bbb">
<Col xs={3}>
  <div className="birr">
  <h1 className='Dash'>36 Days of</h1>
  <h1 className='bash'> Malayalam type</h1>
  <button className='batton'>2018</button>
  <p className='loram'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
  <img src={uch} alt="png" />
  <div className="line"></div>
  </div>
    </Col>
</section>

<section className="linki">
<div className="met">
<i class="fa-brands fa-facebook"></i>
</div>

<div className="ins">
<i class="fa-brands fa-instagram"></i>
</div>

<div className="tw">
<i class="fa-brands fa-twitter"></i>
</div>

<div className="in">
<i class="fa-brands fa-linkedin"></i>
</div>
</section>
<h1 className='foot'>Copyright ©2020 All rights reserved </h1>
        </Row>
      </Container>
        </div>
    );
}

export default NewProject;