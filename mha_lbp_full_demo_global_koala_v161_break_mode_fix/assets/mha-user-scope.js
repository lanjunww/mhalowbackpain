// Demo user scope helper placeholder.
// The full demo uses localStorage/sessionStorage for per-user state.
window.MHAUserScope = window.MHAUserScope || {
  getSession(){ try { return JSON.parse(localStorage.getItem('mha.session') || 'null'); } catch(e){ return null; } },
  isLoggedIn(){ const s=this.getSession(); return !!(s && s.exp && s.exp > Date.now() && s.email); }
};
