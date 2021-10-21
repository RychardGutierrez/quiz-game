import fakeMoneyPyramid from '../data/moneyPyramid.json';

export const getDataMoneyPyramid = () => [...fakeMoneyPyramid.data].reverse();
