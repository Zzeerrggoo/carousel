import React from 'react';
import './App.css';
import Carousel from './components/Carousel';

function App() {
  return (
    <Carousel
      slides={[
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
      ]}
    />
  );
}

export default App;
