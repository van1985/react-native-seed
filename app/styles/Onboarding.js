import styled from 'styled-components/native';

const Container = styled.View`
      padding-top: 50;
      align-items: center;
      align-content: center;
      padding-left: 40;
      padding-right: 40;
      text-align: center;
`;

const Slide = styled.View`
      flex:1;
      align-items: center;
      justify-content: center;
`;

const Slide1 = Slide.extend`
      background-color: #448AFF;
`;

const Slide2 = Slide.extend`
      background-color: #0097A7;
`;

const Slide3 = Slide.extend`
      background-color: #9575CD;
`;

const Title = styled.Text`
      text-align: center;
      color: #F5FCFF;
      font-size: 20;
`;

const Description = styled.Text`
      text-align: center;
      color: #F5FCFF;
`;

const Image1 = styled.Image`
      width: 200;
      height: 170;
`;

const Image2 = styled.Image`
      width: 220;
      height: 160;
`;

const Image3 = styled.Image`
      width: 110;
      height: 190;
`;

export {
      Container,
      Slide1,
      Slide2,
      Slide3,
      Title,
      Description,
      Image1,
      Image2,
      Image3
};