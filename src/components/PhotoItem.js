import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/imageModal';
import LazyLoad from 'react-lazyload';

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({ src: urls.full, alt }));
  };

  return (
    <LazyLoad height={200} offset={1000}>
      <Image src={urls.small + '&t=' + new Date().getTime()} alt={alt} onClick={openModal} />
    </LazyLoad>
  );
}

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  aspect-ratio: 16 / 9;
`;

export default PhotoItem;
