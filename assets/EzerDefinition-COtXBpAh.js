import{j as e,a as u}from"./vendor-motion-CmDAM71-.js";import{r as x,L as y}from"./vendor-react-Du1JvB3A.js";import{w as f,a as p,s as g,x as v,e as j,u as h,l as z,c as w,d as k,U as S,S as C,h as T,j as N}from"./index-D2V3spoO.js";import{C as E}from"./CoursePurchaseModal-Dg0NrjHQ.js";function I({course:t,onOpenDemoModal:n}){const[r,s]=x.useState(!1),l=t.tools?t.tools.slice(0,3):["AWS","Docker","Kubernetes"],m=t.languages||"Tamil, English & Hindi",c=t.subtitle||t.description||"Learn from active corporate engineers with real hands-on production labs & job referrals.",d=t.badgeTag||t.badge||"Live Cohort",i=t.hashLink||`#${(t.title||"course").replace(/[^a-zA-Z0-9]/g,"")}_course`,o=i.replace("#","");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:o,className:"ezer-uiverse-card card_box",style:{display:"flex",flexDirection:"column",height:"100%",minHeight:"440px",position:"relative"},children:[e.jsx("span",{className:"card-ribbon-tag","data-badge":d}),e.jsx("div",{style:{position:"relative",height:"175px",overflow:"hidden",background:"#ffffff"},children:e.jsx("img",{src:p(t.image),alt:t.title,onError:f,style:{width:"100%",height:"100%",objectFit:t.fit||t.imageFit||"cover",objectPosition:t.position||t.imagePosition||"center center",opacity:1}})}),e.jsxs("div",{style:{padding:"20px 18px 18px",display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between",background:"#ffffff"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.08rem",fontWeight:800,color:"#000648",lineHeight:1.35,marginBottom:"8px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.8em"},children:t.title}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.84rem",color:"#000648",marginBottom:"10px",fontWeight:700},children:[e.jsx(g,{size:16,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{children:m})]}),e.jsx("p",{style:{fontSize:"0.82rem",color:"#475569",lineHeight:1.5,marginBottom:"14px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.5em"},children:c}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"16px"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.72rem",fontWeight:800,background:"rgba(0, 6, 72, 0.06)",color:"#000648",padding:"3px 10px",borderRadius:"50px"},children:[e.jsx(v,{size:13,style:{color:"#f2b733"}}),t.duration||"3 Months"]}),l.map(a=>e.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,background:"#f1f5f9",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:a},a))]})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"auto",paddingTop:"10px"},children:[e.jsx("button",{type:"button",onClick:()=>n(t.title),style:{flex:1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:800,textAlign:"center",background:"#ffffff",border:"1.5px solid #000648",color:"#000648",cursor:"pointer",transition:"background-color 0.2s ease, border-color 0.2s ease"},onMouseEnter:a=>{a.currentTarget.style.background="#f1f5f9"},onMouseLeave:a=>{a.currentTarget.style.background="#ffffff"},children:"Syllabus"}),e.jsxs(y,{to:`/courses/${t.slug}${i}`,style:{flex:1.1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:900,textAlign:"center",background:"#000648",color:"#f2b733",border:"1.5px solid #000648",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",boxShadow:"0 4px 12px rgba(0, 6, 72, 0.2)",transition:"background-color 0.2s ease, color 0.2s ease, transform 0.2s ease"},onMouseEnter:a=>{a.currentTarget.style.background="#f2b733",a.currentTarget.style.color="#000648",a.currentTarget.style.borderColor="#f2b733",a.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:a=>{a.currentTarget.style.background="#000648",a.currentTarget.style.color="#f2b733",a.currentTarget.style.borderColor="#000648",a.currentTarget.style.transform="translateY(0)"},children:["Know More ",e.jsx(j,{size:14})]})]})]})]}),e.jsx(E,{isOpen:r,onClose:()=>s(!1),course:t})]})}const b=["All Courses","Cloud & DevOps","Testing & QA","AI & Data","IT Infrastructure"];function B({onOpenDemoModal:t}){const{courses:n}=h(),[r,s]=x.useState(0),l=x.useRef(null),c=(()=>{const i=n||[];return r===0?i:r===1?i.filter(o=>o.slug?.includes("devops")||o.slug?.includes("cloud")):r===2?i.filter(o=>o.slug?.includes("testing")||o.slug?.includes("playwright")):r===3?i.filter(o=>o.slug?.includes("ai")||o.slug?.includes("ml")||o.slug?.includes("data")):r===4?i.filter(o=>o.slug?.includes("infrastructure")||o.slug?.includes("sysadmin")):i})(),d=i=>{l.current&&l.current.scrollBy({left:i==="left"?-300:300,behavior:"smooth"})};return e.jsx("section",{id:"courses",className:"section-alt",style:{padding:"56px 0",borderBottom:"1px solid #e2e8f0"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[e.jsxs("span",{className:"section-tag",children:[e.jsx(z,{size:15,style:{color:"#f2b733"}}),"LIVE Cohort Programs"]}),e.jsx("h2",{style:{fontSize:"clamp(1.35rem, 2.2vw, 1.7rem)",color:"#000648",marginBottom:"6px"},children:"Live Online IT Courses with Placement Support"}),e.jsx("p",{style:{color:"#475569",fontSize:"0.86rem",maxWidth:"560px",margin:"0 auto"},children:"Every course combines hands-on labs, real-world projects, and industry-standard tools — backed by up to 1 year of placement assistance."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",flexWrap:"wrap",gap:"16px"},children:[e.jsx("div",{className:"no-scrollbar",style:{display:"flex",gap:"8px",overflowX:"auto",padding:"4px 0"},children:b.map((i,o)=>e.jsx("button",{type:"button",onClick:()=>s(o),style:{padding:"7px 16px",borderRadius:"50px",fontSize:"0.78rem",fontWeight:r===o?800:600,whiteSpace:"nowrap",cursor:"pointer",border:r===o?"1.5px solid #000648":"1px solid #cbd5e1",background:r===o?"#000648":"#ffffff",color:r===o?"#ffffff":"#475569",boxShadow:r===o?"0 4px 12px rgba(0, 6, 72, 0.15)":"none",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},children:i},i))}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginLeft:"auto"},children:[e.jsx("button",{type:"button",onClick:()=>d("left"),"aria-label":"Scroll left",style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #cbd5e1",background:"#ffffff",color:"#000648",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},onMouseEnter:i=>{i.currentTarget.style.borderColor="#000648",i.currentTarget.style.background="#000648",i.currentTarget.style.color="#f2b733"},onMouseLeave:i=>{i.currentTarget.style.borderColor="#cbd5e1",i.currentTarget.style.background="#ffffff",i.currentTarget.style.color="#000648"},children:e.jsx(w,{size:20})}),e.jsx("button",{type:"button",onClick:()=>d("right"),"aria-label":"Scroll right",style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #cbd5e1",background:"#ffffff",color:"#000648",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},onMouseEnter:i=>{i.currentTarget.style.borderColor="#000648",i.currentTarget.style.background="#000648",i.currentTarget.style.color="#f2b733"},onMouseLeave:i=>{i.currentTarget.style.borderColor="#cbd5e1",i.currentTarget.style.background="#ffffff",i.currentTarget.style.color="#000648"},children:e.jsx(k,{size:20})})]})]}),c.length>0?e.jsx("div",{ref:l,className:"no-scrollbar",style:{display:"flex",gap:"20px",overflowX:"auto",scrollSnapType:"x mandatory",paddingBottom:"16px",scrollBehavior:"smooth"},children:c.map(i=>e.jsx("div",{style:{flex:"0 0 320px",scrollSnapAlign:"start"},children:e.jsx(I,{course:i,onOpenDemoModal:t})},i.id||i.slug))}):e.jsx(S,{type:C.NO_SEARCH_RESULTS,title:"No Courses Found in Selected Category",message:`No active programs match the category "${b[r]}". Click reset to view all available courses.`,onRetry:()=>s(0),actionLabel:"View All Courses"})]})})}function A(){const{executiveLeaders:t}=h(),n=t&&t.length>0?t:[{id:"exec-1",roleTag:"CEO",roleName:"Chief Executive Officer",name:"Dr. Subramanian R",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=700&h=700",tagline:"From problem to solution.",headline:"A creative and strategic transformation partner for bold businesses.",bio:"Visionary Leader driving native language tech education, corporate placement partnerships, and pan-India EdTech growth."},{id:"exec-2",roleTag:"CFO",roleName:"Chief Financial Officer",name:"Meenakshi Sundaram",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700&h=700",tagline:"Financial integrity & student affordability.",headline:"Pioneering accessible scholarship funds for high-growth tech careers.",bio:"Strategic Financial Lead overseeing student scholarship funds and affordable learning models."},{id:"exec-3",roleTag:"CMTO",roleName:"Chief Marketing Technology Officer",name:"Anand Kumar K",image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=700&h=700",tagline:"Curriculum innovation & hands-on labs.",headline:"Architecting AI-integrated practical capstones for production readiness.",bio:"Pioneer of AI-integrated lab curriculums and corporate technical readiness standards."}];return e.jsxs("section",{className:"exec-section-compact",style:{position:"relative",background:"linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)",color:"#000648",padding:"36px 20px",borderTop:"3px solid #f2b733",borderBottom:"3px solid #f2b733",overflow:"hidden"},children:[e.jsx("style",{children:`
        @media (max-width: 768px) {
          .exec-section-compact {
            padding: 20px 12px !important;
          }
          .zigzag-exec-row {
            margin-bottom: 20px !important;
            padding: 20px 14px !important;
          }
        }

        /* Golden Ambient Background Accents */
        .exec-bg-glow-1 {
          position: absolute;
          top: 10%;
          left: 5%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(242,183,51,0.18) 0%, rgba(248,155,41,0) 70%);
          filter: blur(50px);
          pointer-events: none;
        }

        .exec-bg-glow-2 {
          position: absolute;
          bottom: 10%;
          right: 5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(217,119,6,0.18) 0%, rgba(0,6,72,0) 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        /* Zig-Zag Card Grid Layout */
        .zigzag-exec-row {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 36px;
          align-items: center;
          background: #ffffff;
          border-radius: 24px;
          padding: 32px;
          margin-bottom: 24px;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 15px 40px rgba(0, 6, 72, 0.07);
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .zigzag-exec-row.reverse {
          grid-template-columns: 1fr 340px;
        }

        .zigzag-exec-row:hover {
          transform: translateY(-4px);
          border-color: #f2b733;
          box-shadow: 0 25px 50px rgba(0, 6, 72, 0.12);
        }

        /* Glowing Image Card Container Style */
        .exec-card-container {
          width: 100%;
          maxWidth: 340px;
          height: 360px;
          position: relative;
          border-radius: 20px;
          margin: 0 auto;
        }

        .exec-card-container::before {
          content: "";
          z-index: 1;
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, #f2b733 0%, #f89b29 50%, #d97706 100%);
          transform: translate3d(0, 0, 0) scale(0.96);
          filter: blur(22px);
          border-radius: 20px;
          opacity: 0.85;
          transition: opacity 0.5s ease, filter 0.5s ease;
        }

        .exec-card-container:hover::before {
          opacity: 1;
          filter: blur(28px);
        }

        .exec-card {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          border: 2px solid #f2b733;
          background: #000648;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
        }

        .exec-card .img-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          overflow: hidden;
          transition: scale 0.6s, rotate 0.6s, filter 1s;
        }

        .exec-card .img-content img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .exec-card:hover .img-content img {
          scale: 1.25;
          rotate: 4deg;
          filter: blur(4px);
        }

        .exec-card .card-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 10px;
          color: #ffffff;
          padding: 24px;
          background: rgba(0, 6, 72, 0.88);
          backdrop-filter: blur(8px);
          border-radius: 20px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(40px);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .exec-card .card-hover-overlay .heading {
          font-size: 1.4rem;
          font-weight: 900;
          color: #f2b733;
        }

        .exec-card .card-hover-overlay .sub-heading {
          font-size: 0.82rem;
          font-weight: 800;
          color: #60a5fa;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .exec-card:hover .card-hover-overlay {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* Editorial Content Box */
        .zigzag-content-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .zigzag-role-badge {
          display: inline-block;
          align-self: flex-start;
          background: #000648;
          color: #f2b733;
          border: 1.5px solid #000648;
          padding: 4px 16px;
          borderRadius: 50px;
          font-weight: 900;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 14px;
        }

        .zigzag-tagline {
          font-size: 1.05rem;
          color: #d97706;
          font-weight: 700;
          font-style: italic;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .zigzag-headline {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.8rem, 3.2vw, 2.5rem);
          font-weight: 400;
          color: #000648;
          line-height: 1.22;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }

        .zigzag-officer-name {
          font-size: 1.2rem;
          font-weight: 900;
          color: #000648;
          margin-bottom: 4px;
        }

        .zigzag-officer-role {
          font-size: 0.84rem;
          font-weight: 800;
          color: #115DFC;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 14px;
        }

        .zigzag-bio {
          font-size: 0.96rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
          max-width: 660px;
        }

        @media (max-width: 900px) {
          .zigzag-exec-row, .zigzag-exec-row.reverse {
            grid-template-columns: 1fr;
            padding: 28px 20px;
            gap: 28px;
          }
          .zigzag-exec-row.reverse .exec-card-container {
            order: -1;
          }
        }
      `}),e.jsx("div",{className:"exec-bg-glow-1"}),e.jsx("div",{className:"exec-bg-glow-2"}),e.jsxs("div",{className:"container",style:{maxWidth:"1240px",margin:"0 auto",position:"relative",zIndex:3},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"56px"},children:[e.jsx("span",{style:{display:"inline-block",background:"#f2b733",color:"#000648",padding:"6px 24px",borderRadius:"50px",fontWeight:900,fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:"14px",boxShadow:"0 4px 20px rgba(242,183,51,0.3)"},children:"EXECUTIVE LEADERSHIP BOARD"}),e.jsx("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",fontWeight:900,color:"#000648",lineHeight:1.15,marginBottom:"12px",letterSpacing:"-0.02em"},children:"Guided by Corporate Visionaries & EdTech Pioneers"}),e.jsx("p",{style:{fontSize:"1.05rem",color:"#475569",maxWidth:"740px",margin:"0 auto",lineHeight:1.6},children:"Our executive board brings decades of technology leadership, corporate partnerships, and native-language education models to empower every learner."})]}),e.jsx("div",{children:n.map((r,s)=>{const l=s%2===1;return e.jsx(u.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:s*.12},className:`zigzag-exec-row ${l?"reverse":""}`,children:l?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"zigzag-content-box",children:[e.jsxs("span",{className:"zigzag-role-badge",children:[r.roleTag," • ",r.roleName]}),r.tagline&&e.jsx("span",{className:"zigzag-tagline",children:r.tagline}),e.jsx("h3",{className:"zigzag-headline",children:r.headline||"Pioneering accessible scholarship funds for high-growth tech careers."}),e.jsx("div",{className:"zigzag-officer-name",children:r.name}),e.jsx("div",{className:"zigzag-officer-role",children:r.roleName}),e.jsx("p",{className:"zigzag-bio",children:r.bio})]}),e.jsx("div",{className:"exec-card-container",children:e.jsxs("div",{className:"exec-card",children:[e.jsx("div",{className:"img-content",children:e.jsx("img",{src:p(r.image),alt:r.name,onError:f})}),e.jsxs("div",{className:"card-hover-overlay",children:[e.jsx("div",{className:"heading",children:r.name}),e.jsx("div",{className:"sub-heading",children:r.roleName||r.roleTag}),e.jsx("p",{style:{fontSize:"0.8rem",color:"#e2e8f0",margin:"6px 0 0 0",lineHeight:1.4},children:r.bio})]})]})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"exec-card-container",children:e.jsxs("div",{className:"exec-card",children:[e.jsx("div",{className:"img-content",children:e.jsx("img",{src:p(r.image),alt:r.name,onError:f})}),e.jsxs("div",{className:"card-hover-overlay",children:[e.jsx("div",{className:"heading",children:r.name}),e.jsx("div",{className:"sub-heading",children:r.roleName||r.roleTag}),e.jsx("p",{style:{fontSize:"0.8rem",color:"#e2e8f0",margin:"6px 0 0 0",lineHeight:1.4},children:r.bio})]})]})}),e.jsxs("div",{className:"zigzag-content-box",children:[e.jsxs("span",{className:"zigzag-role-badge",children:[r.roleTag," • ",r.roleName]}),r.tagline&&e.jsx("span",{className:"zigzag-tagline",children:r.tagline}),e.jsx("h3",{className:"zigzag-headline",children:r.headline||"A creative and strategic transformation partner for bold businesses."}),e.jsx("div",{className:"zigzag-officer-name",children:r.name}),e.jsx("div",{className:"zigzag-officer-role",children:r.roleName}),e.jsx("p",{className:"zigzag-bio",children:r.bio})]})]})},r.id||s)})})]})]})}function O(){const{ezerDefinition:t,executiveLeaders:n}=h();return n&&n.length>=3&&n.slice(0,3),e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"ezer-definition",style:{padding:"36px 0",background:"#ffffff",overflow:"hidden",position:"relative",borderBottom:"1px solid #e2e8f0"},children:[e.jsx("div",{className:"container",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{position:"relative",display:"flex",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",top:"-20px",left:"5%",width:"90%",height:"105%",background:"linear-gradient(135deg, rgba(242, 183, 51, 0.25) 0%, rgba(0, 6, 72, 0.1) 100%)",clipPath:"polygon(15% 0%, 100% 10%, 85% 100%, 0% 85%)",borderRadius:"24px",zIndex:1}}),e.jsx("div",{style:{position:"relative",zIndex:2,width:"100%",maxWidth:"460px",borderRadius:"20px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0, 6, 72, 0.18)",border:"2px solid #000648",background:"#ffffff"},children:e.jsx("img",{src:p(t.image),alt:t.headline,style:{width:"100%",height:"auto",minHeight:"340px",objectFit:t.imageFit||"cover",objectPosition:t.imagePosition||"center center",display:"block"}})}),e.jsxs("div",{title:"Tamil Language Cohort Support",style:{position:"absolute",top:"4%",left:"-2%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(g,{size:16})," Tamil (தமிழ்)"]}),e.jsxs("div",{title:"English Language Cohort Support",style:{position:"absolute",top:"42%",right:"-4%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(g,{size:16})," English"]}),e.jsxs("div",{title:"Hindi Language Cohort Support",style:{position:"absolute",bottom:"6%",left:"-2%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(g,{size:16})," Hindi (हिन्दी)"]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"14px"},children:e.jsxs("span",{style:{background:"rgba(0, 6, 72, 0.08)",color:"#000648",fontSize:"0.74rem",fontWeight:800,padding:"5px 14px",borderRadius:"50px",textTransform:"uppercase",letterSpacing:"0.06em",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(T,{size:14,style:{color:"#f2b733"}}),t.tag]})}),e.jsx("h2",{style:{fontSize:"clamp(1.8rem, 3.2vw, 2.5rem)",fontWeight:900,color:"#000648",lineHeight:1.25,marginBottom:"18px"},children:t.headline}),e.jsx("p",{style:{fontSize:"0.96rem",color:"#334155",lineHeight:1.7,marginBottom:"26px"},children:t.description}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"32px"},children:t.highlights?.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(N,{size:20,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:800,color:"#000648"},children:r})]},r))}),e.jsx("div",{style:{background:"#000648",color:"#ffffff",padding:"18px 22px",borderRadius:"12px",borderLeft:"4px solid #f2b733",fontSize:"0.94rem",fontWeight:600,boxShadow:"0 4px 16px rgba(0, 6, 72, 0.15)"},children:e.jsxs("div",{children:[e.jsx("span",{style:{color:"#f2b733",fontWeight:900,fontSize:"0.98rem"},children:"Meaning of EZER: "}),e.jsx("span",{style:{lineHeight:1.5},children:'Ezer means "Helper, Strength, and Support" — acting as a dependable support system that helps students, aspirants, and professionals become job-ready and corporate-relevant.'})]})})]})]})}),e.jsx("style",{children:`
          .glass-stack-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .glass-stack-container .glass {
            position: relative;
            width: 180px;
            height: 210px;
            background: linear-gradient(135deg, rgba(0, 6, 72, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%);
            border: 1px solid rgba(242, 183, 51, 0.4);
            box-shadow: 0 25px 25px rgba(0, 0, 0, 0.35);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s ease;
            border-radius: 12px;
            margin: 0 -45px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transform: rotate(calc(var(--r) * 1deg));
            overflow: hidden;
            cursor: pointer;
          }

          .glass-stack-container:hover .glass {
            transform: rotate(0deg);
            margin: 0 10px;
          }

          .glass-stack-container .glass img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .glass-stack-container .glass::before {
            content: attr(data-text);
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 40px;
            background: rgba(0, 6, 72, 0.92);
            border-top: 1.5px solid #f2b733;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            font-weight: 800;
            font-size: 0.72rem;
            text-align: center;
            padding: 2px 6px;
            z-index: 5;
          }

          @media (max-width: 768px) {
            .glass-stack-container .glass {
              width: 135px;
              height: 165px;
              margin: 0 -25px;
            }
          }
        `})]}),e.jsx(A,{})]})}export{O as E,B as T};
