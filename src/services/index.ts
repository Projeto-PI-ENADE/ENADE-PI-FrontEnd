import api from './api';
import getChartData, { TypeChart } from './useCases/charts';
import getData, { TypeData } from './useCases/data';

export { api, getChartData, getData };
export type { TypeChart, TypeData };
