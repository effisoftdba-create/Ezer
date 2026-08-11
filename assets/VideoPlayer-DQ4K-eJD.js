import{j as e,r as s}from"./vendor-TTylehWJ.js";function m(r){if(typeof r!="string")return{type:"none",src:""};const t=r.trim(),n=t.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);if(n&&n[1])return{type:"iframe",isYouTube:!0,src:`https://www.youtube.com/embed/${n[1]}?autoplay=0&rel=0&modestbranding=1`,originalUrl:`https://www.youtube.com/watch?v=${n[1]}`,title:"YouTube Video Player"};const l=t.match(/(?:file\/d\/|d\/|id=|open\?id=)([\w-]{20,50})/i);if((t.includes("drive.google.com")||t.includes("docs.google.com"))&&l&&l[1]){const o=l[1];return{type:"drive",isDrive:!0,fileId:o,directUrl:`https://lh3.googleusercontent.com/d/${o}`,fallbackDirectUrl:`https://drive.google.com/uc?export=download&id=${o}`,src:`https://drive.google.com/file/d/${o}/preview`,originalUrl:`https://drive.google.com/file/d/${o}/view?usp=sharing`,title:"Google Drive Video Player"}}return/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(t)?{type:"video",src:t}:{type:"iframe",src:t,originalUrl:t,title:"Embedded Video Player"}}function f({config:r,poster:t,title:n}){const l=s.useRef(null),o=s.useRef(null),c=s.useRef(null),[p,u]=s.useState(!1),v=()=>{const i=o.current||l.current;if(i){if(i.requestFullscreen){i.requestFullscreen();return}if(i.webkitRequestFullscreen){i.webkitRequestFullscreen();return}if(i.mozRequestFullScreen){i.mozRequestFullScreen();return}}const d=r.originalUrl||r.src;d&&window.open(d,"_blank","noopener,noreferrer")},h=()=>{const i=r.originalUrl||r.src;i&&window.open(i,"_blank","noopener,noreferrer")};if(r.type==="none")return e.jsx("div",{style:{width:"100%",aspectRatio:"16 / 9",borderRadius:"16px",overflow:"hidden",background:"#000648",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",position:"relative"},children:t?e.jsx("img",{src:t,alt:n,style:{width:"100%",height:"100%",objectFit:"cover"}}):e.jsx("div",{style:{textAlign:"center",padding:"20px"},children:e.jsx("span",{style:{fontSize:"1rem",color:"#94a3b8"},children:"No video preview available"})})});const a=r.type==="drive"||r.isDrive,b=a&&p;return e.jsxs("div",{style:{width:"100%",maxWidth:"1040px",margin:"0 auto"},children:[e.jsx("style",{children:`
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
        .ezer-video-actions-top {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
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
      `}),e.jsxs("div",{className:"ezer-video-player-container",ref:c,children:[a&&!b?e.jsxs("video",{ref:o,poster:t,controls:!0,playsInline:!0,onError:()=>u(!0),style:{width:"100%",height:"100%",objectFit:"contain",background:"#000"},children:[e.jsx("source",{src:r.directUrl,type:"video/mp4"}),e.jsx("source",{src:r.fallbackDirectUrl,type:"video/mp4"}),"Your browser does not support HTML5 video playback."]},r.directUrl):r.type==="video"?e.jsx("video",{ref:o,src:r.src,poster:t,controls:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"contain",background:"#000"},children:"Your browser does not support HTML5 video playback."},r.src):e.jsx("iframe",{ref:l,src:r.src,title:n,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,border:"none",display:"block",pointerEvents:"auto"}},r.src),a&&e.jsx("div",{className:"ezer-video-actions-top",children:e.jsxs("button",{type:"button",className:"ezer-video-btn",onClick:h,title:"Open video directly in Google Drive","aria-label":"Open video in Google Drive",children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15 3 21 3 21 9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Open Drive"]})}),e.jsxs("button",{type:"button",className:"ezer-video-btn ezer-fullscreen-btn",onClick:v,title:"Open video in fullscreen","aria-label":"Open video fullscreen",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"})}),"Fullscreen"]})]})]})}function y({videoUrl:r="https://www.youtube.com/watch?v=aircAruvnKk",poster:t,title:n="Course Preview Video"}){const l=r||"https://www.youtube.com/watch?v=aircAruvnKk",o=m(l);return e.jsx(f,{config:o,poster:t,title:n},l)}export{y as V};
