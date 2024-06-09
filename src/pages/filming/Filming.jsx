import React, { useState } from "react";
import {
  Layout,
  Button,
  Carousel,
  Card,
  Row,
  Col,
  Modal,
} from "antd";

const { Content } = Layout;

const Filming = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const showModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentVideo("");
  };

  return (
    <Layout>
      <Content style={{ padding: "0 20px" }}>
        <div
          className="hero-section"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <Carousel autoplay>
            <div>
              <img
                src="/event3.jpeg"
                alt="Hero"
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Add other carousel images */}
          </Carousel>
          <div className="mt-4">
            <h1>Capture Your Moments with Precision</h1>
            <p>
              Professional event filming services to make your memories last
              forever.
            </p>
            <Button type="primary">Book Now</Button>
          </div>
        </div>

        <div
          className="services-section"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <h2 className="font-bold text-lg">Our Services</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card
                title="Wedding Filming"
                bordered={false}
                className="hoverable"
              >
                We capture your special day with beautiful and cinematic
                footage.
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card
                title="Corporate Events"
                bordered={false}
                className="hoverable"
              >
                Professional event filming for your business conferences and
                meetings.
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card
                title="Music Videos"
                bordered={false}
                className="hoverable"
              >
                Creative and engaging music videos to make your songs stand
                out.
              </Card>
            </Col>
          </Row>
        </div>

        <div
          className="portfolio-section"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <h2 className="font-bold text-lg">Our Work</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card
                hoverable
                cover={<img alt="Wedding Highlights" src="/wedding4.jpeg" />}
                onClick={() => showModal("/weddingvid1.mp4")}
              >
                <Card.Meta
                  title="Wedding Highlights"
                  description="A beautiful wedding ceremony captured perfectly."
                />
              </Card>
            </Col>
            {/* Add other portfolio items */}
          </Row>
        </div>

        <Modal
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          centered
          width={800}
        >
          <video width="100%" controls>
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal>
      </Content>
    </Layout>
  );
};

export default Filming;
