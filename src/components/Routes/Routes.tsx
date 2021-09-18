import React, { useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Projects from 'components/Pages/Projects/Projects';
// import Contact from 'components/Pages/Contact/Contact';
// import About from 'components/Pages/About/About';
import Home from 'components/Pages/Home/Home';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Routes(): JSX.Element {
  const location = useLocation();
  const ref = useRef(null);

  return (
    <div id="page-content">
      <TransitionGroup>
        <CSSTransition
          nodeRef={ref}
          key={location.pathname}
          classNames="page"
          timeout={300}
          onEntered={(node: HTMLElement) => {
            const page = document.getElementById('page-content');
            if (page && page.style) {
              page.style.height = `${node.offsetHeight}px`;
            }
          }}
        >
          <Switch location={location}>
            <Route path="/projects">
              <Projects divRef={ref} />
            </Route>
            <Route path="/contact" render={() => <div>Contact me!</div>} />
            <Route path="/about" render={() => <div>About me!</div>} />
            <Route path="/">
              <div ref={ref}><Home /></div>
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Routes;
