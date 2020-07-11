import React from 'react';
import { HomeContainer } from '../../containers';
import { HelmetWrapper, MainLayout } from '../../layouts';

const HomePage = () => (
  <HelmetWrapper title="Home" metaDescription="See your posts!">
    <MainLayout title="Posts">
      <HomeContainer />
    </MainLayout>
  </HelmetWrapper>
);

export default HomePage;
