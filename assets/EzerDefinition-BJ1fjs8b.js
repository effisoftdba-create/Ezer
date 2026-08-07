import{j as e}from"./vendor-motion-XtJfHB1Z.js";import{r as x,L as u}from"./vendor-react-Dti5O4gB.js";import{a as m,s as p,w as y,e as j,u as f,l as v,c as w,d as k,U as S,S as C,h as g,x as T,j as z}from"./index-5tkBvcJ4.js";import{C as E}from"./CoursePurchaseModal-I6V1XI7h.js";function I({course:t,onOpenDemoModal:s}){const[i,l]=x.useState(!1),n=t.tools?t.tools.slice(0,3):["AWS","Docker","Kubernetes"],h=t.languages||"Tamil, English & Hindi",d=t.subtitle||t.description||"Learn from active corporate engineers with real hands-on production labs & job referrals.",c=t.badgeTag||t.badge||"Live Cohort",r=t.hashLink||`#${(t.title||"course").replace(/[^a-zA-Z0-9]/g,"")}_course`,o=r.replace("#","");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:o,className:"ezer-uiverse-card card_box",style:{display:"flex",flexDirection:"column",height:"100%",minHeight:"440px",position:"relative"},children:[e.jsx("span",{className:"card-ribbon-tag","data-badge":c}),e.jsx("div",{style:{position:"relative",height:"175px",overflow:"hidden",background:"#ffffff"},children:e.jsx("img",{src:m(t.image),alt:t.title,style:{width:"100%",height:"100%",objectFit:t.fit||t.imageFit||"cover",objectPosition:t.position||t.imagePosition||"center center",opacity:1}})}),e.jsxs("div",{style:{padding:"20px 18px 18px",display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between",background:"#ffffff"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.08rem",fontWeight:800,color:"#000648",lineHeight:1.35,marginBottom:"8px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.8em"},children:t.title}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.84rem",color:"#000648",marginBottom:"10px",fontWeight:700},children:[e.jsx(p,{size:16,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{children:h})]}),e.jsx("p",{style:{fontSize:"0.82rem",color:"#475569",lineHeight:1.5,marginBottom:"14px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.5em"},children:d}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"16px"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.72rem",fontWeight:800,background:"rgba(0, 6, 72, 0.06)",color:"#000648",padding:"3px 10px",borderRadius:"50px"},children:[e.jsx(y,{size:13,style:{color:"#f2b733"}}),t.duration||"3 Months"]}),n.map(a=>e.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,background:"#f1f5f9",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:a},a))]})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"auto",paddingTop:"10px"},children:[e.jsx("button",{type:"button",onClick:()=>s(t.title),style:{flex:1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:800,textAlign:"center",background:"#ffffff",border:"1.5px solid #000648",color:"#000648",cursor:"pointer",transition:"background-color 0.2s ease, border-color 0.2s ease"},onMouseEnter:a=>{a.currentTarget.style.background="#f1f5f9"},onMouseLeave:a=>{a.currentTarget.style.background="#ffffff"},children:"Syllabus"}),e.jsxs(u,{to:`/courses/${t.slug}${r}`,style:{flex:1.1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:900,textAlign:"center",background:"#000648",color:"#f2b733",border:"1.5px solid #000648",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",boxShadow:"0 4px 12px rgba(0, 6, 72, 0.2)",transition:"background-color 0.2s ease, color 0.2s ease, transform 0.2s ease"},onMouseEnter:a=>{a.currentTarget.style.background="#f2b733",a.currentTarget.style.color="#000648",a.currentTarget.style.borderColor="#f2b733",a.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:a=>{a.currentTarget.style.background="#000648",a.currentTarget.style.color="#f2b733",a.currentTarget.style.borderColor="#000648",a.currentTarget.style.transform="translateY(0)"},children:["Know More ",e.jsx(j,{size:14})]})]})]})]}),e.jsx(E,{isOpen:i,onClose:()=>l(!1),course:t})]})}const b=["All Courses","Cloud & DevOps","Testing & QA","AI & Data","IT Infrastructure"];function L({onOpenDemoModal:t}){const{courses:s}=f(),[i,l]=x.useState(0),n=x.useRef(null),d=(()=>{const r=s||[];return i===0?r:i===1?r.filter(o=>o.slug?.includes("devops")||o.slug?.includes("cloud")):i===2?r.filter(o=>o.slug?.includes("testing")||o.slug?.includes("playwright")):i===3?r.filter(o=>o.slug?.includes("ai")||o.slug?.includes("ml")||o.slug?.includes("data")):i===4?r.filter(o=>o.slug?.includes("infrastructure")||o.slug?.includes("sysadmin")):r})(),c=r=>{n.current&&n.current.scrollBy({left:r==="left"?-300:300,behavior:"smooth"})};return e.jsx("section",{id:"courses",className:"section-alt",style:{padding:"56px 0",borderBottom:"1px solid #e2e8f0"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[e.jsxs("span",{className:"section-tag",children:[e.jsx(v,{size:15,style:{color:"#f2b733"}}),"LIVE Cohort Programs"]}),e.jsx("h2",{style:{fontSize:"clamp(1.35rem, 2.2vw, 1.7rem)",color:"#000648",marginBottom:"6px"},children:"Live Online IT Courses with Placement Support"}),e.jsx("p",{style:{color:"#475569",fontSize:"0.86rem",maxWidth:"560px",margin:"0 auto"},children:"Every course combines hands-on labs, real-world projects, and industry-standard tools — backed by up to 1 year of placement assistance."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",flexWrap:"wrap",gap:"16px"},children:[e.jsx("div",{className:"no-scrollbar",style:{display:"flex",gap:"8px",overflowX:"auto",padding:"4px 0"},children:b.map((r,o)=>e.jsx("button",{type:"button",onClick:()=>l(o),style:{padding:"7px 16px",borderRadius:"50px",fontSize:"0.78rem",fontWeight:i===o?800:600,whiteSpace:"nowrap",cursor:"pointer",border:i===o?"1.5px solid #000648":"1px solid #cbd5e1",background:i===o?"#000648":"#ffffff",color:i===o?"#ffffff":"#475569",boxShadow:i===o?"0 4px 12px rgba(0, 6, 72, 0.15)":"none",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},children:r},r))}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginLeft:"auto"},children:[e.jsx("button",{type:"button",onClick:()=>c("left"),"aria-label":"Scroll left",style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #cbd5e1",background:"#ffffff",color:"#000648",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},onMouseEnter:r=>{r.currentTarget.style.borderColor="#000648",r.currentTarget.style.background="#000648",r.currentTarget.style.color="#f2b733"},onMouseLeave:r=>{r.currentTarget.style.borderColor="#cbd5e1",r.currentTarget.style.background="#ffffff",r.currentTarget.style.color="#000648"},children:e.jsx(w,{size:20})}),e.jsx("button",{type:"button",onClick:()=>c("right"),"aria-label":"Scroll right",style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #cbd5e1",background:"#ffffff",color:"#000648",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},onMouseEnter:r=>{r.currentTarget.style.borderColor="#000648",r.currentTarget.style.background="#000648",r.currentTarget.style.color="#f2b733"},onMouseLeave:r=>{r.currentTarget.style.borderColor="#cbd5e1",r.currentTarget.style.background="#ffffff",r.currentTarget.style.color="#000648"},children:e.jsx(k,{size:20})})]})]}),d.length>0?e.jsx("div",{ref:n,className:"no-scrollbar",style:{display:"flex",gap:"20px",overflowX:"auto",scrollSnapType:"x mandatory",paddingBottom:"16px",scrollBehavior:"smooth"},children:d.map(r=>e.jsx("div",{style:{flex:"0 0 320px",scrollSnapAlign:"start"},children:e.jsx(I,{course:r,onOpenDemoModal:t})},r.id||r.slug))}):e.jsx(S,{type:C.NO_SEARCH_RESULTS,title:"No Courses Found in Selected Category",message:`No active programs match the category "${b[i]}". Click reset to view all available courses.`,onRetry:()=>l(0),actionLabel:"View All Courses"})]})})}function R(){const{executiveLeaders:t}=f(),s=t&&t.length>0?t:[{id:"exec-1",roleTag:"CEO",roleName:"Chief Executive Officer",name:"Dr. Subramanian R",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=700",bio:"Visionary Leader driving native language tech education, corporate placement partnerships, and pan-India growth."},{id:"exec-2",roleTag:"CFO",roleName:"Chief Financial Officer",name:"Meenakshi Sundaram",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=700",bio:"Strategic Financial Lead overseeing student scholarship funds, affordable fee structures, and enterprise scalability."},{id:"exec-3",roleTag:"CMTO",roleName:"Chief Marketing & Technology Officer",name:"Anand Kumar K",image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700",bio:"Pioneer of AI-integrated lab curriculums, hands-on production capstones, and corporate readiness standards."}];return e.jsxs("section",{style:{position:"relative",background:"radial-gradient(circle at 50% 0%, #1e1b4b 0%, #000648 60%, #030712 100%)",color:"#ffffff",padding:"80px 20px",borderTop:"2px solid rgba(242, 183, 51, 0.3)",borderBottom:"2px solid rgba(242, 183, 51, 0.3)",overflow:"hidden"},children:[e.jsxs("div",{style:{pointerEvents:"none",position:"absolute",inset:0,overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"-100px",left:"15%",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(242, 183, 51, 0.14)",filter:"blur(120px)"}}),e.jsx("div",{style:{position:"absolute",bottom:"-100px",right:"15%",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(17, 93, 252, 0.18)",filter:"blur(120px)"}})]}),e.jsxs("div",{className:"container",style:{maxWidth:"1180px",margin:"0 auto",position:"relative",zIndex:10},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(242, 183, 51, 0.15)",color:"#f2b733",padding:"6px 22px",borderRadius:"50px",fontWeight:900,fontSize:"0.78rem",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"16px",border:"1.5px solid rgba(242, 183, 51, 0.4)",boxShadow:"0 0 24px rgba(242, 183, 51, 0.25)"},children:[e.jsx(g,{size:16})," EXECUTIVE LEADERSHIP BOARD"]}),e.jsx("h2",{style:{fontSize:"clamp(2.1rem, 4vw, 3.4rem)",fontWeight:900,color:"#ffffff",lineHeight:1.15,marginBottom:"14px",letterSpacing:"-0.02em"},children:"Guided by Corporate Visionaries & EdTech Pioneers"}),e.jsx("p",{style:{fontSize:"1.05rem",color:"rgba(255,255,255,0.85)",maxWidth:"740px",margin:"0 auto",lineHeight:1.65},children:"Our executive board brings decades of technology leadership, corporate partnerships, and native-language education models to empower every learner."})]}),e.jsx("div",{className:"executive-board-grid",children:s.slice(0,3).map(i=>e.jsxs("div",{className:"executive-stylish-card",children:[e.jsxs("div",{className:"exec-image-wrapper",children:[e.jsx("img",{src:i.image,alt:i.name||i.roleTag}),e.jsx("div",{className:"exec-image-overlay"}),e.jsxs("span",{className:"exec-role-pill",children:[e.jsx(T,{size:16})," ",i.roleTag||"EXEC"]})]}),e.jsxs("div",{className:"exec-card-body",children:[e.jsx("h3",{className:"exec-name",children:i.name}),e.jsx("div",{className:"exec-title",children:i.roleName||i.roleTag}),e.jsx("p",{className:"exec-bio",children:i.bio}),e.jsxs("div",{className:"exec-footer-badge",children:[e.jsx(g,{color:"#f2b733",size:14})," EZER Corporate Directorate"]})]})]},i.id||i.roleTag||i.name))})]}),e.jsx("style",{children:`
        .executive-board-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          align-items: stretch;
        }

        .executive-stylish-card {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(242, 183, 51, 0.35);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .executive-stylish-card:hover {
          transform: translateY(-8px);
          border-color: #f2b733;
          box-shadow: 0 24px 50px rgba(242, 183, 51, 0.25);
        }

        .exec-image-wrapper {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          background: #000;
        }

        .exec-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s ease;
        }

        .executive-stylish-card:hover .exec-image-wrapper img {
          transform: scale(1.05);
        }

        .exec-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%);
        }

        .exec-role-pill {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #000648;
          color: #f2b733;
          font-size: 0.78rem;
          font-weight: 900;
          padding: 6px 14px;
          border-radius: 50px;
          border: 1.5px solid #f2b733;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          z-index: 5;
        }

        .exec-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
        }

        .exec-name {
          font-size: 1.35rem;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 4px 0;
          line-height: 1.25;
        }

        .exec-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #f2b733;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 14px;
        }

        .exec-bio {
          font-size: 0.88rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0 0 20px 0;
        }

        .exec-footer-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 800;
          color: #94a3b8;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .executive-board-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .exec-image-wrapper {
            height: 280px;
          }
        }
      `})]})}function B(){const{ezerDefinition:t,executiveLeaders:s}=f();return s&&s.length>=3&&s.slice(0,3),e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"ezer-definition",style:{padding:"72px 0",background:"#ffffff",overflow:"hidden",position:"relative",borderBottom:"1px solid #e2e8f0"},children:[e.jsx("div",{className:"container",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{position:"relative",display:"flex",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",top:"-20px",left:"5%",width:"90%",height:"105%",background:"linear-gradient(135deg, rgba(242, 183, 51, 0.25) 0%, rgba(0, 6, 72, 0.1) 100%)",clipPath:"polygon(15% 0%, 100% 10%, 85% 100%, 0% 85%)",borderRadius:"24px",zIndex:1}}),e.jsx("div",{style:{position:"relative",zIndex:2,width:"100%",maxWidth:"460px",borderRadius:"20px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0, 6, 72, 0.18)",border:"2px solid #000648",background:"#ffffff"},children:e.jsx("img",{src:m(t.image),alt:t.headline,style:{width:"100%",height:"auto",minHeight:"340px",objectFit:t.imageFit||"cover",objectPosition:t.imagePosition||"center center",display:"block"}})}),e.jsxs("div",{title:"Tamil Language Cohort Support",style:{position:"absolute",top:"4%",left:"-2%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(p,{size:16})," Tamil (தமிழ்)"]}),e.jsxs("div",{title:"English Language Cohort Support",style:{position:"absolute",top:"42%",right:"-4%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(p,{size:16})," English"]}),e.jsxs("div",{title:"Hindi Language Cohort Support",style:{position:"absolute",bottom:"6%",left:"-2%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(p,{size:16})," Hindi (हिन्दी)"]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"14px"},children:e.jsxs("span",{style:{background:"rgba(0, 6, 72, 0.08)",color:"#000648",fontSize:"0.74rem",fontWeight:800,padding:"5px 14px",borderRadius:"50px",textTransform:"uppercase",letterSpacing:"0.06em",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(g,{size:14,style:{color:"#f2b733"}}),t.tag]})}),e.jsx("h2",{style:{fontSize:"clamp(1.8rem, 3.2vw, 2.5rem)",fontWeight:900,color:"#000648",lineHeight:1.25,marginBottom:"18px"},children:t.headline}),e.jsx("p",{style:{fontSize:"0.96rem",color:"#334155",lineHeight:1.7,marginBottom:"26px"},children:t.description}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"32px"},children:t.highlights?.map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(z,{size:20,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:800,color:"#000648"},children:i})]},i))}),e.jsxs("div",{style:{background:"#000648",color:"#ffffff",padding:"18px 22px",borderRadius:"12px",borderLeft:"4px solid #f2b733",fontSize:"0.94rem",fontWeight:600,display:"flex",alignItems:"center",gap:"14px",boxShadow:"0 4px 16px rgba(0, 6, 72, 0.15)"},children:[e.jsx(g,{size:24,style:{color:"#f2b733",flexShrink:0}}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"#f2b733",fontWeight:900,fontSize:"0.98rem"},children:"Meaning of EZER: "}),e.jsx("span",{style:{lineHeight:1.5},children:'Ezer means "Helper, Strength, and Support" — acting as a dependable support system that helps students, aspirants, and professionals become job-ready and corporate-relevant.'})]})]})]})]})}),e.jsx("style",{children:`
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
        `})]}),e.jsx(R,{})]})}export{B as E,L as T};
