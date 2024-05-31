import React, { useState } from "react";
import {
  Layout,
  Button,
  Carousel,
  Card,
  Form,
  Input,
  Row,
  Col,
  Modal,
} from "antd";

const { Content, Footer } = Layout;

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
      <Content style={{ padding: "0 50px" }}>
        <div
          className="hero-section"
          style={{ textAlign: "center", marginBottom: "50px" }}
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
            <div>
              <img
                src="/event4.jpeg"
                alt="Hero"
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <img
                src="/event5.jpeg"
                alt="Hero"
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <img
                src="/event2.jpeg"
                alt="Hero"
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <img
                src="/event6.jpeg"
                alt="Hero"
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
          </Carousel>
          <div className="mt-[30px]">
            <h1>Capture Your Moments with Precision</h1>
            <p>
              Professional event filming services to make your memories last
              forever.
            </p>
            <Button type="primary">Book Now</Button>
          </div>

          <div
            className="services-section"
            style={{ textAlign: "center", marginBottom: "50px" }}
          >
            <h2 className="font-bold text-[16px]">Our Services</h2>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card title="Wedding Filming" bordered={false}>
                  We capture your special day with beautiful and cinematic
                  footage.
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Corporate Events" bordered={false}>
                  Professional event filming for your business conferences and
                  meetings.
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Music Videos" bordered={false}>
                  Creative and engaging music videos to make your songs stand
                  out.
                </Card>
              </Col>
            </Row>
          </div>

          <div
            className="portfolio-section"
            style={{ textAlign: "center", marginBottom: "50px" }}
          >
            <h2 className="font-bold text-[16px]">Our Work</h2>
            <Row gutter={[16, 16]}>
              <Col span={8}>
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
            </Row>
          </div>
        </div>

        <Modal
          visible={isModalVisible}
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
      {/* <Footer style={{ textAlign: "center" }}>
        ©2024 Event Filming Company
      </Footer> */}
    </Layout>
  );
};

export default Filming;
