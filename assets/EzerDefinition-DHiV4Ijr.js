import{j as e,a as v}from"./vendor-motion-XtJfHB1Z.js";import{r as d,L as j}from"./vendor-react-Dti5O4gB.js";import{a as b,s as f,w,e as k,u as m,l as S,c as T,d as C,U as z,S as I,x as h,h as u,j as E}from"./index-Ce8IqPL4.js";import{C as A}from"./CoursePurchaseModal-BVDW96Jo.js";function R({course:o,onOpenDemoModal:s}){const[a,n]=d.useState(!1),l=o.tools?o.tools.slice(0,3):["AWS","Docker","Kubernetes"],x=o.languages||"Tamil, English & Hindi",c=o.subtitle||o.description||"Learn from active corporate engineers with real hands-on production labs & job referrals.",p=o.badgeTag||o.badge||"Live Cohort",t=o.hashLink||`#${(o.title||"course").replace(/[^a-zA-Z0-9]/g,"")}_course`,r=t.replace("#","");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:r,className:"ezer-uiverse-card card_box",style:{display:"flex",flexDirection:"column",height:"100%",minHeight:"440px",position:"relative"},children:[e.jsx("span",{className:"card-ribbon-tag","data-badge":p}),e.jsx("div",{style:{position:"relative",height:"175px",overflow:"hidden",background:"#ffffff"},children:e.jsx("img",{src:b(o.image),alt:o.title,style:{width:"100%",height:"100%",objectFit:o.fit||o.imageFit||"cover",objectPosition:o.position||o.imagePosition||"center center",opacity:1}})}),e.jsxs("div",{style:{padding:"20px 18px 18px",display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between",background:"#ffffff"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.08rem",fontWeight:800,color:"#000648",lineHeight:1.35,marginBottom:"8px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.8em"},children:o.title}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.84rem",color:"#000648",marginBottom:"10px",fontWeight:700},children:[e.jsx(f,{size:16,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{children:x})]}),e.jsx("p",{style:{fontSize:"0.82rem",color:"#475569",lineHeight:1.5,marginBottom:"14px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.5em"},children:c}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"16px"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.72rem",fontWeight:800,background:"rgba(0, 6, 72, 0.06)",color:"#000648",padding:"3px 10px",borderRadius:"50px"},children:[e.jsx(w,{size:13,style:{color:"#f2b733"}}),o.duration||"3 Months"]}),l.map(i=>e.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,background:"#f1f5f9",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:i},i))]})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"auto",paddingTop:"10px"},children:[e.jsx("button",{type:"button",onClick:()=>s(o.title),style:{flex:1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:800,textAlign:"center",background:"#ffffff",border:"1.5px solid #000648",color:"#000648",cursor:"pointer",transition:"background-color 0.2s ease, border-color 0.2s ease"},onMouseEnter:i=>{i.currentTarget.style.background="#f1f5f9"},onMouseLeave:i=>{i.currentTarget.style.background="#ffffff"},children:"Syllabus"}),e.jsxs(j,{to:`/courses/${o.slug}${t}`,style:{flex:1.1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:900,textAlign:"center",background:"#000648",color:"#f2b733",border:"1.5px solid #000648",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",boxShadow:"0 4px 12px rgba(0, 6, 72, 0.2)",transition:"background-color 0.2s ease, color 0.2s ease, transform 0.2s ease"},onMouseEnter:i=>{i.currentTarget.style.background="#f2b733",i.currentTarget.style.color="#000648",i.currentTarget.style.borderColor="#f2b733",i.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:i=>{i.currentTarget.style.background="#000648",i.currentTarget.style.color="#f2b733",i.currentTarget.style.borderColor="#000648",i.currentTarget.style.transform="translateY(0)"},children:["Know More ",e.jsx(k,{size:14})]})]})]})]}),e.jsx(A,{isOpen:a,onClose:()=>n(!1),course:o})]})}const y=["All Courses","Cloud & DevOps","Testing & QA","AI & Data","IT Infrastructure"];function O({onOpenDemoModal:o}){const{courses:s}=m(),[a,n]=d.useState(0),l=d.useRef(null),c=(()=>{const t=s||[];return a===0?t:a===1?t.filter(r=>r.slug?.includes("devops")||r.slug?.includes("cloud")):a===2?t.filter(r=>r.slug?.includes("testing")||r.slug?.includes("playwright")):a===3?t.filter(r=>r.slug?.includes("ai")||r.slug?.includes("ml")||r.slug?.includes("data")):a===4?t.filter(r=>r.slug?.includes("infrastructure")||r.slug?.includes("sysadmin")):t})(),p=t=>{l.current&&l.current.scrollBy({left:t==="left"?-300:300,behavior:"smooth"})};return e.jsx("section",{id:"courses",className:"section-alt",style:{padding:"56px 0",borderBottom:"1px solid #e2e8f0"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[e.jsxs("span",{className:"section-tag",children:[e.jsx(S,{size:15,style:{color:"#f2b733"}}),"LIVE Cohort Programs"]}),e.jsx("h2",{style:{fontSize:"clamp(1.35rem, 2.2vw, 1.7rem)",color:"#000648",marginBottom:"6px"},children:"Live Online IT Courses with Placement Support"}),e.jsx("p",{style:{color:"#475569",fontSize:"0.86rem",maxWidth:"560px",margin:"0 auto"},children:"Every course combines hands-on labs, real-world projects, and industry-standard tools — backed by up to 1 year of placement assistance."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",flexWrap:"wrap",gap:"16px"},children:[e.jsx("div",{className:"no-scrollbar",style:{display:"flex",gap:"8px",overflowX:"auto",padding:"4px 0"},children:y.map((t,r)=>e.jsx("button",{type:"button",onClick:()=>n(r),style:{padding:"7px 16px",borderRadius:"50px",fontSize:"0.78rem",fontWeight:a===r?800:600,whiteSpace:"nowrap",cursor:"pointer",border:a===r?"1.5px solid #000648":"1px solid #cbd5e1",background:a===r?"#000648":"#ffffff",color:a===r?"#ffffff":"#475569",boxShadow:a===r?"0 4px 12px rgba(0, 6, 72, 0.15)":"none",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},children:t},t))}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginLeft:"auto"},children:[e.jsx("button",{type:"button",onClick:()=>p("left"),"aria-label":"Scroll left",style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #cbd5e1",background:"#ffffff",color:"#000648",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},onMouseEnter:t=>{t.currentTarget.style.borderColor="#000648",t.currentTarget.style.background="#000648",t.currentTarget.style.color="#f2b733"},onMouseLeave:t=>{t.currentTarget.style.borderColor="#cbd5e1",t.currentTarget.style.background="#ffffff",t.currentTarget.style.color="#000648"},children:e.jsx(T,{size:20})}),e.jsx("button",{type:"button",onClick:()=>p("right"),"aria-label":"Scroll right",style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #cbd5e1",background:"#ffffff",color:"#000648",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},onMouseEnter:t=>{t.currentTarget.style.borderColor="#000648",t.currentTarget.style.background="#000648",t.currentTarget.style.color="#f2b733"},onMouseLeave:t=>{t.currentTarget.style.borderColor="#cbd5e1",t.currentTarget.style.background="#ffffff",t.currentTarget.style.color="#000648"},children:e.jsx(C,{size:20})})]})]}),c.length>0?e.jsx("div",{ref:l,className:"no-scrollbar",style:{display:"flex",gap:"20px",overflowX:"auto",scrollSnapType:"x mandatory",paddingBottom:"16px",scrollBehavior:"smooth"},children:c.map(t=>e.jsx("div",{style:{flex:"0 0 320px",scrollSnapAlign:"start"},children:e.jsx(R,{course:t,onOpenDemoModal:o})},t.id||t.slug))}):e.jsx(z,{type:I.NO_SEARCH_RESULTS,title:"No Courses Found in Selected Category",message:`No active programs match the category "${y[a]}". Click reset to view all available courses.`,onRetry:()=>n(0),actionLabel:"View All Courses"})]})})}function H(){const{executiveLeaders:o}=m(),s=d.useRef(null),[a,n]=d.useState(-1),[l,x]=d.useState(!1),[c,p]=d.useState(-1),t=o&&o.length>0?o:[{id:"exec-1",roleTag:"CEO",roleName:"Chief Executive Officer",name:"Dr. Subramanian R",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=700",bio:"Visionary Leader driving native language tech education, corporate placement partnerships, and pan-India growth."},{id:"exec-2",roleTag:"CFO",roleName:"Chief Financial Officer",name:"Meenakshi Sundaram",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=700",bio:"Strategic Financial Lead overseeing student scholarship funds, affordable fee structures, and enterprise scalability."},{id:"exec-3",roleTag:"CMTO",roleName:"Chief Tech & Academic Officer",name:"Anand Kumar K",image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700",bio:"Pioneer of AI-integrated lab curriculums, hands-on production capstones, and corporate readiness standards."}];return d.useEffect(()=>{const r=s.current;if(!r||l)return;const i=new IntersectionObserver(g=>{g[0].isIntersecting&&!l&&(x(!0),n(0),setTimeout(()=>n(1),2200),setTimeout(()=>n(2),4400),setTimeout(()=>n(-1),6600))},{threshold:.25});return i.observe(r),()=>i.disconnect()},[l]),e.jsxs("section",{ref:s,style:{position:"relative",background:"radial-gradient(circle at 50% 0%, #1e1b4b 0%, #000648 60%, #030712 100%)",color:"#ffffff",padding:"56px 16px",borderTop:"2px solid rgba(242, 183, 51, 0.3)",borderBottom:"2px solid rgba(242, 183, 51, 0.3)",overflow:"hidden"},children:[e.jsx("style",{children:`
        .exec-card {
          width: 100%;
          max-width: 360px;
          height: 420px;
          background: #ffffff;
          border-radius: 32px;
          padding: 3px;
          position: relative;
          box-shadow: rgba(0, 6, 72, 0.4) 0px 20px 35px -15px;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
          border: 2.5px solid #000648;
          margin: 0 auto;
          overflow: hidden;
        }

        .exec-card .role-badge-top {
          position: absolute;
          right: 1.2rem;
          top: 1.2rem;
          background: #000648;
          border: 1.5px solid #f2b733;
          color: #f2b733;
          font-weight: 900;
          font-size: 0.75rem;
          padding: 5px 14px;
          border-radius: 50px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
        }

        .exec-card .profile-pic {
          position: absolute;
          width: calc(100% - 6px);
          height: calc(100% - 6px);
          top: 3px;
          left: 3px;
          border-radius: 29px;
          z-index: 1;
          border: 0px solid #f2b733;
          overflow: hidden;
          transition: all 0.5s ease-in-out 0.15s, z-index 0.5s ease-in-out 0.15s;
        }

        .exec-card .profile-pic img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          object-position: center top;
          transition: all 0.5s ease-in-out 0s;
        }

        .exec-card .bottom {
          position: absolute;
          bottom: 3px;
          left: 3px;
          right: 3px;
          background: #000648;
          top: 68%;
          border-radius: 24px;
          z-index: 2;
          border-top: 2.5px solid #f2b733;
          box-shadow: rgba(0, 6, 72, 0.4) 0px 5px 15px 0px inset;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          justify.content: flex-start;
        }

        .exec-card .bottom .content {
          position: absolute;
          top: 14px;
          left: 1.5rem;
          right: 1.5rem;
        }

        .exec-card .bottom .content .name {
          display: block;
          font-size: 1.25rem;
          color: #ffffff;
          font-weight: 900;
          line-height: 1.2;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }

        .exec-card .bottom .content .role-title {
          display: block;
          font-size: 0.78rem;
          color: #f2b733;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 3px;
        }

        .exec-card .bottom .content .about-me {
          display: block;
          font-size: 0.86rem;
          color: #cbd5e1;
          margin-top: 0.7rem;
          line-height: 1.5;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.4s ease 0.1s;
        }

        .exec-card .bottom .bottom-bottom {
          margin-top: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(242, 183, 51, 0.3);
          padding-top: 10px;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.4s ease 0.2s;
        }

        .exec-card .bottom .bottom-bottom .button {
          background: #f2b733;
          color: #000648;
          border: none;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 900;
          padding: 0.4rem 0.8rem;
          box-shadow: rgba(0, 6, 72, 0.25) 0px 5px 5px 0px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .exec-card .bottom .bottom-bottom .button:hover {
          background: #ffffff;
          color: #000648;
        }

        /* Hover & Auto-Scroll Animation Effects */
        .exec-card.is-active-card,
        .exec-card:hover {
          border-top-left-radius: 55px;
          border-color: #f2b733;
          box-shadow: 0 25px 50px rgba(242, 183, 51, 0.25);
        }

        .exec-card.is-active-card .bottom,
        .exec-card:hover .bottom {
          top: 22%;
          border-radius: 80px 29px 29px 29px;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.15s;
        }

        .exec-card.is-active-card .bottom .content .about-me,
        .exec-card:hover .bottom .content .about-me,
        .exec-card.is-active-card .bottom .bottom-bottom,
        .exec-card:hover .bottom .bottom-bottom {
          opacity: 1;
          transform: translateY(0);
        }

        .exec-card.is-active-card .profile-pic,
        .exec-card:hover .profile-pic {
          width: 90px;
          height: 90px;
          aspect-ratio: 1;
          top: 10px;
          left: 10px;
          border-radius: 50%;
          z-index: 3;
          border: 4px solid #f2b733;
          box-shadow: rgba(0, 6, 72, 0.4) 0px 5px 15px 0px;
          transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
        }
      `}),e.jsxs("div",{style:{pointerEvents:"none",position:"absolute",inset:0,overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"-100px",left:"15%",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(242, 183, 51, 0.14)",filter:"blur(120px)"}}),e.jsx("div",{style:{position:"absolute",bottom:"-100px",right:"15%",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(17, 93, 252, 0.18)",filter:"blur(120px)"}})]}),e.jsxs("div",{className:"container",style:{maxWidth:"1240px",margin:"0 auto",position:"relative",zIndex:10},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[e.jsx("span",{style:{display:"inline-flex",alignItems:"center",background:"rgba(242, 183, 51, 0.15)",color:"#f2b733",padding:"6px 20px",borderRadius:"50px",fontWeight:900,fontSize:"0.78rem",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:"12px",border:"1.5px solid #f2b733",boxShadow:"0 0 24px rgba(242, 183, 51, 0.25)"},children:"EXECUTIVE LEADERSHIP BOARD"}),e.jsx("h2",{style:{fontSize:"clamp(1.8rem, 3.6vw, 3rem)",fontWeight:900,color:"#ffffff",lineHeight:1.15,marginBottom:"10px",letterSpacing:"-0.02em"},children:"Guided by Corporate Visionaries & EdTech Pioneers"}),e.jsx("p",{style:{fontSize:"1rem",color:"rgba(255,255,255,0.85)",maxWidth:"740px",margin:"0 auto",lineHeight:1.6},children:"Our executive board brings decades of technology leadership, corporate partnerships, and native-language education models to empower every learner."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(320px, 100%), 1fr))",gap:"28px",width:"100%"},children:t.map((r,i)=>{const g=c===i||c===-1&&a===i;return e.jsxs(v.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.12},onMouseEnter:()=>p(i),onMouseLeave:()=>p(-1),className:`exec-card ${g?"is-active-card":""}`,children:[e.jsxs("span",{className:"role-badge-top",children:[e.jsx(h,{size:15})," ",r.roleTag||"DIRECTOR"]}),e.jsx("div",{className:"profile-pic",children:e.jsx("img",{src:b(r.image),alt:r.name})}),e.jsx("div",{className:"bottom",children:e.jsxs("div",{className:"content",children:[e.jsx("span",{className:"name",children:r.name}),e.jsx("span",{className:"role-title",children:r.roleName||r.roleTag}),e.jsx("p",{className:"about-me",children:r.bio}),e.jsx("div",{className:"bottom-bottom",children:e.jsxs("button",{type:"button",className:"button",children:[e.jsx(h,{size:14})," EZER Corporate Directorate"]})})]})})]},r.id||r.roleTag||i)})})]})]})}function D(){const{ezerDefinition:o,executiveLeaders:s}=m();return s&&s.length>=3&&s.slice(0,3),e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"ezer-definition",style:{padding:"72px 0",background:"#ffffff",overflow:"hidden",position:"relative",borderBottom:"1px solid #e2e8f0"},children:[e.jsx("div",{className:"container",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{position:"relative",display:"flex",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",top:"-20px",left:"5%",width:"90%",height:"105%",background:"linear-gradient(135deg, rgba(242, 183, 51, 0.25) 0%, rgba(0, 6, 72, 0.1) 100%)",clipPath:"polygon(15% 0%, 100% 10%, 85% 100%, 0% 85%)",borderRadius:"24px",zIndex:1}}),e.jsx("div",{style:{position:"relative",zIndex:2,width:"100%",maxWidth:"460px",borderRadius:"20px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0, 6, 72, 0.18)",border:"2px solid #000648",background:"#ffffff"},children:e.jsx("img",{src:b(o.image),alt:o.headline,style:{width:"100%",height:"auto",minHeight:"340px",objectFit:o.imageFit||"cover",objectPosition:o.imagePosition||"center center",display:"block"}})}),e.jsxs("div",{title:"Tamil Language Cohort Support",style:{position:"absolute",top:"4%",left:"-2%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(f,{size:16})," Tamil (தமிழ்)"]}),e.jsxs("div",{title:"English Language Cohort Support",style:{position:"absolute",top:"42%",right:"-4%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(f,{size:16})," English"]}),e.jsxs("div",{title:"Hindi Language Cohort Support",style:{position:"absolute",bottom:"6%",left:"-2%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(f,{size:16})," Hindi (हिन्दी)"]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"14px"},children:e.jsxs("span",{style:{background:"rgba(0, 6, 72, 0.08)",color:"#000648",fontSize:"0.74rem",fontWeight:800,padding:"5px 14px",borderRadius:"50px",textTransform:"uppercase",letterSpacing:"0.06em",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(u,{size:14,style:{color:"#f2b733"}}),o.tag]})}),e.jsx("h2",{style:{fontSize:"clamp(1.8rem, 3.2vw, 2.5rem)",fontWeight:900,color:"#000648",lineHeight:1.25,marginBottom:"18px"},children:o.headline}),e.jsx("p",{style:{fontSize:"0.96rem",color:"#334155",lineHeight:1.7,marginBottom:"26px"},children:o.description}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"32px"},children:o.highlights?.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(E,{size:20,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:800,color:"#000648"},children:a})]},a))}),e.jsxs("div",{style:{background:"#000648",color:"#ffffff",padding:"18px 22px",borderRadius:"12px",borderLeft:"4px solid #f2b733",fontSize:"0.94rem",fontWeight:600,display:"flex",alignItems:"center",gap:"14px",boxShadow:"0 4px 16px rgba(0, 6, 72, 0.15)"},children:[e.jsx(u,{size:24,style:{color:"#f2b733",flexShrink:0}}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"#f2b733",fontWeight:900,fontSize:"0.98rem"},children:"Meaning of EZER: "}),e.jsx("span",{style:{lineHeight:1.5},children:'Ezer means "Helper, Strength, and Support" — acting as a dependable support system that helps students, aspirants, and professionals become job-ready and corporate-relevant.'})]})]})]})]})}),e.jsx("style",{children:`
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
        `})]}),e.jsx(H,{})]})}export{D as E,O as T};
