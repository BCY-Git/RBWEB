import request from '@/utils/request';
import type { DailyReport } from './types';

export const getDailyReport = () => {
  return request.get<DailyReport[]>('/daily-report');
};
