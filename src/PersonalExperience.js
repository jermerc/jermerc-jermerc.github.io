import React from 'react';
import '../node_modules/line-awesome/dist/line-awesome/css/line-awesome.css';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Logo from './assets/logo.gif'
import Screenshot from './assets/screenshot.png';
import Col from 'react-bootstrap/Col';



class PersonalExperience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTermOneModal: false,
            showTermTwoModal: false
        }
        this.handleClick = this.handleClick.bind(this);



    }

    handleClick = (e) => {
        console.log(e);
        if (e.target.id === "workTermOne") {
            this.setState({
                showTermOneModal: !this.state.showTermOneModal
            })
        } else {
            this.setState({
                showTermTwoModal: !this.state.showTermTwoModal
            })
        }
    }

    render () {
        return (
            <Container>
                <Modal
                size="lg"
                show = {this.state.showTermOneModal}
                onHide = {() => this.setState({
                    showTermOneModal: !this.state.showTermOneModal
                })}
                backdrop="static"
                keyboard={false}
                centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Kenna Work Term #1 Report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Col>
                                <Row>
                                    <img src={Logo} alt="Kenna logo."/>
                                </Row>
                            </Col>
                            <Col>
                                <img style={{float: "right"}} src={Screenshot} alt="BASF login." width="50%" height="50%"/>
                                <Row>
                                    <p style={{color: "black"}}>
                                        <b>Abstract:</b>
                                        <hr/>
                                        This website was created with the intention of showcasing the skills I had acquired during my work-term. I am unable to showcase back-end skills on this website but if you are interested you can check out my
                                        GitHub repo for other projects with back-end functionality.
                                        <hr/>
                                        <b>Employer Info:</b>
                                        <hr/>
                                        Kenna is a marketing solutions provider specializing in customer experience management. The company enables marketing and sales to conduct more informed and dynamic conversations with customers at every stage of the relationship lifecycle. The result: more loyal and valuable customers eager to stay connected.
                                        <hr/>
                                    </p>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <p style={{color: "black"}}>
                                        <b>Goals:</b>
                                        <hr/>
                                        My main learning goal this term was to be able to get a grasp of corporate full-stack web applications, I was guided by my mentor through the tech stack that consisted of React/Node.js/SQL, I also wanted to learn how to manage my time effectively, and construct thought patterns that would be effective in dealing with problem solving.
                                        I also wanted to get a better understanding of how corporate entities operate within the Software Development Cycle, how a requirement flows from the client to the accounts team to the developers.
                                        These skills will help me throughout my career as this tech stack is very relevant. JavaScript is one of the most used programming languages today and these frameworks are very popular and extensively used within the web development community.
                                        The technologies I worked with were the ones I were looking forward to having hands-on experience with, React/Node.js/SQL. I wanted to work with these technologies because these would become the building blocks of my career within Software Engineering.
                                        All in all I think the goals I had set out for myself were accomplished, I had gained a greater understanding of Web Development and the corporate Software Development Cycle, also my problem solving has vastly improved.
                                        <hr/>
                                        <b>Job Description:</b>
                                        <hr/>
                                        My official title was Web Applications Developer (Co-op), and as a developer I was tasked to deal with various Jira tickets related to various projects. The main project I worked with was a data delivery application developed for BASF Canada, an agricultural company.
                                        I developed React components to facilitate the conversion of Excel sheets (.csv and .xlsx files) and created back-end routes using Node.js to save this data in the database using Microsoft SQL Server. I also created SQL scripts to query the database, to sort and filter results and display these results on the front-end using React through a grid format.
                                        These syntax of JavaScript and SQL I had prior knowledge of through side-projects, however the tech stack was completely new to me. These frameworks were learned on the job through the help of various mentors and lots of documentation binging. 
                                    </p>
                                </Row>
                            </Col>



                        </Container>
                    </Modal.Body>
                </Modal>

                <Modal
                size="lg"
                show = {this.state.showTermTwoModal}
                onHide = {() => this.setState({
                    showTermTwoModal: !this.state.showTermTwoModal
                })}
                backdrop="static"
                keyboard={false}
                centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Kenna Work Term #2 Report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Col>
                                <Row>
                                    <img src={Logo} alt="Kenna logo."/>
                                </Row>
                            </Col>
                            <Col>
                                <img style={{float: "right"}} src={Screenshot} alt="BASF login." width="50%" height="50%"/>
                                <Row>
                                    <p style={{color: "black"}}>
                                        <b>Abstract:</b>
                                        <hr/>
                                            For my second work term I had opted to return to Kenna in order to polish the skills I had picked up in the Fall of the previous year. I had returned to Kenna because of the amazing people, specifically my mentors and managers who were extremely supportive, very helpful, insightful and gave many tips to cultivate my growth not only as a student and a developer but as a colleague.
                                        <hr/>
                                        <b>Employer Info:</b>
                                        <hr/>
                                            Kenna is a marketing solutions provider specializing in customer experience management. The company enables marketing and sales to conduct more informed and dynamic conversations with customers at every stage of the relationship lifecycle. The result: more loyal and valuable customers eager to stay connected. I chose them again because the work they do is extremely interesting and impactful, the company works with BASF to deliver digital solutions to retailers and growers across the country, providing applications that are easy to pick up and use to do a variety of things such as data entry, data collection, analytics, rewards caluclations, etc.
                                        <hr/>
                                    </p>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <p style={{color: "black"}}>
                                        <b>Goals:</b>
                                        <hr/>
                                        My main goal this semester was to be able to solve problems more independently, not to rely on senior developers for assistance but instead reach out to other students within various co-op teams in order to break down problems and effectively architect solutions to better serve the client and customers.
                                        I also wanted to get more comfortable with SQL, as my biggest weakness in the previous work term was my inability to interact with databases and construct complex Stored Procedures to execute queries and to process data needed to serve customers information effectively.
                                        Another goal I wanted to obtain was to work on my communication skills, how to accurately and concisely identify what it was I was trying to explain to another person, whether that be a colleague, mentor, or client from the Accounts Team. 
                                        Being able to identify exactly what is hindering my progress on constructing the solution is extremely important, I felt that a large part of my communication getting better was just being more comfortable with the tech stack and codebase, and being able to understand which parts of code did what in order to correctly edit and add to features without constantly pestering other developers for help.
                                        <hr/>
                                        <b>Job Description:</b>
                                        <hr/>
                                        My official title was Web Applications Developer (Co-op), and as a developer I was tasked to deal with various Jira tickets related to various projects. The main project I worked with this semester was a project involving the transition of a currently running web application developed from a deprecated legacy tech stack of Lotus Notes/Domino and jQuery to React/Node.js for BASF Canada, an agricultural company.
                                        Most of my day to day work involved meeting with the accounts team to narrow down requirements for the client and go back and forth with the QA team in order to ensure that the features I was developing were correct. 
                                        Implementing many Node.js routes that mimicked features from the old Lotus Notes tech stack, but using common data structures and algorithms techniques to optimize the runtime complexity and server side load of these functions.
                                        I also used many new ES6 features that weren't available in older flavors of JavaScript in order to make code cleaner, more component-based, and easily maintainable for future developers and co-ops to add and edit features to.
                                        <hr/>
                                        <b>Relation to Academic Studies:</b>
                                        <hr/>
                                        The things I learned at the University certainly helped me hit the ground running this semester, working in groups in my various Software Engineering classes and learning about the Software Development Life Cycle, and various development processes like the Agile Methodology got me accustomed to working with the fast paced development that is more commonly seen in the corporate world.
                                        It definitely did enhance my academic experience, stuff I picked up on the job has helped me grasp a better understanding of various Computer Science theories such as various data structures and algorihtms and their important, and also stressing the maintainability of clean code through the use of common Object Oriented Programming paradigms.
                                        <hr/>
                                        <b>Focus of the Report:</b>
                                        <hr/>
                                        The co-op experience as a whole is nothing like I've ever encountered before in any type of work, I don't think that academics can necessarily get you ready for what it's like to be in the real world and I think that's why the co-op program is extremely beneficial, you get real world experience working with corporate applications that require you to be on top of your game in order for the company to turn a profit.
                                        Features you create, design, implement, and maintain have a real effect as there are customers and clients that use these applications daily, this type of impact is very hard to come across in academia alone.
                                        <hr/>
                                        <b>Acknowledgements:</b>
                                        <hr/>
                                        I'd like to thank Joel Levinson for being a wonderful mentor over the past 4 months, he is an extremely upstanding individual who takes his time to make sure that I am fully understanding the problem along with all it's intricacies, no matter how complex the solution is. Also would like to thank Andrew McCallum, for giving me a chance and having me on-board at Kenna, it's been an extremely wonderful opportunity and I hope our paths cross again in the future!

                                    </p>
                                </Row>
                            </Col>



                        </Container>
                    </Modal.Body>
                </Modal>

                <Row>
                    <p className="text-justify">
                        3rd year Software Engineering student specializing in Web Development.
                    </p>
                </Row>
                <Row className="p-5">
                    <Button id="workTermOne" variant="primary" size="md" onClick={this.handleClick} block>
                    Co-op Work Term #1 Report
                    </Button>
                </Row>
                <Row className="p-5">
                    <Button id="workTermTwo" variant="primary" size="md" onClick={this.handleClick} block>
                    Co-op Work Term #2 Report
                    </Button>
                </Row>
            </Container>
        )
    }


}

export default PersonalExperience;