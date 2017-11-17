import { IPagination } from './IPagination';
import { INationalEstimate } from './INationalEstimate';

export interface INationalEstimateResponse {
  results: INationalEstimate[];
  pagination: IPagination;
}