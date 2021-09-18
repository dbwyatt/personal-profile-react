import './Navigation.css';
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import useProjects, { ProjectsType } from 'hooks/useProjects';

function Navigation() {
  const [activeKey, setActiveKey] = useState(0);
  const projects: ProjectsType = useProjects();

  return (
    <Navbar className="navbar-inverse" expand="xl">
      {/* <Navbar.Brand href="/"><img src="/img/logo.png" /></Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Collect the nav links, forms, and other content for toggling */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={activeKey} onSelect={() => setActiveKey(0)}>
          <Nav.Item>
            <Link className="nav-link" to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </Nav.Item>
          <NavDropdown title="Projects" id="projects-dropdown">
            {projects.map((item) => (
              <NavDropdown.Item
                key={item.url}
                target="_blank"
                rel="noreferrer"
                href={item.url}
              >
                {item.title}
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/projects">All projects</Link>
          </NavDropdown>
          {/* <li>
            <a href="#endorsements"
            data-page="#endorsements-page"
            data-target="page
            >Endorsements</a></li> */}
          <Nav.Item>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav.Item>
          {/* <li><a href="#about" data-page="#about-page" data-target="page">About Me</a></li> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
