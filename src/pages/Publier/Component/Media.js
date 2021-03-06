import React from 'react';
import Video from './Video';

const Audio = (props) => {
  return <audio controls src={props.src} />;
};

const Image = (props) => {
  return <img src={props.src} alt={props.src} />;
};


const Media = (props) => {
  const entity = props.contentState.getEntity(
    props.block.getEntityAt(0)
  );
  const { src } = entity.getData();
  const type = entity.getType();

  let media;
  if (type === 'audio') {
    media = <Audio src={src} />;
  } else if (type === 'image') {
    media = <Image src={src} />;
  } else if (type === 'video') {
    media = <Video src={src} />;
  }

  return media;
};

export default Media;
