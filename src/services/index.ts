import api from './api';
import { TypeStudentsPerAge } from './models/charts';
import getChartData, { TypeChart } from './useCases/charts';

export { api, getChartData };
export type { TypeChart, TypeStudentsPerAge };
