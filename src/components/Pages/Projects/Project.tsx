import React from 'react';

type Props = {
  url: string;
  title: string;
  description: string;
  img: string;
};

export default function Project({
  url,
  title,
  description,
  img
}: Props) {
  return (
    <li className="project">
      <a target="_blank" href={url} rel="noreferrer">
        <div className="project-image" style={{ backgroundImage: `url("${img}")` }} />
      </a>
      <div className="project-description-container">
        <div className="project-heading">
          <h3>
            {title}
          </h3>
          <a target="_blank" href={url} className="project-link" rel="noreferrer">
            {url.replace(/https?:/, '').replaceAll('/', '')}
          </a>
        </div>
        <div className="project-description">
          <p>
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}
