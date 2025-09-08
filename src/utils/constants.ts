// Centralized constants to reduce duplication
export const SUBJECTS = [
  'English', 'Mathematics', 'Science', 'History', 'Geography',
  'Modern Languages', 'Art', 'Music', 'Physical Education', 'Computing'
] as const;

export const YEAR_GROUPS = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'] as const;
export const CLASS_GROUPS = ['A', 'B', 'C', 'D'] as const;
export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const;

export const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'
] as const;

export const DURATIONS = ['30 mins', '45 mins', '60 mins', '90 mins', '120 mins'] as const;

export const THEMES = [
  'Dystopian Fiction', 'Creative Writing', 'War Poetry', 'Shakespeare',
  'Modern Literature', 'Travel Writing', 'Myths and Legends', 'Victorian Literature',
  'Sherlock Holmes',
  'Energy Transfer', 'Forces and Motion', 'Chemical Reactions',
  'Industrial Revolution', 'World War I', 'World War II'
] as const;

export const DIALOGIC_STRUCTURES = [
  'Discussion', 'Simulation', 'Debate', 'Role Play', 'Inquiry',
  'Collaborative Problem Solving', 'Peer Teaching', 'Guided Discovery',
  'Think-Pair-Share', 'Socratic Dialogue'
] as const;

export const ACTIVITY_TYPES = ['starter', 'main', 'plenary'] as const;

// Common utility functions
export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const period = Number(hours) >= 12 ? 'PM' : 'AM';
  const displayHours = Number(hours) > 12 ? Number(hours) - 12 : Number(hours);
  return `${displayHours}:${minutes} ${period}`;
};

export const generateId = (): string => Math.random().toString(36).substr(2, 9);

export const getCurrentDate = (): string => {
  return new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};