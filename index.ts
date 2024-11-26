export interface SkinToneData {
  tone: string;
  undertone: string;
}

export interface ColorPalette {
  casual: string[];
  formal: string[];
  festive: string[];
}

export interface AnalysisResult {
  skinTone: SkinToneData;
  colors: ColorPalette;
}