import {PersonalityType} from '../types';
import data from './personalities.json';

export const TYPE_LIBRARY: Record<string, PersonalityType> = data.types as Record<string, PersonalityType>;

export const NORMAL_TYPES: {code: string; pattern: string}[] = data.normalTypes;

export const TYPE_IMAGES: Record<string, string> = data.typeImages;
