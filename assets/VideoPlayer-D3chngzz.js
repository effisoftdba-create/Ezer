import{j as r,r as s}from"./vendor-TTylehWJ.js";function h(e){if(typeof e!="string")return{type:"none",src:""};const t=e.trim(),i=t.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);if(i&&i[1])return{type:"iframe",isYouTube:!0,src:`https://www.youtube.com/embed/${i[1]}?autoplay=0&rel=0&modestbranding=1`,originalUrl:`https://www.youtube.com/watch?v=${i[1]}`,title:"YouTube Video Player"};const n=t.match(/(?:file\/d\/|d\/|id=|open\?id=)([\w-]{20,50})/i);if((t.includes("drive.google.com")||t.includes("docs.google.com"))&&n&&n[1]){const o=n[1];return{type:"drive",isDrive:!0,fileId:o,directUrl:`https://lh3.googleusercontent.com/d/${o}`,fallbackDirectUrl:`https://drive.google.com/uc?export=download&id=${o}`,src:`https://drive.google.com/file/d/${o}/preview`,originalUrl:`https://drive.google.com/file/d/${o}/view?usp=sharing`,title:"Google Drive Video Player"}}return/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(t)?{type:"video",src:t}:{type:"iframe",src:t,originalUrl:t,title:"Embedded Video Player"}}function v({config:e,poster:t,title:i}){const n=s.useRef(null),o=s.useRef(null),c=s.useRef(null),[p,u]=s.useState(!1),m=()=>{const l=o.current||n.current;if(l){if(l.requestFullscreen){l.requestFullscreen();return}if(l.webkitRequestFullscreen){l.webkitRequestFullscreen();return}if(l.mozRequestFullScreen){l.mozRequestFullScreen();return}}const d=e.originalUrl||e.src;d&&window.open(d,"_blank","noopener,noreferrer")};if(e.type==="none")return r.jsx("div",{style:{width:"100%",aspectRatio:"16 / 9",borderRadius:"16px",overflow:"hidden",background:"#000648",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",position:"relative"},children:t?r.jsx("img",{src:t,alt:i,style:{width:"100%",height:"100%",objectFit:"cover"}}):r.jsx("div",{style:{textAlign:"center",padding:"20px"},children:r.jsx("span",{style:{fontSize:"1rem",color:"#94a3b8"},children:"No video preview available"})})});const a=e.type==="drive"||e.isDrive,b=a&&p;return r.jsxs("div",{style:{width:"100%",maxWidth:"1040px",margin:"0 auto"},children:[r.jsx("style",{children:`
        .ezer-video-player-container {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          overflow: hidden;
          background: #000000;
          box-shadow: 0 8px 24px rgba(0, 6, 72, 0.15);
          border: 2px solid #000648;
          position: relative;
        }
        .ezer-video-player-container iframe,
        .ezer-video-player-container video {
          width: 100% !important;
          height: 100% !important;
          border: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
        }
        .ezer-video-btn {
          background: rgba(0, 6, 72, 0.85);
          color: #ffffff;
          border: 1px solid rgba(242, 183, 51, 0.4);
          border-radius: 8px;
          padding: 6px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          backdrop-filter: blur(6px);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .ezer-video-btn:hover {
          background: #000648;
          color: #f2b733;
          border-color: #f2b733;
          transform: translateY(-1px);
        }
        .ezer-fullscreen-btn {
          position: absolute;
          bottom: 10px;
          right: 10px;
          z-index: 10;
        }
        @media (max-width: 768px) {
          .ezer-video-player-container {
            border-radius: 12px !important;
          }
          .ezer-video-btn {
            padding: 5px 10px;
            font-size: 0.72rem;
          }
        }
        @media (max-width: 480px) {
          .ezer-video-player-container {
            border-radius: 10px !important;
          }
        }
      `}),r.jsxs("div",{className:"ezer-video-player-container",ref:c,children:[a&&!b?r.jsxs("video",{ref:o,poster:t,controls:!0,playsInline:!0,onError:()=>u(!0),style:{width:"100%",height:"100%",objectFit:"contain",background:"#000"},children:[r.jsx("source",{src:e.directUrl,type:"video/mp4"}),r.jsx("source",{src:e.fallbackDirectUrl,type:"video/mp4"}),"Your browser does not support HTML5 video playback."]},e.directUrl):e.type==="video"?r.jsx("video",{ref:o,src:e.src,poster:t,controls:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"contain",background:"#000"},children:"Your browser does not support HTML5 video playback."},e.src):r.jsx("iframe",{ref:n,src:e.src,title:i,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,border:"none",display:"block",pointerEvents:"auto"}},e.src),r.jsxs("button",{type:"button",className:"ezer-video-btn ezer-fullscreen-btn",onClick:m,title:"Open video in fullscreen","aria-label":"Open video fullscreen",children:[r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"})}),"Fullscreen"]})]})]})}function w({videoUrl:e="https://www.youtube.com/watch?v=aircAruvnKk",poster:t,title:i="Course Preview Video"}){const n=e||"https://www.youtube.com/watch?v=aircAruvnKk",o=h(n);return r.jsx(v,{config:o,poster:t,title:i},n)}export{w as V};
