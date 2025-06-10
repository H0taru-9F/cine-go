export function useSeats(seats = []) {
  const groupedSeats = seats.reduce((acc, seat) => {
    const { rowsNumber, seatInRow, status } = seat;
    if (!acc[rowsNumber]) {
      acc[rowsNumber] = [];
    }
    acc[rowsNumber].push({ seatInRow, status });
    return acc;
  }, {});

  return groupedSeats;
}
