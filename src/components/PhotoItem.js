import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setBgColor, showModal } from '../redux/imageModal';
import LazyLoad from 'react-lazyload';
import { getAverageColorOfImage } from '../utils/getAverageColorOfImage';

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = event => {
    dispatch(showModal({ src: urls.full, alt }));

    const averageColor = getAverageColorOfImage(event.target);
    dispatch(setBgColor(averageColor));
  };

  return (
    <LazyLoad height={200} offset={1000}>
      <Image
        src={urls.small + '&t=' + new Date().getTime()}
        alt={alt}
        onClick={openModal}
        crossOrigin="*"
      />
    </LazyLoad>
  );
}

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  aspect-ratio: 16 / 9;
`;

export default PhotoItem;
