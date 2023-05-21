import { WordData } from '$components/autocomplete/types/word-data.model';

export interface WordExtraction {
  readonly word: string;
  readonly wordData: WordData;
}
