import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import styled from 'styled-components';

const SliderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;


const CarouselComponent = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={6}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/lagos.jpg"
                alt="Lagos"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/boston.jpg"
                alt="Boston"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/sydney.jpg"
                alt="Sydney"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/havana.jpg"
                alt="Havana"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/dublin.jpg"
                alt="Dublin"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/seoul.jpg"
                alt="Seoul"
              />
            </MDBView>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselComponent;