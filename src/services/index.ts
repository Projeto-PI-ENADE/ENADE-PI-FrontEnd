import api from './api';
import getChartData, {
    TypeChart,
    TypeGroupedChart,
    getGroupedChartData,
} from './useCases/charts';
import getData, { TypeData } from './useCases/data';

export { api, getData, getChartData, getGroupedChartData };
export type { TypeChart, TypeGroupedChart, TypeData };
