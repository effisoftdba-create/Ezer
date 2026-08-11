import{j as i}from"./vendor-TTylehWJ.js";function d(o){if(typeof o!="string")return{type:"none",src:""};const r=o.trim(),t=r.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);if(t&&t[1])return{type:"iframe",src:`https://www.youtube.com/embed/${t[1]}?autoplay=0&rel=0&modestbranding=1`,title:"YouTube Video Player"};const a=r.match(/(?:file\/d\/|d\/|id=|open\?id=)([\w-]{20,50})/i);if((r.includes("drive.google.com")||r.includes("docs.google.com"))&&a&&a[1]){const e=a[1];return{type:"iframe",isDrive:!0,fileId:e,src:`https://drive.google.com/file/d/${e}/preview`,originalUrl:`https://drive.google.com/file/d/${e}/view?usp=sharing`,title:"Google Drive Video Player"}}return/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(r)?{type:"video",src:r}:{type:"iframe",src:r,title:"Embedded Video Player"}}function s({videoUrl:o="https://www.youtube.com/watch?v=aircAruvnKk",poster:r,title:t="Course Preview Video"}){const e=d(o||"https://www.youtube.com/watch?v=aircAruvnKk");return e.type==="none"?i.jsx("div",{style:{width:"100%",aspectRatio:"16 / 9",borderRadius:"16px",overflow:"hidden",background:"#000648",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",position:"relative"},children:r?i.jsx("img",{src:r,alt:t,style:{width:"100%",height:"100%",objectFit:"cover"}}):i.jsx("div",{style:{textAlign:"center",padding:"20px"},children:i.jsx("span",{style:{fontSize:"1rem",color:"#94a3b8"},children:"No video preview available"})})}):i.jsxs("div",{style:{width:"100%",maxWidth:"1040px",margin:"0 auto"},children:[i.jsx("style",{children:`
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
        .ezer-video-player-container iframe {
          width: 100% !important;
          height: 100% !important;
          border: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
          transform: none !important;
        }
        .ezer-drive-embed-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          background: #000000;
        }
        .ezer-drive-embed-wrapper iframe {
          width: 100% !important;
          height: 100% !important;
          border: 0 !important;
          display: block !important;
          transform: scale(1.20) translateY(-13%) !important;
          transform-origin: center top !important;
        }
        @media (max-width: 768px) {
          .ezer-video-player-container {
            border-radius: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .ezer-video-player-container {
            border-radius: 10px !important;
          }
        }
      `}),i.jsx("div",{className:"ezer-video-player-container",children:e.type==="video"?i.jsx("video",{src:e.src,poster:r,controls:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"contain"},children:"Your browser does not support HTML5 video playback."},e.src):i.jsxs("div",{className:e.isDrive?"ezer-drive-embed-wrapper":"",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[i.jsx("iframe",{src:e.src,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",style:{width:"100%",height:"100%",border:"none",display:"block"}},e.src),e.isDrive&&i.jsx("div",{title:"EZER Video Showcase",style:{position:"absolute",top:0,right:0,width:"64px",height:"54px",zIndex:8,background:"transparent",cursor:"default"}})]})})]})}export{s as V};
