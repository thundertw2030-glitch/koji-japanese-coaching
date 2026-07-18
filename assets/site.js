
(()=>{
const C=window.KOJI_CONFIG||{}, $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const track=(name,params={})=>{if(window.gtag)gtag('event',name,params);if(window.clarity)clarity('event',name)};
function loadAnalytics(){
 if(window.__analyticsLoaded)return; window.__analyticsLoaded=true;
 const g=document.createElement('script');g.async=true;g.src=`https://www.googletagmanager.com/gtag/js?id=${C.gaMeasurementId}`;document.head.appendChild(g);
 window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',C.gaMeasurementId,{anonymize_ip:true});
 (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",C.clarityProjectId);
}
const consent=localStorage.getItem('koji_analytics_consent'), box=$('#consent');
if(consent==='accepted')loadAnalytics(); else if(!consent&&box)box.classList.add('show');
$('#acceptCookies')?.addEventListener('click',()=>{localStorage.setItem('koji_analytics_consent','accepted');box.classList.remove('show');loadAnalytics()});
$('#declineCookies')?.addEventListener('click',()=>{localStorage.setItem('koji_analytics_consent','declined');box.classList.remove('show')});
$$('[data-contact]').forEach(a=>{
 const type=a.dataset.contact;
 if(type==='email')a.href=`mailto:${C.email}?subject=${encodeURIComponent('Japanese coaching inquiry')}`;
 if(type==='whatsapp')a.href=`${C.whatsappUrl}?text=${encodeURIComponent('Hello Koji, I am interested in Japanese coaching.')}`;
 if(type==='line')a.href=C.lineUrl;
 a.addEventListener('click',()=>track('contact_click',{contact_method:type,page_language:document.documentElement.lang}));
});
$('#langSelect')?.addEventListener('change',e=>{track('language_switch',{selected_language:e.target.value});location.href=e.target.value});
const header=$('.header');addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>20));
$('#menuBtn')?.addEventListener('click',()=>$('#nav')?.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});$$('.reveal').forEach(e=>io.observe(e));
let ninety=false;addEventListener('scroll',()=>{if(!ninety&&(scrollY+innerHeight)/document.documentElement.scrollHeight>.9){ninety=true;track('scroll_90',{page_path:location.pathname})}});
let step=0,answers=[];const qs=$$('.question'),bar=$('#progressBar');
$$('.option').forEach(b=>b.addEventListener('click',()=>{
 answers.push(b.dataset.value);qs[step].classList.remove('active');step++;
 if(step<qs.length){qs[step].classList.add('active');bar.style.width=((step+1)/qs.length*100)+'%'}
 else{
  let recommendation='Interview & communication foundation';
  if(answers.includes('study'))recommendation='Study in Japan interview coaching';
  if(answers.includes('job'))recommendation='Japanese job interview coaching';
  if(answers.includes('business'))recommendation='Business Japanese coaching';
  if(answers.includes('it'))recommendation='IT & engineering communication coaching';
  $('#resultTitle').textContent=recommendation;$('#quizResult').classList.add('show');bar.style.width='100%';
  track('lesson_finder_complete',{recommended_track:recommendation,page_language:document.documentElement.lang});
 }
}));
})();
