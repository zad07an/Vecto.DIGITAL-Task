import DATA from "@/data/data.json";

export function filterAndSortData(movieId: string) {
  return DATA.TendingNow.filter((item) => item.Id !== movieId).sort((a, b) => {
    const dateOfA = new Date(a.Date).getTime();
    const dateOfB = new Date(b.Date).getTime();

    return dateOfB - dateOfA;
  });
}
