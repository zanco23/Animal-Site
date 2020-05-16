import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPartner({partner}) {
    if (partner) {
        return (
            <Media tag="li">
                <Media>
                    <Media object src={partner.image} alt={partner.name} width={150} height={"auto"} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{partner.name}</Media>
                    {partner.description}
                </Media>
            </Media>
        );
    } 
    return <div />;
}

function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <div key={partner.id}>
                <RenderPartner partner={partner} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>We are focused on making animal related videos that can be serious or comedic. 
                        We are hoping that they will be good for the whole family. When I first got a pet
                        I initially was distrustful. I had a long-seated fear of animals. But by owning one, 
                        a cat I began to lighten up to them, and then quickly wanted a dog as well. My cat passed away
                        and so this site is dedicated to him. His name was Cheeko and my dog's name is Heidi.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                            <dt className="col-6">Founded</dt>
                                <dd className="col-6">April 1, 2020</dd>
                                <dt className="col-6">No. of videos in 2020</dt>
                                <dd className="col-6">63</dd>
                                <dt className="col-6">No. of Reviews in 2020</dt>
                                <dd className="col-6">1</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">2</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                            <p class="mb-0">" Until one has loved an animal, a part of one's soul remains unawakened." </p>
                            <footer class="blockquote-footer">Anatole France
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;