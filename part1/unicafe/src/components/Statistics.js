import StatisticsLine from './StatisticsLine';

const Statistics = ({ good, neutral, bad }) => {
  const getTotal = () => good + neutral + bad;
  const getAverageScores = () => (good + neutral * 0 + bad * -1) / getTotal();
  const getPositivePercentage = () => (good / getTotal()) * 100;

  return !good && !neutral && !bad ? (
    <div>
      <br />
      No feedback given
    </div>
  ) : (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine label="good" value={good} />
          <StatisticsLine label="neutral" value={neutral} />
          <StatisticsLine label="bad" value={bad} />
          <StatisticsLine label="all" value={getTotal()} />
          <StatisticsLine label="average" value={getAverageScores()} />
          <StatisticsLine label="positive" value={getPositivePercentage()} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
