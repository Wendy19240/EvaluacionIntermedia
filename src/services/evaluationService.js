// frontend/src/services/evaluationService.js
import api from './api';

export const createEvaluation = async (data) => {
  try {
    const response = await api.post('/evaluations/create', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
