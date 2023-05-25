interface ForecastSummaryType {
  precipitation?: number
}

const summaryText = (precipitation?: number) => {
  if (precipitation && precipitation > 0) {
    return "Light Rain"
  }

  return "Mostly Sunny"
}

function ForecastSummary(props: ForecastSummaryType) {
  const { precipitation } = props

  return (
    <>
      {summaryText(precipitation)}
    </>
  );
}

export default ForecastSummary;
