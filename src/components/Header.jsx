import React from 'react';
import styled, { css } from 'styled-components';

const TextEnd = styled.section`
  text-align: right;
  margin-bottom: 20px;
`;

const BreadcrumbItem = styled.span`
  font-weight: thin;
  margin-left: 20px;
  ${props => {
    if (props.active) {
      return css`
        font-weight: bold;
      `
    }

    if (props.past) {
      return css`
        font-weight: bold;
        color: ${props => props.theme.colors.success};
      `
    }
  }};
`

const Aligned = styled.svg`
  margin-left: 20px;
  fill: grey;
`

const Header = ({ steps, currentStep }) => {
  return (
    <section className="nav">
      { steps.map((step, index) => {
        const past = currentStep > index;
        const active = currentStep === index;
        const last = index === steps.length - 1;
        return (
          <span key={index} className={active ? 'active' : ''}>
            {step}
            {!last && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 20 20">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 13.912C7.5 13.8414 7.53532 13.7619 7.58829 13.7089L11.0582 10.239L7.58829 6.76915C7.53532 6.71617 7.5 6.63671 7.5 6.56608C7.5 6.49544 7.53532 6.41598 7.58829 6.36301L8.02975 5.92154C8.08273 5.86857 8.16219 5.83325 8.23283 5.83325C8.30346 5.83325 8.38292 5.86857 8.4359 5.92154L12.5503 10.036C12.6033 10.0889 12.6386 10.1684 12.6386 10.239C12.6386 10.3097 12.6033 10.3891 12.5503 10.4421L8.4359 14.5565C8.38292 14.6095 8.30346 14.6448 8.23283 14.6448C8.16219 14.6448 8.08273 14.6095 8.02975 14.5565L7.58829 14.1151C7.53532 14.0621 7.5 13.9915 7.5 13.912Z" />
              </svg>
            )}
          </span>
        );
      }) }
    </section>
  );
};

export default Header;
