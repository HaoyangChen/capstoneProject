import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Rating from 'common/src/components/Rating';
import Container from 'common/src/components/UI/Container';
import { navigate } from "gatsby";

import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import microsoft from 'common/src/assets/image/appClassic/microsoft.svg';
import bannerImg from 'common/src/assets/image/appClassic/aghazBanner.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          {/* <Fade up>
            <RatingInfo>
              <Rating rating={4} />
              4.9 of 5 By <img src={microsoft} alt="Microsoft" />
            </RatingInfo>
          </Fade> */}
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Invest With A
              Purpose"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Personalized Halal investing to help you save for what matters most."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              {/* <Button className="primary" title="Start Free trail" />  */}
              <a href="https://youtu.be/pBi6wOxXS4Q" target="_blank" >
              <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Watch Demo Video"
              />
              </a>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
