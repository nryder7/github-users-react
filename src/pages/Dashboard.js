import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

const Dashboard = () => {
  return (
    <main>
      <Navbar />
      <Info />
      <Repos />
    </main>
  );
};

export default Dashboard;
