import PropTypes from "prop-types";
import { Section, Title, ListOfStatistics, Item, DataStat } from "./Statistics.styled";

export const Statistics = ({ stats, title } ) => {
  return <Section>
    {title && <Title>{title}</Title>}
    <ListOfStatistics>
      {stats.map(stat => (
        <Item key={stat.id}>
        <DataStat>{stat.label}</DataStat>
        <DataStat>{stat.percentage}%</DataStat>
      </Item>
    ))}
    </ListOfStatistics>
</Section>
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};