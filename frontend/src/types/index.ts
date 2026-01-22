// User types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  subscription: 'free' | 'pro' | 'premium';
  profilePicture?: string;
}

// Authentication types
export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Project types
export interface Project {
  _id: string;
  userId: string;
  title: string;
  description: string;
  thumbnail?: string;
  status: 'draft' | 'generating' | 'completed' | 'failed';
  visibility: 'private' | 'shared' | 'public';
  scenes: Scene[];
  finalVideoUrl?: string;
  finalVideoStatus: 'pending' | 'generating' | 'completed' | 'failed';
  totalDuration: number;
  viewCount: number;
  downloadCount: number;
  template?: string;
  tags: string[];
  videoSettings: VideoSettings;
  createdAt: string;
  updatedAt: string;
}

// Scene types
export interface Scene {
  _id: string;
  projectId: string;
  order: number;
  title: string;
  description: string;
  script: string;
  duration: number;
  videoUrl?: string;
  videoStatus: 'pending' | 'generating' | 'completed' | 'failed';
  voiceOverUrl?: string;
  voiceOverStatus: 'pending' | 'generating' | 'completed' | 'failed';
  stylePreset: 'minimal' | 'corporate' | 'playful' | 'professional' | 'tech';
  transitionType: 'fade' | 'slide' | 'zoom' | 'cut';
  thumbnail?: string;
  voiceSettings: VoiceSettings;
  metadata: SceneMetadata;
  createdAt: string;
  updatedAt: string;
}

// Video settings types
export interface VideoSettings {
  quality: 'fast' | 'standard' | 'high';
  aspectRatio: '16:9' | '9:16' | '1:1';
  resolution: '720p' | '1080p' | '4k';
  audioTrack?: {
    enabled: boolean;
    audioUrl?: string;
    volume?: number;
  };
}

export interface VoiceSettings {
  enabled: boolean;
  voice: 'en-US-Neural2-A' | 'en-US-Neural2-C' | 'en-US-Neural2-E';
  speed: number;
}

export interface SceneMetadata {
  aspectRatio: '16:9' | '9:16' | '1:1';
  resolution: '720p' | '1080p' | '4k';
}

// Video generation types
export interface VideoGenerationJob {
  _id: string;
  projectId: string;
  sceneId: string;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  progress: number;
  videoUrl?: string;
  errorMessage?: string;
  createdAt: string;
  updatedAt: string;
}

// Quota types
export interface QuotaInfo {
  subscription: 'free' | 'pro' | 'premium';
  monthlyQuota: {
    videos: number;
    voiceOvers: number;
  };
  usage: {
    videosThisMonth: number;
    voiceOversThisMonth: number;
    lastReset: string;
  };
  remainingQuota: {
    videos: number;
    voiceOvers: number;
  };
}

// API Response types
export interface ApiResponse<T> {
  message: string;
  data: T;
}

// Form types
export interface ProjectFormData {
  title: string;
  description: string;
  template?: string;
  videoSettings?: VideoSettings;
}

export interface SceneFormData {
  title: string;
  description: string;
  script: string;
  duration: number;
  stylePreset: string;
  voiceSettings: VoiceSettings;
}