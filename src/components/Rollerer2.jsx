import toprolly from "../assets/rollstraight.png";

const styles = `
  @keyframes scroll {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0%);
    }
  }

  .scroll-container {
    overflow: hidden;
    width: 100%;
    max-width: none;
  }

  .scroll-content {
    display: inline-flex;
    position: relative;
    width: var(--mobile-width, var(--banner-width, 100%));
    max-width: none;
    animation: scroll 5s linear infinite;
  }

  @media (min-width: 1024px) {
    .scroll-content {
      width: var(--banner-width, 100%);
    }
  }

  .scroll-content img {
    width: 100%;
    height: auto;
    display: block;
  }

  .scroll-content::after {
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

function Rollerer2({ width = '110vw', mobileWidth = '160vw' }) {
  return (
    <>
      <style>{styles}</style>
      <div className="scroll-container !ml-10">
        <div 
          className="scroll-content !ml-10"
          style={{ 
            '--bg-image': `url(${toprolly})`,
            '--banner-width': width,
            '--mobile-width': mobileWidth || width,
            
          }}
        >
          <img src={toprolly} alt="" className="!ml-10" />
        </div>
      </div>
    </>
  )
}

export default Rollerer2