import{r as x,j as e,at as f,av as T,L as C,ag as z,al as I,aj as E}from"./vendor-BXfTZyMX.js";import{h as v,a as h,u,U as N,S as W}from"./index-CUtnQdZj.js";import{C as L}from"./CoursePurchaseModal-B-OmehBW.js";import{C as D}from"./CarouselDotsNav-CxnEPWoa.js";import{L as R,d as B,m as A}from"./vendor-motion-DU8BgGCY.js";function M({course:t,onOpenDemoModal:d}){const[a,i]=x.useState(!1),c=t.tools?t.tools.slice(0,3):["AWS","Docker","Kubernetes"],g=t.languages||"Tamil, English & Hindi",s=t.subtitle||t.description||"Learn from active corporate engineers with real hands-on production labs & job referrals.",b=t.badgeTag||t.badge||"Live Cohort",l=t.hashLink||`#${(t.title||"course").replace(/[^a-zA-Z0-9]/g,"")}_course`,p=l.replace("#","");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:p,className:"ezer-uiverse-card card_box",style:{display:"flex",flexDirection:"column",height:"100%",minHeight:"440px",position:"relative"},children:[e.jsx("span",{className:"card-ribbon-tag","data-badge":b}),e.jsx("div",{style:{position:"relative",height:"175px",overflow:"hidden",background:"#ffffff"},children:e.jsx("img",{src:h(t.image),alt:t.title,onError:v,width:"360",height:"175",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:t.fit||t.imageFit||"cover",objectPosition:t.position||t.imagePosition||"center center",transform:(t.zoom||t.imageZoom)&&(t.zoom||t.imageZoom)!==1?`scale(${t.zoom||t.imageZoom})`:"none",transformOrigin:t.position||t.imagePosition||"center center",imageRendering:"high-quality",backfaceVisibility:"hidden",opacity:1}})}),e.jsxs("div",{style:{padding:"20px 18px 18px",display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between",background:"#ffffff"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.08rem",fontWeight:800,color:"#000648",lineHeight:1.35,marginBottom:"8px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.8em"},children:t.title}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.84rem",color:"#000648",marginBottom:"10px",fontWeight:700},children:[e.jsx(f,{size:16,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{children:g})]}),e.jsx("p",{style:{fontSize:"0.82rem",color:"#475569",lineHeight:1.5,marginBottom:"14px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:"2.5em"},children:s}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"16px"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.72rem",fontWeight:800,background:"rgba(0, 6, 72, 0.06)",color:"#000648",padding:"3px 10px",borderRadius:"50px"},children:[e.jsx(T,{size:13,style:{color:"#f2b733"}}),t.duration||"3 Months"]}),c.map(n=>e.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,background:"#f1f5f9",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:n},n))]})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"auto",paddingTop:"10px"},children:[e.jsx("button",{type:"button",onClick:()=>d(t.title),style:{flex:1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:800,textAlign:"center",background:"#ffffff",border:"1.5px solid #000648",color:"#000648",cursor:"pointer",transition:"background-color 0.2s ease, border-color 0.2s ease"},onMouseEnter:n=>{n.currentTarget.style.background="#f1f5f9"},onMouseLeave:n=>{n.currentTarget.style.background="#ffffff"},children:"Syllabus"}),e.jsxs(C,{to:`/courses/${t.slug}${l}`,style:{flex:1.1,padding:"10px 0",borderRadius:"8px",fontSize:"0.86rem",fontWeight:900,textAlign:"center",background:"#000648",color:"#f2b733",border:"1.5px solid #000648",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",boxShadow:"0 4px 12px rgba(0, 6, 72, 0.2)",transition:"background-color 0.2s ease, color 0.2s ease, transform 0.2s ease"},onMouseEnter:n=>{n.currentTarget.style.background="#f2b733",n.currentTarget.style.color="#000648",n.currentTarget.style.borderColor="#f2b733",n.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:n=>{n.currentTarget.style.background="#000648",n.currentTarget.style.color="#f2b733",n.currentTarget.style.borderColor="#000648",n.currentTarget.style.transform="translateY(0)"},children:["Know More ",e.jsx(z,{size:14})]})]})]})]}),e.jsx(L,{isOpen:a,onClose:()=>i(!1),course:t})]})}const y=["All Courses","Cloud & DevOps","Testing & QA","AI & Data","IT Infrastructure"];function V({onOpenDemoModal:t}){const{courses:d}=u(),[a,i]=x.useState(0),[c,g]=x.useState(0),s=x.useRef(null),l=(()=>{const r=d||[];return a===0?r:a===1?r.filter(o=>o.slug?.includes("devops")||o.slug?.includes("cloud")):a===2?r.filter(o=>o.slug?.includes("testing")||o.slug?.includes("playwright")):a===3?r.filter(o=>o.slug?.includes("ai")||o.slug?.includes("ml")||o.slug?.includes("data")):a===4?r.filter(o=>o.slug?.includes("infrastructure")||o.slug?.includes("sysadmin")):r})(),p=()=>s.current?(s.current.firstElementChild?.offsetWidth||320)+20:340,n=r=>{const o=r.currentTarget.scrollLeft,S=p(),m=Math.round(o/S);m!==c&&m>=0&&m<l.length&&g(m)},j=()=>{if(!l.length)return;const r=(c-1+l.length)%l.length;g(r),s.current&&s.current.scrollTo({left:r*p(),behavior:"smooth"})},w=()=>{if(!l.length)return;const r=(c+1)%l.length;g(r),s.current&&s.current.scrollTo({left:r*p(),behavior:"smooth"})},k=r=>{g(r),s.current&&s.current.scrollTo({left:r*p(),behavior:"smooth"})};return e.jsx("section",{id:"courses",className:"section-alt",style:{padding:"56px 0",borderBottom:"1px solid #e2e8f0"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[e.jsxs("span",{className:"section-tag",children:[e.jsx(I,{size:15,style:{color:"#f2b733"}}),"LIVE Cohort Programs"]}),e.jsx("h2",{style:{color:"#000648",fontSize:"clamp(1.5rem, 2.5vw, 2.1rem)",marginTop:"4px"},children:"Live Online IT Courses with Placement Support"}),e.jsx("p",{style:{color:"#475569",fontSize:"0.88rem",maxWidth:"600px",margin:"6px auto 0",lineHeight:1.6},children:"Every course combines hands-on labs, real-world projects, and industry-standard tools — backed by up to 1 year of placement assistance."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"24px",width:"100%",gap:"16px"},children:[e.jsx("div",{className:"no-scrollbar",style:{display:"flex",gap:"8px",overflowX:"auto",padding:"4px 0",maxWidth:"100%",justifyContent:"center"},children:y.map((r,o)=>e.jsx("button",{type:"button",onClick:()=>{i(o),g(0),s.current&&s.current.scrollTo({left:0,behavior:"smooth"})},style:{padding:"7px 16px",borderRadius:"50px",fontSize:"0.78rem",fontWeight:a===o?800:600,whiteSpace:"nowrap",cursor:"pointer",border:a===o?"1.5px solid #000648":"1px solid #cbd5e1",background:a===o?"#000648":"#ffffff",color:a===o?"#ffffff":"#475569",boxShadow:a===o?"0 4px 12px rgba(0, 6, 72, 0.15)":"none",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},children:r},r))}),e.jsx(D,{totalItems:l.length,activeIndex:c,onPrev:j,onNext:w,onSelectIndex:k,style:{margin:"4px auto 0"}})]}),l.length>0?e.jsx("div",{ref:s,onScroll:n,className:"no-scrollbar",style:{display:"flex",gap:"20px",overflowX:"auto",scrollSnapType:"x mandatory",paddingBottom:"16px",scrollBehavior:"smooth"},children:l.map(r=>e.jsx("div",{style:{flex:"0 0 320px",scrollSnapAlign:"start"},children:e.jsx(M,{course:r,onOpenDemoModal:t})},r.id||r.slug))}):e.jsx(N,{type:W.NO_SEARCH_RESULTS,title:"No Courses Found in Selected Category",message:`No active programs match the category "${y[a]}". Click reset to view all available courses.`,onRetry:()=>i(0),actionLabel:"View All Courses"})]})})}function O(){const{executiveLeaders:t}=u(),d=[{id:"exec-1",roleTag:"FOUNDER • Managing Director",roleName:"Managing Director",name:"Vivekkumar S",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600",tagline:"From Problem to Solution",headline:"Building Skills. Shaping Careers. Creating Futures",bio:"Building industry-ready talent through practical, career-focused IT education, while empowering learners with the skills and confidence to succeed in the IT industry."},{id:"exec-2",roleTag:"Co- Founder • Executive Director",roleName:"Executive Director",name:"Vignesh B",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=600",tagline:"From Learning to Career",headline:"Building industry-ready talent for high-growth technology careers.",bio:"A seasoned IT expert with over 10 years of experience in IT Infrastructure and Technical Support. His commitment to quality and innovation is the cornerstone of our success."},{id:"exec-3",roleTag:"CMTO • Chief Marketing & Technology Officer",roleName:"Chief Marketing & Technology Officer",name:"Mr. Jeeva T",image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600",tagline:"Marketing & Technology Innovation for Ezer",headline:"Driving Ezer’s growth through marketing, technology & innovation",bio:"An accomplished Digital Marketing Strategist and Technical Expert with 5+ years of experience in driving digital growth, brand visibility and innovative technical solutions."}],a=t&&t.length>0?t:d;return e.jsx(R,{features:B,children:e.jsxs("section",{id:"management-leadership",className:"exec-section-compact",style:{position:"relative",background:"linear-gradient(135deg, #f8fafc 0%, #eef2f6 50%, #f8fafc 100%)",color:"#000648",padding:"48px 20px",borderTop:"3px solid #f2b733",borderBottom:"3px solid #f2b733",overflow:"hidden"},children:[e.jsx("style",{children:`
          /* Golden Ambient Background Glows */
          .mgmt-bg-glow-1 {
            position: absolute;
            top: 5%;
            left: 5%;
            width: 320px;
            height: 320px;
            background: radial-gradient(circle, rgba(242,183,51,0.15) 0%, rgba(248,155,41,0) 70%);
            filter: blur(50px);
            pointer-events: none;
          }

          .mgmt-bg-glow-2 {
            position: absolute;
            bottom: 5%;
            right: 5%;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(17,93,252,0.12) 0%, rgba(0,6,72,0) 70%);
            filter: blur(60px);
            pointer-events: none;
          }

          /* Compact Unified Grid */
          .mgmt-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            align-items: stretch;
          }

          @media (max-width: 1024px) {
            .mgmt-cards-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 680px) {
            .mgmt-cards-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }

          /* Management Profile Card */
          .mgmt-card {
            background: #ffffff;
            border-radius: 20px;
            border: 1.5px solid #e2e8f0;
            padding: 28px 24px;
            box-shadow: 0 10px 30px rgba(0, 6, 72, 0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
            transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          }

          .mgmt-card:hover {
            transform: translateY(-5px);
            border-color: #f2b733;
            box-shadow: 0 20px 40px rgba(0, 6, 72, 0.12);
          }

          /* Circular Profile Picture with Gold Ring */
          .mgmt-avatar-frame {
            width: 125px;
            height: 125px;
            border-radius: 50%;
            padding: 4px;
            background: linear-gradient(135deg, #f2b733 0%, #f89b29 50%, #d97706 100%);
            box-shadow: 0 8px 24px rgba(242, 183, 51, 0.35);
            margin-bottom: 18px;
            flex-shrink: 0;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }

          .mgmt-card:hover .mgmt-avatar-frame {
            transform: scale(1.04);
            box-shadow: 0 12px 30px rgba(242, 183, 51, 0.48);
          }

          .mgmt-avatar-inner {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            background: #000648;
            position: relative;
          }

          .mgmt-avatar-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .mgmt-role-badge {
            display: inline-block;
            background: #000648;
            color: #f2b733;
            padding: 5px 14px;
            border-radius: 50px;
            font-size: 0.74rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 12px;
            border: 1px solid rgba(242, 183, 51, 0.4);
            max-width: 95%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .mgmt-tagline {
            font-size: 0.88rem;
            color: #d97706;
            font-weight: 700;
            font-style: italic;
            margin-bottom: 8px;
            line-height: 1.35;
          }

          .mgmt-headline {
            font-size: 1.08rem;
            font-weight: 900;
            color: #000648;
            line-height: 1.35;
            margin: 0 0 14px 0;
            letter-spacing: -0.015em;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mgmt-name {
            font-size: 1.25rem;
            font-weight: 900;
            color: #000648;
            margin: 0 0 4px 0;
          }

          .mgmt-role-name {
            font-size: 0.82rem;
            font-weight: 800;
            color: #115DFC;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 14px;
          }

          .mgmt-bio {
            font-size: 0.88rem;
            color: #475569;
            line-height: 1.6;
            margin: 0;
            flex-grow: 1;
          }
        `}),e.jsx("div",{className:"mgmt-bg-glow-1"}),e.jsx("div",{className:"mgmt-bg-glow-2"}),e.jsxs("div",{className:"container",style:{maxWidth:"1240px",margin:"0 auto",position:"relative",zIndex:3},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{style:{display:"inline-block",background:"#f2b733",color:"#000648",padding:"6px 24px",borderRadius:"50px",fontWeight:900,fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:"12px",boxShadow:"0 4px 18px rgba(242,183,51,0.35)"},children:"Our Management & Leadership Team"}),e.jsx("h2",{style:{fontSize:"clamp(1.9rem, 3.4vw, 2.8rem)",fontWeight:900,color:"#000648",lineHeight:1.2,marginBottom:"10px",letterSpacing:"-0.02em"},children:"Guided by Corporate Visionaries & EdTech Pioneers"}),e.jsx("p",{style:{fontSize:"1rem",color:"#475569",maxWidth:"720px",margin:"0 auto",lineHeight:1.6},children:"Our management team brings decades of technology leadership, corporate partnerships, and practical education models to empower every learner."})]}),e.jsx("div",{className:"mgmt-cards-grid",children:a.map((i,c)=>{const g=i.roleTag||i.roleName||"EXECUTIVE LEADER",s=i.roleName||i.roleTag||"Executive Officer";return e.jsxs(A.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:c*.1},className:"mgmt-card",children:[e.jsx("div",{className:"mgmt-avatar-frame",children:e.jsx("div",{className:"mgmt-avatar-inner",children:e.jsx("img",{src:h(i.image),alt:i.name,onError:v,className:"mgmt-avatar-img",style:{objectPosition:i.imagePosition||i.position||"center top",objectFit:i.imageFit||i.fit||"cover",transform:(i.imageZoom||i.zoom||1)!==1?`scale(${i.imageZoom||i.zoom})`:"none"}})})}),e.jsx("span",{className:"mgmt-role-badge",children:g}),i.tagline&&e.jsxs("div",{className:"mgmt-tagline",children:['"',i.tagline,'"']}),i.headline&&e.jsx("h3",{className:"mgmt-headline",children:i.headline}),e.jsx("h4",{className:"mgmt-name",children:i.name}),e.jsx("div",{className:"mgmt-role-name",children:s}),e.jsx("p",{className:"mgmt-bio",children:i.bio})]},i.id||i.roleTag||c)})})]})]})})}function G(){const{ezerDefinition:t,executiveLeaders:d}=u();return d&&d.length>=3&&d.slice(0,3),e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"ezer-definition",style:{padding:"36px 0",background:"#ffffff",overflow:"hidden",position:"relative",borderBottom:"1px solid #e2e8f0"},children:[e.jsx("div",{className:"container",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{position:"relative",display:"flex",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",top:"-20px",left:"5%",width:"90%",height:"105%",background:"linear-gradient(135deg, rgba(242, 183, 51, 0.25) 0%, rgba(0, 6, 72, 0.1) 100%)",clipPath:"polygon(15% 0%, 100% 10%, 85% 100%, 0% 85%)",borderRadius:"24px",zIndex:1}}),e.jsx("div",{style:{position:"relative",zIndex:2,width:"100%",maxWidth:"460px",aspectRatio:"4 / 3",borderRadius:"20px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0, 6, 72, 0.18)",border:"2px solid #000648",background:"#000648"},children:e.jsx("img",{src:h(t.image),alt:t.headline,style:{width:"100%",height:"100%",objectFit:t.imageFit||"cover",objectPosition:t.imagePosition||"center center",transform:t.imageZoom?`scale(${t.imageZoom})`:"none",transformOrigin:t.imagePosition||"center center",display:"block"}})}),e.jsxs("div",{title:"Tamil Language Cohort Support",style:{position:"absolute",top:"4%",left:"-2%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(f,{size:16})," Tamil (தமிழ்)"]}),e.jsxs("div",{title:"English Language Cohort Support",style:{position:"absolute",top:"42%",right:"-4%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(f,{size:16})," English"]}),e.jsxs("div",{title:"Hindi Language Cohort Support",style:{position:"absolute",bottom:"6%",left:"-2%",zIndex:3,padding:"8px 18px",borderRadius:"50px",background:"#000648",color:"#f2b733",fontWeight:900,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 6px 18px rgba(0,6,72,0.3)",border:"2px solid #f2b733"},children:[e.jsx(f,{size:16})," Hindi (हिन्दी)"]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"14px"},children:e.jsx("span",{style:{background:"rgba(0, 6, 72, 0.08)",color:"#000648",fontSize:"0.74rem",fontWeight:800,padding:"5px 14px",borderRadius:"50px",textTransform:"uppercase",letterSpacing:"0.06em",display:"inline-flex",alignItems:"center",gap:"6px"},children:t.tag})}),e.jsx("h2",{style:{fontSize:"clamp(1.8rem, 3.2vw, 2.5rem)",fontWeight:900,color:"#000648",lineHeight:1.25,marginBottom:"18px"},children:t.headline}),e.jsx("p",{style:{fontSize:"0.96rem",color:"#334155",lineHeight:1.7,marginBottom:"26px"},children:t.description}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"32px"},children:t.highlights?.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(E,{size:20,style:{color:"#000648",flexShrink:0}}),e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:800,color:"#000648"},children:a})]},a))}),e.jsx("div",{style:{background:"#000648",color:"#ffffff",padding:"18px 22px",borderRadius:"12px",borderLeft:"4px solid #f2b733",fontSize:"0.94rem",fontWeight:600,boxShadow:"0 4px 16px rgba(0, 6, 72, 0.15)"},children:e.jsxs("div",{children:[e.jsx("span",{style:{color:"#f2b733",fontWeight:900,fontSize:"0.98rem"},children:"Meaning of EZER: "}),e.jsx("span",{style:{lineHeight:1.5},children:t.acronymText||t.meaningText||'Ezer means "Helper, Strength, and Support" — acting as a dependable support system that helps students, aspirants, and professionals become job-ready and corporate-relevant.'})]})})]})]})}),e.jsx("style",{children:`
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
        `})]}),e.jsx(O,{})]})}export{G as E,V as T};
