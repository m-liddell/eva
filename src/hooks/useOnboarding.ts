import { useState, useEffect } from 'react';

const ONBOARDING_STORAGE_KEY = 'eva-onboarding-completed';
const ONBOARDING_STEP_KEY = 'eva-onboarding-step';

export function useOnboarding() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState('welcome');

  const showTour = () => {
    setShowOnboarding(true);
  };

  useEffect(() => {
    // Check if this is a new proof-of-concept user
    const pocUser = sessionStorage.getItem('pocUser');
    const pocUserData = pocUser ? JSON.parse(pocUser) : null;
    
    // If POC user just signed in (within last 5 seconds), show onboarding
    if (pocUserData && pocUserData.signedInAt) {
      const signInTime = new Date(pocUserData.signedInAt).getTime();
      const now = new Date().getTime();
      const timeDiff = now - signInTime;
      
      if (timeDiff < 5000) { // 5 seconds
        setShowOnboarding(true);
        setCurrentStep('welcome');
        setIsLoading(false);
        return;
      }
    }
    
    // Check if onboarding has been completed
    const hasCompletedOnboarding = localStorage.getItem(ONBOARDING_STORAGE_KEY) === 'true';
    const savedStep = localStorage.getItem(ONBOARDING_STEP_KEY);
    
    if (!hasCompletedOnboarding) {
      // First time user - show onboarding
      setShowOnboarding(true);
      setCurrentStep(savedStep || 'welcome');
    } else {
      // Returning user - don't show onboarding
      setShowOnboarding(false);
    }
    
    setIsLoading(false);
  }, []);

  const completeOnboarding = () => {
    localStorage.setItem(ONBOARDING_STORAGE_KEY, 'true');
    localStorage.removeItem(ONBOARDING_STEP_KEY);
    setShowOnboarding(false);
  };

  const resetOnboarding = () => {
    localStorage.removeItem(ONBOARDING_STORAGE_KEY);
    localStorage.removeItem(ONBOARDING_STEP_KEY);
    setShowOnboarding(true);
    setCurrentStep('welcome');
  };

  const setOnboardingStep = (step: string) => {
    localStorage.setItem(ONBOARDING_STEP_KEY, step);
    setCurrentStep(step);
  };

  return {
    showOnboarding,
    setShowOnboarding: showTour,
    isLoading,
    currentStep,
    completeOnboarding,
    resetOnboarding,
    setOnboardingStep
  };
}