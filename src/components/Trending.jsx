import { Button, Card, Col, Container, Row, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"


const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={duneImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DUNE</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                    <Button variant="danger" href="https://youtu.be/6T0EpsVxYes?si=7RfPbEA31cf2tHU3">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={everythingImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">EVERYTHING</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/lHEjfwqzYyA">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={infiniteImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">INFINITE</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/fBUx8a0rB5U?si=Gawri4rzKSwJ5EdY">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={jokerImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">JOKER</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/A6bftX-IUOo?si=eE8lnZT9Ume8R_YT">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={lightyearImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">LIGHT YEAR</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/BwZs3H_UN3k?si=fNoegG4HnUoCO2yG">Tonton Sekarang!</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={morbiusImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">MORBIUS</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    <div className="text-center ">
                                        <Button variant="danger" href="https://youtu.be/AVXLL01ggic?si=MUkKzw43Swn72rFt">Tonton Sekarang!</Button>
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

export default Trending