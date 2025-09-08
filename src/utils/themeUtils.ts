// Theme color utilities to reduce duplication across templates
export const getThemeColors = (theme?: string) => {
  switch (theme) {
    case 'dystopian':
    case 'Dystopian Fiction':
    case 'dark':
      return {
        primary: 'bg-gray-900',
        secondary: 'bg-gray-800/50', 
        text: 'text-white',
        accent: 'text-yellow-400',
        border: 'border-gray-600',
        hover: 'hover:bg-gray-700',
        backgroundGradient: 'rgba(75, 85, 99, 0.95)',
        inputBg: 'bg-white',
        inputText: 'text-gray-900',
        inputBorder: 'border-gray-300',
        inputPlaceholder: 'placeholder-gray-500',
        cardBg: 'bg-white/95',
        cardText: 'text-gray-900',
        categoryBg: 'bg-white/90',
        categoryText: 'text-gray-800',
        headerText: 'text-gray-900'
      };
    case 'nature':
    case 'science':
    case 'Creative Writing':
    case 'Energy Transfer':
      return {
        primary: 'bg-green-900',
        secondary: 'bg-green-800/50',
        text: 'text-white', 
        accent: 'text-green-300',
        border: 'border-green-600',
        hover: 'hover:bg-green-700',
        backgroundGradient: 'rgba(34, 197, 94, 0.95)',
        inputBg: 'bg-white',
        inputText: 'text-gray-900',
        inputBorder: 'border-green-300',
        inputPlaceholder: 'placeholder-gray-500',
        cardBg: 'bg-white/95',
        cardText: 'text-gray-900',
        categoryBg: 'bg-white/90',
        categoryText: 'text-gray-800',
        headerText: 'text-gray-900'
      };
    case 'technology':
    case 'Shakespeare':
      return {
        primary: 'bg-blue-900',
        secondary: 'bg-blue-800/50',
        text: 'text-white',
        accent: 'text-blue-300', 
        border: 'border-blue-600',
        hover: 'hover:bg-blue-700',
        backgroundGradient: 'rgba(30, 64, 175, 0.95)',
        inputBg: 'bg-white',
        inputText: 'text-gray-900',
        inputBorder: 'border-blue-300',
        inputPlaceholder: 'placeholder-gray-500',
        cardBg: 'bg-white/95',
        cardText: 'text-gray-900',
        categoryBg: 'bg-white/90',
        categoryText: 'text-gray-800',
        headerText: 'text-gray-900'
      };
    case 'history':
    case 'Industrial Revolution':
    case 'War Poetry':
      return {
        primary: 'bg-amber-900',
        secondary: 'bg-amber-800/50',
        text: 'text-white',
        accent: 'text-amber-300',
        border: 'border-amber-600', 
        hover: 'hover:bg-amber-700',
        backgroundGradient: 'rgba(180, 83, 9, 0.95)',
        inputBg: 'bg-white',
        inputText: 'text-gray-900',
        inputBorder: 'border-amber-300',
        inputPlaceholder: 'placeholder-gray-500',
        cardBg: 'bg-white/95',
        cardText: 'text-gray-900',
        categoryBg: 'bg-white/90',
        categoryText: 'text-gray-800',
        headerText: 'text-gray-900'
      };
    default:
      return {
        primary: 'bg-green-900',
        secondary: 'bg-green-800/50',
        text: 'text-white', 
        accent: 'text-green-300',
        border: 'border-green-600',
        hover: 'hover:bg-green-700',
        backgroundGradient: 'rgba(34, 197, 94, 0.95)',
        inputBg: 'bg-white',
        inputText: 'text-gray-900',
        inputBorder: 'border-green-300',
        inputPlaceholder: 'placeholder-gray-500',
        cardBg: 'bg-white/95',
        cardText: 'text-gray-900',
        categoryBg: 'bg-white/90',
        categoryText: 'text-gray-800',
        headerText: 'text-gray-900'
      };
  }
};

export const getActivityIcon = (type: 'starter' | 'main' | 'plenary') => {
  const icons = {
    starter: <Brain className="w-5 h-5 text-blue-600" />,
    main: <BookOpen className="w-5 h-5 text-amber-600" />,
    plenary: <CheckCircle2 className="w-5 h-5 text-green-600" />
  };
  return icons[type];
};

export const getActivityColor = (type: 'starter' | 'main' | 'plenary') => {
  const colors = {
    starter: 'border-blue-200 bg-blue-50',
    main: 'border-amber-200 bg-amber-50',
    plenary: 'border-green-200 bg-green-50'
  };
  return colors[type];
};