import React from 'react';
import './App.css';
import Carousel from './components/Carousel';

const slidesArray = [
  {
    title: '1',
    description:
      "This Hubble image gives the most detailed view of the entire Crab Nebula ever. The Crab is among the most interesting and well studied objects in astronomy. This image is the largest image ever taken with Hubble's WFPC2 camera.It was assembled from 24 individual exposures taken with the NASA/ ESA Hubble Space Telescope and is the highest resolution image of the entire Crab Nebula ever made.",
    src:
      'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2007a.jpg',
  },
  {
    title: '2',
    description:
      "This Hubble image gives the most detailed view of the entire Crab Nebula ever. The Crab is among the most interesting and well studied objects in astronomy. This image is the largest image ever taken with Hubble's WFPC2 camera.It was assembled from 24 individual exposures taken with the NASA/ ESA Hubble Space Telescope and is the highest resolution image of the entire Crab Nebula ever made.",
    src:
      'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1501a.jpg',
  },
  {
    title: '3',
    description:
      "This Hubble image gives the most detailed view of the entire Crab Nebula ever. The Crab is among the most interesting and well studied objects in astronomy. This image is the largest image ever taken with Hubble's WFPC2 camera.It was assembled from 24 individual exposures taken with the NASA/ ESA Hubble Space Telescope and is the highest resolution image of the entire Crab Nebula ever made.",
    src:
      'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1107a.jpg',
  },
  {
    title: '4',
    description:
      "This Hubble image gives the most detailed view of the entire Crab Nebula ever. The Crab is among the most interesting and well studied objects in astronomy. This image is the largest image ever taken with Hubble's WFPC2 camera.It was assembled from 24 individual exposures taken with the NASA/ ESA Hubble Space Telescope and is the highest resolution image of the entire Crab Nebula ever made.",
    src:
      'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0715a.jpg',
  },
  {
    title: '5',
    description:
      "This Hubble image gives the most detailed view of the entire Crab Nebula ever. The Crab is among the most interesting and well studied objects in astronomy. This image is the largest image ever taken with Hubble's WFPC2 camera.It was assembled from 24 individual exposures taken with the NASA/ ESA Hubble Space Telescope and is the highest resolution image of the entire Crab Nebula ever made.",
    src:
      'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1608a.jpg',
  },
  {
    title: '6',
    description:
      "This Hubble image gives the most detailed view of the entire Crab Nebula ever. The Crab is among the most interesting and well studied objects in astronomy. This image is the largest image ever taken with Hubble's WFPC2 camera.It was assembled from 24 individual exposures taken with the NASA/ ESA Hubble Space Telescope and is the highest resolution image of the entire Crab Nebula ever made.",
    src:
      'https://www.toastdesign.co.uk/wp-content/uploads/low-reshi-res-images.jpg',
  },
  {
    title: '7',
    description:
      "This Hubble image gives the most detailed view of the entire Crab Nebula ever. The Crab is among the most interesting and well studied objects in astronomy. This image is the largest image ever taken with Hubble's WFPC2 camera.It was assembled from 24 individual exposures taken with the NASA/ ESA Hubble Space Telescope and is the highest resolution image of the entire Crab Nebula ever made.",
    src:
      'https://image.winudf.com/v2/image/Y29tLmxhcmdlaXQubmF0dXJld2FsbHBhcGVyX3NjcmVlbl8xXzE1MjcyOTY5NDNfMDQy/screen-1.jpg?fakeurl=1&type=.jpg',
  },
  {
    title: '8',
    description:
      "This Hubble image gives the most detailed view of the entire Crab Nebula ever. The Crab is among the most interesting and well studied objects in astronomy. This image is the largest image ever taken with Hubble's WFPC2 camera.It was assembled from 24 individual exposures taken with the NASA/ ESA Hubble Space Telescope and is the highest resolution image of the entire Crab Nebula ever made.",
    src:
      'https://i.pinimg.com/originals/11/45/c3/1145c3b2fa31923c722086f0bddf0f12.jpg',
  },
];

function App() {
  return <Carousel slides={slidesArray} />;
}

export default App;
