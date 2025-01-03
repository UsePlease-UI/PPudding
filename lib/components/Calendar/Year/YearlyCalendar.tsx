const ONE_YEARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// TODO
export default function YearlyCalendar() {
  return (
    <div className="flex flex-wrap items-center">
      {ONE_YEARS.map((el: number) => (
        <span key={el}>{el}월</span>
      ))}
    </div>
  );
}
