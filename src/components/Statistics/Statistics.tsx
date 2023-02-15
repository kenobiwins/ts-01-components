// import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
} from './Statistics.styled';

interface IStatItem {
  id: string;
  label: string;
  percentage: number;
}

interface IProps {
  title: string;
  stats: IStatItem[];
}

export const Statistics = ({ title, stats }: IProps) => {
  function getRandomHexColor(): string {
    return (
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')
        .toString()
    );
  }

  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title.toUpperCase()}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsListItem key={id} id={id} color={getRandomHexColor()}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }).isRequired
//   ).isRequired,
// };
