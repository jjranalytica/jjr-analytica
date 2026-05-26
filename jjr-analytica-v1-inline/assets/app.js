const studies = [
  {study:'Initial Balance Breaks', question:'P(IB High Breaks | Low Forms First)', sample:'742 days', result:'63.4%', link:'studies/lf-ib-high-break.html'},
  {study:'Overnight Range Breaks', question:'P(ONH/ONL Breaks During RTH)', sample:'812 days', result:'58.7%', link:'studies/overnight-breaks.html'},
  {study:'10:08 Pullback Filter', question:'P(Target Reaches | Pullback ≥ 10 pts)', sample:'389 trades', result:'54.2%', link:'studies/ten-oh-eight-pullback.html'},
  {study:'Flip Day Model', question:'P(Target Side Fails | Formation + Regime)', sample:'1,120 days', result:'47.9%', link:'research.html'}
];
function wireStudySearch(){
  const input = document.querySelector('[data-study-search]');
  const rows = [...document.querySelectorAll('[data-study-row]')];
  if(!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    rows.forEach(row => row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none');
  });
}
document.addEventListener('DOMContentLoaded', wireStudySearch);
