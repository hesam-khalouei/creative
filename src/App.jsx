import React from 'react';

import usePresentation from './hooks/usePresentation';

import ProgressBar from './components/navigation/ProgressBar';
import SlideNavigation from './components/navigation/SlideNavigation';

import Slide01Cover from './slides/Slide01Cover';
import Slide02ExecutiveSummary from './slides/Slide02ExecutiveSummary';
import Slide03TheScale from './slides/Slide03TheScale';
import Slide04BusinessReach from './slides/Slide04BusinessReach';
import Slide05CreativeSpectrum from './slides/Slide05CreativeSpectrum';
import Slide06Performance from './slides/Slide06Performance';
import Slide07TeamContribution from './slides/Slide07TeamContribution';
import Slide08BeyondExecution from './slides/Slide08BeyondExecution';
import Slide09OrganizationalPosition from './slides/Slide09OrganizationalPosition';
import Slide10BusinessCase from './slides/Slide10BusinessCase';
import Slide11CompensationReview from './slides/Slide11CompensationReview';
import Slide12TheDecision from './slides/Slide12TheDecision';

const slides = [
  { id: 'cover', component: Slide01Cover },
  { id: 'introduction', component: Slide02ExecutiveSummary },
  { id: 'scale', component: Slide03TheScale },
  { id: 'business-reach', component: Slide04BusinessReach },
  { id: 'creative-spectrum', component: Slide05CreativeSpectrum },
  { id: 'performance', component: Slide06Performance },
  { id: 'team-contribution', component: Slide07TeamContribution },
  { id: 'beyond-execution', component: Slide08BeyondExecution },
  { id: 'organizational-position', component: Slide09OrganizationalPosition },
  { id: 'business-case', component: Slide10BusinessCase },
  { id: 'compensation-review', component: Slide11CompensationReview },
  { id: 'decision', component: Slide12TheDecision },
];

function App() {
  const presentation = usePresentation(slides.length);

  const current = slides[presentation.currentSlide];
  const CurrentSlide = current.component;

  return (
    <main className="presentation">
      <ProgressBar progress={presentation.progress} />

      <div className="slide-glow slide-glow-primary" />
      <div className="slide-glow slide-glow-secondary" />

      <div className="slide-viewport" key={current.id}>
        <CurrentSlide />
      </div>

      <SlideNavigation
        currentSlide={presentation.currentSlide}
        totalSlides={slides.length}
        nextSlide={presentation.nextSlide}
        previousSlide={presentation.previousSlide}
        isFirstSlide={presentation.isFirstSlide}
        isLastSlide={presentation.isLastSlide}
      />
    </main>
  );
}

export default App;
