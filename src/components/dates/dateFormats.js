export default [
  { label: 'Unix Millisecond Timestamp', value: 'x', display: true, example: '1510629545285' },
  { label: 'Unix Timestamp', value: 'X', example: '1510629563' },
  { label: 'ISO-8601', value: undefined, example: '2014-09-08T08:02:17-05:00' },
  { label: 'Time', value: 'LT', example: '8:30 PM' },
  { label: 'Time With Seconds', value: 'LTS', example: '8:30:25 PM' },
  { label: 'Month numeral, day of month, year', value: 'L', display: true, example: '09/04/1986' },
  { label: 'Abbreviated month numeral, day of month, year', value: 'l', example: '9/4/1986' },
  {
    label: 'Month name, day of month, year',
    value: 'LL',
    display: true,
    example: 'September 4, 1986',
  },
  { label: 'Abbreviated month name, day of month, year', value: 'll', example: 'Sep 4, 1986' },
  {
    label: 'Month name, day of month, year, time',
    value: 'LLL',
    display: true,
    example: 'September 4, 1986 8:30 PM',
  },
  {
    label: 'Abbreviated month name, day of month, year, time',
    value: 'lll',
    example: 'Sep 4, 1986 8:30 PM',
  },
  {
    label: 'Padded month name, day of month, day of week, year, time',
    value: 'LLLL',
    display: true,
    example: 'Thursday, September 4, 1986 8:30 PM',
  },
  {
    label: 'Month name, day of month, day of week, year, time',
    value: 'llll',
    example: 'Thu, Sep 4, 1986 8:30 PM',
  },
  {
    label: 'Custom',
    value: 'dddd, MMMM Do YYYY, h:mm:ss a',
    display: true,
    example: 'Sunday, February 14th 2010, 3:25:50 pm',
  },
]
