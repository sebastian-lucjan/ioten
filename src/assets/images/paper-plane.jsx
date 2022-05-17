// <svg ref={setRef} viewBox="-20 0 800 700" fill="none" xmlns="http://www.w3.org/2000/svg">

const PaperPlaneSVG = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 116 98" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="paper-plane">
        <path
          id="plane-color-body"
          d="M55.7526 66.5221L115.02 38.4423L62.8847 37.7066L66.2488 46.7682L54.6547 57.8584L55.7526 66.5221Z"
          fill="#AAAAAA"
        />
        <path id="wing-right" d="M115.02 38.4423L54.59 45.0006L8.94678 71.9816L115.02 38.4423Z" fill="white" />
        <path id="wing-left" d="M62.8847 37.7066L115.02 38.4423L61.8868 18.5501L62.8847 37.7066Z" fill="white" />
      </g>
    </svg>
  );
};

export default PaperPlaneSVG;
