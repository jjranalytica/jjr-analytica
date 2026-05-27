const studies = [
  {study:'Initial Balance Breaks', question:'P(IB High Breaks | Low Forms First)', sample:'742 days', result:'63.4%', link:'studies/lf-ib-high-break.html'},
  {study:'Overnight Range Breaks', question:'P(ONH/ONL Breaks During RTH)', sample:'812 days', result:'58.7%', link:'studies/overnight-breaks.html'},
  {study:'Late-Day Auction Completion', question:'P(day high/low forms in 15:00–16:00)', sample:'1,299 days', result:'32.72%', link:'studies/late-day-auction-completion.html'},
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
