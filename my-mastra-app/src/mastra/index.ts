
import { Mastra } from '@mastra/core';
import { weatherAgent } from './agents/WeatherAgent';
import { storage } from './storage/storage';

export const mastra = new Mastra({
  agents: { weatherAgent },
  storage: storage
})







