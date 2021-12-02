import React, { useCallback } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Projects from 'components/Pages/Projects/Projects';
import Contact from 'components/Pages/Contact/Contact';
// import About from 'components/Pages/About/About';
import Home from 'components/Pages/Home/Home';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Routes(): JSX.Element {
  const location = useLocation();

  const transitionOnEntered = useCallback((node: HTMLElement) => {
    const page = document.getElementById('page-content');
    if (page && page.style) {
      page.style.height = `${node.offsetHeight}px`;
    }
  }, []);

  return (
    <div id="page-content">
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="page"
          timeout={300}
          onEntered={transitionOnEntered}
        >
          <Switch location={location}>
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" render={() => <div>About me!</div>} />
            <Route path="/" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Routes;
