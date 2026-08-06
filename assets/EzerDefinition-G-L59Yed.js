import{j as e}from"./vendor-motion-a9laELLt.js";import{r as g,L as h}from"./vendor-react-Dti5O4gB.js";import{a as b,s as u,w as y,e as j,u as x,l as v,c as k,d as T,U as w,S,h as f,x as C,j as z}from"./index-DB5VWlZ6.js";import{C as E}from"./CoursePurchaseModal-tLek6h0E.js";function I({course:o,onOpenDemoModal:i}){const[t,s]=g.useState(!1),l=o.tools?o.tools.slice(0,3):["AWS","Docker","Kubernetes"],d=o.languages||"Tamil, English & Hindi",c=o.subtitle||o.description||"Learn from active corporate engineers with real hands-on production labs & job referrals.",p=o.badgeTag||o.badge||"Live Cohort",r=o.hashLink||`#${(o.title||"course").replace(/[^a-zA-Z0-9]/g,"")}_course`,a=r.replace("#","");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:a,className:"ezer-uiverse-card card_box",style:{display:"flex",flexDirection:"column",height:"100%",minHeight:"440px",position:"relative"},children:[e.jsx("span",{className:"card-ribbon-tag","data-badge":p}),e.jsx("div",{style:{position:"relative",height:"175px",overflow:"hidden",background:"#ffffff"},children:e.jsx("img",{src:b(o.image),alt:o.title,style:{width:"100%",height:"100%",objectFit:o.fit||o.imageFit||"cover",objectPosition:o.position||o.imagePosition||"center center",opacity:1}})}),e.jsxs("div",{style:{padding:"20px 18px 18px",display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between",background:"#ffffff"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.08rem",fontWeight:800,color:"#000648",lineHeight:1.35,marginBottom:"8px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.8em"},children:o.title}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.84rem",color:"#000648",marginBottom:"10px",fontWeight:700},children:[e.jsx(u,{size:16,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{children:d})]}),e.jsx("p",{style:{fontSize:"0.82rem",color:"#475569",lineHeight:1.5,marginBottom:"14px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.5em"},children:c}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"16px"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.72rem",fontWeight:800,background:"rgba(0, 6, 72, 0.06)",color:"#000648",padding:"3px 10px",borderRadius:"50px"},children:[e.jsx(y,{size:13,style:{color:"#f2b733"}}),o.duration||"3 Months"]}),l.map(n=>e.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,background:"#f1f5f9",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:n},n))]})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"auto",paddingTop:"10px"},children:[e.jsx("button",{type:"button",onClick:()=>i(o.title),style:{flex:1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:800,textAlign:"center",background:"#ffffff",border:"1.5px solid #000648",color:"#000648",cursor:"pointer",transition:"background-color 0.2s ease, border-color 0.2s ease"},onMouseEnter:n=>{n.currentTarget.style.background="#f1f5f9"},onMouseLeave:n=>{n.currentTarget.style.background="#ffffff"},children:"Syllabus"}),e.jsxs(h,{to:`/courses/${o.slug}${r}`,style:{flex:1.1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:900,textAlign:"center",background:"#000648",color:"#f2b733",border:"1.5px solid #000648",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",boxShadow:"0 4px 12px rgba(0, 6, 72, 0.2)",transition:"background-color 0.2s ease, color 0.2s ease, transform 0.2s ease"},onMouseEnter:n=>{n.currentTarget.style.background="#f2b733",n.currentTarget.style.color="#000648",n.currentTarget.style.borderColor="#f2b733",n.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:n=>{n.currentTarget.style.background="#000648",n.currentTarget.style.color="#f2b733",n.currentTarget.style.borderColor="#000648",n.currentTarget.style.transform="translateY(0)"},children:["Know More ",e.jsx(j,{size:14})]})]})]})]}),e.jsx(E,{isOpen:t,onClose:()=>s(!1),course:o})]})}const m=["All Courses","Cloud & DevOps","Testing & QA","AI & Data","IT Infrastructure"];function B({onOpenDemoModal:o}){const{courses:i}=x(),[t,s]=g.useState(0),l=g.useRef(null),c=(()=>{const r=i||[];return t===0?r:t===1?r.filter(a=>a.slug?.includes("devops")||a.slug?.includes("cloud")):t===2?r.filter(a=>a.slug?.includes("testing")||a.slug?.includes("playwright")):t===3?r.filter(a=>a.slug?.includes("ai")||a.slug?.includes("ml")||a.slug?.includes("data")):t===4?r.filter(a=>a.slug?.includes("infrastructure")||a.slug?.includes("sysadmin")):r})(),p=r=>{l.current&&l.current.scrollBy({left:r==="left"?-300:300,behavior:"smooth"})};return e.jsx("section",{id:"courses",className:"section-alt",style:{padding:"56px 0",borderBottom:"1px solid #e2e8f0"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[e.jsxs("span",{className:"section-tag",children:[e.jsx(v,{size:15,style:{color:"#f2b733"}}),"LIVE Cohort Programs"]}),e.jsx("h2",{style:{fontSize:"clamp(1.35rem, 2.2vw, 1.7rem)",color:"#000648",marginBottom:"6px"},children:"Live Online IT Courses with Placement Support"}),e.jsx("p",{style:{color:"#475569",fontSize:"0.86rem",maxWidth:"560px",margin:"0 auto"},children:"Every course combines hands-on labs, real-world projects, and industry-standard tools — backed by up to 1 year of placement assistance."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",flexWrap:"wrap",gap:"16px"},children:[e.jsx("div",{className:"no-scrollbar",style:{display:"flex",gap:"8px",overflowX:"auto",padding:"4px 0"},children:m.map((r,a)=>e.jsx("button",{type:"button",onClick:()=>s(a),style:{padding:"7px 16px",borderRadius:"50px",fontSize:"0.78rem",fontWeight:t===a?800:600,whiteSpace:"nowrap",cursor:"pointer",border:t===a?"1.5px solid #000648":"1px solid #cbd5e1",background:t===a?"#000648":"#ffffff",color:t===a?"#ffffff":"#475569",boxShadow:t===a?"0 4px 12px rgba(0, 6, 72, 0.15)":"none",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},children:r},r))}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginLeft:"auto"},children:[e.jsx("button",{type:"button",onClick:()=>p("left"),"aria-label":"Scroll left",style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #cbd5e1",background:"#ffffff",color:"#000648",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},onMouseEnter:r=>{r.currentTarget.style.borderColor="#000648",r.currentTarget.style.background="#000648",r.currentTarget.style.color="#f2b733"},onMouseLeave:r=>{r.currentTarget.style.borderColor="#cbd5e1",r.currentTarget.style.background="#ffffff",r.currentTarget.style.color="#000648"},children:e.jsx(k,{size:20})}),e.jsx("button",{type:"button",onClick:()=>p("right"),"aria-label":"Scroll right",style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #cbd5e1",background:"#ffffff",color:"#000648",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},onMouseEnter:r=>{r.currentTarget.style.borderColor="#000648",r.currentTarget.style.background="#000648",r.currentTarget.style.color="#f2b733"},onMouseLeave:r=>{r.currentTarget.style.borderColor="#cbd5e1",r.currentTarget.style.background="#ffffff",r.currentTarget.style.color="#000648"},children:e.jsx(T,{size:20})})]})]}),c.length>0?e.jsx("div",{ref:l,className:"no-scrollbar",style:{display:"flex",gap:"20px",overflowX:"auto",scrollSnapType:"x mandatory",paddingBottom:"16px",scrollBehavior:"smooth"},children:c.map(r=>e.jsx("div",{style:{flex:"0 0 320px",scrollSnapAlign:"start"},children:e.jsx(I,{course:r,onOpenDemoModal:o})},r.id||r.slug))}):e.jsx(w,{type:S.NO_SEARCH_RESULTS,title:"No Courses Found in Selected Category",message:`No active programs match the category "${m[t]}". Click reset to view all available courses.`,onRetry:()=>s(0),actionLabel:"View All Courses"})]})})}function D(){const{executiveLeaders:o}=x(),i=o&&o.length>0?o:[{id:"exec-1",roleTag:"CEO",roleName:"Chief Executive Officer",name:"Dr. Subramanian R",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=700",rotationDeg:-12,bio:"Visionary Leader driving native language tech education, corporate placement partnerships, and pan-India growth."},{id:"exec-2",roleTag:"CFO",roleName:"Chief Financial Officer",name:"Meenakshi Sundaram",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=700",rotationDeg:4,bio:"Strategic Financial Lead overseeing student scholarship funds, affordable fee structures, and enterprise scalability."},{id:"exec-3",roleTag:"CTHM",roleName:"Chief Tech & Academic Officer",name:"Anand Kumar K",image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700",rotationDeg:16,bio:"Pioneer of AI-integrated lab curriculums, hands-on production capstones, and corporate readiness standards."}];return e.jsxs("section",{style:{position:"relative",background:"radial-gradient(circle at 50% 0%, #1e1b4b 0%, #000648 60%, #050b1c 100%)",color:"#ffffff",padding:"72px 20px",borderTop:"2px solid rgba(242, 183, 51, 0.3)",borderBottom:"2px solid rgba(242, 183, 51, 0.3)",overflow:"hidden"},children:[e.jsxs("div",{style:{pointerEvents:"none",position:"absolute",inset:0,overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"-100px",left:"10%",width:"350px",height:"350px",borderRadius:"50%",background:"rgba(242, 183, 51, 0.12)",filter:"blur(110px)"}}),e.jsx("div",{style:{position:"absolute",bottom:"-100px",right:"10%",width:"350px",height:"350px",borderRadius:"50%",background:"rgba(17, 93, 252, 0.15)",filter:"blur(110px)"}})]}),e.jsxs("div",{className:"container",style:{maxWidth:"1140px",margin:"0 auto",position:"relative",zIndex:10},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(242, 183, 51, 0.18)",color:"#f2b733",padding:"6px 20px",borderRadius:"50px",fontWeight:900,fontSize:"0.78rem",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"14px",border:"1.5px solid rgba(242, 183, 51, 0.4)",boxShadow:"0 0 20px rgba(242, 183, 51, 0.2)"},children:[e.jsx(f,{size:16})," EXECUTIVE LEADERSHIP BOARD"]}),e.jsx("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",fontWeight:900,color:"#ffffff",lineHeight:1.15,marginBottom:"12px",letterSpacing:"-0.02em"},children:"Guided by Corporate Visionaries & EdTech Pioneers"}),e.jsx("p",{style:{fontSize:"1.02rem",color:"rgba(255,255,255,0.82)",maxWidth:"720px",margin:"0 auto",lineHeight:1.65},children:"Our executive board brings decades of technology leadership, corporate partnerships, and native-language education models to empower every learner."})]}),e.jsxs("div",{style:{margin:"20px 0 48px"},children:[e.jsx("div",{className:"exec-glass-container",children:i.slice(0,3).map((t,s)=>{const l=t.rotationDeg!==void 0?t.rotationDeg:-12+s*14,d=`${t.roleTag||"EXEC"} • ${t.name||"Leadership"}`;return e.jsx("div",{className:"glass","data-text":d,style:{"--r":l},title:`${t.roleName||t.roleTag} — ${t.name}`,children:e.jsx("img",{src:t.image,alt:t.name||t.roleTag})},t.id||t.roleTag||t.name)})}),e.jsx("span",{style:{display:"block",textAlign:"center",fontSize:"0.78rem",color:"#f2b733",fontWeight:800,marginTop:"12px"},children:"★ Hover over cards to expand Executive Board"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px"},children:i.slice(0,3).map(t=>e.jsx("div",{style:{background:"rgba(17, 24, 39, 0.8)",backdropFilter:"blur(12px)",border:"1.5px solid rgba(242, 183, 51, 0.3)",borderRadius:"20px",padding:"24px",display:"flex",flexDirection:"column",justify:"space-between",boxShadow:"0 12px 32px rgba(0,0,0,0.3)",transition:"transform 0.3s ease, border-color 0.3s ease"},onMouseEnter:s=>{s.currentTarget.style.transform="translateY(-4px)",s.currentTarget.style.borderColor="#f2b733"},onMouseLeave:s=>{s.currentTarget.style.transform="translateY(0)",s.currentTarget.style.borderColor="rgba(242, 183, 51, 0.3)"},children:e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[e.jsx("span",{style:{background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.75rem",padding:"4px 14px",borderRadius:"50px",border:"1.5px solid #f2b733"},children:t.roleTag||"EXEC"}),e.jsxs("span",{style:{fontSize:"0.75rem",color:"#94a3b8",fontWeight:700,display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(C,{color:"#f2b733",size:16})," Board Director"]})]}),e.jsx("h3",{style:{fontSize:"1.3rem",fontWeight:900,color:"#ffffff",margin:"0 0 4px 0"},children:t.name}),e.jsx("div",{style:{fontSize:"0.84rem",fontWeight:800,color:"#38bdf8",marginBottom:"12px"},children:t.roleName}),e.jsx("p",{style:{fontSize:"0.88rem",color:"#cbd5e1",lineHeight:1.6,margin:0},children:t.bio||"Driving vision, academic quality, and placement metrics for EZER Learning Solutions."})]})},t.id||t.roleTag))})]}),e.jsx("style",{children:`
        .exec-glass-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 32px 0 20px;
        }

        .exec-glass-container .glass {
          position: relative;
          width: 180px;
          height: 220px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 25px rgba(0, 0, 0, 0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s ease, margin 0.5s ease, border-color 0.3s ease;
          border-radius: 14px;
          margin: 0 -45px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transform: rotate(calc(var(--r) * 1deg));
          overflow: hidden;
          cursor: pointer;
        }

        .exec-glass-container:hover .glass {
          transform: rotate(0deg);
          margin: 0 10px;
        }

        .exec-glass-container .glass img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .exec-glass-container .glass::before {
          content: attr(data-text);
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          min-height: 44px;
          background: rgba(0, 6, 72, 0.9);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          font-weight: 900;
          font-size: 0.74rem;
          text-align: center;
          padding: 4px 8px;
          z-index: 5;
          border-top: 1.5px solid rgba(242, 183, 51, 0.5);
        }

        @media (max-width: 768px) {
          .exec-glass-container .glass {
            width: 135px;
            height: 165px;
            margin: 0 -24px;
          }
        }
      `})]})}function A({leaders:o}){return e.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",top:"-20px",left:"5%",width:"90%",height:"105%",background:"linear-gradient(135deg, rgba(242, 183, 51, 0.22) 0%, rgba(0, 6, 72, 0.08) 100%)",clipPath:"polygon(15% 0%, 100% 10%, 85% 100%, 0% 85%)",borderRadius:"24px",zIndex:1}}),e.jsx("div",{style:{position:"absolute",top:"10px",right:"2%",width:"80%",height:"95%",border:"2.5px solid #f2b733",clipPath:"polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)",borderRadius:"24px",zIndex:1}}),e.jsx("div",{className:"glass-stack-container",style:{position:"relative",zIndex:2,padding:"24px 0"},children:o.map((i,t)=>{const s=i.rotationDeg!==void 0?i.rotationDeg:-12+t*14,l=`${i.roleTag||"EXEC"} • ${i.name||""}`;return e.jsx("div",{className:"glass","data-text":l,style:{"--r":s},title:`${i.roleName||i.roleTag} — ${i.name}`,children:e.jsx("img",{src:i.image,alt:i.name||i.roleTag})},i.id||i.roleTag||i.name)})}),e.jsx("span",{style:{position:"relative",zIndex:2,fontSize:"0.78rem",color:"#000648",fontWeight:800,marginTop:"8px",textAlign:"center"},children:"★ Hover cards to expand Executive Leaders (CEO, CFO, CTHM)"})]})}function N(){const{ezerDefinition:o,executiveLeaders:i}=x(),t=i&&i.length>=3?i.slice(0,3):[{id:"exec-1",roleTag:"CEO",roleName:"Chief Executive Officer",name:"Dr. Subramanian R",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=700",rotationDeg:-12},{id:"exec-2",roleTag:"CFO",roleName:"Chief Financial Officer",name:"Meenakshi Sundaram",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=700",rotationDeg:4},{id:"exec-3",roleTag:"CTHM",roleName:"Chief Tech & Academic Officer",name:"Anand Kumar K",image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700",rotationDeg:16}];return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"ezer-definition",style:{padding:"72px 0",background:"#ffffff",overflow:"hidden",position:"relative",borderBottom:"1px solid #e2e8f0"},children:[e.jsx("div",{className:"container",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"48px",alignItems:"center"},children:[e.jsx(A,{leaders:t}),e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"14px"},children:e.jsxs("span",{style:{background:"rgba(0, 6, 72, 0.08)",color:"#000648",fontSize:"0.74rem",fontWeight:800,padding:"5px 14px",borderRadius:"50px",textTransform:"uppercase",letterSpacing:"0.06em",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(f,{size:14,style:{color:"#f2b733"}}),o.tag]})}),e.jsx("h2",{style:{fontSize:"clamp(1.8rem, 3.2vw, 2.5rem)",fontWeight:900,color:"#000648",lineHeight:1.25,marginBottom:"18px"},children:o.headline}),e.jsx("p",{style:{fontSize:"0.96rem",color:"#334155",lineHeight:1.7,marginBottom:"26px"},children:o.description}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"32px"},children:o.highlights?.map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(z,{size:20,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:800,color:"#000648"},children:s})]},s))}),e.jsxs("div",{style:{background:"#000648",color:"#ffffff",padding:"18px 22px",borderRadius:"12px",borderLeft:"4px solid #f2b733",fontSize:"0.94rem",fontWeight:600,display:"flex",alignItems:"center",gap:"14px",boxShadow:"0 4px 16px rgba(0, 6, 72, 0.15)"},children:[e.jsx(f,{size:24,style:{color:"#f2b733",flexShrink:0}}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"#f2b733",fontWeight:900,fontSize:"0.98rem"},children:"Meaning of EZER: "}),e.jsx("span",{style:{lineHeight:1.5},children:'Ezer means "Helper, Strength, and Support" — acting as a dependable support system that helps students, aspirants, and professionals become job-ready and corporate-relevant.'})]})]})]})]})}),e.jsx("style",{children:`
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
        `})]}),e.jsx(D,{})]})}export{N as E,B as T};
