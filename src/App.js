/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as SquareFoot } from './images/squarefoot.svg';
import { ReactComponent as Table } from './images/table.svg';

const wrapperStyles = css`
  max-width: 1440px;
  margin: auto;
  width: 100%;
`;

const headerStyles = css`
  position: relative;
  z-index: 8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #000;
  padding: 20px 48px;
  height: 40px;
  border: none;
`;

const mainMarginStyles = css`
  padding: 0px;
`;

const navigationStyles = css`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: #000;
    font-weight: 400;
  }

  button {
    border: none;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: transparent;
    font-size: 16px;
    color: #000;
    font-weight: 400;
  }
`;

const logoImageStyles = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const paragraphStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #004f8a;
  padding: 16px 24px;
  margin: 0px;
  margin-bottom: 12px;

  a {
    text-decoration: none;
    color: #fff;
  }
`;
const firstSectionContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 48px 48px;
  /*   max-height: 800px;
  min-height: 400px; */
  height: 70vh;
  border: 6px solid #bef6ff;
  position: relative;
`;
const pictureInDivStyles = css`
  position: absolute;
  /*   margin-top: 500px; */
  bottom: -5%;
  margin: auto;
  width: 70%;
  min-width: 500px;
  object-position: center bottom;
  display: flex;
  justify-content: center;
`;
/* const flowHidden = css`
  width: 100%;
  overflow: hidden;
`; */
const textDivStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h2 {
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
    padding: 24px;
    margin: -8vw 0 0;
  }
  .btn {
    display: block;
    margin: auto;
    font-weight: 400;
    text-align: center;
    width: 168px;
    text-decoration: none;
    background-color: #ff5050;
    color: #fff;
    padding: 15px;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 0.875rem;
  }
`;

const sectionTwoStyles = css`
  padding: 96px 48px;
  max-width: 1440px;
  margin: auto;
  h1 {
    font-weight: 400;
    margin-bottom: 24px;
    padding: 0 48px;
    font-size: 2.25rem;
    line-height: 36px;
    letter-spacing: -1.5px;
    color: #000;
    text-align: center;
  }
`;

const valuePropsStyle = css`
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(
    180deg,
    #fff 0,
    #fff 15.8em,
    #bef6ff 0,
    #bef6ff
  );
`;
const containerStyles = css`
  display: inline-block;
  vertical-align: top;
  padding: 48px 48px calc(2 * 48px);
`;
const innerContainerStyles = css`
  margin: auto;
  max-width: 250px;
  h3 {
    letter-spacing: -1px;
    font-size: 3rem;
    font-weight: 700;
    color: #004f8a;
    margin-bottom: 24px;
  }
  p {
    margin: 24px 0;
    line-height: 1.7;
  }
  a {
    font-size: 1.25rem;
    padding-bottom: 4px;
    text-decoration: none;
    border-bottom: 2px solid #ff5050;
    color: #ff5050;
  }
`;

function App() {
  return (
    <>
      <header css={wrapperStyles}>
        <section css={headerStyles}>
          <a href="/#" css={logoImageStyles}>
            <span>
              <Logo />
            </span>
            <span>
              <SquareFoot />
            </span>
          </a>
          <ul css={navigationStyles}>
            <li>
              <a href="https://www.squarefoot.com/office-space-calculator">
                Smart Tools
              </a>
            </li>
            <li>
              <button type="button" data-qa="homepage-sign-in-button">
                Sign In
              </button>
            </li>
            <li>
              <a href="tel:+19179092953">
                <span>(917) 909-2953</span>
              </a>
            </li>
          </ul>
        </section>
      </header>
      <main css={mainMarginStyles}>
        {/* Banner Section with Blue Background */}
        <section>
          <p css={paragraphStyles}>
            <a href="/#">
              SquareFoot saves clients an average of 23% on their office space
            </a>
          </p>

          {/* First Main Section with 3 components: A h2 and span (text), a button and an Image */}
          <div css={wrapperStyles}>
            <div css={firstSectionContainerStyles}>
              <div css={pictureInDivStyles}>
                <a>
                  <Table />
                </a>
              </div>
              <div css={textDivStyles}>
                <h2>
                  SquareFoot
                  <br />
                  <div>
                    <span>The new way to find office space.</span>
                  </div>
                </h2>
                <a
                  href="https://www.squarefoot.com/profile/size"
                  className="btn"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          {/* Second Main Section with H1 and 3 divs */}
          <section css={sectionTwoStyles}>
            <h1>Commercial Real Estate and Office Space for Rent</h1>
            <div css={valuePropsStyle} className="valueprops">
              <div css={containerStyles} className="container1">
                <div css={innerContainerStyles} className="inner">
                  <h3>Access to tons of available listings</h3>
                  <p>
                    Comprehensive listings enable you to see what’s on the
                    market. Our brokers are on standby to answer any questions
                    and help guide you through the process.
                  </p>
                  <a href="/#">View Listings</a>
                </div>
              </div>
              <div css={containerStyles} className="container2">
                <div css={innerContainerStyles} className="inner">
                  <h3>Trusted partners who work for you.</h3>
                  <p>
                    Our brokers spend 100% of their time doing deals, so they
                    can focus on helping you find a space you love. Not hunting
                    for their next commission.
                  </p>
                  <a href="/#">How It Works</a>
                </div>
              </div>
              <div css={containerStyles} className="container3">
                <div css={innerContainerStyles} className="inner">
                  <h3>Goodbye printouts, hello smart tools.</h3>
                  <p>
                    We provide simple tools like a Space Calculator to help you
                    refine your requirements and plan your search.
                  </p>
                  <a href="/#">View Tools</a>
                </div>
              </div>
            </div>
          </section>
          {/* Third Main Section  with Blockquote and Picture*/}
          <section></section>
        </section>
      </main>
    </>
  );
}

export default App;
