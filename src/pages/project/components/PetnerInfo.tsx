import { Row, Col, Typography,Collapse, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
// import petner_video from '/assets/videos/petner_video.mp4';
import petner_main from '../../../assets/petner_main.png';
import petner_erd from '../../../assets/petner_erd.png';
import img1 from '../../../assets/petner/info_1.png';
import img2 from '../../../assets/petner/info_2.png';
const { Title, Text } = Typography;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



const PetnerInfo = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: '#555555',
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    return (
        <>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <Title level={2}>
                                Petner Team Project
                            </Title>
                            <Text>
                                펫트너 팀프로젝트
                            </Text>
                        </Col>
                        <Col span={24}>
                            <img src={petner_main} alt={'petner_main img'} width={'100%'}/>
                        </Col>
                        <Col span={24}>
                            <Title level={3}>프로젝트 소개</Title>
                            <Text>펫트너란?</Text>
                            <Text>
                                반려동물을 뜻하는 ‘Pet’과<br/>
                                동료, 동행자를 뜻하는 ‘Partner’의 합성어로<br/>
                                ‘보호자, 펫시터 모두가 서로 협력하여<br/>
                                반려동물을 돌보자’ 는 의미입니다.
                            </Text>
                        </Col>
                        {/**/}
                        <Col span={24}>

                            <Collapse
                                bordered={false}
                                defaultActiveKey={['1']}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                style={{ background: '#353535' }}
                            >
                                <Panel header="프로젝트 목적" key="1" style={panelStyle}>
                                    <p>{text}</p>
                                    <Row>
                                        <Col span={12}>
                                            <img src={img1} alt={'img1'} width={'100%'}/>
                                        </Col>
                                        <Col span={12}>
                                            <img src={img2} alt={'img2'} width={'100%'}/>
                                        </Col>
                                        <Col span={24}>
                                            <Text>
                                                반려동물 가구 증가 - 펫시터 수요 증가<br/>
                                                저희 사이트는 펫시팅 전문업체보다는 가벼운<br/>
                                                Casual 한 서비스로<br/>
                                                사용자 위치를 기반 그리고 주변의 펫시터 혹은<br/>
                                                반려동물 서비스현황을 제공하여<br/>
                                                주변의 이웃이나 반려동물 보호자도 직접 <br/>
                                                펫시팅에 참여 할수 있도록 돕는 서비스 입니다.
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header="서비스 대상" key="2" style={panelStyle}>
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="ERD" key="3" style={panelStyle}>
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="주요기능 소개" key="4" style={panelStyle}>
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>


                        </Col>
                        <Col span={24}>
                            <Title>프로젝트 목적</Title>
                            <Text>반려동물 가구 증가 - 펫시터 수요 증가</Text>
                        </Col>
                        <Col span={12}>
                            소개 이미지1
                        </Col>
                        <Col span={12}>
                            소개 이미지2
                        </Col>
                        <Col span={24}>
                            <Title>서비스 대상</Title>
                            <Row>
                                <Col span={8}>
                                    1
                                </Col>
                                <Col span={8}>
                                    2
                                </Col>
                                <Col span={8}>
                                    3
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Title>사용기술</Title>
                        </Col>
                        <Col span={24}>
                            <Title>ERD</Title>
                            <img src={petner_erd} alt={petner_erd} width={'100%'}/>
                        </Col>
                        <Col span={24}>
                            <Title>주요기능 소개</Title>
                            비밀번호 암호화(Spring security)
                            주소검색(다음 우편번호 API)
                            소셜 로그인(카카오)
                            로그인 유지(쿠키와 세션)
                            세션 처리
                            비밀번호 찾기(Gmail SMTP)
                            1:1문의(카카오톡 오픈채널)
                            1:1 채팅(Websocket 양방향통신)
                            파일업로드(Apache Commons FileUpload)
                            돌봐줄 동물 찾기(Ajax)
                            관리자페이지(이벤트) 댓글(Ajax)
                            내 주변찾기(Kakao Map API)
                            세션 체크(AOP)
                            관리자 페이지(CRUD)
                        </Col>
                    </Row>
                </Col>

            </Row>
        </>
    );
};

export default PetnerInfo;
