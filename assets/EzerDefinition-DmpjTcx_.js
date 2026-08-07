import{j as e}from"./vendor-motion-XtJfHB1Z.js";import{r as p,L as y}from"./vendor-react-Dti5O4gB.js";import{a as f,s as g,w as v,e as j,u as b,l as w,c as k,d as S,U as C,S as T,x as h,h as m,j as z}from"./index-BJjkBGiK.js";import{C as I}from"./CoursePurchaseModal-CgCGZ8Bz.js";function E({course:r,onOpenDemoModal:l}){const[o,d]=p.useState(!1),c=r.tools?r.tools.slice(0,3):["AWS","Docker","Kubernetes"],x=r.languages||"Tamil, English & Hindi",a=r.subtitle||r.description||"Learn from active corporate engineers with real hands-on production labs & job referrals.",s=r.badgeTag||r.badge||"Live Cohort",t=r.hashLink||`#${(r.title||"course").replace(/[^a-zA-Z0-9]/g,"")}_course`,i=t.replace("#","");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:i,className:"ezer-uiverse-card card_box",style:{display:"flex",flexDirection:"column",height:"100%",minHeight:"440px",position:"relative"},children:[e.jsx("span",{className:"card-ribbon-tag","data-badge":s}),e.jsx("div",{style:{position:"relative",height:"175px",overflow:"hidden",background:"#ffffff"},children:e.jsx("img",{src:f(r.image),alt:r.title,style:{width:"100%",height:"100%",objectFit:r.fit||r.imageFit||"cover",objectPosition:r.position||r.imagePosition||"center center",opacity:1}})}),e.jsxs("div",{style:{padding:"20px 18px 18px",display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between",background:"#ffffff"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.08rem",fontWeight:800,color:"#000648",lineHeight:1.35,marginBottom:"8px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.8em"},children:r.title}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.84rem",color:"#000648",marginBottom:"10px",fontWeight:700},children:[e.jsx(g,{size:16,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{children:x})]}),e.jsx("p",{style:{fontSize:"0.82rem",color:"#475569",lineHeight:1.5,marginBottom:"14px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.5em"},children:a}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"16px"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.72rem",fontWeight:800,background:"rgba(0, 6, 72, 0.06)",color:"#000648",padding:"3px 10px",borderRadius:"50px"},children:[e.jsx(v,{size:13,style:{color:"#f2b733"}}),r.duration||"3 Months"]}),c.map(n=>e.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,background:"#f1f5f9",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:n},n))]})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"auto",paddingTop:"10px"},children:[e.jsx("button",{type:"button",onClick:()=>l(r.title),style:{flex:1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:800,textAlign:"center",background:"#ffffff",border:"1.5px solid #000648",color:"#000648",cursor:"pointer",transition:"background-color 0.2s ease, border-color 0.2s ease"},onMouseEnter:n=>{n.currentTarget.style.background="#f1f5f9"},onMouseLeave:n=>{n.currentTarget.style.background="#ffffff"},children:"Syllabus"}),e.jsxs(y,{to:`/courses/${r.slug}${t}`,style:{flex:1.1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:900,textAlign:"center",background:"#000648",color:"#f2b733",border:"1.5px solid #000648",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",boxShadow:"0 4px 12px rgba(0, 6, 72, 0.2)",transition:"background-color 0.2s ease, color 0.2s ease, transform 0.2s ease"},onMouseEnter:n=>{n.currentTarget.style.background="#f2b733",n.currentTarget.style.color="#000648",n.currentTarget.style.borderColor="#f2b733",n.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:n=>{n.currentTarget.style.background="#000648",n.currentTarget.style.color="#f2b733",n.currentTarget.style.borderColor="#000648",n.currentTarget.style.transform="translateY(0)"},children:["Know More ",e.jsx(j,{size:14})]})]})]})]}),e.jsx(I,{isOpen:o,onClose:()=>d(!1),course:r})]})}const u=["All Courses","Cloud & DevOps","Testing & QA","AI & Data","IT Infrastructure"];function N({onOpenDemoModal:r}){const{courses:l}=b(),[o,d]=p.useState(0),c=p.useRef(null),a=(()=>{const t=l||[];return o===0?t:o===1?t.filter(i=>i.slug?.includes("devops")||i.slug?.includes("cloud")):o===2?t.filter(i=>i.slug?.includes("testing")||i.slug?.includes("playwright")):o===3?t.filter(i=>i.slug?.includes("ai")||i.slug?.includes("ml")||i.slug?.includes("data")):o===4?t.filter(i=>i.slug?.includes("infrastructure")||i.slug?.includes("sysadmin")):t})(),s=t=>{c.current&&c.current.scrollBy({left:t==="left"?-300:300,behavior:"smooth"})};return e.jsx("section",{id:"courses",className:"section-alt",style:{padding:"56px 0",borderBottom:"1px solid #e2e8f0"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[e.jsxs("span",{className:"section-tag",children:[e.jsx(w,{size:15,style:{color:"#f2b733"}}),"LIVE Cohort Programs"]}),e.jsx("h2",{style:{fontSize:"clamp(1.35rem, 2.2vw, 1.7rem)",color:"#000648",marginBottom:"6px"},children:"Live Online IT Courses with Placement Support"}),e.jsx("p",{style:{color:"#475569",fontSize:"0.86rem",maxWidth:"560px",margin:"0 auto"},children:"Every course combines hands-on labs, real-world projects, and industry-standard tools — backed by up to 1 year of placement assistance."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",flexWrap:"wrap",gap:"16px"},children:[e.jsx("div",{className:"no-scrollbar",style:{display:"flex",gap:"8px",overflowX:"auto",padding:"4px 0"},children:u.map((t,i)=>e.jsx("button",{type:"button",onClick:()=>d(i),style:{padding:"7px 16px",borderRadius:"50px",fontSize:"0.78rem",fontWeight:o===i?800:600,whiteSpace:"nowrap",cursor:"pointer",border:o===i?"1.5px solid #000648":"1px solid #cbd5e1",background:o===i?"#000648":"#ffffff",color:o===i?"#ffffff":"#475569",boxShadow:o===i?"0 4px 12px rgba(0, 6, 72, 0.15)":"none",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},children:t},t))}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginLeft:"auto"},children:[e.jsx("button",{type:"button",onClick:()=>s("left"),"aria-label":"Scroll left",style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #cbd5e1",background:"#ffffff",color:"#000648",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},onMouseEnter:t=>{t.currentTarget.style.borderColor="#000648",t.currentTarget.style.background="#000648",t.currentTarget.style.color="#f2b733"},onMouseLeave:t=>{t.currentTarget.style.borderColor="#cbd5e1",t.currentTarget.style.background="#ffffff",t.currentTarget.style.color="#000648"},children:e.jsx(k,{size:20})}),e.jsx("button",{type:"button",onClick:()=>s("right"),"aria-label":"Scroll right",style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #cbd5e1",background:"#ffffff",color:"#000648",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},onMouseEnter:t=>{t.currentTarget.style.borderColor="#000648",t.currentTarget.style.background="#000648",t.currentTarget.style.color="#f2b733"},onMouseLeave:t=>{t.currentTarget.style.borderColor="#cbd5e1",t.currentTarget.style.background="#ffffff",t.currentTarget.style.color="#000648"},children:e.jsx(S,{size:20})})]})]}),a.length>0?e.jsx("div",{ref:c,className:"no-scrollbar",style:{display:"flex",gap:"20px",overflowX:"auto",scrollSnapType:"x mandatory",paddingBottom:"16px",scrollBehavior:"smooth"},children:a.map(t=>e.jsx("div",{style:{flex:"0 0 320px",scrollSnapAlign:"start"},children:e.jsx(E,{course:t,onOpenDemoModal:r})},t.id||t.slug))}):e.jsx(C,{type:T.NO_SEARCH_RESULTS,title:"No Courses Found in Selected Category",message:`No active programs match the category "${u[o]}". Click reset to view all available courses.`,onRetry:()=>d(0),actionLabel:"View All Courses"})]})})}function R(){const{executiveLeaders:r}=b(),l=r&&r.length>0?r:[{id:"exec-1",roleTag:"CEO",roleName:"Chief Executive Officer",name:"Dr. Subramanian R",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=700",bio:"Visionary Leader driving native language tech education, corporate placement partnerships, and pan-India growth."},{id:"exec-2",roleTag:"CFO",roleName:"Chief Financial Officer",name:"Meenakshi Sundaram",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=700",bio:"Strategic Financial Lead overseeing student scholarship funds, affordable fee structures, and enterprise scalability."},{id:"exec-3",roleTag:"CMTO",roleName:"Chief Tech & Academic Officer",name:"Anand Kumar K",image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700",bio:"Pioneer of AI-integrated lab curriculums, hands-on production capstones, and corporate readiness standards."}],[o,d]=p.useState(0),[c,x]=p.useState(!1);return p.useEffect(()=>{if(c||!l.length)return;const a=setInterval(()=>{d(s=>(s+1)%l.length)},3200);return()=>clearInterval(a)},[c,l.length]),e.jsxs("section",{style:{position:"relative",background:"radial-gradient(circle at 50% 0%, #1e1b4b 0%, #000648 60%, #030712 100%)",color:"#ffffff",padding:"80px 20px",borderTop:"2px solid rgba(242, 183, 51, 0.3)",borderBottom:"2px solid rgba(242, 183, 51, 0.3)",overflow:"hidden"},children:[e.jsx("style",{children:`
        .exec-interactive-card {
          width: 100%;
          max-width: 350px;
          height: 420px;
          background: #ffffff;
          border-radius: 32px;
          padding: 3px;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 6, 72, 0.3);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid #000648;
          margin: 0 auto;
          cursor: pointer;
        }

        .exec-interactive-card .role-badge-top {
          position: absolute;
          right: 1.2rem;
          top: 1.2rem;
          background: #000648;
          border: 1.5px solid #f2b733;
          color: #f2b733;
          font-weight: 900;
          font-size: 0.72rem;
          padding: 5px 14px;
          border-radius: 50px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .exec-interactive-card .profile-pic {
          position: absolute;
          width: calc(100% - 6px);
          height: calc(100% - 6px);
          top: 3px;
          left: 3px;
          border-radius: 29px;
          z-index: 1;
          border: 0px solid #f2b733;
          overflow: hidden;
          transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
        }

        .exec-interactive-card .profile-pic img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          object-position: center top;
          transition: all 0.5s ease-in-out 0s;
        }

        .exec-interactive-card .bottom-drawer {
          position: absolute;
          bottom: 3px;
          left: 3px;
          right: 3px;
          background: linear-gradient(180deg, #000648 0%, #050e38 100%);
          top: 72%;
          border-radius: 29px;
          z-index: 2;
          border-top: 2px solid #f2b733;
          box-shadow: rgba(0, 6, 72, 0.4) 0px 5px 15px 0px inset;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
          padding: 20px 24px;
          color: #ffffff;
        }

        .exec-interactive-card .bottom-drawer .content {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          height: auto;
        }

        .exec-interactive-card .bottom-drawer .name {
          display: block;
          font-size: 1.35rem;
          color: #ffffff;
          font-weight: 900;
          line-height: 1.2;
        }

        .exec-interactive-card .bottom-drawer .role-title {
          display: block;
          font-size: 0.8rem;
          color: #f2b733;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 4px;
        }

        .exec-interactive-card .bottom-drawer .bio-text {
          display: block;
          font-size: 0.88rem;
          color: #cbd5e1;
          margin-top: 0.8rem;
          line-height: 1.55;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.4s ease 0.1s;
        }

        .exec-interactive-card .bottom-drawer .action-bar {
          margin-top: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(242, 183, 51, 0.3);
          padding-top: 12px;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.4s ease 0.2s;
        }

        /* Active / Auto-Cycled & Hover open state */
        .exec-interactive-card:hover,
        .exec-interactive-card.is-active {
          border-top-left-radius: 50px;
          border-color: #f2b733;
          box-shadow: 0 25px 50px rgba(242, 183, 51, 0.25);
        }

        .exec-interactive-card:hover .bottom-drawer,
        .exec-interactive-card.is-active .bottom-drawer {
          top: 24%;
          border-radius: 60px 29px 29px 29px;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.15s;
        }

        .exec-interactive-card:hover .bottom-drawer .bio-text,
        .exec-interactive-card.is-active .bottom-drawer .bio-text,
        .exec-interactive-card:hover .bottom-drawer .action-bar,
        .exec-interactive-card.is-active .bottom-drawer .action-bar {
          opacity: 1;
          transform: translateY(0);
        }

        .exec-interactive-card:hover .profile-pic,
        .exec-interactive-card.is-active .profile-pic {
          width: 90px;
          height: 90px;
          aspect-ratio: 1;
          top: 12px;
          left: 12px;
          border-radius: 50%;
          z-index: 3;
          border: 4px solid #f2b733;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
        }
      `}),e.jsxs("div",{style:{pointerEvents:"none",position:"absolute",inset:0,overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"-100px",left:"15%",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(242, 183, 51, 0.14)",filter:"blur(120px)"}}),e.jsx("div",{style:{position:"absolute",bottom:"-100px",right:"15%",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(17, 93, 252, 0.18)",filter:"blur(120px)"}})]}),e.jsxs("div",{className:"container",style:{maxWidth:"1240px",margin:"0 auto",position:"relative",zIndex:10},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"56px"},children:[e.jsx("span",{style:{display:"inline-flex",alignItems:"center",background:"rgba(242, 183, 51, 0.15)",color:"#f2b733",padding:"8px 24px",borderRadius:"50px",fontWeight:900,fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:"16px",border:"1.5px solid #f2b733",boxShadow:"0 0 24px rgba(242, 183, 51, 0.25)"},children:"EXECUTIVE LEADERSHIP BOARD"}),e.jsx("h2",{style:{fontSize:"clamp(2.1rem, 4vw, 3.4rem)",fontWeight:900,color:"#ffffff",lineHeight:1.15,marginBottom:"14px",letterSpacing:"-0.02em"},children:"Guided by Corporate Visionaries & EdTech Pioneers"}),e.jsx("p",{style:{fontSize:"1.05rem",color:"rgba(255,255,255,0.85)",maxWidth:"740px",margin:"0 auto",lineHeight:1.65},children:"Our executive board brings decades of technology leadership, corporate partnerships, and native-language education models to empower every learner."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(320px, 100%), 1fr))",gap:"32px",width:"100%"},children:l.map((a,s)=>{const t=s===o;return e.jsxs("div",{className:`exec-interactive-card ${t?"is-active":""}`,onMouseEnter:()=>{x(!0),d(s)},onMouseLeave:()=>{x(!1)},onClick:()=>{d(s)},children:[e.jsxs("span",{className:"role-badge-top",children:[e.jsx(h,{size:14})," ",a.roleTag||"DIRECTOR"]}),e.jsx("div",{className:"profile-pic",children:e.jsx("img",{src:f(a.image),alt:a.name})}),e.jsx("div",{className:"bottom-drawer",children:e.jsxs("div",{className:"content",children:[e.jsx("span",{className:"name",children:a.name}),e.jsx("span",{className:"role-title",children:a.roleName||a.roleTag}),e.jsx("p",{className:"bio-text",children:a.bio}),e.jsx("div",{className:"action-bar",children:e.jsxs("span",{style:{fontSize:"0.75rem",color:"#f2b733",fontWeight:900,display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(h,{size:14})," EZER Corporate Directorate"]})})]})})]},a.id||a.roleTag||s)})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",marginTop:"40px"},children:l.map((a,s)=>e.jsx("button",{type:"button","aria-label":`Go to slide ${s+1}`,onClick:()=>d(s),style:{width:s===o?"32px":"10px",height:"10px",borderRadius:"10px",background:s===o?"#f2b733":"rgba(255,255,255,0.3)",border:"none",cursor:"pointer",transition:"all 0.35s ease"}},s))})]})]})}function B(){const{ezerDefinition:r,executiveLeaders:l}=b();return l&&l.length>=3&&l.slice(0,3),e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"ezer-definition",style:{padding:"72px 0",background:"#ffffff",overflow:"hidden",position:"relative",borderBottom:"1px solid #e2e8f0"},children:[e.jsx("div",{className:"container",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{position:"relative",display:"flex",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",top:"-20px",left:"5%",width:"90%",height:"105%",background:"linear-gradient(135deg, rgba(242, 183, 51, 0.25) 0%, rgba(0, 6, 72, 0.1) 100%)",clipPath:"polygon(15% 0%, 100% 10%, 85% 100%, 0% 85%)",borderRadius:"24px",zIndex:1}}),e.jsx("div",{style:{position:"relative",zIndex:2,width:"100%",maxWidth:"460px",borderRadius:"20px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0, 6, 72, 0.18)",border:"2px solid #000648",background:"#ffffff"},children:e.jsx("img",{src:f(r.image),alt:r.headline,style:{width:"100%",height:"auto",minHeight:"340px",objectFit:r.imageFit||"cover",objectPosition:r.imagePosition||"center center",display:"block"}})}),e.jsxs("div",{title:"Tamil Language Cohort Support",style:{position:"absolute",top:"4%",left:"-2%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(g,{size:16})," Tamil (தமிழ்)"]}),e.jsxs("div",{title:"English Language Cohort Support",style:{position:"absolute",top:"42%",right:"-4%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(g,{size:16})," English"]}),e.jsxs("div",{title:"Hindi Language Cohort Support",style:{position:"absolute",bottom:"6%",left:"-2%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(g,{size:16})," Hindi (हिन्दी)"]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"14px"},children:e.jsxs("span",{style:{background:"rgba(0, 6, 72, 0.08)",color:"#000648",fontSize:"0.74rem",fontWeight:800,padding:"5px 14px",borderRadius:"50px",textTransform:"uppercase",letterSpacing:"0.06em",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(m,{size:14,style:{color:"#f2b733"}}),r.tag]})}),e.jsx("h2",{style:{fontSize:"clamp(1.8rem, 3.2vw, 2.5rem)",fontWeight:900,color:"#000648",lineHeight:1.25,marginBottom:"18px"},children:r.headline}),e.jsx("p",{style:{fontSize:"0.96rem",color:"#334155",lineHeight:1.7,marginBottom:"26px"},children:r.description}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"32px"},children:r.highlights?.map(o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(z,{size:20,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:800,color:"#000648"},children:o})]},o))}),e.jsxs("div",{style:{background:"#000648",color:"#ffffff",padding:"18px 22px",borderRadius:"12px",borderLeft:"4px solid #f2b733",fontSize:"0.94rem",fontWeight:600,display:"flex",alignItems:"center",gap:"14px",boxShadow:"0 4px 16px rgba(0, 6, 72, 0.15)"},children:[e.jsx(m,{size:24,style:{color:"#f2b733",flexShrink:0}}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"#f2b733",fontWeight:900,fontSize:"0.98rem"},children:"Meaning of EZER: "}),e.jsx("span",{style:{lineHeight:1.5},children:'Ezer means "Helper, Strength, and Support" — acting as a dependable support system that helps students, aspirants, and professionals become job-ready and corporate-relevant.'})]})]})]})]})}),e.jsx("style",{children:`
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
        `})]}),e.jsx(R,{})]})}export{B as E,N as T};
