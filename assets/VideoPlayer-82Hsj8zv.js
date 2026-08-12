import{j as e,r as a}from"./vendor-CuUOx1AT.js";function m(r){if(typeof r!="string")return{type:"none",src:""};const t=r.trim(),i=t.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);if(i&&i[1])return{type:"iframe",isYouTube:!0,src:`https://www.youtube.com/embed/${i[1]}?autoplay=0&rel=0&modestbranding=1`,originalUrl:`https://www.youtube.com/watch?v=${i[1]}`,title:"YouTube Video Player"};const s=t.includes("drive.google.com")||t.includes("docs.google.com")||t.includes("accounts.google.com"),n=t.match(/(?:file\/d\/|d\/|id=|open\?id=)([\w-]{20,50})/i);if(s){const o=n&&n[1]?n[1]:"";return{type:"drive",isDrive:!0,fileId:o,directUrl:o?`https://lh3.googleusercontent.com/d/${o}`:"",fallbackDirectUrl:o?`https://drive.google.com/uc?export=download&id=${o}`:"",src:o?`https://drive.google.com/file/d/${o}/preview`:t,originalUrl:o?`https://drive.google.com/file/d/${o}/view?usp=sharing`:t,title:"Google Drive Video Player"}}return/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(t)?{type:"video",src:t}:{type:"iframe",src:t,originalUrl:t,title:"Embedded Video Player"}}function v({config:r,poster:t,title:i}){const s=a.useRef(null),n=a.useRef(null),o=a.useRef(null),[p,u]=a.useState(!1),h=()=>{const l=n.current||s.current;if(l){if(l.requestFullscreen){l.requestFullscreen();return}if(l.webkitRequestFullscreen){l.webkitRequestFullscreen();return}if(l.mozRequestFullScreen){l.mozRequestFullScreen();return}}const c=r.originalUrl||r.src;c&&window.open(c,"_blank","noopener,noreferrer")};if(r.type==="none")return e.jsx("div",{style:{width:"100%",aspectRatio:"16 / 9",borderRadius:"16px",overflow:"hidden",background:"#000648",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",position:"relative"},children:t?e.jsx("img",{src:t,alt:i,style:{width:"100%",height:"100%",objectFit:"cover"}}):e.jsx("div",{style:{textAlign:"center",padding:"20px"},children:e.jsx("span",{style:{fontSize:"1rem",color:"#94a3b8"},children:"No video preview available"})})});const d=r.type==="drive"||r.isDrive,f=d&&(p||!r.directUrl);if(d&&f){const l=r.originalUrl||r.src||(r.fileId?`https://drive.google.com/file/d/${r.fileId}/view`:"https://drive.google.com");return e.jsxs("div",{className:"ezer-video-player-container",ref:o,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#000648",color:"#ffffff",textAlign:"center",padding:"24px",position:"relative"},children:[t&&e.jsx("img",{src:t,alt:i,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.3}}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"rgba(242, 183, 51, 0.25)",border:"2.5px solid #f2b733",display:"flex",alignItems:"center",justifyContent:"center",color:"#f2b733"},children:e.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M8 5v14l11-7z"})})}),e.jsx("h4",{style:{margin:0,fontSize:"1.1rem",fontWeight:900,color:"#ffffff"},children:i||"Google Drive Course Video"}),e.jsx("p",{style:{margin:0,fontSize:"0.85rem",color:"#cbd5e1",maxWidth:"460px",lineHeight:1.5},children:"This video is hosted on Google Drive. Click below to play the video directly."}),e.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",style:{marginTop:"4px",padding:"10px 22px",background:"#f2b733",color:"#000648",fontWeight:900,fontSize:"0.88rem",borderRadius:"8px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"8px",boxShadow:"0 4px 14px rgba(242, 183, 51, 0.4)"},children:"▶ Watch Video on Google Drive ↗"})]})]})}return e.jsxs("div",{style:{width:"100%",maxWidth:"1040px",margin:"0 auto"},children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"ezer-video-player-container",ref:o,children:[d?e.jsxs("video",{ref:n,poster:t,controls:!0,playsInline:!0,onError:()=>u(!0),style:{width:"100%",height:"100%",objectFit:"contain",background:"#000"},children:[e.jsx("source",{src:r.directUrl,type:"video/mp4"}),e.jsx("source",{src:r.fallbackDirectUrl,type:"video/mp4"}),"Your browser does not support HTML5 video playback."]},r.directUrl):r.type==="video"?e.jsx("video",{ref:n,src:r.src,poster:t,controls:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"contain",background:"#000"},children:"Your browser does not support HTML5 video playback."},r.src):e.jsx("iframe",{ref:s,src:r.src,title:i,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",referrerPolicy:"no-referrer-when-downgrade",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,border:"none",display:"block",pointerEvents:"auto"}},r.src),e.jsxs("button",{type:"button",className:"ezer-video-btn ezer-fullscreen-btn",onClick:h,title:"Open video in fullscreen","aria-label":"Open video fullscreen",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"})}),"Fullscreen"]})]})]})}function b({videoUrl:r="https://www.youtube.com/watch?v=aircAruvnKk",poster:t,title:i="Course Preview Video"}){const s=r||"https://www.youtube.com/watch?v=aircAruvnKk",n=m(s);return e.jsx(v,{config:n,poster:t,title:i},s)}export{b as V};
