import toprolly from "../assets/rolly1.png";

const styles = `
  @keyframes scroll-roll1 {
  from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .scroll-container-roll1 {
    overflow: hidden;
    width: 100%;
    max-width: none;
    line-height: 0;
  }

  .scroll-content-roll1 {
    display: inline-flex;
    position: relative;
    width: var(--mobile-width, var(--banner-width, 100%));
    max-width: none;
    animation: scroll-roll1 20s linear infinite;
    line-height: 0;
  }

  @media (min-width: 1024px) {
    .scroll-content-roll1 {
      width: var(--banner-width, 100%);
    }
  }

  .scroll-content-roll1 img {
    width: 100%;
    height: auto;
    display: block;
  }

  .scroll-content-roll1::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    height: 100%;
    width: 100%;
    background-image: var(--bg-image);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

function Roll1({ width = "210vw", mobileWidth = "700vw" }) {
  return (
    <>
      <style>{styles}</style>
      <div className="scroll-container-roll1">
        <div
          className="scroll-content-roll1"
          style={{
            "--bg-image": `url(${toprolly})`,
            "--banner-width": width,
            "--mobile-width": mobileWidth || width,
          }}
        >
          <img src={toprolly} alt="" />
        </div>
      </div>
    </>
  );
}

export default Roll1;
