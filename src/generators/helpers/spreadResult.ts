export const spreadResult = <T>(sparseTable: [number, T][]) => (result: number) =>
  sparseTable.reduceRight((foundValue, [lowerBound, valueForResult]) =>
    foundValue ||
    (lowerBound <= result ? valueForResult : null),
    null)

export default spreadResult