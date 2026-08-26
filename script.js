function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
function openLightbox(src){document.getElementById('lightboxImg').src=src;document.getElementById('lightbox').classList.add('show')}
function closeLightbox(){document.getElementById('lightbox').classList.remove('show')}
function submitForm(e,type){
  e.preventDefault();
  const toast=document.getElementById('toast');
  toast.textContent=type==='order'?'Thank you! Your order enquiry has been recorded.':'Thank you for sharing your feedback!';
  toast.classList.add('show');
  e.target.reset();
  setTimeout(()=>toast.classList.remove('show'),3500);
}
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));
