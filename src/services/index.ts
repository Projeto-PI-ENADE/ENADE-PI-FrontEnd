import api from './api';
import getChartData, {
    TypeChart,
    TypeCharts,
    TypeGroupedChart,
    getGroupedChartData,
} from './useCases/charts';
import getData, { TypeData } from './useCases/data';
import getCourseData, { TypeCoursesData } from './useCases/course';

export { api, getData, getChartData, getGroupedChartData, getCourseData };
export type {
    TypeChart,
    TypeCharts,
    TypeGroupedChart,
    TypeData,
    TypeCoursesData,
};
