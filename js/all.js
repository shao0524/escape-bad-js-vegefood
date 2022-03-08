var url = 'https://hexschool.github.io/js-filter-data/data.json';
var data;

const renderData = (data) => {
  let str = '';
  data.forEach((b, index) => {
    let content = `<tr>
    <td>b.作物名稱</td>
    <td>b.市場名稱</td>
    <td>b.上價</td>
    <td>b.中價</td>
    <td>b.下價</td>
    <td>平均價</td>
    <td>b.交易量</td>
  </tr>`;
    str += content;
  });
  table.innerHTML = str;
};

axios.get(url).then(function (res) {
  data = res.data.filter((a) => a.作物名稱);
  renderData(data);
});

var table = document.querySelector('.table-content');
var showData = [];

var category = '';
var filter = document.querySelector('.filter');

filter.addEventListener('click', filterCategory);

function filterCategory(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  category = e.target.dataset.category;
  showData = data.filter((i) => {
    return i.種類代碼 == category;
  });
  renderData(showData);
}
