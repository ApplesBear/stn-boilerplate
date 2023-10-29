import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { FeaturesList, Feature } from '@stn-ui/features';
import { FEATURES_ITEMS } from '@/lib/constants';

const Features: NextPage = () => (
  <FeaturesList>
    {FEATURES_ITEMS.map(({ id, title, description, icon, image }) => (
      <Feature
        id={id}
        key={title}
        title={title}
        description={description}
        icon={icon}
        image={<Image alt="" src={image} fill />}
      />
    ))}
  </FeaturesList>
);

export default Features;
