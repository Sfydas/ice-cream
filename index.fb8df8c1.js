(()=>{let e=document.querySelector("[data-location-modal-open]"),t=document.querySelector("[data-location-popup]"),o=document.querySelector("[data-location-modal-close]");e.addEventListener("click",()=>{t.classList.toggle("is-open")}),o.addEventListener("click",()=>{t.classList.toggle("is-open")})})(),(()=>{let e=document.querySelector("[data-franchise-btn-open]"),t=document.querySelector("[data-franchise-modal]"),o=document.querySelector("[data-franchise-btn-close]");e.addEventListener("click",()=>{t.classList.toggle("is-open")}),o.addEventListener("click",()=>{t.classList.toggle("is-open")})})(),(()=>{let e=document.querySelector("[data-about-modal-open]"),t=document.querySelector("[data-about-modal]"),o=document.querySelector("[data-about-modal-close]");e.addEventListener("click",()=>{t.classList.toggle("is-hidden")}),o.addEventListener("click",()=>{t.classList.toggle("is-hidden")})})(),(()=>{let e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.forEach(function(e){e.addEventListener("click",t)}),e.closeModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.fb8df8c1.js.map
