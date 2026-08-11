import{r as c,j as r}from"./vendor-TTylehWJ.js";function u(n){if(typeof n!="string")return{type:"none",src:""};const t=n.trim(),o=t.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);if(o&&o[1])return{type:"iframe",src:`https://www.youtube.com/embed/${o[1]}?autoplay=0&rel=0&modestbranding=1`,title:"YouTube Video Player"};const l=t.match(/(?:file\/d\/|d\/|id=|open\?id=)([\w-]{20,50})/i);if((t.includes("drive.google.com")||t.includes("docs.google.com"))&&l&&l[1]){const e=l[1];return{type:"iframe",isDrive:!0,fileId:e,src:`https://drive.google.com/file/d/${e}/preview`,originalUrl:`https://drive.google.com/file/d/${e}/view?usp=sharing`,title:"Google Drive Video Player"}}return/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(t)?{type:"video",src:t}:{type:"iframe",src:t,title:"Embedded Video Player"}}function m({videoUrl:n="https://www.youtube.com/watch?v=aircAruvnKk",poster:t,title:o="Course Preview Video"}){const e=u(n||"https://www.youtube.com/watch?v=aircAruvnKk"),a=c.useRef(null),d=c.useRef(null),p=()=>{const i=a.current;if(i){if(i.requestFullscreen){i.requestFullscreen();return}if(i.webkitRequestFullscreen){i.webkitRequestFullscreen();return}if(i.mozRequestFullScreen){i.mozRequestFullScreen();return}}const s=e.originalUrl||e.src;s&&window.open(s,"_blank","noopener,noreferrer")};return e.type==="none"?r.jsx("div",{style:{width:"100%",aspectRatio:"16 / 9",borderRadius:"16px",overflow:"hidden",background:"#000648",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",position:"relative"},children:t?r.jsx("img",{src:t,alt:o,style:{width:"100%",height:"100%",objectFit:"cover"}}):r.jsx("div",{style:{textAlign:"center",padding:"20px"},children:r.jsx("span",{style:{fontSize:"1rem",color:"#94a3b8"},children:"No video preview available"})})}):r.jsxs("div",{style:{width:"100%",maxWidth:"1040px",margin:"0 auto"},children:[r.jsx("style",{children:`
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
        .ezer-fullscreen-btn {
          position: absolute;
          bottom: 10px;
          right: 10px;
          z-index: 10;
          background: rgba(0, 6, 72, 0.75);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 7px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          backdrop-filter: blur(4px);
          transition: background 0.2s;
        }
        .ezer-fullscreen-btn:hover {
          background: rgba(0, 6, 72, 0.95);
        }
        @media (max-width: 768px) {
          .ezer-video-player-container {
            border-radius: 12px !important;
          }
          .ezer-fullscreen-btn {
            padding: 6px 10px;
            font-size: 0.72rem;
          }
        }
        @media (max-width: 480px) {
          .ezer-video-player-container {
            border-radius: 10px !important;
          }
        }
      `}),r.jsxs("div",{className:"ezer-video-player-container",ref:d,children:[e.type==="video"?r.jsx("video",{ref:a,src:e.src,poster:t,controls:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"contain"},children:"Your browser does not support HTML5 video playback."},e.src):r.jsx("iframe",{ref:a,src:e.src,title:o,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,border:"none",display:"block",pointerEvents:"auto"}},e.src),r.jsxs("button",{type:"button",className:"ezer-fullscreen-btn",onClick:p,title:"Open video in fullscreen","aria-label":"Open video fullscreen",children:[r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"})}),"Fullscreen"]})]})]})}export{m as V};
