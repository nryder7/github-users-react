import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const chartData = [
  {
    label: 'Venezuela',
    value: '290',
  },
  {
    label: 'Saudi',
    value: '260',
  },
  {
    label: 'Canada',
    value: '180',
  },
  {
    label: 'Iran',
    value: '140',
  },
  {
    label: 'Russia',
    value: '115',
  },
  {
    label: 'UAE',
    value: '100',
  },
  {
    label: 'US',
    value: '30',
  },
  {
    label: 'China',
    value: '30',
  },
];

const Repos = () => {
  const { repos } = useContext(GithubContext);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostLanguages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 7);
  const mostStarsLanguage = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 7);

  const tempMostStarsRepo = repos
    .sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    })
    .slice(0, 7);

  const { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, forks: forkCount, name } = item;
      total.stars[name] = { label: name, value: stargazers_count };
      total.forks[name] = { label: name, value: forkCount };
      return total;
    },
    { stars: {}, forks: {} }
  );

  const sortedByStars = Object.values(stars)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  const sortedByForks = Object.values(forks)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  console.log(sortedByStars, sortedByForks);

  return (
    <Wrapper>
      <Pie3D data={chartData} />;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
