import api from './api';
import getChartData, {
    TypeChart,
    TypeCharts,
    TypeGroupedChart,
    TypeGroupedCharts,
    getGroupedChartData,
} from './useCases/charts';
import getData, { TypeData } from './useCases/data';
import getCourseData, { TypeCoursesData } from './useCases/course';

export { api, getData, getChartData, getGroupedChartData, getCourseData };
export type {
    TypeChart,
    TypeCharts,
    TypeGroupedChart,
    TypeGroupedCharts,
    TypeData,
    TypeCoursesData,
};
