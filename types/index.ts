export interface NutritionsProps {
  icon: string;
  nutrition: string;
  nutritionColor?: string;
  value: string;
  valueColor?: string;
  border?: string;
}

export interface Nutrition {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbohydrate: number;
  protein: number;
}

export interface Prediction {
  predicted_label: string;
  nutritions: Nutrition;
}

export interface ImagePreviewProps {
  image: File | null;
}

export interface ImageUploadProps {
  file: File | null;
  setFile: (file: File | null) => void;
  onSend: () => void;
}

export interface OutputProps {
  image: File | null;
  prediction: Prediction;
}
