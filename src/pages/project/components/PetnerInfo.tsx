import { Row, Col, Typography } from 'antd';
// import petner_video from '/assets/videos/petner_video.mp4';
const { Title, Text } = Typography;
const PetnerInfo = () => {
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
                            메인페이지 이미지
                            <video>
                                {/*<source src={petner_video} type={'video/mp4'} />*/}
                            </video>
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
                            img
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