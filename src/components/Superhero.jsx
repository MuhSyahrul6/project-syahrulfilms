import { Button, Card, Col, Container, Row, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"


const SuperHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={antmanImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ANT MAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/pWdKf3MneyI?si=R5tVVUxDCg3_h-y9">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={avengerImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">AVENGER</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/0jNvJU52LvU?si=CZtIvDbNDLI2hfHS">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={batmanImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THE BATMAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/dUMUH4NNYDY?si=bTfzlUBEIk-9a6xo">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={robinhoodImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/Ye4Rw5fKCyQ?si=fayRsQ4vr23tInwl">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SPIDERMAN HERO</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/Wtj04Oq_1Nc?si=VxlTp0e_6-Y2rVpw">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={supermanImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SUPERMAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/lXSDzzUUGqc?si=UtZiJSLyQ6PNVrGu">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero